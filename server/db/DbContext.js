import mongoose from 'mongoose'
import { PostSchema } from '../models/Post';
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Posts = mongoose.model("Post", PostSchema)
}

export const dbContext = new DbContext()
