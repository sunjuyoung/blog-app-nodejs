import {db} from "../db.js"
import bcrypt from "bcryptjs"

export const register = (req,res)=>{
    //check exists user(email or ..)
    console 
    const q = "SELECT * FROM users WHERE email = ?";

    db.query(q,[req.body.email], (err,data)=>{
        if(err) return res.json(err)

        if(data.length) return res.status(409).json("user already exists..")

        //Hash password and create user

        console.log("regiseter..wewefwe.")
      
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`password`,`email`) values (?)";
        const values = [
            req.body.username,
            hash,
            req.body.email
        ]
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err)

            return res.status(200).json("User has created")
        })

    })
}

export const login = (req,res)=>{
    
}

export const logout = (req,res)=>{
    
}