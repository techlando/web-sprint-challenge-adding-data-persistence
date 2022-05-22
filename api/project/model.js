const db = require('../../data/dbConfig');

const getAll = async () => {
    const projects = await db('projects').orderBy('project_id')

    const result = []
    projects.forEach(project => {
      result.push({
       project_name: project.project_name,
       project_description: project.project_description,
       project_completed: project.project_completed === 0 ? false : true
       })
         
    })
  
    return result
   

}

const getById = async (project_id) => {
    const rows =  await db('projects').where('project_id', project_id).first()
    const result = {
        project_name: rows.project_name,
        project_description: rows.project_description,
        project_completed: rows.project_completed === 0 ? false : true
        
    }
   return result
    
    }

const create = (project) => {
    return db('projects').insert(project).then(([project_id]) => getById(project_id))
    }

module.exports = {
    getAll,
    create
}