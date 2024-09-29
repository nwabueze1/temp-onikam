export default {
  uuid: '685f5d23-ff00-4920-b0f0-b6b01d498461',
  component: 'KiamoniBlock2',
  config: {
    uuid: '685f5d23-ff00-4920-b0f0-b6b01d498461',
    content: {
      text: {
        heading: 'Instagram',
        description:
          'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        brandName: 'kiamonifoods',
      },
      images: [
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(1).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(2).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(3).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(4).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(5).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(6).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(7).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(8).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(9).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(10).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(11).png',
          },
        },
        {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Post+(12).png',
          },
        },
      ],
      site_uuid: null,
      ssr_network_operation: 'GET_INSTAGRAM_IMAGES',
      imageCropper: {
        desktop: {
          defaultSize: 1720,
          width: 530,
          height: 530,
        },
        tablet: {
          defaultSize: 834,
          width: 253,
          height: 253,
        },
        mobile: {
          defaultSize: 430,
          width: 130,
          height: 130,
        },
      },
    },
    configuration: {
      colors: {
        main: {
          '100': 'neutral.white',
          '200': 'neutral.black',
          '300': 'secondary.300',
          '400': 'primary.main',
          '500': 'secondary.main',
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
  precedence: 3,
  pages: ['home', 'about'],
};
