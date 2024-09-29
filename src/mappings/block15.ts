export default {
  uuid: 'd7d57f86-c474-43fb-b56a-2a8f015074a5',
  component: 'KiamoniBlock15',
  config: {
    uuid: 'd7d57f86-c474-43fb-b56a-2a8f015074a5',
    content: {
      menu_item_uuid: null,
      menu_item: {
        uuid: '09fbbe58-290b-4885-abbd-0a03e5f420a3',
        image:
          { src: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw5fHxjb2ZmZWV8ZW58MHx8fHwxNjg1NzA2Mzk1fDA&ixlib=rb-4.0.3&q=80&w=400' },
        price: 300,
        description:
          'From craft cocktails to local beers, we have a beverage to pair perfectly with your meal. From craft cocktails to local beers, we have a beverage to pair perfectly with your meal. From craft cocktails to local beers, we have a beverage to pair perfectly with your meal.',
        name: 'Hot coffee',
        options: [
          'b3d63821-6cae-4d8c-a85e-e8997aa919b9',
          '465a6df9-9786-4dbb-8bb9-29eba192acd2',
        ],
        menu: {
          options_config: [
            {
              name: 'Crust',
              uuid: '09fbbe58-290b-4885-abbd-0a03e5f420a3',
              options: {
                deselection: [
                  {
                    amount: 0,
                    name: '',
                  },
                ],
                extras: [
                  {
                    amount: 0,
                    name: '',
                  },
                ],
                selection: [
                  {
                    amount: 100,
                    name: 'Gluten-free pizza',
                  },
                  {
                    amount: 300,
                    name: 'Neapolitan pizza',
                  },
                  {
                    amount: 400,
                    name: 'New York-style pizza',
                  },
                  {
                    amount: 500,
                    name: ' Sicilian pizza:',
                  },
                ],
              },
            },
            {
              name: 'Crust',
              uuid: '32455a15-7a1d-47b9-92cc-dc7795ef8dd8',
              options: {
                deselection: [
                  {
                    amount: 0,
                    name: '',
                  },
                ],
                extras: [
                  {
                    amount: 0,
                    name: '',
                  },
                ],
                selection: [
                  {
                    amount: 100,
                    name: 'Neapolitan pizza',
                  },
                  {
                    amount: 200,
                    name: 'New York-style pizza',
                  },
                  {
                    amount: 400,
                    name: 'Sicilian pizza',
                  },
                  {
                    amount: 300,
                    name: 'Stuffed crust',
                  },
                ],
              },
            },
            {
              name: 'Size',
              uuid: '465a6df9-9786-4dbb-8bb9-29eba192acd2',
              options: {
                deselection: [
                  {
                    amount: 0,
                    name: '',
                  },
                ],
                extras: [
                  {
                    amount: 0,
                    name: '',
                  },
                ],
                selection: [
                  {
                    amount: 100,
                    name: 'Large',
                  },
                  {
                    amount: 50,
                    name: 'Medium',
                  },
                  {
                    amount: 0,
                    name: 'Small',
                  },
                ],
              },
            },
            {
              name: 'type',
              uuid: 'b3d63821-6cae-4d8c-a85e-e8997aa919b9',
              options: {
                deselection: [
                  {
                    amount: 0,
                    name: '',
                  },
                ],
                extras: [
                  {
                    amount: 0,
                    name: '',
                  },
                ],
                selection: [
                  {
                    amount: 100,
                    name: 'Cappuccino',
                  },
                  {
                    amount: 150,
                    name: 'Espresso',
                  },
                  {
                    amount: 200,
                    name: 'Latte',
                  },
                  {
                    amount: 180,
                    name: 'Americano',
                  },
                  {
                    amount: 100,
                    name: 'Flat white',
                  },
                  {
                    amount: 120,
                    name: 'Caffè mocha',
                  },
                ],
              },
            },
          ],
          restaurant: {
            bank_info: {
              currency: 'NGN',
              delivery_fee: 400,
            },
          },
        },
      },
    },
    ssr_content_fields: ['menu_item'],
    ssr_network_operation: 'GET_MENU_ITEM',
    layouts: [
      {
        name: 'layout-1',
        isSelected: true,
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
          '700': 'neutral.600',
          '800': 'primary.200',
          '900': 'neutral.400',
          '1000': 'neutral.300',
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
  pages: ['menu_item'],
};
