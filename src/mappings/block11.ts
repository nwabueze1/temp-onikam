export default {
  uuid: 'f2459535-87ae-4e96-9a49-4f292cdb2751',
  component: 'KiamoniBlock11',
  config: {
    uuid: 'f2459535-87ae-4e96-9a49-4f292cdb2751',
    content: {
      images: [
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Burger1.png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Burger2.png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Burger3.png',
          },
        },
      ],
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
      {
        name: 'layout-6',
        isSelected: false,
      },
    ],
    configuration: {
      colors: {
        main: {
          '100': 'neutral.black',
        },
      },
      fonts: {
        heading: 'fonts.heading',
        body: 'fonts.body',
      },
    },
    image: {
      cropper: {
        images: {
          desktop: {
            defaultSize: 1720,
            width: 1258,
            height: 676,
          },
          tablet: {
            defaultSize: 834,
            width: 544,
            height: 292,
          },
          mobile: {
            defaultSize: 430,
            width: 281,
            height: 151,
          },
        },
      },
    },
  },
  precedence: [2, 3],
  pages: ['home', 'about', 'menu', 'contact'],
};
