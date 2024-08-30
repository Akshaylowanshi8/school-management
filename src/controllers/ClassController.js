const { where } = require("sequelize");
const {Class ,School}= require("../models");

      const getAllClass=async(req,res)=>{

        try {
            const classdata = await Class.findAll(
                
            {
                include:{
                    model:School,
                    
                }
            }
            )
            res.status(200).render('class' ,{data:classdata})
            console.log(JSON.stringify(classdata, null, 2)); 


        } catch (error) {
            console.log(error);
        }

      }

      const    deleteClass=async(req,res)=>{

        try {
          const id=req.params.id;
          console.log(id);
          let data = await Class.destroy({
              where: {
                  id: id
              }
          });
          console.log(data);
          if (data === 1) {
            const classData = await Class.findAll(
    
                {
                    include:{
                        model:School,
                        
                    }
                }
            )
            console.log(classData);
            res.status(200).render('class',{ data:classData}) 
          }
          return res.status(200).render('class' )
      } catch (error) {
        console.log(error);
      }}
      const addClass=async(req,res)=>{
        const school=  await School.findAll()
        res.render('addclass' ,{data:school})
      }


      const   newClass = async(req,res)=>{
        console.log(req.body);
    
        try {
            const data= await Class.create(req.body)
    
            if(data){
    
                const classData = await Class.findAll(
    
                    {
                        include:{
                            model:School,
                            
                        }
                    }
                )
                console.log(classData);
                res.status(200).render('class',{ data:classData}) 
               } 
            }
    
        catch (error) {
            console.log(error);
        }
      }
    

module.exports={
    getAllClass,
    deleteClass,
    addClass,
    newClass
}