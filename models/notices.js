const mongoose= require("mongoose");
const Schema=mongoose.Schema;

const noticeSchema=new Schema({
    by:{
        type:String,
        required:true
    },
    content:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        
    }

})
const Notice=mongoose.model('Notice',noticeSchema);
module.exports=Notice;
