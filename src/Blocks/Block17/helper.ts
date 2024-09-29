import { CorePostFields } from '../../models';

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

export const removeDuplicatesByTitle = (
  posts: CorePostFields[]
): CorePostFields[] => {
  const uniqueTitles = new Set<string>();
  return posts.filter((item) => {
    if (!uniqueTitles.has(item.title)) {
      uniqueTitles.add(item.title);
      return true;
    }
    return false;
  });
};

export const sortDataByName = (data: CorePostFields[], sortBy: string) => {
  if (sortBy === 'title (A-Z)' || sortBy === 'title (Z-A)') {
    const sorted = [...data].sort((firstData, lastData) => {
      return sortBy === 'title (A-Z)'
        ? firstData.title
            .toLowerCase()
            .localeCompare(lastData.title.toLowerCase())
        : lastData.title
            .toLowerCase()
            .localeCompare(firstData.title.toLowerCase());
    });
    return sorted;
  }

  if (sortBy === 'date (newest)' || sortBy === 'date (oldest)') {
    const sorted = [...data].sort((firstData, lastData) => {
      const dateA = new Date(firstData.published_at ?? '');
      const dateB = new Date(lastData.published_at ?? '');

      return sortBy === 'date (newest)'
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
    return sorted;
  }
  return data;
};

export const dropDownList = [
  { name: 'title (A-Z)', uuid: '' },
  { name: 'title (Z-A)', uuid: '' },
  { name: 'date (newest)', uuid: '' },
  { name: 'date (oldest)', uuid: '' },
];
