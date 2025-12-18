const mongoose=require("mongoose");
const initdata=require("./data.js");
const Student= require("../models/students.js");

const mongolink="mongodb://127.0.0.1:27017/dashboard";
main()
.then(()=>{
    console.log('connected to mongo');
})
.catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(mongolink);
}
const initdb= async ()=>{
   await Student.deleteMany({});
   await Student.insertMany(initdata.data);
   console.log("Data was initialized");
}

initdb();