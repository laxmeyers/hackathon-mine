import { Schema } from "mongoose";

export const PostSchema = new Schema(
    {
        description: { type: String, required: true },
        title: { type: String, required: true },

        creatorId: { type: Schema.Types.ObjectId, required: true, ref: "Account"}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

PostSchema.virtual('creator', {
    ref: "Account",
    localField: "creatorId",
    foreignField: "_id",
    justOne: true
})