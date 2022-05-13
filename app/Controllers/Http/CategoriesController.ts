import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { StatusCodes } from 'http-status-codes';

import Category from 'App/Models/Category';
import CreateCategoryValidator from 'App/Validators/Category/CreateCategoryValidator';
import GetCategoriesValidator from 'App/Validators/Category/GetCategoriesValidator';
import UpdateCategoryValidator from 'App/Validators/Category/UpdateCategoryValidator';

export default class CategoriesController {
  public async index({ request }: HttpContextContract): Promise<Category[]> {
    await request.validate(GetCategoriesValidator);

    return await Category.query().orderBy(
      request.input('order_by', 'name'),
      request.input('order', 'asc')
    );
  }

  public async show({ params }: HttpContextContract): Promise<Category> {
    return await Category.findByOrFail('slug', params.slug);
  }

  public async store({ request }: HttpContextContract): Promise<Category> {
    const payload = await request.validate(CreateCategoryValidator);

    return await Category.create(payload);
  }

  public async update({ request, params }: HttpContextContract): Promise<Category> {
    const payload = await request.validate(UpdateCategoryValidator);

    return await (await Category.findByOrFail('slug', params.slug)).merge(payload).save();
  }

  public async destroy({ response, params }: HttpContextContract): Promise<void> {
    await (await Category.findByOrFail('slug', params.slug)).delete();

    return response.status(StatusCodes.NO_CONTENT).noContent();
  }
}
