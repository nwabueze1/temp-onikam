export default {
  uuid: '6900a55d-cef2-43bd-b56a-6e3a6d5b4f86',
  component: 'KiamoniBlock21',
  config: {
    uuid: '6900a55d-cef2-43bd-b56a-6e3a6d5b4f86',
    content: {
      text: {
        title: "We're always happy to hear from our guests.",
        subTitle: "We're always happy to hear from our guestst",
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
    ssr_content_fields: ['form'],
    ssr_network_operation: 'GET_FORM',
  },
  precedence: 3,
  pages: ['contact'],
};
