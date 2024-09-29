export default {
  uuid: '22c47aeb-98c6-48f2-bec5-80a892a256fa',
  component: 'KiamoniBlock14',
  config: {
    uuid: '22c47aeb-98c6-48f2-bec5-80a892a256fa',
    content: {
      text: {
        title: 'Our Services',
        subTitle:
          'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      },
      services: [
        {
          header: 'Swift Delivery',
          text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
          header: 'Professional Chef',
          text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
          header: 'Quality Wines',
          text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
          header: 'Sweet Deals',
          text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
          header: 'Card Payment',
          text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
          header: 'Personalized Spots',
          text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
      ],
    },
    configuration: {
      colors: {
        main: {
          '100': 'neutral.white',
          '200': 'neutral.black',
          '300': 'neutral.700',
          '400': 'neutral.500',
          '500': 'primary.main',
          '600': 'secondary.main',
          '700': 'neutral.400',
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
      },
    ],
  },
  precedence: [2, 3],
  pages: ['home', 'about'],
};
