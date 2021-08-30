export default {
  id: '1',
  users: [
    {
      id: 'u1',
      name: 'Raf',
      imageUri:
        'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png',
    },
    {
      id: 'u2',
      name: 'Kilo',
      imageUri:
        'https://resumator.s3.amazonaws.com/customer_20190618152639_F47TZW85FFKEI1NX/social_icons/20200714100635_600x600.jpg',
    },
  ],
  messages: [
    {
      id: 'm1',
      content: 'How are you ? :)',
      createdAt: '2020-10-10 12:48:00',
      user: {
        id: 'u1',
        name: 'Raf',
      },
    },
    {
      id: 'm2',
      content: 'I am good, good',
      createdAt: '2020-10-03 14:49:00',
      user: {
        id: 'u2',
        name: 'Kilo',
      },
    },
    {
      id: 'm3',
      content: 'What about you?',
      createdAt: '2020-10-03 14:49:40',
      user: {
        id: 'u2',
        name: 'Raf',
      },
    },
    {
      id: 'm4',
      content: 'Good as well, preparing for the stream now.',
      createdAt: '2020-10-03 14:50:00',
      user: {
        id: 'u1',
        name: 'Kilo',
      },
    },
    {
      id: 'm5',
      content: 'How is SpaceX doing?',
      createdAt: '2020-10-03 14:51:00',
      user: {
        id: 'u1',
        name: 'Raf',
      },
    },
    {
      id: 'm6',
      content: 'going to the Moooooon',
      createdAt: '2020-10-03 14:49:00',
      user: {
        id: 'u2',
        name: 'Kilo',
      },
    },
    {
      id: 'm7',
      content: 'btw, SpaceX is interested in your Project',
      createdAt: '2020-10-03 14:53:00',
      user: {
        id: 'u2',
        name: 'Raf',
      },
    },
  ],
};
