export default {
  uuid: 'f1f32456-dabc-420f-a9c5-cec4ddc5efa7',
  component: 'KiamoniBlock4',
  config: {
    uuid: 'f1f32456-dabc-420f-a9c5-cec4ddc5efa7',
    content: {
      text: {
        title: 'Why We Are The Best',
        subTitle:
          'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      },
      cards: [
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg',
          },
          title: 'Quality Food',
          subtitle:
            'Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg',
          },
          title: 'Quality Food',
          subtitle:
            'Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg',
          },
          title: 'Quality Food',
          subtitle:
            'Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg',
          },
          title: 'Quality Food',
          subtitle:
            'Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
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
      {
        name: 'layout-5',
        isSelected: false,
      },
    ],
  },
  precedence: [2, 3],
  pages: ['home', 'about'],
};
