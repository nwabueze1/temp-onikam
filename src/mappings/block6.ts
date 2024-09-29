export default {
  uuid: '38132d15-a77d-4609-96b4-9abb80768600',
  component: 'KiamoniBlock6',
  config: {
    uuid: '38132d15-a77d-4609-96b4-9abb80768600',
    content: {
      text: {
        heading: 'Featured Dishes',
      },
      menu_item_uuids: null,
      menu_items: [
        {
          uuid: '1d5e146e-9641-4a53-9661-145ff0dc4414',
          price: 1000,
          name: 'Chinese Hot Wings and Salmon',
          image:
            { src: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw3fHxhcHBldGl6ZXJzfGVufDB8fHx8MTY4NTcwNTQwOXww&ixlib=rb-4.0.3&q=80&w=400' },
          menu: {
            restaurant: {
              bank_info: {
                currency: 'NGN',
              },
            },
          },
        },
        {
          uuid: '74727f5f-0bdb-4841-8c2d-42b42ed5b231',
          price: 1000,
          name: 'Pasta',
          image:
            { src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw0fHxwYXN0YXxlbnwwfHx8fDE2ODU3MDU3NDR8MA&ixlib=rb-4.0.3&q=80&w=400' },
          menu: {
            restaurant: {
              bank_info: {
                currency: 'NGN',
              },
            },
          },
        },
        {
          uuid: '0b24d339-d4c5-44ce-aaf0-0f1a56dcb216',
          price: 2000,
          name: 'Ice cream',
          image:
            { src: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwzfHxpY2UlMjBjcmVhbXxlbnwwfHx8fDE2ODU3MDU4Mzh8MA&ixlib=rb-4.0.3&q=80&w=400' },
          menu: {
            restaurant: {
              bank_info: {
                currency: 'NGN',
              },
            },
          },
        },
        {
          uuid: '755f9175-0518-445d-a477-13f78d450d99',
          price: 400,
          name: 'Chocolate Ice Cream',
          image:
            { src: 'https://images.unsplash.com/photo-1612203985729-70726954388c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0c3xlbnwwfHx8fDE2ODU3MDU5NDd8MA&ixlib=rb-4.0.3&q=80&w=400' },
          menu: {
            restaurant: {
              bank_info: {
                currency: 'NGN',
              },
            },
          },
        },
        {
          uuid: '3bbe7dad-d83a-4766-bf4e-90c88f205e05',
          price: 400,
          name: 'Veggie rice',
          image:
            { src: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw3fHxyaWNlfGVufDB8fHx8MTY4NTcwNjIwOXww&ixlib=rb-4.0.3&q=80&w=400' },
          menu: {
            restaurant: {
              bank_info: {
                currency: 'NGN',
              },
            },
          },
        },
        {
          uuid: '07931586-1416-4c11-92bb-5f8a060b640c',
          price: 300,
          name: 'Hot coffee',
          image:
            { src: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw5fHxjb2ZmZWV8ZW58MHx8fHwxNjg1NzA2Mzk1fDA&ixlib=rb-4.0.3&q=80&w=400' },
          menu: {
            restaurant: {
              bank_info: {
                currency: 'NGN',
              },
            },
          },
        },
        {
          uuid: '341d7e4a-5c29-4fd9-9ddf-4cd3137793af',
          price: 1200,
          name: 'Pizza',
          image:
            { src: 'https://images.unsplash.com/photo-1571066811602-716837d681de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHw0fHxwaXp6YXxlbnwwfHx8fDE2ODY5Mjc3MTJ8MA&ixlib=rb-4.0.3&q=80&w=400' },
          menu: {
            restaurant: {
              bank_info: {
                currency: 'NGN',
              },
            },
          },
        },
        {
          uuid: '246f581e-ea0a-4879-b8ac-fc9b6bd8ad1b',
          price: 1200,
          name: 'Groundnut',
          image:
            { src: 'https://images.unsplash.com/photo-1614344629308-f5b22bb8b6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHwxfHxncm91bmRudXR8ZW58MHx8fHwxNjg3MDU2Mzg0fDA&ixlib=rb-4.0.3&q=80&w=400' },
          menu: {
            restaurant: {
              bank_info: {
                currency: 'NGN',
              },
            },
          },
        },
      ],
    },
    ssr_content_fields: ["menu_items"],
    ssr_network_operation: "GET_MENU_ITEMS",
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
        content: {
          buttons: [{ text: 'View All Dishes', url: '/menu' }],
        },
      },
      {
        name: 'layout-4',
        isSelected: false,
        content: {
          buttons: [{ text: 'View All Dishes', url: '/menu' }],
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
  precedence: [2, 3],
  pages: ['home', 'about']
};
