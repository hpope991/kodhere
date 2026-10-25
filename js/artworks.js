// Collections appear on the Gallery page in this order. A collection only
// shows once at least one artwork belongs to it.
const collections = [
  {
    id: 'new',
    name: 'New',
    description: ''
  },
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
    id: 'new-castletown',
    title: 'Castletown',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/castletown-main.JPG',
      'photos/new/castletown-easel.JPG'
    ],
    featured: true
  },
  {
    id: 'new-haybails1',
    title: 'Haybails 1',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/haybails1-main.JPG',
      'photos/new/haybails1-easel.JPG'
    ],
    featured: false
  },
  {
    id: 'new-haybails2',
    title: 'Haybails 2',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/haybails2-main.JPG',
      'photos/new/haybails2-easel.JPG'
    ],
    featured: true
  },
  {
    id: 'new-haybails3',
    title: 'Haybails 3',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/haybails3-easel.JPG'
    ],
    featured: false
  },
  {
    id: 'new-lighthouse',
    title: 'Lighthouse',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/lighthouse-main.JPG'
    ],
    featured: false
  },
  {
    id: 'new-northernplains',
    title: 'Northern Plains',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/northernplains-easel.JPG'
    ],
    featured: false
  },
  {
    id: 'new-peelharbour',
    title: 'Peel Harbour',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/peelharbour-main.JPG'
    ],
    featured: true
  },
  {
    id: 'new-purpleskies',
    title: 'Purple Skies',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/purpleskies-easel.JPG'
    ],
    featured: false
  },
  {
    id: 'new-sandreeds',
    title: 'Sand Reeds',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/sandreeds-main.JPG',
      'photos/new/sandreeds-easel.JPG'
    ],
    featured: false
  },
  {
    id: 'new-sandreeds2',
    title: 'Sand Reeds 2',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/sandreeds2-easel.JPG'
    ],
    featured: false
  },
  {
    id: 'new-skyhill',
    title: 'Skyhill',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/skyhill-main.JPG',
      'photos/new/skyhill-easel.JPG'
    ],
    featured: false
  },
  {
    id: 'new-sunset-orange',
    title: 'Sunset Orange',
    collection: 'new',
    medium: '[medium]',
    size: '[size]',
    year: '2026',
    price: '£[price]',
    description: 'A short description of this piece goes here.',
    images: [
      'photos/new/sunset-orange-main.JPG',
      'photos/new/sunset-orange-easel.JPG'
    ],
    featured: true
  },
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
    featured: false
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
    featured: false
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
    featured: false
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
