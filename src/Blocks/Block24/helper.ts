import { CoreMenuItemFields, CorePostFields } from '../../models';

export const extractCurrencyToMenuItems = (data: CoreMenuItemFields[]) => {
  return data.map((item) => {
    return {
      uuid: item.uuid,
      name: item.name,
      image: typeof item.image === "object" ? item.image : JSON.parse(item.image),
      menu: item.menu,
      price: item.price,
    };
  });
};

export const getBlogContent = (clientPost: CorePostFields) => {
  let blogContent = { date: '', title: '', text: '', image: {}, uuid: '', slug: '' };
  const dateStr = clientPost.published_at;
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  blogContent.date = formattedDate;
  blogContent.title = clientPost.title;
  blogContent.text = clientPost.excerpt ?? '';
  blogContent.image = clientPost.featured_image;
  blogContent.uuid = clientPost.uuid;
  blogContent.slug = clientPost?.slug ?? '';
  return blogContent;
};
