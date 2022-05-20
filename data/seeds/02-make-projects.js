const  projects = [
    { project_name: 'Build Chiken Coop', project_description:"harvest eggs always" },
    { project_name: 'Build a NFT', project_description: "NFT is the new thing" },
    { project_name: 'Plant a garden' }
]
const resources = [
    {resource_name: "wood", resource_description: "cedar wood"},
    {resource_name: "chicken wire"},
    {resource_name: "chickens"},
    {resource_name: "computer", resource_description: "internet access"},
    {resource_name: "crypto", resource_description: "internet money"},
    {resource_name: "seeds", resource_description: "watermelons"}
]
const tasks = [
    {task_description: "hammer wood", task_notes: "form structure and hammer", project_id: 1},
    {task_description: "hammer wire", task_notes: "place chicken wire on openings", project_id: 1},
    {task_description: "place chickens inside", task_notes: "get new chicken eggs and wait", project_id: 1},

    {task_description: "set up computer", task_notes: "download software for nft builder", project_id: 2},
    {task_description: "find something digital you own", task_notes: "make dog pic a nft", project_id: 2},
    {task_description: "sell nft", task_notes: "collect profit", project_id: 2},

    {task_description: "buy seeds", task_notes: "make sure to get watermelon", project_id: 3},
    {task_description: "plant seeds", task_notes: "put seeds in ground and water", project_id: 3}
]

const project_resources = [
    { project_id: 1, resource_id: 1},
    { project_id: 1, resource_id: 2},
    { project_id: 1, resource_id: 3},
    { project_id: 2, resource_id: 4},
    { project_id: 2, resource_id: 5},
    { project_id: 3, resource_id: 6}
]
exports.seed = async function(knex) {
   await knex('projects').insert(projects)
   await knex('resources').insert(resources)
   await knex('tasks').insert(tasks)
   await knex('project_resources').insert(project_resources)
  };