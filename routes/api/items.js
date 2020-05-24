const express = require("express");
const router = express.Router();

//Item model needed to do queries like save etc
const Item = require("../../models/Item");

//@router GET api/items
//@desc get all items
//@access Public
//using "/" as we are already in the api/items file
router.get("/",(req,res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items));
});
//@router POST api/items
//@desc Create an item
//@access Public
//using "/" as we are already in the api/items file
router.post("/",(req,res) => {
    //we want to construct an object to put into a database
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});
//@router DELETE api/items/:id
//@desc Delete a post
//@access Public
//using "/" as we are already in the api/items file
router.delete("/:id",(req,res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))    
        .catch(err => res.status(404).json({success: false}));
        //catch for the case when we are not able to find the object with required id 
})

module.exports = router;