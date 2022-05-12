import { StatusCodes } from 'http-status-codes';

import Route from '@ioc:Adonis/Core/Route';

Route.get('/', async ({ response }) => {
  return response.status(StatusCodes.FORBIDDEN).json({ message: 'Nothing to see here' });
});

Route.post('auth/register', 'AuthController.register');
Route.post('auth/login', 'AuthController.login');

/* Categories */
Route.group(() => {
  Route.get('/', 'CategoriesController.index');
  Route.get('/:slug', 'CategoriesController.show');
  Route.post('/', 'CategoriesController.store');
  Route.put('/:slug', 'CategoriesController.update');
  Route.delete('/:slug', 'CategoriesController.destroy');
}).prefix('/categories');

/* Route not found */
Route.get('/*', async ({ response }) => {
  return response.status(StatusCodes.NOT_FOUND).json({ message: 'Route not found' });
});
