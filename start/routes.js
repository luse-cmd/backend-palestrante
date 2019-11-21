'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register','AuthController.register');
Route.delete('/excluirpalestrante','AuthController.destroy');
Route.get('/palestrante','AuthController.show');

Route.post('/authenticate','AuthController.authenticate');

Route.post('/registerespectador', 'UserEspectadorController.store');
Route.delete('/excluirespectador', 'UserEspectadorController.destroy');
Route.get('/espectador', 'UserEspectadorController.show');

Route.post('/authenticateespectador','AuthController.authenticateEspectador');