"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {
    const { name, price, slug, img, desc } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post ({ name, price, slug, img, desc });

        await newPost.save();
        console.log("saved to db");
        revalidatePath("/productList");
    } catch (error) {
        console.log(error);
        return { error: "something went wrong"};
    }
};

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/productList");
    } catch (error) {
        console.log(error);
        return { error: "something went wrong"};
    }
};