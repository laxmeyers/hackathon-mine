import { dbContext } from "../db/DbContext"

class PostsService {
    async makePost(postData) {
        const post = await dbContext.Posts.create(postData)
        return post
    }
    async getPosts() {
        const posts = await dbContext.Posts.find().populate('creator', "name picture")
        return posts
    }

}

export const postsService = new PostsService()