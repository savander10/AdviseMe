import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Profile',
    icon: 'nb-person',
    children: [
      {
        title: 'Profile View',
        link: '/pages/profile/profile-view',
      },
      {
        title: 'Edit Profile',
        link: '/pages/profile/edit-profile',
      },
    ],

  },
  {
    title: 'Classes',
    icon: 'nb-list',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/classes/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/classes/ckeditor',
      },
    ],
  },
];
