"use server"

import { User, Product } from "./models";
import connectToDB from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formdata) => {


    const {
        username,
        email,
        password,
        phone, address,
        isAdmin,
        isActive } = Object.fromEntries(formdata);

    try {
        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive

        });
        await newUser.save();

    } catch (err) {
        console.log(err)
        // throw new Error(err)
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}




export const addProduct = async (formdata) => {


    const {
        title,
        desc,
        price,
        stock,
        color,
        size } = Object.fromEntries(formdata);

    try {
        connectToDB();

        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size

        });
        await newProduct.save();

    } catch (err) {
        console.log(err)
        throw new Error(err)
    }

    revalidatePath("/dashboard/product");
    redirect("/dashboard/product");
}