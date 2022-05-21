const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks as t')
    .select('t.*', 'project_name', 'project_description')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
   
    }

const getById = async (task_id) => {
    const tasks = await db('tasks').where('task_id', task_id).first()
    const result = {
        project_id: tasks.project_id,
        task_description: tasks.task_description,
        task_notes: tasks.task_notes,
        task_completed: tasks.task_completed === 0 ? false : true
        
    }
   return result
    
    }
          
        
    
    
const create = (tasks) => {
    return db('tasks').insert(tasks).then(([task_id]) => getById(task_id))
    }


module.exports = {
    getAll, getById, create
}
