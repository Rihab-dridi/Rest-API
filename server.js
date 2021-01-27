const express= require('express')
const connectDB=require('./config/connectDB')
const User=require('./Models/user')

 const app=express()
 const port= process.env.Port || 5000 

 connectDB()

app.use(express.json())

//GET :  RETURN ALL USERS 
app.get('/all',(req,res)=>{
    User.find()
    .then(users=>res.send(users))
    .catch((err=>console.log(err)))
  })


//POST :  ADD A NEW USER TO THE DATABASE 
app.post('/add',(req,res)=>{
    const {name, email, phone }=req.body
    const newUser= new User({
        name,phone,email
    })
    newUser.save()
    .then(user=>res.send(user))
    .catch((err=>console.log(err))) 
  })

//PUT : EDIT A USER BY ID 
app.put('/edit/:_id',(req,res)=>{
    const {_id}=req.params
    const {name,email,phone}=req.body
    User.findByIdAndUpdate ({_id},{$set:{name,phone,email}})
    .then(users=>res.send(users))
    .catch((err=>console.log(err)))
  })

  //  DELETE : REMOVE A USER BY ID 
   app.delete('/delete/:_id',(req,res)=>{
    const {_id}=req.params
    User.findByIdAndRemove ({_id})
    .then(users=>res.send(users))
    .catch((err=>console.log(err)))
  })




app.listen(port, err=>err? console.log(err):console.log(`the server is running on ${port}`))