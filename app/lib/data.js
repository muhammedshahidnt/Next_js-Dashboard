import { User } from "./models";
import connectToDB from "./utils";

export const FetchUsers = async () => {
    try {
        connectToDB();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};
