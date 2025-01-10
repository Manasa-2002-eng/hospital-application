const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"saimansakollipara@gmail.com",
        pass:"ujym jgri xoye xisw"
    }
})
module.exports=transporter
