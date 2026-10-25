// Collections appear on the Gallery page in this order. A collection only
// shows once at least one artwork belongs to it.
const collections = [
  {
    id: 'earlier',
    name: 'Earlier Works',
    description: 'Paintings in an earlier style that is no longer being made. Still available to buy.'
  }
];

// Each artwork has an `images` array. images[0] is the main photo shown on the
// gallery card. Inside the artwork page, all images appear in a slider.
// `collection` must match one of the collection ids above.
const artworks = [
  {
    id: 'haybails',
    title: 'Haybails',
    collection: 'earlier',
    medium: 'Oil on canvas',
    size: '[size]',
    year: '2025',
    price: '£[price]',
    description: 'A short description of Haybails goes here — update this text with details about the piece, what inspired it, the location, etc.',
    images: [
      'photos/Haybails main.jpeg',
      'photos/Haybails closeup.JPG',
      'photos/Haybails easel.JPG',
      'photos/Haybails lxw.jpeg'
    ],
    featured: true
  },
  {
    id: 'lighthouse',
    title: 'Lighthouse',
    collection: 'earlier',
    medium: 'Oil on canvas',
    size: '[size]',
    year: '2025',
    price: '£[price]',
    description: 'A short description of Lighthouse goes here — update with details and inspiration behind the piece.',
    images: [
      'photos/Lighthouse main.jpeg',
      'photos/Lighthouse closeup.JPG',
      'photos/Lighthouse easel.JPG',
      'photos/Lighthouse lxw.jpeg'
    ],
    featured: true
  },
  {
    id: 'moorlands',
    title: 'Moorlands',
    collection: 'earlier',
    medium: 'Oil on canvas',
    size: '[size]',
    year: '2025',
    price: '£[price]',
    description: 'A short description of Moorlands goes here — update with details and inspiration behind the piece.',
    images: [
      'photos/Moorland main.jpeg',
      'photos/Moorlands closeup.JPG',
      'photos/Moorlands easel.JPG',
      'photos/Moorlands lxw.jpeg'
    ],
    featured: true
  },
  {
    id: 'sandreed',
    title: 'Sandreed',
    collection: 'earlier',
    medium: 'Oil on canvas',
    size: '[size]',
    year: '2025',
    price: '£[price]',
    description: 'A short description of Sandreed goes here — update with details and inspiration behind the piece.',
    images: [
      'photos/Sandreed main.jpeg',
      'photos/Sandreed closeup.JPG',
      'photos/Sandreed easel.JPG',
      'photos/Sandreed lxw.jpeg'
    ],
    featured: false
  },
  {
    id: 'skyhill',
    title: 'Skyhill',
    collection: 'earlier',
    medium: 'Oil on canvas',
    size: '[size]',
    year: '2025',
    price: '£[price]',
    description: 'A short description of Skyhill goes here — update with details and inspiration behind the piece.',
    images: [
      'photos/Skyhill main.JPG',
      'photos/Skyhill closeup.JPG',
      'photos/Skyhill easel.JPG',
      'photos/Skyhill lxw.JPG'
    ],
    featured: false
  }
];

const CONTACT_EMAIL = 'your-email@example.com';
