import express from 'express';
import Post from '../model/post.js'
import app from "../app.js";
import checkAuth from "../middleware/check-auth.js";

const router = express.Router();

router.post('', checkAuth, (req, res, next) => {

  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save().then( result => {
    console.log(result);
    res.status(201).json(
      {
        success: true,
        postId: result.id
      });
  });
});

router.put('/:id', checkAuth,(req, res, next) => {
  //console.log('put operation')
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  })
  Post.updateOne({_id: req.params.id}, post)
    .then(result => {
        res.status(200).json({success: true});
  });
})

router.get('', (req,res, next) => {
  Post.find()
    .then(data=>{
      console.log(data)
      res.status(200).json({
        success: true,
        data: data
      });
    });
});

router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
  });
});

router.delete('/:id', checkAuth, (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({success: true});
  });
});


export default router;

