import mongoose from "mongoose"

const AdminSchema = mongoose.Schema({
    name: {type: String, required:true, unique:true},
    password: {type: String, required:true}
})

const AdminTable = mongoose.model("Admin", AdminSchema, "admin")

export default AdminTable