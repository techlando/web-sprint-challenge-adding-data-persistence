
exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
    })
    .createTable('resources', tbl => {
        tbl.increments()
    })
    .createTable('tasks', tbl => {
        tbl.increments()
    })
    .createTable('project_resources', tbl => {
        tbl.increments()
    })
};


exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
