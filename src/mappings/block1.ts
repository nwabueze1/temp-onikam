export default {
  uuid: 'baf867f9-1953-420a-bb01-f6a298186626',
  component: 'KiamoniBlock1',
  config: {
    uuid: 'baf867f9-1953-420a-bb01-f6a298186626',
    content: {
      links: [
        { text: 'Home', url: '/' },
        { text: 'Menu', url: '/menu' },
        { text: 'Blog', url: '/blog' },
        { text: 'About Us', url: '/about' },
        { text: 'Contact', url: '/contact' },
      ],
      image: {
        src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Kiamoni.svg',
      },
    },
    configuration: {
      colors: {
        main: {
          '100': 'primary.main',
          '200': 'neutral.white',
          '300': 'neutral.black',
          '400': 'secondary.main',
          '500': 'neutral.500',
          '600': 'neutral.700',
          '700': 'alert.error',
        },
        button: {
          '100': 'neutral.700',
          '200': 'neutral.white',
          '300': 'neutral.black',
        },
      },
      fonts: {
        heading: 'fonts.heading',
        body: 'fonts.body',
      },
    },
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
        content: {
          buttons: [
            {
              text: 'Order Now',
              url: '/order',
            },
          ],
        },
      },
      {
        name: 'layout-5',
        isSelected: false,
        content: {
          buttons: [
            {
              text: 'Order Now',
              url: '/order',
            },
          ],
        },
      },
    ],
  },
  precedence: 0,
  pages: ['*'],
};
