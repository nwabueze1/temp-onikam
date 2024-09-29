export default {
  uuid: 'bd318c88-8eb2-48fc-a002-22fdb3f8b39d',
  component: 'KiamoniBlock9',
  config: {
    uuid: 'bd318c88-8eb2-48fc-a002-22fdb3f8b39d',
    content: {
      menu_uuid: null,
      menu: {
        uuid: 'c273a3c4-872b-4776-84ca-39202c45d354',
        name: 'KIamoni menu categories',
        options_config: [
          {
            name: 'types',
            uuid: '2ac97362-f70d-4489-a52c-ab6a9f4694cb',
            type: 'selection',
            options: {
              selection: [
                {
                  amount: 50,
                  name: 'grilled',
                },
                {
                  amount: 150,
                  name: 'roasted',
                },
                {
                  amount: 200,
                  name: 'coconut',
                },
                {
                  amount: 50,
                  name: 'onions',
                },
              ],
              extras: [
                {
                  amount: 0,
                  name: '',
                },
              ],
              deselection: [
                {
                  amount: 0,
                  name: '',
                },
              ],
            },
          },
          {
            name: 'types',
            uuid: '53fac0ba-adfa-4162-a749-763cd7a32328',
            type: 'selection',
            options: {
              selection: [
                {
                  amount: 50,
                  name: 'onions',
                },
              ],
              extras: [
                {
                  amount: 0,
                  name: '',
                },
              ],
              deselection: [
                {
                  amount: 0,
                  name: '',
                },
              ],
            },
          },
          {
            name: 'Size',
            uuid: '5691be53-efca-4647-ad39-5a27cadfd8ec',
            type: 'selection',
            options: {
              selection: [
                {
                  amount: 0,
                  name: '1kg',
                },
                {
                  amount: 70,
                  name: '2kg',
                },
                {
                  amount: 100,
                  name: '3kg',
                },
                {
                  amount: 150,
                  name: '5kg',
                },
              ],
              extras: [
                {
                  amount: 0,
                  name: '',
                },
              ],
              deselection: [
                {
                  amount: 0,
                  name: '',
                },
              ],
            },
          },
          {
            name: 'Customize',
            uuid: 'b340d3f2-823a-415c-94c5-f8efa8424518',
            type: 'selection',
            options: {
              selection: [
                {
                  amount: 50,
                  name: 'Salad',
                },
                {
                  amount: 100,
                  name: 'Chicken',
                },
                {
                  amount: 70,
                  name: 'Hotdog',
                },
                {
                  amount: 120,
                  name: 'Bogu Crust',
                },
              ],
              extras: [
                {
                  amount: 0,
                  name: '',
                },
              ],
              deselection: [
                {
                  amount: 0,
                  name: '',
                },
              ],
            },
          },
          {
            name: 'Extras',
            uuid: '3ef9cd27-25f7-4ca4-a3ff-938881f345ac',
            type: 'extras',
            options: {
              selection: [
                {
                  amount: 0,
                  name: '',
                },
              ],
              extras: [
                {
                  amount: 50,
                  name: 'Mayonnaise',
                },
                {
                  amount: 120,
                  name: 'Coca-Cola',
                },
                {
                  amount: 70,
                  name: 'Veggies',
                },
                {
                  amount: 120,
                  name: 'Monster Energy Drink',
                },
                {
                  amount: 50,
                  name: 'Chili Sauce',
                },
                {
                  amount: 70,
                  name: 'Cheese',
                },
              ],
              deselection: [
                {
                  amount: 0,
                  name: '',
                },
              ],
            },
          },
          {
            name: 'Customize',
            uuid: 'ead04813-d089-467d-948e-cfa1252b0e60',
            type: 'deselection',
            options: {
              selection: [
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
              deselection: [
                {
                  amount: 50,
                  name: 'Salad',
                },
                {
                  amount: 70,
                  name: 'Chicken',
                },
                {
                  amount: 50,
                  name: 'Bogu Crust',
                },
                {
                  amount: 30,
                  name: 'Hotdog',
                },
              ],
            },
          },
        ],
        restaurant: {
          __typename: 'Restaurant',
          uuid: 'eb17f44b-c920-4e3f-8a8a-2039cbbbd23f',
          site: {
            __typename: 'Site',
            uuid: 'e816b705-7bff-4500-9ad4-6049acbd3487',
          },
          bank_info: {
            __typename: 'BankInfo',
            currency: 'NGN',
            delivery_fee: 400,
          },
        },
        menuCategories: [
          {
            __typename: 'MenuCategory',
            uuid: '6657e898-46a8-4bba-8375-e5354e2594ed',
            id: '48',
            title: 'Appetizers',
            description:
              'Get your meal started off right with one of our delicious appetizers. From classic favorites like wings and nachos to more unique options like our roasted',
          },
          {
            __typename: 'MenuCategory',
            uuid: 'd01e9d57-913c-4254-a903-a738323a5628',
            id: '49',
            title: 'Entrees',
            description:
              "Our entrees are made with the freshest ingredients and a whole lot of love. From our juicy burgers to our hand-rolled pasta dishes, there's something for every taste bud on our menu.",
          },
          {
            __typename: 'MenuCategory',
            uuid: '6f27c88e-b383-465a-9a0f-a6724e7bc054',
            id: '50',
            title: 'Sides',
            description:
              "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
          },
          {
            __typename: 'MenuCategory',
            uuid: '910be2e3-719e-484e-8e4a-5918c304cf7a',
            id: '51',
            title: 'Desserts',
            description:
              "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
          },
          {
            __typename: 'MenuCategory',
            uuid: '53634bad-e0c6-4e63-902b-4b95184ebb4b',
            id: '52',
            title: 'Breakfast',
            description:
              'Get your day started off right with one of our delicious meal. From classic favorites like wings and nachos to more unique options like our roasted cauliflower, we have something for everyone.',
          },
          {
            __typename: 'MenuCategory',
            uuid: '863aff64-c5fd-4f15-962a-3b0197ef3f43',
            id: '53',
            title: 'Beverages',
            description:
              'From craft cocktails to local beers, we have a beverage to pair perfectly with your meal.',
          },
        ],
        menuItems: [
          {
            __typename: 'MenuItem',
            uuid: '1d5e146e-9641-4a53-9661-145ff0dc4414',
            name: 'Chinese Hot Wings and Salmon',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '6657e898-46a8-4bba-8375-e5354e2594ed',
              id: '48',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw3fHxhcHBldGl6ZXJzfGVufDB8fHx8MTY4NTcwNTQwOXww&ixlib=rb-4.0.3&q=80&w=400' },
            price: 1000,
          },
          {
            __typename: 'MenuItem',
            uuid: '74727f5f-0bdb-4841-8c2d-42b42ed5b231',
            name: 'Pasta',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: 'd01e9d57-913c-4254-a903-a738323a5628',
              id: '49',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw0fHxwYXN0YXxlbnwwfHx8fDE2ODU3MDU3NDR8MA&ixlib=rb-4.0.3&q=80&w=400' },
            price: 1000,
          },
          {
            __typename: 'MenuItem',
            uuid: '0b24d339-d4c5-44ce-aaf0-0f1a56dcb216',
            name: 'Ice cream',
            description:
              "Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered. Our sides are the perfect complement to any meal. Whether you're in the mood for something crispy, creamy, or savory, we've got you covered.",
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '6f27c88e-b383-465a-9a0f-a6724e7bc054',
              id: '50',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwzfHxpY2UlMjBjcmVhbXxlbnwwfHx8fDE2ODU3MDU4Mzh8MA&ixlib=rb-4.0.3&q=80&w=400' },
            price: 2000,
          },
          {
            __typename: 'MenuItem',
            uuid: '755f9175-0518-445d-a477-13f78d450d99',
            name: 'Chocolate Ice Cream',
            description:
              'Save room for one of our decadent desserts. Our pastry chef has created an array of sweet treats that will leave you feeling satisfied and indulged. Save room for one of our decadent desserts. Our pastry chef has created an array of sweet treats that will leave you feeling satisfied and indulged.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '910be2e3-719e-484e-8e4a-5918c304cf7a',
              id: '51',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1612203985729-70726954388c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0c3xlbnwwfHx8fDE2ODU3MDU5NDd8MA&ixlib=rb-4.0.3&q=80&w=400' },
            price: 400,
          },
          {
            __typename: 'MenuItem',
            uuid: '3bbe7dad-d83a-4766-bf4e-90c88f205e05',
            name: 'Veggie rice',
            description:
              'Get your day started off right with one of our delicious meal. From classic favorites like wings and nachos to more unique options like our roasted cauliflower, we have something for everyone. Get your day started off right with one of our delicious meal. From classic favorites like wings and nachos to more unique options like our roasted cauliflower, we have something for everyone.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '53634bad-e0c6-4e63-902b-4b95184ebb4b',
              id: '52',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw3fHxyaWNlfGVufDB8fHx8MTY4NTcwNjIwOXww&ixlib=rb-4.0.3&q=80&w=400' },
            price: 400,
          },
          {
            __typename: 'MenuItem',
            uuid: '07931586-1416-4c11-92bb-5f8a060b640c',
            name: 'Hot coffee',
            description:
              'From craft cocktails to local beers, we have a beverage to pair perfectly with your meal. From craft cocktails to local beers, we have a beverage to pair perfectly with your meal. From craft cocktails to local beers, we have a beverage to pair perfectly with your meal.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '863aff64-c5fd-4f15-962a-3b0197ef3f43',
              id: '53',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw5fHxjb2ZmZWV8ZW58MHx8fHwxNjg1NzA2Mzk1fDA&ixlib=rb-4.0.3&q=80&w=400' },
            price: 300,
          },
          {
            __typename: 'MenuItem',
            uuid: 'aae735fe-d80c-45b3-908d-7b87f3d4834b',
            name: 'Veggie Rice',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing., Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing., Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '6657e898-46a8-4bba-8375-e5354e2594ed',
              id: '48',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwyfHxyaWNlfGVufDB8fHx8MTY4NjMyMDc5NHww&ixlib=rb-4.0.3&q=80&w=400' },
            price: 4000,
          },
          {
            __typename: 'MenuItem',
            uuid: 'ea0adee8-6ece-4601-a7fc-c335bb32f640',
            name: 'Meshed Rice',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing., Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '6657e898-46a8-4bba-8375-e5354e2594ed',
              id: '48',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1577110058859-74547db40bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw2fHxyaWNlfGVufDB8fHx8MTY4NjMyMDc5NHww&ixlib=rb-4.0.3&q=80&w=400' },
            price: 200,
          },
          {
            __typename: 'MenuItem',
            uuid: 'c9e0e9e2-f94c-48db-ac91-857bd1529474',
            name: 'White rice',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '6657e898-46a8-4bba-8375-e5354e2594ed',
              id: '48',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwyfHxyaWNlfGVufDB8fHx8MTY4NjMyMDc5NHww&ixlib=rb-4.0.3&q=80&w=400' },
            price: 500,
          },
          {
            __typename: 'MenuItem',
            uuid: 'fd6cc8a0-19fa-487a-b624-16aa06ba2324',
            name: 'Jollof Rice',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '6657e898-46a8-4bba-8375-e5354e2594ed',
              id: '48',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwxMXx8cmljZXxlbnwwfHx8fDE2ODYzMjA3OTR8MA&ixlib=rb-4.0.3&q=80&w=400' },
            price: 400,
          },
          {
            __typename: 'MenuItem',
            uuid: 'e82571fb-da4d-41e9-b66f-fc3fecd6c0a2',
            name: 'Green rice',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '6657e898-46a8-4bba-8375-e5354e2594ed',
              id: '48',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwxOHx8cmljZXxlbnwwfHx8fDE2ODYzMjA3OTR8MA&ixlib=rb-4.0.3&q=80&w=400' },
            price: 300,
          },
          {
            __typename: 'MenuItem',
            uuid: '8940ad36-b04b-4a05-af5e-064fae48a949',
            name: 'Chinese Rice',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.,Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '6657e898-46a8-4bba-8375-e5354e2594ed',
              id: '48',
            },
            options: [],
            image:
              { src: 'https://images.unsplash.com/photo-1613758235256-43a7bdc21d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw1fHxyaWNlfGVufDB8fHx8MTY4NjMyMDc5NHww&ixlib=rb-4.0.3&q=80&w=400' },
            price: 3000,
          },
          {
            __typename: 'MenuItem',
            uuid: '44ac9aed-cf29-4164-ae48-309ed0785580',
            name: 'Grilled Chicken Caesar Salad',
            description:
              'Grilled chicken breast served over a bed of crisp romaine lettuce, topped with shredded Parmesan cheese, croutons, and our house-made Caesar dressing.',
            menuCategory: {
              __typename: 'MenuCategory',
              uuid: '910be2e3-719e-484e-8e4a-5918c304cf7a',
              id: '51',
            },
            options: [
              '5691be53-efca-4647-ad39-5a27cadfd8ec',
              'ead04813-d089-467d-948e-cfa1252b0e60',
              '3ef9cd27-25f7-4ca4-a3ff-938881f345ac',
            ],
            image:
              { src: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw2fHxwaXp6YXxlbnwwfHx8fDE2ODg4ODA3NTh8MA&ixlib=rb-4.0.3&q=80&w=400' },
            price: 1500,
          },
        ],
      },
    },
    ssr_content_fields: ["menu"],
    ssr_network_operation: "GET_MENU",
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
  pages: ['menu']
};
