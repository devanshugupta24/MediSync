import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'




//API for adding doctor

const addDoctor=async(req,res)=>{
    try {
        const {name,email,password,speciality,degree,experience,about,fees,address}=req.body; 
        const imageFile=req.file

       //checking for all fields to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address || !imageFile){
            return res.json({success:false,message:"All fields are required"})
        }

        //validating email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid email format"})
        }

        //validating the password strength
        if(password.length<8){
            return res.json({success:false,message:"Password should be atleast 8 characters"})
        }

        //hashing the doctor password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        //upload image to cloudinary
        const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl=imageUpload.secure_url;

        //creating doctor
        const doctorData={
            name,
            email,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            image:imageUrl,
            date:Date.now()
        }

        //saving doctor to database
        const newDoctor=new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true,message:"Doctor added successfully"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


export {addDoctor}