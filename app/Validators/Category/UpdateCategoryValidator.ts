import { schema, rules } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class UpdateCategoryValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({}, [
      rules.unique({
        table: 'categories',
        column: 'name',
        whereNot: { slug: this.ctx.params.slug },
      }),
    ]),
  });

  public messages = {
    'name.unique': 'Another category with this name already exists',
  };
}
