

const { Op } = require('sequelize');
const { School, TeacherSchool, Teacher, Class } = require('../models'); 


const  findAllSchools= async(req,res)=> {
  try {
    const schools = await School.findAll({
  
    });
    res.render("schoolPages/school" ,{ data:schools })
   
  } 
  catch (error) {
    // console.error('Error fetching schools with details:', error);
  }
}

const  deleteSchool =async(req,res)=>{

  try {
    const id=req.params.id;
    // console.log(id);
    let data = await School.destroy({
        where: {
            id: id
        }
    });
    // console.log(data);
    if (data === 1) {
      return res.status(200).redirect('/school/display')
    }
    return res.status(200).render('schoolPages/school')
} catch (error) {
  // console.log(error);

}}

const addSchool=async(req,res)=>{
  res.render('schoolPages/addSchool')
}

const   newSchool =async(req,res)=>{
  try {
    await School.create(req.body).then(() => {
    return res.status(200).redirect('/school/display')
      
    })
   
  
  } catch (error) {
    // console.log(error);
    
  }
}
const updateSchool=async(req,res)=>{
  const id=req.params.id;
  // console.log(id);
  let data = await School.findOne({
      where: {
          id: id
      }
  });
  res.render('schoolPages/updateSchool' ,{data :data} )
}


const saveUpdate=async(req,res)=>{

const id = req.body.id;

  await School.update(req.body,
  {
    where:{id:id}
  }
  )
  return res.status(200).redirect('/school/display')

}
// search 

const   search= async (req, res) => {
    try {
        const searchQuery = req.body.search;
        const data = await School.findAll({
          where: {
            [Op.or]: [
                { schoolName: { [Op.like]: `%${searchQuery}%` } },
                { schoolEmail: { [Op.like]: `%${searchQuery}%` } }
            ]
        }
    });
    
        res.render('schoolPages/school', {
            data: data
        });
    } catch (error) {
      // console.log(error);
        res.status(500).send('Error fetching data');
    }
}
module.exports={
     findAllSchools,
     deleteSchool,
     addSchool,
     newSchool,
     updateSchool,
     saveUpdate,
     search
    }
