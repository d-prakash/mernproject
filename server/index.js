const express = require("express")
const mongoose  = require("mongoose")
const router = express.Router()
const cors = require("cors")
const path = require("path")
const multer = require('multer')
const Testimonials = require('../server/models/testimonial')
const app = express()
app.use(
    express.urlencoded({ extended: true })
);
app.use(express.json())
app.use(cors());
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Testimonials/',Testimonials)
app.use('/uploads',express.static("./uploads"))

mongoose.connect('mongodb+srv://prakash:Mahima%40143@cluster0.2fagu.mongodb.net/?retryWrites=true&w=majority',
{useUnifiedTopology:true,
useNewUrlParser:true}).then(()=>
console.log("Db Connected!")).catch(err=>console.log(err))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })


  const fileFilter = (req, file, cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
    cb(null, false)
    }
  }

var upload = multer({storage:storage,
limits:{
    fileSize :1021*1024*10
},
fileFilter : fileFilter
})

//const upload = multer({dest:'server/uploads'})

app.post('/addtestimonial', upload.single('testmonialImg'),async (req,res)=>{
    console.log(req.file)
    const {name,description,post,
        active} = req.body;
    try{
        const newData = new Testimonials({
            name,
            description,
            post,
            active,
            photo:req.file.path
        })
        await newData.save();
        return res.json(await Testimonials.find())

    }catch(err){
        console.log(err.message);
    }
})

app.get('/gettestimonialdata',async (req,res)=>{
    try{
        const allUsers = await Testimonials.find()
        return res.json(allUsers)
    }catch(err){
        console.log(err.message);
    }
})

app.get('/gettestimonials/:id',async (req,res)=>{
    try{
        const allTestimonials = await Testimonials.findById(req.params.id)
        return res.json(allTestimonials)
    }catch(err){
        console.log(err.message);
    }
})

app.put('/updatetestimonial/:id',upload.single('photo'),async (req,res)=>{
    try{
        const testimonialdata  = await Testimonials.findById(req.params.id)
        testimonialdata.name = req.body.name
        testimonialdata.description = req.body.description
        testimonialdata.post = req.body.post
        testimonialdata.active = req.body.active
        testimonialdata.photo = req.file.path
        const updatedTesimonial = await testimonialdata.save()
        res.json(updatedTesimonial)
    }catch(err){
        console.log(err.message);
    }
})

app.delete('/deletetestimonial/:id',(req,res)=>{
    Testimonials.findByIdAndDelete(req.params.id).then((testimonial) => {
        if (!testimonial) {
            return res.status(404).send();
        }
        res.send(testimonial);
    }).catch((error) => {
        res.status(500).send(error);
    })
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = router;
