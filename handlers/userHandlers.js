const User = require("./../db/user");

async function addUser(userModel) {
    try {

        let user = new User({ ...userModel });
        await user.save();
        return user.toObject();
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }
}

async function getUsers() {
    try {
        const users = await User.find();
        return users.map((x) => x.toObject());
    } catch (error) {
        console.error("Error getting users:", error);
        throw error;
    }
}

async function getUser(id) {
    try {
        const user = await User.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user.toObject();
    } catch (error) {
        console.error("Error getting user:", error);
        throw error;
    }
}

async function updateUser(id, userModel) {
    try {
        const user = await User.findByIdAndUpdate(id, userModel, { new: true });
        if (!user) {
            throw new Error("User not found");
        }
        return user.toObject();
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
}

async function deleteUser(id) {
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user.toObject();
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser };
