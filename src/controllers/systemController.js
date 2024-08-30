const { Op } = require("sequelize")
const{ School ,Class ,Subject,Teacher, Manage}= require("../models")


const home=async(req,res)=>{

    const data=await Manage.findAll(  {
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
    ,{data:data}
)

}

const addManagement=async(req,res)=>{
   try {
    const schoolData= await School.findAll()
    const subjectData= await Subject.findAll()
    const classData= await Class.findAll()
    const TeacherData= await Teacher.findAll()


    res.render('addManagement',{   
        schoolData  : schoolData,
        subjectData : subjectData,
        classData: classData,
        teacherData :TeacherData
    })
   } catch (error) {
    res.json({error})
   }
}


const newManagement=async(req,res)=>{
    try {
     const data=   await  Manage.create(req.body)
if(data){
    const data=await Manage.findAll(  {
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
,{data:data}
)
}

} catch (error) {
        res.send(error)
    }
}
const search = async (req, res) => {
    const searchQuery = req.body.search;
    console.log('Search Query:', searchQuery); // Log the search query


    try {
        const data = await Manage.findAll({
            include: [
                {
                    model: School,
                    where: {
                        [Op.or]: [
                            { schoolName: { [Op.like]: `%${searchQuery}%` } }
                        ]
                    }
                },
                {
                    model: Class,
                },
                {
                    model: Teacher,
                  
                },
                {
                    model: Subject,
                    
                }
            ]
        });

        console.log('Search Results:', data); // Log the results

        res.render('home', { data });
    } catch (error) {
        console.error('Error during search:', error);
        res.status(500).send('Internal Server Error');
    }
};



const deleteManagement =async(req,res)=>{

        try {
          const id=req.params.id;
          console.log(id);
          let data = await Manage.destroy({
              where: {
                  id: id
              }
          });
          console.log(data);
          if (data === 1) {

            const data=await Manage.findAll(  {
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
        ,{data:data}
    ) }
    
      } catch (error) {
        console.log(error); 
      }}
      

module.exports={
    home,
    addManagement,
    newManagement,
    search,
    deleteManagement
}