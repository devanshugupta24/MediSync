import validator from 'validator';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import { v2 as cloudinary } from 'cloudinary';



//API to register User

const registerUser = async (req, res) => {
    try {
        // get user details from frontend
        const { name, email, password } = req.body;

        // validation -not empty
        if (!name || !email || !password) {
            return res.json({success:false, message: "Please enter all fields" });
        }

        //validate the email format
        if (!validator.isEmail(email)) {
            return res.json({success:false, message: "Invalid email" });
        }

        //validate the password length
        if (password.length < 8) {
            return res.json({success:false, message: "Password should be atleast 8 characters" });
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create user object - create entry in db 
        const userData  = {
            name,
            email,
            password: hashedPassword
        }
        const newUSer=new userModel(userData);
        const user=await newUSer.save();
        
        //creating token for login 
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        res.json({success:true, token});

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message });
    }
}


//API to login User

const loginUser = async (req, res) => {
    try {
        
        // get user details from frontend
        const { email, password } = req.body;

        // // validation -not empty
        // if (!email || !password) {
        //     return res.json({success:false, message: "Please enter all fields" });
        // }

        // //validate the email format
        // if (!validator.isEmail(email)) {
        //     return res.json({success:false, message: "Invalid email" });
        // }

        // find user in db
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({success:false, message: "User not found" });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
             //creating token for login 
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            res.json({success:true, token});
            
        }else{

            res.json({success:false, message: "Invalid credentials" });
          
        }

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message });
        
    }
}


//API to get user profile data

const getProfile=async(req,res)=>{
    try {
        const {userId}= req.body
        const userData=await userModel.findById(userId).select('-password')
        res.json({success:true,userData})

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message });
        
    }
}


//API to update user profile

const updateProfile=async(req,res)=>{
    try {
        
        const { userId,name,phone,address,dob,gender}=req.body
        const imageFile=req.file

        if(!name || !phone || !dob || !gender){
            return res.json({success:true,message:"Data missing"})
        }

        await userModel.findByIdAndUpdate(userId,{name,phone,address:JSON.parse(address),dob,gender})

        if(imageFile ){
            //upload image to cloudinary
            const imageUpload= await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
            const imageURL=imageUpload.secure_url;

            await userModel.findByIdAndUpdate(userId,{image:imageURL})
        }

        res.json({success:true,message:"profile updated"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message: error.message });
        
    }
}
  





export { registerUser ,loginUser,getProfile,updateProfile}