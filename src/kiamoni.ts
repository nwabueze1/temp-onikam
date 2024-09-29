import { KiamoniTemplateType } from './types';
import {
  KiamoniBlock1,
  KiamoniBlock2,
  KiamoniBlock3,
  KiamoniBlock4,
  KiamoniBlock5,
  KiamoniBlock6,
  KiamoniBlock7,
  KiamoniBlock8,
  KiamoniBlock9,
  KiamoniBlock10,
  KiamoniBlock11,
  KiamoniBlock12,
  KiamoniBlock13,
  KiamoniBlock14,
  KiamoniBlock15,
  KiamoniBlock16,
  KiamoniBlock17,
  KiamoniBlock18,
  KiamoniBlock20,
  KiamoniBlock21,
  KiamoniBlock22,
  KiamoniBlock23,
  KiamoniBlock24,
  KiamoniBlock25,
} from './Blocks';

export const useGetKiamoniBlocks = () => {
  const kiamoniBlockLayouts = {
    layout1: 'layout-1',
    layout2: 'layout-2',
    layout3: 'layout-3',
    layout4: 'layout-4',
    layout5: 'layout-5',
    layout6: 'layout-6',
  };

  return (): KiamoniTemplateType[] => [
    {
      name: 'kiamoni-block-1',
      component: KiamoniBlock1,
      props: {
        content: {
          links: [
            { text: 'Home', url: '/' },
            { text: 'Menu', url: '/menu' },
            { text: 'Blog', url: '/blog' },
            { text: 'About Us', url: '/about' },
            { text: 'Contact', url: '/contact' },
          ],
          searchPage: { url: '/search' },
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Kiamoni.svg',
          },
          buttons: [
            {
              text: 'Order Now',
              url: '/order',
            },
          ],
        },
        mode: 'view',
        configuration: {
          colors: {
            main: {
              '100': 'primary.main',
              '200': 'neutral.white',
              '300': 'neutral.black',
              '400': 'secondary.main',
              '500': 'neutral.500',
              '600': 'neutral.700',
              '700': 'alert.error',
            },
            button: {
              '100': 'neutral.700',
              '200': 'neutral.white',
              '300': 'neutral.black',
            },
          },
          fonts: {
            heading: 'fonts.heading',
            body: 'fonts.body',
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: 'kiamoni-block-2',
      component: KiamoniBlock2,
      props: {
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
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
        mode: 'view',
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: 'kiamoni-block-3',
      component: KiamoniBlock3,
      props: {
        content: {
          text: {
            main: 'Join our weekly digest',
            body: 'Get exclusive promotions & updates straight to your inbox.',
            extra: 'Where every bite is a story',
          },
          form_uuid: null,
          form: {
            uuid: '947870ed-75d5-480e-a07a-6c4ed8f48a99',
            site_uuid: 'd93bf217-fe51-44de-ab36-ca9211d12e71',
            title: 'Newsletter',
            author: 'Basit@smail.com',
            status: '1',
            questions: [
              {
                uuid: '4943490f-7e60-4b63-a6cf-af5d60c22080',
                question: 'Your email address',
                description: null,
                type: 'EMAIL_ADDRESS',
                is_required: true,
                fields: [],
                __typename: 'Question',
              },
            ],
            setting: {
              uuid: '8cd9f371-c978-4f03-b003-64780d9be67c',
              end_date: null,
              allow_multiple_responses: true,
              response_limit: 1000000,
              submission_text: '',
              notification_email: '',
              __typename: 'FormSetting',
            },
            __typename: 'Form',
          },
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Kiamoni+(2).svg',
          },
          schedules: [
            { day: 'Mon - Sat', time: '11:30AM - 8:30PM' },
            { day: 'Sun', time: '5:30AM - 8:30AM' },
          ],

          footerLinks: [
            {
              name: 'Address',
              links: [
                {
                  text: '35 Battersea Rise, London, PA 17201',
                  url: '#',
                  name: 'address',
                },
                {
                  text: '(+44) 263-2665',
                  url: '#',
                  name: 'phone',
                },
                {
                  text: 'username@email.com',
                  url: '#',
                  name: 'email',
                },
              ],
            },

            {
              name: 'Shopping',
              links: [
                {
                  text: 'Your Cart',
                  url: '#',
                },
                {
                  text: 'your Orders',
                  url: '#',
                },
                {
                  text: 'Addresses',
                  url: '#',
                },
                {
                  text: 'Wishlist Items',
                  url: '#',
                },
              ],
            },
            {
              name: 'More urls',
              links: [
                {
                  text: 'Blog',
                  url: '#',
                },
                {
                  text: 'Buying Guide',
                  url: '#',
                },
                {
                  text: 'New Arrivals',
                  url: '#',
                },
                {
                  text: 'About Us',
                  url: '#',
                },
              ],
            },
            {
              name: 'Are you like me',
              links: [
                {
                  text: 'Blog',
                  url: '#',
                },
                {
                  text: 'Buying Guide',
                  url: '#',
                },
                {
                  text: 'New Arrivals',
                  url: '#',
                },
                {
                  text: 'About Us',
                  url: '#',
                },
              ],
            },
          ],
          buttons: [
            {
              text: 'facebook',
              url: '',
            },
            {
              text: 'instagram',
              url: '',
            },
            {
              text: 'youtube',
              url: '',
            },
          ],
        },
        mode: 'view',
        ssr_network_operation: 'GET_FORM_BY_UUID',
        ssr_content_fields: ['form'],
        configuration: {
          colors: {
            main: {
              '100': 'neutral.white',
              '200': 'neutral.black',
              '300': 'neutral.700',
              '400': 'neutral.400',
              '500': 'neutral.500',
              '600': 'secondary.main',
            },
            button: {
              '100': 'neutral.700',
              '200': 'neutral.white',
              '300': 'neutral.black',
              '400': 'primary.main',
              '500': 'secondary.main',
              '600': 'alert.positive',
              '700': 'alert.error',
            },
          },
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: 'kiamoni-block-4',
      component: KiamoniBlock4,
      props: {
        content: {
          text: {
            title: 'Why We Are The Best',
            subTitle:
              'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          },
          cards: [
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg',
              },
              title: 'Quality Food',
              subtitle:
                'Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
            },
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg',
              },
              title: 'Quality Food',
              subtitle:
                'Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
            },
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg',
              },
              title: 'Quality Food',
              subtitle:
                'Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
            },
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Icon.svg',
              },
              title: 'Quality Food',
              subtitle:
                'Norem ipsum dolor sit amet, consectetur adipisci elit. Nunc vulputate libero et velit interdum, acang aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
            },
          ],
        },
        configuration: {
          colors: {
            main: {
              '100': 'neutral.white',
              '200': 'neutral.black',
              '300': 'neutral.700',
              '400': 'neutral.500',
            },
          },
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
        mode: 'view',
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: 'kiamoni-block-5',
      component: KiamoniBlock5,
      props: {
        content: {
          text: {
            header: 'Every bite is a good story',
            subtext: 'Experience a culinary journey unlike any other',
          },
          images: [
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15.svg',
              },
            },
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(1).svg',
              },
            },
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(2).svg',
              },
            },
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(3).svg',
              },
            },
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(2).svg',
              },
            },
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(3).svg',
              },
            },
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(2).svg',
              },
            },
            {
              image: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/image+15+(3).svg',
              },
            },
          ],
          buttons: [{ text: 'See All Menu', url: 'menu' }],
        },
        configuration: {
          colors: {
            main: {
              '100': 'neutral.white',
              '200': 'neutral.black',
              '300': 'neutral.700',
              '400': 'neutral.400',
              '500': 'neutral.500',
              '600': 'primary.main',
              '700': 'secondary.main',
            },
            button: {
              '100': 'neutral.700',
              '200': 'neutral.white',
              '300': 'neutral.black',
              '400': 'primary.main',
              '500': 'secondary.main',
              '600': 'alert.positive',
              '700': 'alert.error',
            },
          },
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: 'kiamoni-block-6',
      component: KiamoniBlock6,
      props: {
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
              image: {
                src: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw3fHxhcHBldGl6ZXJzfGVufDB8fHx8MTY4NTcwNTQwOXww&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw0fHxwYXN0YXxlbnwwfHx8fDE2ODU3MDU3NDR8MA&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwzfHxpY2UlMjBjcmVhbXxlbnwwfHx8fDE2ODU3MDU4Mzh8MA&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1612203985729-70726954388c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0c3xlbnwwfHx8fDE2ODU3MDU5NDd8MA&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw3fHxyaWNlfGVufDB8fHx8MTY4NTcwNjIwOXww&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw5fHxjb2ZmZWV8ZW58MHx8fHwxNjg1NzA2Mzk1fDA&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1571066811602-716837d681de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHw0fHxwaXp6YXxlbnwwfHx8fDE2ODY5Mjc3MTJ8MA&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1614344629308-f5b22bb8b6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHwxfHxncm91bmRudXR8ZW58MHx8fHwxNjg3MDU2Mzg0fDA&ixlib=rb-4.0.3&q=80&w=400',
              },
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
        isSsr: true,
        mode: 'view',
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
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
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
        index: 2,
      },
    },
    {
      name: 'kiamoni-block-7',
      component: KiamoniBlock7,
      props: {
        content: {
          text: {
            heading: 'Signature Pizza',
            subHeading:
              'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          },
          buttons: [{ text: 'See All Menu', url: '/menu' }],
          menu_item_uuids: null,
          menu_items: [
            {
              uuid: '1d5e146e-9641-4a53-9661-145ff0dc4414',
              price: 1000,
              name: 'Chinese Hot Wings and Salmon',
              image: {
                src: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw3fHxhcHBldGl6ZXJzfGVufDB8fHx8MTY4NTcwNTQwOXww&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw0fHxwYXN0YXxlbnwwfHx8fDE2ODU3MDU3NDR8MA&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwzfHxpY2UlMjBjcmVhbXxlbnwwfHx8fDE2ODU3MDU4Mzh8MA&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1612203985729-70726954388c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0c3xlbnwwfHx8fDE2ODU3MDU5NDd8MA&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw3fHxyaWNlfGVufDB8fHx8MTY4NTcwNjIwOXww&ixlib=rb-4.0.3&q=80&w=400',
              },
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
              image: {
                src: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw5fHxjb2ZmZWV8ZW58MHx8fHwxNjg1NzA2Mzk1fDA&ixlib=rb-4.0.3&q=80&w=400',
              },
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
        isSsr: true,
        mode: 'view',
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
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
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
      },
    },
    {
      name: 'kiamoni-block-8',
      component: KiamoniBlock8,
      props: {
        content: {
          text: {
            heading: 'Blog insight',
          },
          buttons: [{ text: 'See More', url: '/blog' }],
          post_uuids: null,
          posts: [
            {
              excerpt:
                '<p>Ooh baby. Basil, chives, garlic, and a tiny hit of oregano all in a creamy, salty, bright green sauce – I love this so much.</p><p>The first time I made this, my toddler (who mostly just eats cra',
              uuid: '363ebcb5-04f5-4347-b10e-612df2d9ef8f',
              slug: '/-matcha-blueberry--latte/his-sauce-ct-just-about-anythingan-be-poured-ou',
              title: 'his sauce ct just about anythingan be poured ou',
              featured_image: {
                src: 'https://images.unsplash.com/photo-1688377116702-5fb489a7f089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTAzODE1NjJ8&ixlib=rb-4.0.3&q=80&w=400',
              },
              published_at: '2023-07-26 14:26:54',
            },
            {
              excerpt:
                '<p>Ooh baby. Basil, chives, garlic, and a tiny hit of oregano all in a creamy, salty, bright green sauce – I love this so much.</p><p>The first time I mor that experience.</p><p>My favorite thing ab',
              uuid: '84607945-98fb-4a30-bfe1-35bc8b1915fc',
              slug: '/grilled-chicken-with-pepperoncini-garlic-butter/things-you-could-put-it-on',
              title: 'Things You Could Put It On',
              featured_image: {
                src: 'https://images.unsplash.com/photo-1688413737046-97bf5b5ae2ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTAzODE2NDN8&ixlib=rb-4.0.3&q=80&w=400',
              },
              published_at: '2023-07-26 14:28:19',
            },
            {
              excerpt:
                '<p>Ooh baby. Basil, chives, garlic, and a tiny hit of oregano all in a creamy, salty, bright green sauce – I love this so much.</p><p>The first timet experience.</p><p>My favorite thing about this s',
              uuid: 'eb5006c8-2c55-41cb-9a96-cb65543da56c',
              slug: '/very-le-basil-sauce/put-it-on-all-your-yummy-things',
              title: 'Put It On All Your Yummy Things',
              featured_image: {
                src: 'https://images.unsplash.com/photo-1687902625864-faedb40f83a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTAzODE3NDZ8&ixlib=rb-4.0.3&q=80&w=400',
              },
              published_at: '2023-07-26 14:29:54',
            },
            {
              excerpt:
                '<p>Oohat experience.</p><p>My favorite thing about this sauce, besides that it tastes like heaven, is that makes healthy-ish eating something I really, actually look forward to.</p><p>Baked salmon goe',
              uuid: '3c3fdbe8-3652-4dfb-b3e3-c3ed56858719',
              slug: '/-matcha-blueberry--latte/blend-your-basil-sauce',
              title: 'Blend Your Basil Sauce',
              featured_image: {
                src: 'https://images.unsplash.com/photo-1689671439720-47c45b6a7a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTAzODE4NDh8&ixlib=rb-4.0.3&q=80&w=400',
              },
              published_at: '2023-07-26 14:31:28',
            },
            {
              excerpt:
                '<p>Ooh baby. Basil, chives, garlic, and a tiny hit of oregano all in a creamy, salty, bright green sauce – I love this so much.</p><p>The first time I made this, my toddler (who mostly just eats cra',
              uuid: '28629bd5-7e92-4e1b-a703-6b6c25b4ec4a',
              slug: '/very-le-basil-sauce/blend-until-you-get-your-desired-',
              title: 'Blend until you get your desired',
              featured_image: {
                src: 'https://images.unsplash.com/photo-1689126437563-f5d936a06713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTAzODE5NDd8&ixlib=rb-4.0.3&q=80&w=400',
              },
              published_at: '2023-07-26 14:33:37',
            },
            {
              excerpt:
                '<p>Ooh baby. Basil, chives, garlic, and a tiny hit of oregano all in a creamy, salty, bright green sauce – I love this so much.</p><p>The first time I made this, my toddler (who mostly just eats cra',
              uuid: '56b8e0e8-d302-49c0-beb3-fd5f55d512a7',
              slug: '/very-le-basil-sauce/place-all-your-sauce-ingredie',
              title: 'Place all your sauce ingredie',
              featured_image: {
                src: 'https://images.unsplash.com/photo-1689782419975-0d74c954eb58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTAzODIwNzd8&ixlib=rb-4.0.3&q=80&w=400',
              },
              published_at: '2023-07-26 14:35:23',
            },
            {
              excerpt:
                '<p>Ooh baby. Basil, chives, garlic, and a tiny hit of oregano all in a creamy, salty, bright green sauce – I love this so much.</p><p>The first time I made this, my toddler (who mostly just eats cra',
              uuid: 'b8e1f2aa-040d-4316-ae98-2b7b07f38b71',
              slug: '/-matcha-blueberry--latte/',
              title: 'asil, chives, garlic, and a tin',
              featured_image: {
                src: 'https://images.unsplash.com/photo-1677019441418-a8485f977ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTAzODQ1OTB8&ixlib=rb-4.0.3&q=80&w=400',
              },
              published_at: '2023-07-26 15:18:10',
            },
            {
              excerpt:
                '<p>asil, chives, garlic, and a tin Ooh baby. Basil, chives, garlic, and a tiny hit of oregano all in a creamy, salty, bright green sauce – I love this so much.</p><p>The first time I made this, my t',
              uuid: '0fc0fad7-2bb2-4635-8b72-32765c63ce45',
              slug: '/grilled-chicken-with-pepperoncini-garlic-butter/the-first-time-i-made',
              title: 'The first time I made',
              featured_image: {
                src: 'https://images.unsplash.com/photo-1683130461728-cf2ab05765c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTAzODQ3MjF8&ixlib=rb-4.0.3&q=80&w=400',
              },
              published_at: '2023-07-26 15:19:18',
            },
          ],
        },
        isSsr: false,
        mode: 'view',
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
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
            heading: 'Montserrat',
            body: 'Montserrat',
            misc: '',
          },
        },
      },
    },
    {
      name: 'kiamoni-block-9',
      component: KiamoniBlock9,
      props: {
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
                image: {
                  src: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw3fHxhcHBldGl6ZXJzfGVufDB8fHx8MTY4NTcwNTQwOXww&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw0fHxwYXN0YXxlbnwwfHx8fDE2ODU3MDU3NDR8MA&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwzfHxpY2UlMjBjcmVhbXxlbnwwfHx8fDE2ODU3MDU4Mzh8MA&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1612203985729-70726954388c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0c3xlbnwwfHx8fDE2ODU3MDU5NDd8MA&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw3fHxyaWNlfGVufDB8fHx8MTY4NTcwNjIwOXww&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw5fHxjb2ZmZWV8ZW58MHx8fHwxNjg1NzA2Mzk1fDA&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwyfHxyaWNlfGVufDB8fHx8MTY4NjMyMDc5NHww&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1577110058859-74547db40bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw2fHxyaWNlfGVufDB8fHx8MTY4NjMyMDc5NHww&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwyfHxyaWNlfGVufDB8fHx8MTY4NjMyMDc5NHww&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwxMXx8cmljZXxlbnwwfHx8fDE2ODYzMjA3OTR8MA&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHwxOHx8cmljZXxlbnwwfHx8fDE2ODYzMjA3OTR8MA&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1613758235256-43a7bdc21d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw1fHxyaWNlfGVufDB8fHx8MTY4NjMyMDc5NHww&ixlib=rb-4.0.3&q=80&w=400',
                },
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
                image: {
                  src: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw2fHxwaXp6YXxlbnwwfHx8fDE2ODg4ODA3NTh8MA&ixlib=rb-4.0.3&q=80&w=400',
                },
                price: 1500,
              },
            ],
          },
        },
        ssr_network_operation: 'GET_MENU',
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
    },
    {
      name: 'kiamoni-block-10',
      component: KiamoniBlock10,
      props: {
        content: {
          menu_uuid: 'c273a3c4-872b-4776-84ca-39202c45d354',
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
        isSsr: false,
        mode: 'view',
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
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
            button: {
              '100': 'neutral.700',
              '200': 'neutral.white',
              '300': 'neutral.black',
              '400': 'primary.main',
              '500': 'secondary.main',
            },
          },
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
      },
    },
    {
      name: 'kiamoni-block-11',
      component: KiamoniBlock11,
      props: {
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
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout6,
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
      },
    },
    {
      name: 'kiamoni-block-12',
      component: KiamoniBlock12,
      props: {
        content: {
          text: {
            title: 'What Our Customers Say',
            subtitle: 'Read what our happy customers have to say about us',
          },
          comments: [
            {
              name: 'Janet Doe',
              comment:
                'I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!',
            },
            {
              name: 'Janet Doe',
              comment:
                'I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!',
            },
            {
              name: 'Janet Doe',
              comment:
                'I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!',
            },
            {
              name: 'Janet Doe',
              comment:
                'I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!',
            },
            {
              name: 'Janet Doe',
              comment:
                'I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!',
            },
            {
              name: 'Janet Doe',
              comment:
                'I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!',
            },
            {
              name: 'Janet Doe',
              comment:
                'I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!',
            },
            {
              name: 'Janet Doe',
              comment:
                'I have been to many restaurants in the city, but Kiamoni Restaurant is truly something special. The food is always fresh and delicious, and the service is outstanding. I highly recommend it!',
            },
          ],
        },
        mode: 'view',
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
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
              '700': 'neutral.600',
            },
          },
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
      },
    },
    {
      name: 'kiamoni-block-13',
      component: KiamoniBlock13,
      props: {
        content: {
          text: {
            title: 'Blog',
          },
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/backgroundImage.jpg',
          },
          links: [
            { text: 'Home', url: '#' },
            { text: 'Blog', url: '/blog' },
          ],
        },
        mode: 'view',
        configuration: {
          colors: {
            main: {
              '100': 'neutral.white',
              '200': 'neutral.black',
              '300': 'neutral.700',
              '400': 'neutral.500',
            },
          },
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
            misc: '',
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: 'kiamoni-block-14',
      component: KiamoniBlock14,
      props: {
        content: {
          text: {
            title: 'Our Services',
            subTitle:
              'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          },
          services: [
            {
              image:
                'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+522.png',
              header: 'Swift Delivery',
              text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            },
            {
              image:
                'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+522+(1).png',
              header: 'Professional Chef',
              text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            },
            {
              image:
                'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+522+(2).png',
              header: 'Quality Wines',
              text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            },
            {
              image:
                'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+522+(3).png',
              header: 'Sweet Deals',
              text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            },
            {
              image:
                'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+522.png',
              header: 'Card Payment',
              text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            },
            {
              image:
                'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+522.png',
              header: 'Personalized Spots',
              text: 'Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
            },
          ],
        },
        mode: 'view',
        configuration: {
          colors: {
            main: {
              '100': 'neutral.white',
              '200': 'neutral.black',
              '300': 'neutral.700',
              '400': 'neutral.500',
              '500': 'primary.main',
              '600': 'secondary.main',
              '700': 'neutral.400',
            },
          },
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: 'kiamoni-block-15',
      component: KiamoniBlock15,
      props: {
        content: {
          menu_item_uuid: null,
          menu_item: {
            image: {
              src: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHNlYXJjaHw5fHxjb2ZmZWV8ZW58MHx8fHwxNjg1NzA2Mzk1fDA&ixlib=rb-4.0.3&q=80&w=400',
            },
            price: 450,
            description: 'Excellent potato salad made from thick paste',
            name: 'Potato Salad',
            options: [
              'b812cc6f-2b1b-4b7f-82ef-ecb19ea82171',
              '7b4d9717-4a46-4181-97c1-78bb6f0be108',
            ],
            uuid: 'e80f8c04-2c5b-4bc9-bdf5-29636225026d',
            related_menu_items: [
              {
                uuid: '1bf7fec5-9e24-4a43-b2c5-ca4f5509b563',
                image: {
                  src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHwzfHxTYWxhZHxlbnwwfHx8fDE2OTY1MDAxOTd8MA&ixlib=rb-4.0.3&q=80&w=400',
                },
                price: 500,
                name: 'Fresh Fish & Salad',
                slug: '/salads/fresh-fish--salad',
                __typename: 'MenuItem',
              },
              {
                uuid: 'fa2c7c46-d6f1-41ff-b647-7fa6d65902f6',
                image: {
                  src: 'https://images.unsplash.com/photo-1662484079204-95ffd903e6f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY1MTExMzh8&ixlib=rb-4.0.3&q=80&w=400',
                },
                price: 300,
                name: 'Chow Mein',
                slug: '/salads/chow-mein',
                __typename: 'MenuItem',
              },
              {
                uuid: '083642ae-96ed-4c1a-badc-74a77437c139',
                image: {
                  src: 'https://images.unsplash.com/photo-1694120341137-182907e87f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2MDc2ODV8&ixlib=rb-4.0.3&q=80&w=400',
                },
                price: 450,
                name: 'Pasta Noodles',
                slug: '/salads/pasta-noodles',
                __typename: 'MenuItem',
              },
              {
                uuid: '104edc6d-6bf9-4bd2-a5e3-beb04f6b47ab',
                image: {
                  src: 'https://images.unsplash.com/photo-1682665569992-e764e9e6553e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2MDc3NDV8&ixlib=rb-4.0.3&q=80&w=400',
                },
                price: 500,
                name: 'Rice Krispies',
                slug: '/salads/rice-krispies',
                __typename: 'MenuItem',
              },
            ],
            menu: {
              options_config: [
                {
                  uuid: 'b812cc6f-2b1b-4b7f-82ef-ecb19ea82171',
                  name: 'Drinks',
                  type: 'selection',
                  options: {
                    selection: [
                      {
                        name: 'Coke',
                        amount: 100,
                        __typename: 'DishOption',
                      },
                      {
                        name: 'Fanta',
                        amount: 80,
                        __typename: 'DishOption',
                      },
                      {
                        name: 'Pepsi',
                        amount: 120,
                        __typename: 'DishOption',
                      },
                    ],
                    deselection: [
                      {
                        name: '',
                        amount: 0,
                        __typename: 'DishOption',
                      },
                    ],
                    extras: [
                      {
                        name: '',
                        amount: 0,
                        __typename: 'DishOption',
                      },
                    ],
                    __typename: 'OptionsConfig',
                  },
                  __typename: 'MenuOptionsConfig',
                },
                {
                  uuid: '7b4d9717-4a46-4181-97c1-78bb6f0be108',
                  name: 'Toppings',
                  type: 'extras',
                  options: {
                    selection: [
                      {
                        name: '',
                        amount: 0,
                        __typename: 'DishOption',
                      },
                    ],
                    deselection: [
                      {
                        name: '',
                        amount: 0,
                        __typename: 'DishOption',
                      },
                    ],
                    extras: [
                      {
                        name: 'Suya',
                        amount: 500,
                        __typename: 'DishOption',
                      },
                      {
                        name: 'Pineapple',
                        amount: 450,
                        __typename: 'DishOption',
                      },
                      {
                        name: 'Wine',
                        amount: 300,
                        __typename: 'DishOption',
                      },
                    ],
                    __typename: 'OptionsConfig',
                  },
                  __typename: 'MenuOptionsConfig',
                },
              ],
              restaurant: {
                uuid: '598fbf40-14af-43b8-9986-8dbc4ee55572',
                site: {
                  uuid: 'a1a8de08-636f-4b10-8c1c-3f9484cf2132',
                  __typename: 'Site',
                },
                bank_info: {
                  currency: 'NGN',
                  delivery_fee: 0,
                  __typename: 'BankInfo',
                },
                __typename: 'Restaurant',
              },
              __typename: 'Menu',
            },
            __typename: 'MenuItem',
          },
        },
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
    },
    {
      name: 'kiamoni-block-16',
      component: KiamoniBlock16,
      props: {
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
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
        mode: 'view',
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: 'kiamoni-block-17',
      component: KiamoniBlock17,
      props: {
        content: {
          blog_uuid: '779e8d24-d98d-4c7e-9674-7322f3ebed35',
        },
        isSsr: false,
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
        ],
        mode: 'view',
        configuration: {
          colors: {
            main: {
              '100': 'neutral.white',
              '200': 'neutral.black',
              '300': 'neutral.700',
              '400': 'secondary.main',
              '500': 'primary.main',
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
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
      },
    },
    {
      name: 'kiamoni-block-18',
      component: KiamoniBlock18,
      props: {
        content: {
          post_uuid: null,
          post: {
            __typename: 'Post',
            uuid: '44b90df7-43c5-4cde-8754-5eacdc091749',
            title: 'Introducing Original Burger Sets New Line Video',
            featured_image: {
              src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHwyfHxidXJnZXJ8ZW58MHx8fHwxNjg3MDg5NTQ1fDA&ixlib=rb-4.0.3&q=80&w=400',
              source: 'https://pexels.com',
              photographer: {
                name: 'James Rivera',
                url: 'https://pexels.com/@jamey',
              },
            },
            published_at: '2023-06-18 12:17:40',
            content:
              '<p>Many of you messaged me on Instagram after I shared my Power Bowls on IG Stories asking for the recipe, so here it is! I love this recipe for so many reasons. You’ll see from the recipe and photos in this post, I veered off the meal plan calendar just a bit this week adding in some yellow bell peppers and tomatoes and then no olives. While I don’t mind having so many repeat meals in the month as it does help make meal planning easy for me, switching up an ingredient or two can really help the meal not feel so redundant.</p><p><br></p><p>Besides tasting great, these Power Bowls are also so incredibly healthy and good for you too! I love that these bowls are packed with fiber. Fiber is important to support hormone health, gut health, bowel regularity and blood sugar levels.</p><p><br></p><h3>Plant-Based Recipes For Kids</h3><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p><img src="https://images.unsplash.com/photo-1450368588160-81c4b8955c8c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHw2fHxmaWJyZSUyMGZvb2R8ZW58MHx8fHwxNjg3MDg5ODM1fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"></p><p><br></p><h3>How Does Fiber Support Gut Health</h3><p>Consuming foods with fiber is important for gut health, bowel regularity and immune health! Did you know that 70% of your immune system is found in the walls of your gut? Eating a variety of plants, around 30 different plant foods per week, has been shown to feed good gut microbes and in turn support your immunity! Prebiotics found in plant foods feed your healthy gut bacteria, known as probiotics. These probiotics release short chain fatty acids (SCFA) into the body, which help regulate the function of immune cells!</p><p>I love that this Power Bowl recipe contains over 11 different plant-based foods in one meal (including the dressing!)</p><p><br></p><h3>Plant-Based Recipes For Kids</h3><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p><img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHw3fHxidXJnZXJ8ZW58MHx8fHwxNjg3MDg5NTQ1fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"></p><p><br></p><h3>Plant-Based Recipes For Kids</h3><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p><img src="https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHwxN3x8YnVyZ2VyfGVufDB8fHx8MTY4NzA4OTU0NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"></p><p><br></p><h3>How Does Fiber Support Gut Health</h3><p>Consuming foods with fiber is important for gut health, bowel regularity and immune health! Did you know that 70% of your immune system is found in the walls of your gut? Eating a variety of plants, around 30 different plant foods per week, has been shown to feed good gut microbes and in turn support your immunity! Prebiotics found in plant foods feed your healthy gut bacteria, known as probiotics. These probiotics release short chain fatty acids (SCFA) into the body, which help regulate the function of immune cells!</p><p>I love that this Power Bowl recipe contains over 11 different plant-based foods in one meal (including the dressing!)</p><p><br></p><h3>Plant-Based Recipes For Kids</h3><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://youtu.be/Xz3IBzQ8tDM"></iframe><p><br></p>',
            category_name: 'Recipe',
            author: {
              __typename: 'User',
              uuid: '4881d0e9-7fda-4482-b2af-73fdbf3af3ad',
              name: 'kolawole isaac',
              avatar: {
                src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/0406191c-f351-4a58-b164-b9521b3d78c5/THfMeQpABT2ei2cXLIhZiECbvvZeecSXXy9yomzz.jpg',
              },
            },
            tags: [
              {
                __typename: 'Tag',
                name: 'Scrum',
                uuid: 'd5da1f5e-4c77-4b1f-b9f8-2a3e8db11213',
              },
              {
                __typename: 'Tag',
                name: 'Outsourcing',
                uuid: '2649efc4-77dc-4f08-9a78-f759f5de89bb',
              },
              {
                __typename: 'Tag',
                name: 'Agile',
                uuid: '0507b225-ed04-46bf-8fc3-182b205cca73',
              },
              {
                __typename: 'Tag',
                name: 'Dance',
                uuid: '739749ee-b539-4fd0-93f0-50af106ad713',
              },
              {
                __typename: 'Tag',
                name: 'Shows',
                uuid: 'ae1820b5-67bf-403c-ab5c-6d505046d7ff',
              },
              {
                __typename: 'Tag',
                name: 'Thoughts',
                uuid: '94be199c-001d-49f0-9409-4d0d90b3ab8d',
              },
              {
                __typename: 'Tag',
                name: 'Development',
                uuid: 'ff699121-e010-4285-8897-974cb1bb7300',
              },
              {
                __typename: 'Tag',
                name: 'Entertainment',
                uuid: '5c73debd-1ddc-4cf5-aadb-3277bd620161',
              },
              {
                __typename: 'Tag',
                name: 'Hiring',
                uuid: '72797173-777c-46fb-aecd-38900958926b',
              },
              {
                __typename: 'Tag',
                name: 'recipe',
                uuid: '1616cefb-bc2d-4ce2-b69a-47a8fa10f4e5',
              },
            ],
            related_posts: [
              {
                __typename: 'Post',
                title: 'How to make  delicious afternoon meal',
                uuid: '6484cb7b-b263-4775-abfe-8c027c3945d3',
                featured_image: {
                  src: 'https://images.unsplash.com/photo-1682672412664-bf9740c7ebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTU0MDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODU3NjA1Nzh8&ixlib=rb-4.0.3&q=80&w=400',
                },
                content:
                  '<p>you cant copy you cant copy you cant copy you cant copy you cant copy you cant copy you cant copy you cant copy Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>',
                slug: '/recipe/how-to-make--delicious-afternoon-meal',
              },
              {
                __typename: 'Post',
                title: 'Introducing Original Burger Sets New Line Video',
                uuid: '44b90df7-43c5-4cde-8754-5eacdc091749',
                featured_image: {
                  src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHwyfHxidXJnZXJ8ZW58MHx8fHwxNjg3MDg5NTQ1fDA&ixlib=rb-4.0.3&q=80&w=400',
                },
                content:
                  '<p>Many of you messaged me on Instagram after I shared my Power Bowls on IG Stories asking for the recipe, so here it is! I love this recipe for so many reasons. You’ll see from the recipe and photos in this post, I veered off the meal plan calendar just a bit this week adding in some yellow bell peppers and tomatoes and then no olives. While I don’t mind having so many repeat meals in the month as it does help make meal planning easy for me, switching up an ingredient or two can really help the meal not feel so redundant.</p><p><br></p><p>Besides tasting great, these Power Bowls are also so incredibly healthy and good for you too! I love that these bowls are packed with fiber. Fiber is important to support hormone health, gut health, bowel regularity and blood sugar levels.</p><p><br></p><h3>Plant-Based Recipes For Kids</h3><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p><img src="https://images.unsplash.com/photo-1450368588160-81c4b8955c8c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHw2fHxmaWJyZSUyMGZvb2R8ZW58MHx8fHwxNjg3MDg5ODM1fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"></p><p><br></p><h3>How Does Fiber Support Gut Health</h3><p>Consuming foods with fiber is important for gut health, bowel regularity and immune health! Did you know that 70% of your immune system is found in the walls of your gut? Eating a variety of plants, around 30 different plant foods per week, has been shown to feed good gut microbes and in turn support your immunity! Prebiotics found in plant foods feed your healthy gut bacteria, known as probiotics. These probiotics release short chain fatty acids (SCFA) into the body, which help regulate the function of immune cells!</p><p>I love that this Power Bowl recipe contains over 11 different plant-based foods in one meal (including the dressing!)</p><p><br></p><h3>Plant-Based Recipes For Kids</h3><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p><img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHw3fHxidXJnZXJ8ZW58MHx8fHwxNjg3MDg5NTQ1fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"></p><p><br></p><h3>Plant-Based Recipes For Kids</h3><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p><img src="https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHwxN3x8YnVyZ2VyfGVufDB8fHx8MTY4NzA4OTU0NXww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"></p><p><br></p><h3>How Does Fiber Support Gut Health</h3><p>Consuming foods with fiber is important for gut health, bowel regularity and immune health! Did you know that 70% of your immune system is found in the walls of your gut? Eating a variety of plants, around 30 different plant foods per week, has been shown to feed good gut microbes and in turn support your immunity! Prebiotics found in plant foods feed your healthy gut bacteria, known as probiotics. These probiotics release short chain fatty acids (SCFA) into the body, which help regulate the function of immune cells!</p><p>I love that this Power Bowl recipe contains over 11 different plant-based foods in one meal (including the dressing!)</p><p><br></p><h3>Plant-Based Recipes For Kids</h3><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><p>My kids eat the same dinners that we do, however, I’ll offer the dinner in a different way. For example from this meal on a plate I added black beans, potatoes, yellow bell pepper, avocado and then a little salad with the dressing my kids prefer. Both my kids like the ingredients separated versus in a big bowl, so they enjoy a deconstructed version of this power bowl!</p><p><br></p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://youtu.be/Xz3IBzQ8tDM"></iframe><p><br></p>',
                slug: '/entertainment/introducing-original-burger-sets-new-line-video',
              },
              {
                __typename: 'Post',
                title: 'A A bit of bing chow 4th grade teaci',
                uuid: '59a05c1c-9d4f-4b02-b84b-900fae64216f',
                featured_image: {
                  src: 'https://images.unsplash.com/photo-1603232644140-bb47da511b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHw1fHx5dW18ZW58MHx8fHwxNjg3MTMwODE2fDA&ixlib=rb-4.0.3&q=80&w=400',
                },
                content:
                  '<p><em>Intring our favorite, most popular summer recipes. BrRecipe Bingo featuring our favoritemagic into yougo featuring our favoriteng some summer magic into your life this season!</em></p><p><br></p><p><em>﻿</em><img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHwyfHxyZWNpcGV8ZW58MHx8fHwxNjg3MTMwMzY0fDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"></p><p><br></p><h2>Everything You Need For Summer Recipe Bingo</h2><ol><li><a href="https://pinchofyum.com/announcing-summer-recipe-bingo#bingo-card" rel="noopener noreferrer" target="_blank">sleep Your vinego&nbsp;</a><a href="https://pinchofyum.com/wp-content/uploads/Summer-Bingo-Boards.pdf" rel="noopener noreferrer" target="_blank">Card</a></li><li><a href="https://pinchofyum.com/announcing-summer-recipe-bingo#what-is-summer-recipe-bingo" rel="noopener noreferrer" target="_blank">that is rummer Recipe Bingo?</a></li><li><a href="https://pinchofyum.com/announcing-summer-recipe-bingo#recipes-and-prizes" rel="noopener noreferrer" target="_blank">Recipes and Prizes</a></li><li><a href="https://pinchofyum.com/announcing-summer-recipe-bingo#how-to-enter" rel="noopener noreferrer" target="_blank">How to c</a>an</li><li><a href="https://pinchofyum.com/announcing-summer-recipe-bingo#more-faqs" rel="noopener noreferrer" target="_blank">More FAQs</a></li></ol><p><br></p><h2>What Is Summer Recipe Bingo?</h2><p>ate sunsets, early sunrises, fluffy peonies, dogs jumping in lakes, cize, a member of our team wils, and rivers of peach juice dripping down toddler rize, a member of our team will contact yo is a chance to lean into *ahem* THE BEST WEATHER SEASON *ahem* with its life-givrize, a member of our team will contact yners, bonfires, l</p><p>In a word, it’s about JOY!</p><p><br></p><p><img src="https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHwxNXx8eXxlbnwwfHx8fDE2ODcxMzA2NTZ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"></p><p><br></p><p>How it works:</p><p><br></p><p><br></p><p><br></p><p><br></p><ul><li>Pick your favoritewhat youd knock off the items before the end of summer!</li><li>Submit phrize, a member of our team will contact yo win prizes. items, or your favorite row, an</li></ul><p><br></p><h2>What’s On The Summer Recipe Bingo Card?</h2><ul><li><a href="https://pinchofyum.com/cucumber-agua-fresca" rel="noopener noreferrer" target="_blank"><strong>Cu</strong></a><a href="https://pinchofyum.com/extra-good-puppy-chow" rel="noopener noreferrer" target="_blank"><strong>ood Puppy Cho</strong></a><a href="https://pinchofyum.com/cucumber-agua-fresca" rel="noopener noreferrer" target="_blank"><strong>ua Fresca</strong></a></li><li><a href="https://pinchofyum.com/couscous-salad-with-lime-basil-vinaigrette" rel="noopener noreferrer" target="_blank"><strong>uscous Salad wit</strong></a><a href="https://pinchofyum.com/pickled-strawberries" rel="noopener noreferrer" target="_blank"><strong>wberries</strong></a></li><li><a href="https://pinchofyum.com/fluffiest-blueberry-pancakes" rel="noopener noreferrer" target="_blank"><strong>Fluf</strong></a><a href="https://pinchofyum.com/extra-good-puppy-chow" rel="noopener noreferrer" target="_blank"><strong>ood Puppy Cho</strong></a><a href="https://pinchofyum.com/fluffiest-blueberry-pancakes" rel="noopener noreferrer" target="_blank"><strong>ry Pancakes</strong></a></li><li><a href="https://pinchofyum.com/tomato-sauce" rel="noopener noreferrer" target="_blank"><strong>Basic Garlic B</strong></a><a href="https://pinchofyum.com/feel-good-zucchini-muffins" rel="noopener noreferrer" target="_blank"><strong>cchini Muffins</strong></a></li><li><a href="https://pinchofyum.com/tomato-sauce" rel="noopener noreferrer" target="_blank"><strong>Basic Garlic Butter Tomato Sauce</strong></a></li><li><a href="https://pinchofyum.com/miso-crunch-salad" rel="noopener noreferrer" target="_blank"><strong>Miso Crunch Salad</strong></a></li><li><a href="https://pinchofyum.com/feel-good-zucchini-muffins" rel="noopener noreferrer" target="_blank"><strong>Feel-Good</strong></a><a href="https://pinchofyum.com/couscous-salad-with-lime-basil-vinaigrette" rel="noopener noreferrer" target="_blank"><strong>d with Lime Basil Vinaigrette</strong></a></li><li><a href="https://pinchofyum.com/pasta-salad" rel="noopener noreferrer" target="_blank"><strong>Best Easy Pasta Salad</strong></a></li><li><a href="https://pinchofyum.com/smash-burgers-with-house-sauce" rel="noopener noreferrer" target="_blank"><strong> Burgers with House Sauce</strong></a><a href="https://pinchofyum.com/cashew-crunch-salad-with-sesame-dressing" rel="noopener noreferrer" target="_blank"><strong>lad</strong>&nbsp;<strong>with Sesame Dressing</strong></a></li><li><a href="https://pinchofyum.com/beet-and-burrata-salad-with-fried-bread" rel="noopener noreferrer" target="_blank"><strong>Beet and Burrata Salad with Fried Bread</strong></a></li><li><a href="https://pinchofyum.com/lemongrass-chicken-with-rice-and-zucchini" rel="noopener noreferrer" target="_blank"><strong>Lemongrass Chicken with Rice and Zucchini</strong></a></li><li><a href="https://pinchofyum.com/bbq-salmon-mango-salsa" rel="noopener noreferrer" target="_blank"><strong>BBQ Salmon Bowls</strong>&nbsp;<strong>with Mango Avocado Salsa</strong></a></li><li><a href="https://pinchofyum.com/smash-burgers-with-house-sauce" rel="noopener noreferrer" target="_blank"><strong>Smash Burgers with House Sauce</strong></a></li><li><a href="https://pinchofyum.com/lemongrass-chicken-with-rice-and-zucchini" rel="noopener noreferrer" target="_blank"><strong>Lemongrass Chicke</strong></a><a href="https://pinchofyum.com/spicy-shrimp-tacos-with-garlic-cilantro-lime-slaw" rel="noopener noreferrer" target="_blank"><strong> </strong></a><a href="https://pinchofyum.com/chicken-lettuce-wraps-with-lime-drench" rel="noopener noreferrer" target="_blank"><strong>Chicken Lettuce W</strong></a><a href="https://pinchofyum.com/spicy-shrimp-tacos-with-garlic-cilantro-lime-slaw" rel="noopener noreferrer" target="_blank"><strong>law</strong></a></li><li><a href="https://pinchofyum.com/extra-good-puppy-chow" rel="noopener noreferrer" target="_blank"><strong>ood Puppy Cho</strong></a><a href="https://pinchofyum.com/chicken-lettuce-wraps-with-lime-drench" rel="noopener noreferrer" target="_blank"><strong> with Lime Drench</strong></a></li><li><a href="https://pinchofyum.com/extra-good-puppy-chow" rel="noopener noreferrer" target="_blank"><strong>Exood Puppy Cho Chow</strong></a></li><li><a href="https://pinchofyum.com/the-best-easy-peanut-butter-pie" rel="noopener noreferrer" target="_blank"><strong>The Best</strong>&nbsp;<strong>Easy Peanut Butter Pie</strong></a></li><li><a href="https://pinchofyum.com/peach-cobbler" rel="noopener noreferrer" target="_blank"><strong>The Bes</strong></a><a href="https://pinchofyum.com/extra-good-puppy-chow" rel="noopener noreferrer" target="_blank"><strong>ood Puppy Cho</strong></a><a href="https://pinchofyum.com/peach-cobbler" rel="noopener noreferrer" target="_blank"><strong> Cobbler</strong></a></li><li><a href="https://pinchofyum.com/raspberry-crumble-bars" rel="noopener noreferrer" target="_blank"><strong>Ra</strong></a><a href="https://pinchofyum.com/extra-good-puppy-chow" rel="noopener noreferrer" target="_blank"><strong>ood Puppy Cho</strong></a><a href="https://pinchofyum.com/raspberry-crumble-bars" rel="noopener noreferrer" target="_blank"><strong>ble Bars</strong></a></li><li><a href="https://pinchofyum.com/smores-bars" rel="noopener noreferrer" target="_blank"><strong>Best S’mores Bars</strong></a></li></ul><p><br></p><h2>What Are The Prizes?</h2><p>We’ll ch winner will get their choice of a $2bingo winners!</p><p>Each winch winner will get their choice of a $2hoice of a $250 gift card to&nbsp;<strong>Williams Sonoma</strong>,&nbsp;<strong>Amazon</strong>, or&nbsp;<strong>Jeni’s Ice Cream</strong>!</p><p><br></p><h2>How Do I Enter?</h2><p>Chooval, or diagonal row to complete.</p><p>Coch winner will get their choice of a $2cipes/activities, tch winner will get their choice of a $2send them all in&nbsp;<strong>ONE email</strong>&nbsp;to&nbsp;<strong>bingo@pinchofyum.com</strong>.</p><p><strong>Entry Deadlines</strong></p><p>We will be accch winner will get their choice of a $2epting entries from June 14th – July 31st.</p><p><strong>Sub</strong>ch winner will get their choice of a $2<strong>31st at 11:59 pm CST.</strong></p><p><br></p><p><strong>﻿</strong><img src="https://images.unsplash.com/photo-1564894809611-1742fc40ed80?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNTM2MDh8MHwxfHNlYXJjaHwxfHxiZWFufGVufDB8fHx8MTY4NzEzMDc2OHww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"></p><p><br></p><h2>Other Important Details</h2><p><strong>What if I want to make dietary modifications to a recipe?</strong></p><p>Go for it! Just send us a photo of the recipe and let us know about any subs or swaps you made.</p><p><strong>Can I enter multiple bingos?</strong></p><p>Yes! For each additional bingo you get, send us your five images in ONE email to&nbsp;bingo@pinchofyum.com.</p><p><strong>Do I need to live in the U.S. to win?</strong></p><p>Summer Recipe Bingo is open worldwide!</p><p><strong>How will winners be chosen?</strong></p><p>By emailing Winners will be selected at random from bingo entries and our team will verify that your images have made a bingo on the board. We do not choose based on photo quality orges to us, you are entered to win one of the prizes.</p><p>Winners will bce a winner is selected, each indivi bingo entries and our team will verify that your images have made a bingo on the board. We do not choose based on photo quality or any other characteristics of your entry – they are chosen at random!</p><p>Once a winner is selected, each individual will have the option to choose the gift card they’d like to receive (Williams Sonoma, Amazon, or Jeni’s Ice Cream).</p><p><strong>Can I win more than once?</strong></p><p>One prize per wgust 1st through the email address used for your entry.rize, a member of our team will contact y</p><p>If your name is selected for a prize, a member of our team will contact you on August 1st through the email address used for your entry.</p>',
                slug: '/recipe/announcing-summer-recipe-bingo',
              },
            ],
          },
        },
        isSsr: true,
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
        mode: 'view',
        configuration: {
          colors: {
            main: {
              '100': 'neutral.white',
              '200': 'neutral.black',
              '300': 'neutral.700',
              '400': 'neutral.500',
              '500': 'neutral.300',
              '600': 'neutral.200',
            },
          },
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
      },
    },
    {
      name: 'kiamoni-block-20',
      component: KiamoniBlock20,
      props: {
        content: {
          text: {
            title: 'Our Chefs',
          },
          image: {
            src: 'https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/unsplash_rgRbqFweGF0.png',
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
        isSsr: false,
        mode: 'view',
      },
    },
    {
      name: 'kiamoni-block-21',
      component: KiamoniBlock21,
      props: {
        content: {
          text: {
            title: "We're always happy to hear from our guests.",
            subTitle: "We're always happy to hear from our guests",
            description:
              'We will be glad to assist you in any question and encourage you to share your ideas and improvements with us.',
          },
          contentLinks: [
            {
              name: 'To get in touch, call us at',
              links: [
                {
                  text: '+44 123 567 8904',
                  url: '#',
                },
                {
                  text: 'Monday to Friday',
                  url: '#',
                },
                {
                  text: '10am - 6.30pm (EST)',
                  url: '#',
                },
              ],
            },
            {
              name: "We're conveniently located with ample parking available at",
              links: [
                {
                  text: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051',
                  url: '#',
                },
              ],
            },
          ],
          form_uuid: null,
          form: {
            uuid: '2c149824-4595-49b4-b44c-277b568f52a6',
            site_uuid: 'b7a6df60-3fd5-4666-b481-5055608228ad',
            title: 'Contact us form',
            author: 'createaccount@mail.com',
            status: '1',
            questions: [
              {
                uuid: '31618ad1-0957-453c-9f75-570c540191eb',
                question: 'Your name',
                description: null,
                type: 'SHORT_TEXT',
                is_required: true,
                fields: {
                  character_limit: null,
                },
                __typename: 'Question',
              },
              {
                uuid: '17664899-0dc6-47e2-9ac4-829370b8f7e3',
                question: 'Your phone number',
                description: null,
                type: 'PHONE_NUMBER',
                is_required: true,
                fields: {
                  default_country_code: 'US',
                },
                __typename: 'Question',
              },
              {
                uuid: 'a46bbda2-8c12-4a50-b097-79c236566b4a',
                question: 'Your Email',
                description: null,
                type: 'EMAIL_ADDRESS',
                is_required: true,
                fields: [],
                __typename: 'Question',
              },
              {
                uuid: '41a2d1a8-8910-428c-81d3-66fdd66a3662',
                question: 'Send us a message',
                description: null,
                type: 'MULTILINE',
                is_required: true,
                fields: {
                  character_limit: '',
                },
                __typename: 'Question',
              },
              {
                question: 'Select a picture',
                is_required: false,
                fields: {
                  format: '',
                  max_size: '',
                },
                type: 'PHOTO',
                description: null,
                uuid: '1d2ddc58-d321-490d-83cd-7f57278d222b',
                __typename: 'Question',
              },
            ],
            setting: {
              uuid: 'e8f4edf0-99f8-42f9-b5a2-d4675e8cf31b',
              end_date: null,
              allow_multiple_responses: true,
              response_limit: 1000000,
              submission_text: '',
              notification_email: '',
              __typename: 'FormSetting',
            },
            __typename: 'Form',
          },
        },
        ssr_content_fields: ['form'],
        ssr_network_operation: 'GET_FORM_BY_UUID',
        mode: 'view',
        configuration: {
          colors: {
            main: {
              '100': 'neutral.white',
              '200': 'neutral.black',
              '300': 'neutral.700',
              '400': 'neutral.500',
              '500': 'primary.main',
              '600': 'secondary.main',
            },
            input: {
              100: 'neutral.white',
              200: 'neutral.400',
            },
          },
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
      },
    },
    {
      name: 'kiamoni-block-22',
      component: KiamoniBlock22,
      props: {
        content: {
          text: {
            latitude: 6.432557,
            longitude: 3.4712118,
          },
        },
        mode: 'view',
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
        ],
      },
    },
    {
      name: 'kiamoni-block-23',
      component: KiamoniBlock23,
      props: {
        content: {
          text: {
            header: 'Shopping Cart',
            subHeader: 'Order Summary',
            description:
              "If you have questions or problem with any product or order, please contact us and we'll do our best to accommodate your request and confirm your order as soon as possible.",
          },
          site_uuid: '2556ae45-279c-49e0-ba5f-83d3a41fe0c4',
        },
        isSsr: false,
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
        mode: 'view',
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
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
      },
    },
    {
      name: 'kiamoni-block-24',
      component: KiamoniBlock24,
      props: {
        content: {
          menu_uuid: 'c273a3c4-872b-4776-84ca-39202c45d354',
          blog_uuid: 'a99f278c-8e22-40fa-9fb9-0a51fd4c33e0',
        },
        isSsr: false,
        layouts: [
          {
            name: kiamoniBlockLayouts.layout1,
            isSelected: true,
          },
          {
            name: kiamoniBlockLayouts.layout2,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout3,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout4,
            isSelected: false,
          },
          {
            name: kiamoniBlockLayouts.layout5,
            isSelected: false,
          },
        ],
        mode: 'view',
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
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
      },
    },
    {
      name: 'kiamoni-block-25',
      component: KiamoniBlock25,
      props: {
        content: {},
        isSsr: false,
        layouts: [],
        mode: 'view',
        configuration: {
          colors: {
            main: {
              '100': 'neutral.white',
              '200': 'neutral.black',
            },
            button: {},
          },
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
          },
        },
      },
    },
  ];
};
