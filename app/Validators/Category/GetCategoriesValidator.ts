import { schema } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class GetCategoriesValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    order_by: schema.enum.optional(['id', 'name', 'slug'] as const),
    order: schema.enum.optional(['asc', 'desc'] as const),
  });

  public messages = {
    'order_by.enum': "The 'order_by' field must be one of {{ options.choices }}",
    'order.enum': "The 'order' field must be one of {{ options.choices }}",
  };
}
