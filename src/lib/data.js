import { Post } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        console.log(err);   
        throw new Error('Failed to fetch products!'); 
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (err) {
        console.log(err);   
        throw new Error('Failed to fetch products!'); 
    }
}
