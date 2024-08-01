import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {timestamps: true}
);

export const Post = mongoose.models.Post || mongoose.model("Post", productSchema);