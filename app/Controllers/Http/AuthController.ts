import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class AuthController {
  public async register({ request }: HttpContextContract): Promise<User> {
    const { email, password } = request.body();

    return await User.create({ email, password });
  }

  public async login({ request, auth }: HttpContextContract): Promise<any> {
    const { email, password } = request.body();

    return await auth.attempt(email, password);
  }
}
