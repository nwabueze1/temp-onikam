export default {
  uuid: '6798e086-c29d-4d2b-815f-5d82bc4c496e',
  component: 'KiamoniBlock3',
  config: {
    uuid: '6798e086-c29d-4d2b-815f-5d82bc4c496e',
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
    ssr_network_operation: 'GET_FORM',
    ssr_content_fields: ['form'],
  },
  precedence: 4,
  pages: ['*'],
};
