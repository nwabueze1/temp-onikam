export default {
  uuid: 'edb435db-1423-44e8-98f3-4bbb74715dad',
  component: 'KiamoniBlock10',
  config: {
    uuid: 'edb435db-1423-44e8-98f3-4bbb74715dad',
    content: {
      menu_uuid: null,
      text: {
        heading: 'Explore Our Popular Categories',
      },
      menu_categories: [
        {
          title: 'Appetizers',
          description:
            'Get your meal started off right with one of our delicious appetizers. From classic favorites like wings and nachos to more unique options like our roasted',
          uuid: '6657e898-46a8-4bba-8375-e5354e2594ed',
        },
        {
          title: 'Entrees',
          description:
            "Our entrees are made with the freshest ingredients and a whole lot of love. From our juicy burgers to our hand-rolled pasta dishes, there's something for every taste bud on our menu.",
          uuid: 'd01e9d57-913c-4254-a903-a738323a5628',
        },
        {
          title: 'Sides',
          description:
            "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
          uuid: '6f27c88e-b383-465a-9a0f-a6724e7bc054',
        },
        {
          title: 'Desserts',
          description:
            "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
          uuid: '910be2e3-719e-484e-8e4a-5918c304cf7a',
        },
        {
          title: 'Breakfast',
          description:
            'Get your day started off right with one of our delicious meal. From classic favorites like wings and nachos to more unique options like our roasted cauliflower, we have something for everyone.',
          uuid: '53634bad-e0c6-4e63-902b-4b95184ebb4b',
        },
        {
          title: 'Beverages',
          description:
            'From craft cocktails to local beers, we have a beverage to pair perfectly with your meal.',
          uuid: '863aff64-c5fd-4f15-962a-3b0197ef3f43',
        },
      ],
    },
    ssr_content_fields: ['menu_categories'],
    ssr_network_operation: 'GET_MENU_CATEGORIES',
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
        name: 'layout-4',
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
          '600': 'neutral.500',
          '700': 'neutral.400',
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
