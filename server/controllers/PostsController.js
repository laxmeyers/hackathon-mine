import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService";
import BaseController from "../utils/BaseController";


export class PostsController extends BaseController {
    constructor() {
        super('api/posts')

        this.router
            .get('', this.getPosts)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.makePost)
    }
    async makePost(req, res, next) {
        try {
            const postData = req.body
            postData.creatorId = req.userInfo.id
            const post = await postsService.makePost(postData)
            return res.send(post)
        } catch (error) {
            next(error)
        }
    }
    async getPosts(req, res, next) {
        try {
            const posts = await postsService.getPosts()
            return res.send(posts)
        } catch (error) {
            next(error)
        }
    }
}