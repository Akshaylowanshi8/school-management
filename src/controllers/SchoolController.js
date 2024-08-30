

const { Op } = require('sequelize');
const { School, TeacherSchool, Teacher, Class } = require('../models'); 


const  findAllSchools= async(req,res)=> {
  try {
    const schools = await School.findAll({
  
    });
    res.render("school" ,{ data:schools })
    console.log(JSON.stringify(schools, null, 2)); 
  } 
  catch (error) {
    console.error('Error fetching schools with details:', error);
  }
}

const  deleteSchool =async(req,res)=>{

  try {
    const id=req.params.id;
    console.log(id);
    let data = await School.destroy({
        where: {
            id: id
        }
    });
    console.log(data);
    if (data === 1) {
      const schools = await School.findAll({
  
      });
        return res.status(200).render('school', {data:schools})
    }
    return res.status(200).render('school')
} catch (error) {
  console.log(error);

}}

const addSchool=async(req,res)=>{
  res.render('addSchool')
}

const   newSchool =async(req,res)=>{
  try {
    await School.create(req.body)
    const schools = await School.findAll({
  
    });
    res.render("school" ,{ data:schools })
  
  } catch (error) {
    console.log(error);
    
  }
}
const updateSchool=async(req,res)=>{
  const id=req.params.id;
  console.log(id);
  let data = await School.findOne({
      where: {
          id: id
      }
  });
  res.render('updateSchool' ,{data :data} )
}


const saveUpdate=async(req,res)=>{

const id = req.body.id;

  await School.update(req.body,
  {
    where:{id:id}
  }
  )
  const schools = await School.findAll({
  
  });
  res.render("school" ,{ data:schools })

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
    
        res.render('school', {
            data: data
        });
    } catch (error) {
      console.log(error);
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