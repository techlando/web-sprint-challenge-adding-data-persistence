const db = require('../../data/dbConfig')

const checkTaskDesc = (req, res, next) => {
  if(req.body.task_description === undefined){
    next({ status:400, message: 'task_description is required'})
  } else {
      next()
  }
}

const checkProjId = (req, res, next) => {
  
    if(req.body.project_id === undefined ){
        next({ status:400, message: 'project_id is required'})
      } else {
          next()
      }

}

module.exports = {
    checkTaskDesc,
    checkProjId,
}