const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks')
    }
    const getById = (task_id) => {
        return db('tasks').where('task_id', task_id).first()
          
        
        }
    
    const create = (tasks) => {
        return db('tasks').insert(tasks).then(([task_id]) => getById(task_id))
        }


module.exports = {
    getAll, getById, create
}
