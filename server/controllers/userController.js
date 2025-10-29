import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

const createToken = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        name: user.name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "10h"}
 );
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email){
            return res.json({
                success: false,
                message: "User Email is required!",
            })
        }
        if(!password){
            return res.json({
                success: false,
                message: "User Password is required!",
            })
        }
        //If user exist
        const user = await userModel.findOne({ email });
        if(!user){
            return res.json({ success: false, message: "User doesnot exists"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch){
            const token = createToken(user);
            res.json({success: true, token, message:"user logged in successfully"})
        }else{
            return res.json({success:false, message:'Invalid credentials, try again'})
        }
    } catch (error) {
        console.log("User login Error", error);
        res.json({success: true, message: error?.message});
    }
};
const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //request body verification
        if(!name){
            return res.json({
                success: false,
                message: "User name is required!",
            })
        }
        if(!email){
            return res.json({
                success: false,
                message: "User Email is required!",
            })
        }
        if(!password){
            return res.json({
                success: false,
                message: "User Password is required!",
            })
        }
        //Email validation
        if(!validator.isEmail(email)){
            return res.json({
               success: false,
               message: "Please enter a valid address",
            })
        }
        //Check user status
        const existingUser = await userModel.findOne({ email });
        if(existingUser){
            return res.json({ success: true, message: "User already exists"});
        }
            //Password validation
            if(password.length < 8){
                return res.json({
                  success: true,
                  message: "Password length should be equal or grater than 8",
                });
            }

            //Hashing user password
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt);
            //Register a new user
            const newUser = new userModel({
                name, email, password: encryptedPassword,
            });
            //Save user in database
            await newUser.save();
        res.json({ success: true, message:'User registered successfully!',})
    } catch (error) {
        console.log("user Register Error", error);
        res.json({ success: true, message: error?.message});
    }
};
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (
            email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD
        ) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({ success: true, token, message:"welcome admin user"});
        } else {
            res.json({success:false, message:'Invalid credentials'})
        }
    } catch (error) {
        console.log("Admin Login Error", error);
        res.json({success: false, message: error.message});
    }
};
const removeUser = async (req, res) => {
     try {
        await userModel.findByIdAndDelete(req.body._id);
        res.json({success:true, message:"User deleted successfully"});
    } catch (error) {
        console.log("Remove User Error", error);
        res.json({success: false, message: error.message});
    }
};
const updateUser = async (req, res) => {};
const getUsers = async (req, res) => {
    res.send("Hello from users");
};

export { userLogin, userRegister, adminLogin, removeUser, updateUser, getUsers };