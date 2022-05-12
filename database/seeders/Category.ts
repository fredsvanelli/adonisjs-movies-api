import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Category from 'App/Models/Category';

export default class CategorySeeder extends BaseSeeder {
  public static developmentOnly = true;

  public async run() {
    await Category.updateOrCreateMany('name', [
      {
        name: 'Action',
        slug: 'action',
      },
      {
        name: 'Comedy',
        slug: 'comedy',
      },
      {
        name: 'Drama',
        slug: 'drama',
      },
      {
        name: 'Fantasy',
        slug: 'fantasy',
      },
      {
        name: 'Horror',
        slug: 'horror',
      },
    ]);
  }
}
