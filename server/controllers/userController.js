import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

const createToken = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        name: user.name,
        isAdmin:user.isAdmin,
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
        const { name, email, password, isAdmin } = req.body;

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
                  success: false,
                  message: "Password length should be equal or grater than 8",
                });
            }

            //Hashing user password
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(password, salt);
            //Register a new user
            const newUser = new userModel({
                name, email, password: encryptedPassword, isAdmin,
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
        if(!user?.isAdmin){
            return res.json({ success: false, message: "You are not authorized to login.",})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(isMatch && user.isAdmin){
            const token = createToken(user);
            res.json({success: true, token, message:"Admin logged successfully"})
        }else{
            return res.json({success:false, message:'Password not matched, try again'})
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
const updateUser = async (req, res) => {
       try {
        const userId = req.params.id;
        const {name, email, password } = req.body;
        const user = await userModel.findById(userId);
        if(!user){
            return res.json({ success: false, message: "User not found"});
        }
        //name
        if(name) user.name = name;
        //email
        if(email){
            if(!validator.isEmail(email)){
                return res.json({
                    success: false,
                    message: "Please enter a valid email address",
                });
            }
            user.email = email;
        }
        //password
        if(password){
             if(password.length < 8){
                return res.json({
                  success: true,
                  message: "Password length should be equal or grater than 8",
                });
            }
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }
        await user.save();
        res.json({success: true, message: "user updated successfully!"});
    } catch (error) {
        console.log("Update User Error", error);
        res.json({success: false, message: error.message});
    }
};
const getUsers = async (req, res) => {
    try {
        const total = await userModel.countDocuments({});
        const users = await userModel.find({});


        res.json({ success: true, total, users});
    } catch (error) {
        console.log("All users get Error", error);
        res.json({success: false, message: error.message});
    }
};

export { userLogin, userRegister, adminLogin, removeUser, updateUser, getUsers };