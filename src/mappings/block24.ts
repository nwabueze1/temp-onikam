export default {
  uuid: '79ef632d-3513-4bc4-bd49-52cff3d65913',
  component: 'KiamoniBlock24',
  config: {
    uuid: '79ef632d-3513-4bc4-bd49-52cff3d65913',
    content: {},
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
          '600': 'neutral.600',
          '700': 'neutral.500',
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
  pages: ['search']
};
