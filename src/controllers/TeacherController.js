const {Teacher,School,Class}= require("../models");





const getAllTeacher =async(req,res)=>{
try {
     const Data  = await Teacher.findAll(
        {
            include:[{
                model:School,
                
            }, {
                model:Class,
                
            },]
        }
     );
     console.log(Data);
     res.status(200).render('teacher',{data:Data})
   } catch (error) {
     console.log(error);
    
}}
const  deleteTeacher =async(req,res)=>{
     try {
       let id = req.params.id;
       let data = await Teacher.destroy({
           where: {
               id: id
           }
       });
       if (data === 1) {
        const Data  = await Teacher.findAll(
            {
                include:[{
                    model:School,
                    
                },
                {
                    model:Class,
                    
                },
                
            
            ]
            }
         );
         console.log(Data);
         res.status(200).render('teacher',{data:Data})
       }
       return res.status(200).render('teacher')
   } catch (error) {
      console.log(error);
     }
   }
   const addTeacher=async(req,res)=>{
try {
    
    const schooldata= await School.findAll()
    const classdata= await Class.findAll()

res.render('addTeacher',{data:schooldata ,data1:classdata })

} catch (error) {
    console.log(error);
}

   }

   const newTeacher=async(req,res)=>{

    const teacher=await Teacher.create(req.body)

    if(teacher){
        const Data  = await Teacher.findAll(
            {
                include:[{
                    model:School,
                    
                } ,{
                    model:Class,
                    
                },]
            }
         );
         console.log(Data);
         res.status(200).render('teacher',{data:Data})    
    }

   }

module.exports={
    getAllTeacher,
    deleteTeacher,
    addTeacher,
    newTeacher
}