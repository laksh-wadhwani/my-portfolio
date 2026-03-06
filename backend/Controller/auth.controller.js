import AdminTable from "../Models/Admin.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const Login = async(request, response) => {
    try {
        const {email, password} = request.body
        const admin = await AdminTable.findOne({email})
        const isMatch = await bcrypt.compare(password, admin.password)

        if(!admin)
            return response.status(401).json({success: false, message: "Invalid email or password"})

        if(!isMatch)
            return response.status(401).json({success: false, message: "Invalid email or password"})

        const token = jwt.sign(
            {adminID: admin._id},
            process.env.JWT_SECRET,
            {expiresIn: "6h"}
        )

        return response.status(200).json({success: true, message: "Login Successfull", token})
        
    } catch (error) {
        console.error("Getting error in logging in: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}