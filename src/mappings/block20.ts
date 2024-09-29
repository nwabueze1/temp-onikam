export default {
  uuid: 'ebc15c75-f6c9-4be1-8a64-35434fd8d50b',
  component: 'KiamoniBlock20',
  config: {
    uuid: 'ebc15c75-f6c9-4be1-8a64-35434fd8d50b',
    content: {
      text: {
        title: 'Our Chefs',
      },
    },
    layouts: [
      {
        name: 'layout-1',
        isSelected: true,
        content: {
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/unsplash_rgRbqFweGF0.png',
          },
          text: {
            subTitle:
              'Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
          },
        },
      },
      {
        name: 'layout-2',
        isSelected: false,
        content: {
          cards: [
            {
              name: 'Zimo Chuan',
              role: 'Pastry Chef',
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+295.png',
              },
            },
            {
              name: 'Timo Kiath',
              role: 'Cook',
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+295+(1).png',
              },
            },
            {
              name: 'Laurence Cook',
              role: 'Confetionary Chef',
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+295+(2).png',
              },
            },
          ],
        },
        imageCropper: {
          desktop: {
            defaultSize: 1720,
            width: 471,
            height: 530,
          },
          tablet: {
            defaultSize: 834,
            width: 247,
            height: 267,
          },
          mobile: {
            defaultSize: 430,
            width: 128,
            height: 138,
          },
        },
      },
      {
        name: 'layout-3',
        isSelected: false,
        content: {
          text: {
            subTitle:
              'Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
          },
          cards: [
            {
              name: 'Zimo Chuan',
              role: 'Pastry Chef',
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+295.png',
              },
            },
            {
              name: 'Timo Kiath',
              role: 'Cook',
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+295+(1).png',
              },
            },
            {
              name: 'Laurence Cook',
              role: 'Confetionary Chef',
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+295+(2).png',
              },
            },
          ],
        },
        imageCropper: {
          desktop: {
            defaultSize: 1720,
            width: 450,
            height: 750,
          },
          tablet: {
            defaultSize: 834,
            width: 217,
            height: 312,
          },
          mobile: {
            defaultSize: 430,
            width: 123,
            height: 172,
          },
        },
      },
      {
        name: 'layout-4',
        isSelected: false,
        content: {
          text: {
            subTitle:
              'Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
          },
          cards: [
            {
              name: 'Zimo Chuan',
              role: 'Pastry Chef',
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+295.png',
              },
            },
            {
              name: 'Timo Kiath',
              role: 'Cook',
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+295+(1).png',
              },
            },
            {
              name: 'Laurence Cook',
              role: 'Confetionary Chef',
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+295+(2).png',
              },
            },
          ],
        },
        imageCropper: {
          desktop: {
            defaultSize: 1720,
            width: 375,
            height: 375,
          },
          tablet: {
            defaultSize: 834,
            width: 219,
            height: 219,
          },
          mobile: {
            defaultSize: 430,
            width: 100,
            height: 100,
          },
        },
      },
      {
        name: 'layout-5',
        isSelected: false,
        content: {
          text: {
            subTitle:
              'Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.',
          },
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/unsplash_rgRbqFweGF0.png',
          },
        },
        imageCropper: {
          desktop: {
            defaultSize: 1720,
            width: 1075,
            height: 712,
          },
          tablet: {
            defaultSize: 834,
            width: 439,
            height: 270,
          },
          mobile: {
            defaultSize: 430,
            width: 400,
            height: 203,
          },
        },
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
          '600': 'neutral.600',
          '700': 'neutral.500',
        },
      },
      fonts: {
        heading: 'fonts.heading',
        body: 'fonts.body',
      },
    },
  },
  precedence: [2, 3],
  pages: ['home', 'about'],
};
