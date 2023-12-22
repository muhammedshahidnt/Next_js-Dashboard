"use server"
import { User, Product } from "./models";
import connectToDB from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

// export const addUser = async (formdata) => {


//     const {
//         username,
//         email,
//         password,
//         phone, 
//         address,
//         isAdmin,
//         isActive } = Object.fromEntries(formdata);

//     try {
//         connectToDB();
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         const newUser = new User({
//             username,
//             email,
//             password: hashedPassword,
//             phone,
//             address,
//             isAdmin,
//             isActive

//         });
//         await newUser.save();

//     } catch (err) {
//         console.log(err)
//         // throw new Error(err)
//     }

//     revalidatePath("/dashboard/users");
//     redirect("/dashboard/users");
// }

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
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
        isActive,
      });
  
      await newUser.save();
    } catch (err) {
      console.log(err);
    //   throw new Error("Failed to create user!");
    }
  
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
  };


export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData);

    try {
        connectToDB();

        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update user!");
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
};





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




export const updateProduct = async (formData) => {
    const { id, title, desc, price, stock, color, size } =
        Object.fromEntries(formData);

    try {
        connectToDB();

        const updateFields = {
            title,
            desc,
            price,
            stock,
            color,
            size,
        };

        Object.keys(updateFields).forEach(
            (key) =>
                (updateFields[key] === "" || undefined) && delete updateFields[key]
        );

        await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to update product!");
    }

    revalidatePath("/dashboard/product");
    redirect("/dashboard/product");
};





export const deleteUser = async (formdata) => {

    const { id } = Object.fromEntries(formdata);
    try {
        connectToDB();
        await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
    revalidatePath("/dashboard/users");
}



export const deleteProduct = async (formdata) => {


    const { id } = Object.fromEntries(formdata);
    try {
        connectToDB();
        await Product.findByIdAndDelete(id);
    } catch (err) {
        console.log(err)
        throw new Error(err)
    }
    revalidatePath("/dashboard/product");
}



export const authenticate = async ( formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
     console.log(err);
     throw err
    }
  };