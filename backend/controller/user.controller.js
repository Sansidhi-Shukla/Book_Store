import User from "../model/user.model.js";

/* since password is sensitive Information, we will need to decypt it to keep it save which is done by this bycryptjs library */
import bycryptjs from "bcryptjs";

/* await is used to wait till response comes from database */
export const signup = async(req,res) =>{
    try {
        /* req.body requests for creation of a new user */
        const{fullname,email,password}=req.body ;

        /* this checks if the user already exists */
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User alredy exists"})
        }

        /* password is stored as a hash function of value 10, it can be 8 too */
        const hashPassword = await bycryptjs.hash(password,10); 

        /* is user doesn't exist new user created */
        const createdUser = new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        });
        await createdUser.save()
        res.status(201).json({message:"user created successfully",user:{
            _id:createdUser._id,
            fullname: createdUser.fullname,
            email:createdUser.email,
        }});

    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({message:"internal server error"});
    }
};

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bycryptjs.compare(password , user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"});
        }
        else{
            res.status(200).json({
                message : "Login Successful",
                user:{
                fullname:user.fullname,
                email:user.email,
                _id:user._id
            },
        })
        }
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({message:"Internal Server Error"});
    }
}