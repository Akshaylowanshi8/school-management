const { where } = require("sequelize");
const {Student ,Class,School}= require("../models");


// get All student data


const getAllStudentData=async(req,res)=>{
    try {

        const studentData = await Student.findAll(
            {
                include:[{
                    model:School,
                    
                },
                { 
                model:Class,
                    
                }]
            }
            
        )
        // console.log(studentData);
        res.status(200).render('studentPages/student',{ data:studentData}) 
       } 
    catch (error) {
        // console.log(error);
        res.send(error)
    }
}



const  deleteStudent=async(req,res)=>{
    try {
      const id=req.params.id;
      console.log(id);
      let data = await Student.destroy({
          where: {
              id: id
          }
      });
    //   console.log(data);
      if (data === 1) {
      
        res.status(200).redirect("/student/display") 
      }
      return res.status(200).render('studentPages/student' )
  } catch (error) {
    console.log(error);
  }
  }

  const addStudent=async(req,res)=>{
try {
       const school=  await School.findAll()
     const data = await Class.findAll()
    res.render('studentPages/addStudent' ,{data:school ,data1:data  })
} catch (error) {
    res.send(error)
}
 
  }


  const newStudent=async(req,res)=>{
    console.log(req.body);

    try {
        const data= await Student.create(req.body)

        if(data){
            res.status(200).redirect("/student/display") 

           } 
        }

    catch (error) {
        console.log(error);
    }
  }
  const updateStudent=async(req,res)=>{
    const id=req.params.id;
    // console.log(id);

    const studentData = await Student.findOne(

        { where: {
            id: id
        }
           , include:{
                model:School,
                
            }
        }
    )
    const school=  await School.findAll()
    res.render('studentPages/updateStudent' ,{data :school,Alldata:studentData} )
  }


  const saveUpdateStudent=async(req,res)=>{
    try {
        const id = req.body.id;
    
   const student=   await Student.update(req.body,
      {
        where:{id:id}
      }
      )
      if(student){ 
        res.status(200).redirect("/student/display") 
  
}
     } catch (error) {
        console.log(error);
    }

    


   
    }
module.exports={
    getAllStudentData,
    deleteStudent,
    addStudent,
    newStudent,
    updateStudent,
    saveUpdateStudent
    
    
}
