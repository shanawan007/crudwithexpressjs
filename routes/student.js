const express = require('express');
const router = express.Router();

const userInfo = require('../model/user');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/student', async (req, res) => {
  const { name, degree, profession } = req.body;
  try {
    const data = new userInfo({ name, degree, profession });
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error);
    console.log('Error occurred:', error);
  }
});

router.get('/student', async function(req, res) {
  try {
    const students = await userInfo.find();
    console.log('students', students);
    res.json(students);
  } catch (error) {
    res.status(500).send(error);
    console.log('Fetch userInfo Error', error);
  }
});
router.get('/student/:id', async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMen = await userInfo.findById(_id);
        res.send(getMen);

    } catch(error){
        res.status(400).send(error);
    }
})
router.patch('/student/:id', async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMen = await userInfo.findByIdAndUpdate(_id, req.body, {
            new:true,
        });
        res.send(getMen);

    } catch(error){
        res.status(400).send(error);
    }
})
router.put('/student/:id', async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMen = await userInfo.findByIdAndUpdate(_id, req.body, {
            new:true,
        });
        res.send(getMen);

    } catch(error){
        res.status(400).send(error);
    }
})
router.delete('/student/:id', async(req,res)=>{
    try{
        const _id = req.params.id;
        const getMen = await userInfo.findByIdAndDelete(_id);
        res.send(getMen);

    } catch(error){
        res.status(400).send(error);
    }
})
module.exports = router;