const{ School ,Class ,Subject,Teacher, Manage}= require("../models")

const process = require('process');
const bcrypt = require('bcrypt');
const {User }= require('../models');

const jwt = require('jsonwebtoken');

const  CreateAdminUser=async(req,res)=>{
      let  fullName  =req.body.fullName; 
      let  email =req.body.email ;
      let  bPassword = req.body.password ;
     const saltRounds = 10;

     if(!fullName ||!email ||!bPassword ){

        res.send("All fields are required!")
        return
     }
     try {
             // bycript password 
            const password = await bcrypt.hash(bPassword, saltRounds);
            console.log(password);
         await User.create({ fullName, password, email,}).then((data) => {
        res.status(200).render( 'index', { message: "CreateAdmin  successful", data:data });
        })
      } catch (error) {
        res.status(500).render('signup' ,{massage:"error"})
         console.error('Error creating student:', error);
      }
}


const loginAdminUser= async(req,res)=>{

 const email = req.body.email;
 const password = req.body.password;

 if (!email||!password)
 {
    res.resnde(   'index' ,{massage:"All fileds are requird!"})
 }
 console.log(email);
 try {
// console.log(Email);
     await User.findOne( { where: { email : email }}).then (async resp => {
      if(resp){
   const isMatch =  bcrypt.compare(password, resp.password);
        if (isMatch) {
          const token = jwt.sign({ username: resp.username }, process.env.JWTSECRET, { expiresIn: '1h' });


          const data=  await Manage.findAll(  {
            include:[{
                model:School,
                
            }, {
                model:Class,
                
            },{
                model:Teacher,
                
            }, {
                model:Subject,
                
            },]
        })
res.render('home'
    ,{data:data},
)

        } else {
            res.render( 'index' , {message :"Password is invalid!", }) 
        }
      }
      else{
        res.status(500).render( 'index', {message:'user not found'});
      }
      }) 
      } catch (error) {
        console.error('Error creating admin:', error);
        res.status(500).render('index', error);
    }
}


module.exports={

    CreateAdminUser,
    loginAdminUser
}
