export default {
  uuid: 'de6e7b4e-c7d9-4b04-8e56-c42648c8f76c',
  component: 'KiamoniBlock5',
  config: {
    uuid: 'de6e7b4e-c7d9-4b04-8e56-c42648c8f76c',
    content: {
      text: {
        header: 'Every bite is a good story',
        subtext: 'Experience a culinary journey unlike any other',
      },
      images: [
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15.svg',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(1).svg',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(2).svg',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(3).svg',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(2).svg',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(3).svg',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(2).svg',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(3).svg',
          },
        },
      ],
      buttons: [{ text: 'See All Menu', url: 'menu' }],
    },
    configuration: {
      colors: {
        main: {
          '100': 'neutral.white',
          '200': 'neutral.black',
          '300': 'neutral.700',
          '400': 'neutral.400',
          '500': 'neutral.500',
          '600': 'primary.main',
          '700': 'secondary.main',
        },
        button: {
          '100': 'neutral.700',
          '200': 'neutral.white',
          '300': 'neutral.black',
          '400': 'primary.main',
          '500': 'secondary.main',
          '600': 'alert.positive',
          '700': 'alert.error',
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
      // {
      //   name: 'layout-2',
      //   isSelected: false,
      // },
      // {
      //   name: 'layout-3',
      //   isSelected: false,
      // },
      // {
      //   name: 'layout-4',
      //   isSelected: false,
      // },
      {
        name: 'layout-5',
        isSelected: false,
      },
    ],
  },
  precedence: 1,
  pages: ['home', 'about', 'menu'],
};
