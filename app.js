const express= require("express");
const app= express();
const mongoose= require("mongoose");
const mongolink="mongodb://127.0.0.1:27017/dashboard";
const Student= require("./models/students.js");
const Notice= require("./models/notices.js");
const path=require('path');
const methodoverride=require("method-override");
const ejsmate=require("ejs-mate");
const wrap= require("./utils/wrap.js");
const err=require("./utils/myerr.js")


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
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
app.engine("ejs",ejsmate);
app.use(express.static(path.join(__dirname,"/public")));

app.use("/signup/:id",async(req,res,next)=>{//Middleware for signup page
  let {id}=req.params;
  const user=await Student.findById(id);
  if(!user.password)next();
  else{
    res.send("signed in");
  }
})

app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});


//Root Route
app.get("/",
  async(req,res)=>{
    const allnotice=await Notice.find({}).sort({ date: -1 });
    res.render("routes/home.ejs",{allnotice});
}
)

app.post("/",wrap(
  async(req,res,next)=>{
    let {notice,password}=req.body;
     if(password!="chayan123"){
      return res.send('Password not correct');
     }
     const newNotice= new Notice(notice);
     await newNotice.save();
     res.redirect("/");

  }
))

//All Students
app.get("/students",async(req,res)=>{
  const allstudents=await Student.find({});
  res.render("routes/index.ejs",{allstudents});
})

// app.get("/test",async (req,res)=>{
//     let student=new Student({
//         name:"Subham Das",
//         roll:"2024CSB023",
//         cgpa:9.33
//     })
//     await student.save();
//     console.log("saved");
//     res.send("Subham is saved!!");

// })

//Signup Route
app.get("/signup/:id",async(req,res)=>{
    let {id}=req.params;
  const user=await Student.findById(id);
  res.render("routes/signup.ejs",{user});
})

//After Creating Account,InternalProceudres of saving data base then redirecting to Login Page
app.post("/signup/:id",

  wrap(async (req, res,next) => {
  const { id } = req.params;
    const { roll, password } = req.body.user;

   
    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).send("❌ Student not found");
    }
    
    
   

   
    student.password = password;
    await student.save();
    res.redirect(`/login/${id}`);

})
   
);

//Login Page
app.get("/login/:id",
 wrap(
   async(req,res,next)=>{
    let {id}=req.params;
    const student=await Student.findById(id)
    if(!student){
      throw new err(400,"NO Student Found");
    }
    if(!student.password)return res.render("routes/nosign.ejs");//if password is empty means no account
    res.render("routes/login.ejs",{student});//means Account is there
  }
 )
)

//Profile Page
app.post("/profile/:id", 
  wrap(
    async (req, res,next) => {
    const { id } = req.params;
    const { password } = req.body.student;
    const student = await Student.findById(id);

    if (!student){
      throw new err(400,"NO Student Found");
    }

    if (student.password != password) {
        return res.render("routes/wrongp.ejs", { student }); // pass student
    }

    res.render("routes/profile.ejs", { student });
  }
  )
);

//For Viewing a Student Profile
app.get("/view/:id",
  async(req,res,next)=>{
  let {id}=req.params;
  const student=await Student.findById(id);
   if (!student){
      throw new err(400,"NO Student Found");
    }
  res.render("routes/view.ejs",{student});
})

//cgpa route
app.get("/cgpa/:id",
  wrap(
    async(req,res,next)=>{
   
    let {id}=req.params;
    const student=await Student.findById(id);
    res.render("routes/add_gpa.ejs",{student});
     
    }
  )
)

//submit-gpa
app.post("/added/:id",
  wrap(
    async(req,res,next)=>{
       let {id}=req.params;
     const student=await Student.findById(id);
     let {cgpa}=req.body.stu;
     student.cgpa=cgpa;
      await student.save();
      res.redirect(`/login/${id}`);

    }
  )
)

//Resources Route
app.get("/resources",
 (req,res,next)=>{
      res.render("routes/rs.ejs")
    }
)

app.get("/addnotices",wrap(
  async(req,res,next)=>{
    res.render("routes/addnotice.ejs");
  }
))



//Custom Error Handler
app.use((err,req,res,next)=>{
   let {status=500,message="Some Error Occured"}=err;
   res.status(status).render("routes/error.ejs",{err});
});




app.listen(5000,()=>{
    console.log("Server is listenning to post 5000");
});