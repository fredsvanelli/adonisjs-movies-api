import { slugify } from '@ioc:Adonis/Addons/LucidSlugify';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  @slugify({
    strategy: 'dbIncrement',
    fields: ['name'],
    allowUpdates: true,
  })
  public slug: string;
}
