const express=require('express')
const multer = require('multer')
const route=express.Router()
const Post=require('../models/post')
const authenticateToken = require('../middleware/auth');


const Storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
    },
})

const upload = multer({
    storage:Storage
}).single('postImage')

route.post('/upload',authenticateToken,(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newPost=new Post({
                name:req.body.name,
                title:req.body.title,
                shortDescription:req.body.shortDescription,
                description:req.body.description,
                imageFilename:req.file.filename,
                postBy:req.user.name
            })
            newPost.save().then(()=>{return res.status(200).send("post successfully uploaded...")})
        }
    })
})

route.get('/posts',authenticateToken, async (req, res) => {
    try {
      const posts = await Post.find();
      const postDetails = posts.map(post => ({
        name: post.name,
        title: post.title,
        shortDescription: post.shortDescription,
        description: post.description,
        imageUrl: `${req.protocol}://${req.get('host')}/uploads/${post.imageFilename}`
      }));
      res.json(postDetails);
    } catch (err) {
      res.status(500).send("Error retrieving posts.");
    }
  });

module.exports=route