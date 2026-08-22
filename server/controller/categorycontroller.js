let getcategories=(req,res)=>{
    res.json({
        message:"All categories",
    })
}
let getcategory=(req,res)=>{
    res.json({
        message:`Category ${req.params.id}`,
    })
}
module.exports={
    getcategories,
    getcategory
}