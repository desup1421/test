import Users from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const registerController = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username) {
        return res
            .status(400)
            .json({ success: false, message: "Username is required" });
    }

    if (!email) {
        return res
            .status(400)
            .json({ success: false, message: "Email is required" });
    }

    if(!password) {
        return res
            .status(400)
            .json({ success: false, message: "Password is required" });
    }

    if(password.length < 6) {
        return res
            .status(400)
            .json({ success: false, message: "Password must be at least 6 characters" });
    }

    const existEmail = await Users.findOne({ email });
    if(existEmail) {
        return res
            .status(400)
            .json({ success: false, message: "Email already exists" }); 
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await Users.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ success: true, message : "User created successfully"});
    } catch (error) {
        res.status(500).json({ success: false, message: "internal server error" });
        console.error(`Error: ${error.message}`);
    }
}

export const loginController = async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        return res
            .status(400)
            .json({ success: false, message: "Email is required" });
    }

    if(!password) {
        return res
            .status(400)
            .json({ success: false, message: "Password is required" });
    }

    try {
        const user = await Users.findOne({ email });
        if(!user) {
            return res
                .status(400)
                .json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({ id : user._id}, process.env.JWT_SECRET, {expiresIn : "1d"  })
        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, message: "internal server error" });
        console.error(`Error: ${error.message}`);
    }  
}