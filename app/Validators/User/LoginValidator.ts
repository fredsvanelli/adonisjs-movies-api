import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class LoginValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [rules.email()]),
    password: schema.string(),
  });

  public messages = {
    'email.email': "The 'email' field must be a valid email",
    'email.required': "The 'email' field is required",
    'password.string': "The 'password' field must be a string",
    'password.required': "The 'password' field is required",
  };
}
