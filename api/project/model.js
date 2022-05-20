const db = require('../../data/dbConfig');

const getAll = () => {
return db('projects').orderBy('project_id')
}

const getById = (project_id) => {
    return db('projects').where('project_id', project_id).first()
      
    
    }

const create = (project) => {
    return db('projects').insert(project).then(([project_id]) => getById(project_id))
    }

module.exports = {
    getAll,
    create
}