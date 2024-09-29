export default {
  uuid: 'a4bd4f59-5686-49f2-9b26-ac4879e53edb',
  component: 'KiamoniBlock23',
  config: {
    uuid: 'a4bd4f59-5686-49f2-9b26-ac4879e53edb',
    content: {
      text: {
        header: 'Shopping Cart',
        subHeader: 'Order Summary',
        description:
          "If you have questions or problem with any product or order, please contact us and we'll do our best to accommodate your request and confirm your order as soon as possible.",
      },
      site_uuid: null,
    },
    ssr_network_operation: "GET_CART",
    ssr_network_identifier: "site_uuid",
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
          '600': 'neutral.400',
          '700': 'neutral.500',
          '800': 'neutral.600',
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
  pages: ['cart'],
};
