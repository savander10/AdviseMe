//accessing class service
var classService = require('../services/class.service')
_this = this

//create ClassSchema
exports.createClass = async function(req, res, next){
  //req.body contains form submit values
  var newClass = {
    _id: req.body._id,
    prefix: req.body.prefix,
    courseNo: req.body.courseNo,
    title: req.body.title,
    requiredFor: req.body.requiredFor,
    department: req.body.department,
    curriculum: req.body.curriculum,
  }

  try{
    //calling service function with new object from request body
    var createdClass = await classService.createClass(newClass)
    return res.status(201).json({status:201, data: createdClass, message: "Successfully Created Class"})
  }catch(e){
    return res.status(400).json({status: 400, message: e.message})
  }
}

//get Class
exports.getClass = async function(req, res, next) {

  var page = req.query.page ? req.query.page : 1
  var limit = req.query.limit ? req.query.limit : 10;
  console.log(page, limit)

  try{
    var classes = await classService.getClass({}, page, limit)
    return res.status(200).json({status: 200, data: classes, message: "Successfully found Class"})
  }catch(e){
    return res.status(400).json({status: 400, message: e.message})
  }

}

//update Class
exports.updateClass = async function(req, res, next){

  if(!req.body._id){//id is necessary for update
    return res.status(400).json({status: 400, message: "Id must be present"})
  }

  var _id = req.body._id;
  console.log(req.body)

  var Class = {
    _id,
    class: {
      prefix: req.body.prefix,
      courseNo: req.body.courseNo,
      title: req.body.title,
    },
    requiredFor: req.body.requiredFor,
    department: req.body.department,
    curriculum: req.body.curriculum,
  }

  try{
    var updatedClass = await classService.updateClass(Class)
    return res.status(200).json({status: 200, data: updatedClass, message: "Successfully Updated Class"})
  }catch(e){
    return res.status(400).json({status: 400, message: e.message})
  }
}

//remove Class
exports.removeClass = async function(req, res, next){
  var id = req.params.id;

  try{
    var deletedClass = await classService.deleteClass(id)
    return res.status(204).json({status:204, message: "Successfully Deleted Class"})
  }catch(e){
    return res.status(400).json({status:400, message: e.message})
  }
}
