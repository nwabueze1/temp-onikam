const colors = {
  primary: {
    main: '#E44551',
    100: '#FFF5F5',
    200: '#F27079',
    300: '#CD2732',
    400: '#870E16',
  },
  neutral: {
    white: '#FFFFFF',
    100: '#FAFAFA',
    200: '#FAFAFA',
    300: '#F2F2F2',
    400: '#C4C0CC',
    500: '#939099',
    600: '#4A494D',
    700: '#333235',
    black: '#232227',
  },
  secondary: {
    main: '#F09E61',
    100: '#FFF9F5',
    200: '#FA9C55',
    300: '#E0731F',
    400: '#8F460E',
  },
  alert: {
    positive: '#20E600',
    general: '#0076E6',
    error: '#E60E00',
  },
};

const fonts = {
  heading: {
    options: ['Losta Masta', 'Montserrat', 'Open Sans'],
    selected: 'Montserrat',
  },
  body: {
    options: ['Losta Masta', 'Montserrat', 'Open Sans'],
    selected: 'Montserrat',
  },
};

export type TTemplate = {
  name: string;
  label: string;
  uuid: string;
  image: string;
  blocks: string[];
  colors: { [key: string]: any };
  fonts: { [key: string]: any };
  hive_identifiers?: { block: string; field: string }[];
  type?: string;
  unique_identifier?: string;
};

export const templateConfig: TTemplate[] = [
  {
    name: 'home',
    label: 'Home Page',
    uuid: '0dd4500f-704b-416e-a69a-1ef36199e81e',
    image:
      'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/kiamoni-home-page.webp',
    blocks: [
      'de6e7b4e-c7d9-4b04-8e56-c42648c8f76c',
      '38132d15-a77d-4609-96b4-9abb80768600',
      'f1f32456-dabc-420f-a9c5-cec4ddc5efa7',
      'fd7fde93-8bea-4bcd-a416-a798b3a47945',
      'f2459535-87ae-4e96-9a49-4f292cdb2751',
      'edb435db-1423-44e8-98f3-4bbb74715dad',
      'b0da98b1-a035-43af-b30b-99ab6c0d2e8f',
      '7a494c6c-20af-4dd2-b57b-08d7d4512ace',
    ],
    colors,
    fonts,
    hive_identifiers: [
      {
        block: '38132d15-a77d-4609-96b4-9abb80768600',
        field: 'menu_item_uuids',
      },
      {
        block: 'fd7fde93-8bea-4bcd-a416-a798b3a47945',
        field: 'menu_item_uuids',
      },
      {
        block: 'edb435db-1423-44e8-98f3-4bbb74715dad',
        field: 'menu_uuid',
      },
      {
        block: '7a494c6c-20af-4dd2-b57b-08d7d4512ace',
        field: 'post_uuids',
      },
    ],
  },
  {
    name: 'about',
    label: 'About Page',
    uuid: 'c934c0cb-0785-47b9-a866-4322f1f9121c',
    image:
      'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/kiamoni-about-us-page.webp',
    blocks: [
      '258571cf-f439-40f2-9995-a9e6284e3ff6',
      '5ed204ac-d654-4d5c-8861-29db404a672e',
      '2c47aeb-98c6-48f2-bec5-80a892a256fa',
      'ebc15c75-f6c9-4be1-8a64-35434fd8d50b',
    ],
    colors,
    fonts,
  },
  {
    name: 'menu',
    label: 'Menu Page',
    uuid: '119a3378-6902-43df-9af7-fd705586f0d9',
    image:
      'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/kiamoni-menu-page.webp',
    blocks: [
      'f2459535-87ae-4e96-9a49-4f292cdb2751',
      'bd318c88-8eb2-48fc-a002-22fdb3f8b39d',
    ],
    hive_identifiers: [
      {
        block: 'bd318c88-8eb2-48fc-a002-22fdb3f8b39d',
        field: 'menu_uuid',
      },
    ],
    colors,
    fonts,
  },
  {
    name: 'contact us',
    label: 'Contact Us Page',
    uuid: '38f7c58b-9146-4b4a-a380-2c92aae7d61f',
    image:
      'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/kiamoni-contact-uspage.webp',
    blocks: [
      '02ea87b6-551c-48ef-8586-0bee66b13567',
      'adc4bdb9-9820-4d36-a205-fd980564cc4c',
      '6900a55d-cef2-43bd-b56a-6e3a6d5b4f86',
    ],
    colors,
    fonts,
    hive_identifiers: [
      {
        block: '6900a55d-cef2-43bd-b56a-6e3a6d5b4f86',
        field: 'form_uuid',
      },
    ],
  },
];

export const cartTemplate = {
  name: 'cart',
  label: 'Cart Page',
  uuid: 'af149b19-f33a-4d3d-b5dd-b89485f6d15d',
  image:
    'https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/kiamoni/Screenshot+(171).png',
  blocks: ['a4bd4f59-5686-49f2-9b26-ac4879e53edb'],
  colors,
  fonts,
};

export const blogTemplate = {
  name: 'blog',
  label: 'Blog Page',
  uuid: '1badd107-0429-4c51-88fc-f024863e6002',
  image:
    'https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/kiamoni/Screenshot+(171).png',
  blocks: [
    '14d640ed-5336-4be7-867e-787f6f424d41',
    '89252dec-7ffb-4a25-9203-6a83660e29bb',
  ],
  colors,
  fonts,
};

export const menuItemTemplate = {
  name: 'menu item',
  label: 'Menu Item Page',
  uuid: 'a1e2c9e2-d9c9-4c06-8b76-160f527c7bb6',
  image:
    'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/kiamoni-menu-item-page.webp',
  type: 'restaurant.menu_item',
  unique_identifier: 'blocks.kiamoniblock15.content.menu_item_uuid',
  blocks: ['d7d57f86-c474-43fb-b56a-2a8f015074a5'],
  hive_identifiers: [
    {
      block: 'd7d57f86-c474-43fb-b56a-2a8f015074a5',
      field: 'menu_item_uuid',
    },
  ],
  colors,
  fonts,
};

export const blogPostTemplate: TTemplate = {
  name: 'blog post',
  label: 'Blog Post Page',
  uuid: 'a0508e73-319f-4bd7-a9b9-c812c2e7b39d',
  image:
    'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/kiamoni-blog-post-page.webp',
  type: 'blog.post',
  unique_identifier: 'blocks.kiamoniblock18.content.post_uuid',
  blocks: ['ab86546f-4ad8-4429-b055-562eab1e0153'],
  hive_identifiers: [
    { block: 'ab86546f-4ad8-4429-b055-562eab1e0153', field: 'post_uuid' },
  ],
  colors,
  fonts,
};

export const searchTemplate = {
  name: 'search',
  label: 'Search Page',
  uuid: '6d679246-ac97-40cf-892e-2f73d73dfc51',
  image:
    'https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/kiamoni/Screenshot+(171).png',
  blocks: ['79ef632d-3513-4bc4-bd49-52cff3d65913'],
  colors,
  fonts,
};

export const errorTemplate = {
  name: 'error',
  label: 'Error Page',
  uuid: 'e78711e2-9160-4e2f-ad41-0a6541c0eb0e',
  image:
    'https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/kiamoni/Screenshot+(171).png',
  blocks: ['512c1ac6-d462-4bd6-9a98-944e32857cec'],
  colors,
  fonts,
};
