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

const checkIfProjId = async (req, res, next) => {
    try {
        const existing = await db('tasks')
        .where('project_id', req.body.project_id)
        .first()
        if(!existing)
        { next({  status: 404, message: 'project_id doesnt exist'})
    } else {
        next()
    }
    } catch (err) {
        next(err)
    }
}




module.exports = {
    checkTaskDesc,
    checkProjId,
    checkIfProjId
}