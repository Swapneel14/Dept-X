const mongoose=require("mongoose");
const initdata=require("./data.js");
const Student= require("../models/students.js");

const mongolink="mongodb+srv://swapneel_14:Daredevil1421@cluster0.3udl4ly.mongodb.net/dashboard?retryWrites=true&w=majority";
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