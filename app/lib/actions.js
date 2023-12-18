import { User } from "./models";
import connectToDB from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addUser = async (formdata) => {
    "use server"

    const { 
        username, 
        email, 
        password, phone, address, isAdmin, isActive } = Object.fromEntries(formdata);

    try{
        connectToDB();
        const newUser = new User({
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive

        });
        await newUser.save();

    }catch(err){
        console.log(err)
        // throw new Error(err)
    }

    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}