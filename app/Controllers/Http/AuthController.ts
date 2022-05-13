import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import CreateUserValidator from 'App/Validators/User/CreateUserValidator';
import LoginValidator from 'App/Validators/User/LoginValidator';

export default class AuthController {
  public async register({ request }: HttpContextContract): Promise<User> {
    const payload = await request.validate(CreateUserValidator);

    return await User.create(payload);
  }

  public async login({ request, auth }: HttpContextContract): Promise<any> {
    const { email, password } = await request.validate(LoginValidator);

    return await auth.attempt(email, password);
  }
}
