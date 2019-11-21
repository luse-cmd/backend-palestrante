'use strict'
const User = use('App/Models/User')
class AuthController {
    async register({request}){
       const  data = request.only(['username', 'email', 'password', 'contato'])
      const user = await User.create(data) 
       return user
    }

    async destroy ({ params, auth, response }) {
      const user = await User.findOrFail(params.id)
      if(user.user_id != auth.user.id){
        return response.status(401);
      }
      await user.delete()
    }
    async show ({ params }) {
      const user = await user.findOrFail(params.id)
      return user
    }


    async authenticate({request, auth})
    {
        const {email, password} = request.all()
      const token =  await auth.attempt(email,password)
     
      return token

    }
}

module.exports = AuthController
