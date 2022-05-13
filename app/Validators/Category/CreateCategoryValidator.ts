import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class CreateCategoryValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [rules.unique({ table: 'categories', column: 'name' })]),
  });

  public messages = {
    'name.unique': 'Another category with this name already exists',
    'name.required': "The 'name' field is required",
    'name.string': "The 'name' field must be a string",
  };
}
