
const {Student ,School,Subject}= require("../models");

const GetAllSubject=async(req,res)=>{
    try {
     const subData = await Subject.findAll()
        res.status(200).render('subject',{ data:subData}) 
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
        const SubjectData = await Subject.findAll()
        res.status(200).render('subject',{ data:SubjectData}) 
      }
  } catch (error) {
    console.log(error);
  }
  }

  const addSubject=async(req,res)=>{
    res.render('addSubject')

}


  const newSubject=async(req,res)=>{
    try {
        const data= await Subject.create(req.body)
        if(data){

            const SubjectData = await Subject.findAll()
            res.status(200).render('subject',{ data:SubjectData}) 
           } 
        }

    catch (error) {
        console.log(error);
    }
  }

module.exports={
    GetAllSubject,
    deleteSubject,
    addSubject,
    newSubject
    
    
}