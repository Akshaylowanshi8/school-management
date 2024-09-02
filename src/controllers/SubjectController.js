
const {Student ,School,Subject}= require("../models");

const getAllSubject=async(req,res)=>{
    try {
     const subData = await Subject.findAll()
        res.status(200).render('subjectPages/subject',{ data:subData}) 
       } 
    catch (error) {
        console.log(error);
    
    }
}
const    deleteSubject=async(req,res)=>{
    try {
      const id=req.params.id;
      console.log(id);
      let data = await Subject.destroy({
          where: {
              id: id
          }
      });
      console.log(data);
      if (data === 1) {
        res.status(200).redirect('subject/display') 
      }
  } catch (error) {
    console.log(error);
  }
  }

  const addSubject=async(req,res)=>{
    res.render('subjectPages/addSubject')

}


  const newSubject=async(req,res)=>{
    try {
        const data= await Subject.create(req.body)
        if(data){
          res.status(200).redirect('subject/display') 

           } 
        }

    catch (error) {
        console.log(error);
    }
  }

module.exports={
    getAllSubject,
    deleteSubject,
    addSubject,
    newSubject
    
    
}