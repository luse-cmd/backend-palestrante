'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserEspectadorSchema extends Schema {
  up () {
    this.create('user_espectadors', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('contato', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_espectadors')
  }
}

module.exports = UserEspectadorSchema
