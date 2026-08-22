const {Router}=require("express");
let categorycontroller=require("../controller/categorycontroller.js")
let categoryrouter=Router();
categoryrouter.get("/",categorycontroller.getcategories)
categoryrouter.get("/:id",categorycontroller.getcategory)
module.exports=categoryrouter;