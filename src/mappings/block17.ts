export default {
  uuid: '89252dec-7ffb-4a25-9203-6a83660e29bb',
  component: 'KiamoniBlock17',
  config: {
    uuid: '89252dec-7ffb-4a25-9203-6a83660e29bb',
    content: {
      blog_uuid: null,
    },
    ssr_network_operation: "GET_BLOG",
    ssr_network_identifier: "blog_uuid",
    layouts: [
      {
        name: 'layout-1',
        isSelected: true,
      },
      {
        name: 'layout-2',
        isSelected: false,
      },
      {
        name: 'layout-3',
        isSelected: false,
      },
      {
        name: 'layout-4',
        isSelected: false,
      },
      {
        name: 'layout-5',
        isSelected: false,
      },
    ],
    configuration: {
      colors: {
        main: {
          '100': 'neutral.white',
          '200': 'neutral.black',
          '300': 'neutral.700',
          '400': 'secondary.main',
          '500': 'primary.main',
        },
        button: {
          '100': 'neutral.700',
          '200': 'neutral.white',
          '300': 'neutral.black',
          '400': 'primary.main',
          '500': 'secondary.main',
        },
      },
      fonts: {
        heading: 'fonts.heading',
        body: 'fonts.body',
      },
    },
  },
  precedence: 1,
  pages: ['blog'],
};
