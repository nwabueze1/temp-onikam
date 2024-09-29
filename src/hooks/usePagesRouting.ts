import { KiamoniPageProps } from '../types';

export const useGetKiamoniPages = () => {
  return (): KiamoniPageProps[] => [
    {
      name: 'home',
      pages: [
        'kiamoni-block-1',
        'kiamoni-block-5',
        'kiamoni-block-6',
        'kiamoni-block-4',
        'kiamoni-block-7',
        'kiamoni-block-11',
        'kiamoni-block-10',
        'kiamoni-block-12',
        'kiamoni-block-8',
        'kiamoni-block-2',
        'kiamoni-block-3',
      ],
    },

    {
      name: 'menu',
      pages: [
        'kiamoni-block-1',
        'kiamoni-block-11',
        'kiamoni-block-9',
        'kiamoni-block-3',
      ],
    },

    {
      name: 'product',
      pages: ['kiamoni-block-1', 'kiamoni-block-15', 'kiamoni-block-3'],
    },

    {
      name: 'cart',
      pages: ['kiamoni-block-1', 'kiamoni-block-23', 'kiamoni-block-3'],
    },

    {
      name: 'about',
      pages: [
        'kiamoni-block-1',
        'kiamoni-block-16',
        'kiamoni-block-14',
        'kiamoni-block-20',
        'kiamoni-block-3',
      ],
    },

    {
      name: 'contact',
      pages: [
        'kiamoni-block-1',
        'kiamoni-block-13',
        'kiamoni-block-22',
        'kiamoni-block-21',
        'kiamoni-block-3',
      ],
    },

    {
      name: 'blog',
      pages: [
        'kiamoni-block-1',
        'kiamoni-block-13',
        'kiamoni-block-17',
        'kiamoni-block-3',
      ],
    },

    {
      name: 'blogContent',
      pages: [
        'kiamoni-block-1',
        'kiamoni-block-13',
        'kiamoni-block-18',
        'kiamoni-block-3',
      ],
    },

    {
      name: 'search',
      pages: ['kiamoni-block-1', 'kiamoni-block-24', 'kiamoni-block-3'],
    },
  ];
};
