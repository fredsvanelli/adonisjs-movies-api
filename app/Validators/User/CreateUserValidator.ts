import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string(),
  });

  public messages = {
    'email.email': "The 'email' field must be a valid email",
    'email.required': "The 'email' field is required",
    'email.unique': 'Another user with this email already exists',
    'password.string': "The 'password' field must be a string",
    'password.required': "The 'password' field is required",
  };
}
