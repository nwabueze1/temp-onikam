export default {
  uuid: '5ed204ac-d654-4d5c-8861-29db404a672e',
  component: 'KiamoniBlock16',
  config: {
    uuid: '5ed204ac-d654-4d5c-8861-29db404a672e',
    content: {
      cards: [
        {
          title: 'Yorem ipsum dolor sit amet consectetur',
          description:
            "Yorem ipsum dolor sit amet consectetur There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.or randomised words which don't look even slightly believable.",
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/production+ID_3769033+1+(1).png',
          },
        },
        {
          title: 'Yorem ipsum dolor sit amet consectetur',
          description:
            "Yorem ipsum dolor sit amet consectetur There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.or randomised words which don't look even slightly believable.",
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/production+ID_3769033+1+(1).png',
          },
        },
      ],
    },
    configuration: {
      colors: {
        main: {
          '100': 'neutral.white',
          '200': 'neutral.black',
          '300': 'primary.main',
          '400': 'secondary.main',
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
    image: {
      cropper: {
        cards: {
          desktop: {
            defaultSize: 1720,
            width: 659,
            height: 500,
          },
          tablet: {
            defaultSize: 834,
            width: 300,
            height: 301,
          },
          mobile: {
            defaultSize: 430,
            width: 328,
            height: 300,
          },
        },
      },
    },
  },
  precedence: [2, 3],
  pages: ['home', 'about'],
};
