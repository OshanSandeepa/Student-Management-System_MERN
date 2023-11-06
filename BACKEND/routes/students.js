const router=require("express").Router();
const { request } = require("express");
let Student=require("..//models/Student");  // ../ apassata




//    http://localhost:8070/Student/add
//CRUD 4 ta URL 4k

//CRUD

 // CRUD eke Create
router.route("/add").post((req,res)=>{


        const name=req.body.name;
        const  age=Number(req.body.age);
        const gender=req.body.gender;

            const newStudent=new Student({              //object
                    name,
                    age,    
                        gender



            })      //object



                newStudent.save().then(()=>{

                    res.json("Student Added")                                        //json type eken front end eken




                }).catch((err)=>{

                        console.log(err) ;   //err eka print wenw terminal eke          exception handling


                })  
                
                
                
                //object send to database ek send krnw doc ekk wdyt  insert sucess unot  promise if else wge ekk       sucess or fail



})                 //data insert krddi meka Get Post php wla                         //create route eka


            // CRUD eke Read

       //  http://localhost:8070/student
            router.route("/").get((req,res)=>{


                Student.find().then((students)=>{

                        res.json(students)

                }).catch((err)=>{
                    console.log(err)


                })




            })                              //databasde eken gnna nsa


             // CRUD eke  Update

                // http://localhost:8070/student/update/uhkujhlh52
        router.route("/update/:id").put(async(req,res)=>{ //asyanc function-twa function ekakata ynna puluwan task eka ynkn


                    let userId=req.params.id;  //update wena eke primarty key
                                                                      //destructure method js
                const{name,age,gender}=req.body;        //frontend eken ena data tka


                const updateStudent={           //object

                        name,
                        age,
                        gender

                }

                    const update=await Student.findByIdAndUpdate(userId,updateStudent).then(()=>{


                        res.status(200).send({status:"user Updated"})   // user:update    json format eka (,upodate krpu user ge data tika and move to frontend)  


                    }).catch((err)=>{

                            console.log(err);
                            res.status(500).send({status:"Error with updating data",error:err.message});      //server error        //(______  , front end ywna eka)



                    })                                                        //or//userID eka use krla Update student gnna ose  (upodate krnna oni user ge id eka , update krnna oni values)


                    //await - promise eka enm=kn bln iinna udw krnw

                                                         //404 not found status eg


                    // or  const update=await Student.findByIdAndUpdate(userId,{name,age,gender}) 



        })

                
//.................


// CRUD eke Delete
// http://localhost:8070/student/delete/a543a57ds35a7d3a
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;
    try {
        await Student.findByIdAndDelete(userId);
        res.status(200).send({ status: "User Deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error with Delete User", error: err.message });
    }
});





//...............


        // ose only 1 user 
        router.route("/get:id").get(async(req,res)=>{

            let userId=req.params.id;
           const user= await Student.findById(userId).then((student)=>{     // promise gnna then                    await Student.findOne(email)

                    res.status(200).send({status:"User Fetched",student})


            }) .catch(()=>{


                console.log(err.message);
                res.status(500).send({status:"Error with  Get User ",error:err.message});               //metana status ma wenna oni na msg wge ekk



            })                            

            

        })


        module.exports=router;

        // now backend test and go to Frontend

