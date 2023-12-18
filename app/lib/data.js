import { User, Product } from "./models";
import connectToDB from "./utils";

export const FetchUsers = async (q, page) => {

    const rejex = new RegExp(q, 'i');

    const ITEM_PER_PAGE = 2;
    try {
        connectToDB();
        const count = await User.find({ username: { $regex: rejex } }).count();
        const users = await User.find({ username: { $regex: rejex } }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};


export const FetchProducts = async (q, page) => {

    const rejex = new RegExp(q, 'i');

    const ITEM_PER_PAGE = 2;
    try {
        connectToDB();
        const count = await Product.find({ title: { $regex: rejex } }).count();
        const products = await Product.find({ title: { $regex: rejex } }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, products };
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};
