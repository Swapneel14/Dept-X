const mongoose= require("mongoose");
const Schema=mongoose.Schema;


const studentSchema=new Schema({
   name:{
    type:String,
    required:true
   },
   roll:{
    type:String,
    required:true
   },
   cgpa:Number,
   password:String


}
)
const Student=mongoose.model("Student",studentSchema);
module.exports=Student;