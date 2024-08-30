const { where } = require("sequelize");
const {Student ,Class,School}= require("../models");


// get All student data


const GetAllStudentData=async(req,res)=>{
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
        console.log(studentData);
        res.status(200).render('student',{ data:studentData}) 
       } 
    catch (error) {
        console.log(error);
        res.send(error)
    }
}



const    deleteStudent=async(req,res)=>{
    try {
      const id=req.params.id;
      console.log(id);
      let data = await Student.destroy({
          where: {
              id: id
          }
      });
      console.log(data);
      if (data === 1) {
        const studentData = await Student.findAll(

            {
                include:[{
                    model:School,
                    
                },{

                    model:Class
                }]
            }
        )
        console.log(studentData);
        res.status(200).render('student',{ data:studentData}) 
      }
      return res.status(200).render('student' )
  } catch (error) {
    console.log(error);
  }
  }



  const addStudent=async(req,res)=>{
try {
       const school=  await School.findAll()
     const data = await Class.findAll()
    res.render('addStudent' ,{data:school ,data1:data  })
} catch (error) {
    res.send(error)
}
 
  }


  const newStudent=async(req,res)=>{
    console.log(req.body);

    try {
        const data= await Student.create(req.body)

        if(data){

            const studentData = await Student.findAll(

                {
                    include:[{
                        model:School,
                        
                    },  
                     {
                            model:Class,
                            
                        }
                    ]
                }
            )
            console.log(studentData);
            res.status(200).render('student',{ data:studentData}) 
           } 
        }

    catch (error) {
        console.log(error);
    }
  }
  const updateStudent=async(req,res)=>{
    const id=req.params.id;
    console.log(id);

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
    res.render('updateStudent' ,{data :school,Alldata:studentData} )
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


      
    const studentData =  await Student.findAll(

        {
            include:{
                model:School,
                
            }
        }
    )
    console.log(studentData);
    res.status(200).render('student',{ data:studentData}) 
}
     } catch (error) {
        console.log(error);
    }

    


   
    }
module.exports={
    GetAllStudentData,
    deleteStudent,
    addStudent,
    newStudent,
    updateStudent,
    saveUpdateStudent
    
    
}