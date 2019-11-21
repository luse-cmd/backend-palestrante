'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Espectador = use('App/Models/UserEspectador');
/**
 * Resourceful controller for interacting with userespectadors
 */
class UserEspectadorController {
  /**
   * Show a list of all userespectadors.
   * GET userespectadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const espectadores = await Espectador.all()
    return espectadores
  }




  async store ({request}) {
    const  data = request.only(['username', 'email', 'password', 'contato'])
    const espectador = await Espectador.create(data) 
     return espectador
  }

  async show ({ params, request, response, view }) {
    const espectador = await Espectador.findOrFail(params.id)
    return espectador
  }

  async destroy ({ params, auth, response }) {
    const espectador = await Espectador.findOrFail(params.id)
    if(espectador.user_id != auth.user.id){
      return response.status(401);
    }
    await espectador.delete()
  }
  async authenticateEspectador({request, auth})
  {
      const {email, password} = request.all()
    const token =  await auth.attempt(email,password)
   
    return token

  }  
}

module.exports = UserEspectadorController
