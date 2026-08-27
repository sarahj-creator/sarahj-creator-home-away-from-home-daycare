export const siteConfig = {
  name: 'Home Away from Home Daycare',
  tagline: 'A warm place to learn, play, and grow.',
  location: {
    region: 'St. Michael',
    country: 'Barbados',
    address: '[ADD CURRENT VERIFIED ADDRESS]',
    mapEmbedUrl:
      'https://www.google.com/maps?q=St+Michael+Barbados&output=embed',
    coordinates: { lat: 13.1132, lng: -59.5988 },
  },
  contact: {
    phone: '[ADD CURRENT VERIFIED PHONE]',
    email: '[ADD CURRENT VERIFIED EMAIL]',
    whatsapp: '[ADD CURRENT VERIFIED WHATSAPP NUMBER]',
  },
  hours: [
    { day: 'Monday', time: '[ADD VERIFIED HOURS]' },
    { day: 'Tuesday', time: '[ADD VERIFIED HOURS]' },
    { day: 'Wednesday', time: '[ADD VERIFIED HOURS]' },
    { day: 'Thursday', time: '[ADD VERIFIED HOURS]' },
    { day: 'Friday', time: '[ADD VERIFIED HOURS]' },
    { day: 'Saturday', time: '[ADD VERIFIED HOURS]' },
    { day: 'Sunday', time: '[ADD VERIFIED HOURS]' },
  ],
  social: {
    facebook: '',
    instagram: '',
  },
  navLinks: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Day', path: '/our-day' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Meet the Team', path: '/team' },
  ],
  ctaLabel: 'Book a Visit',
  ctaPath: '/enquire',
} as const;

export const heroImages = {
  hero: 'https://images.pexels.com/photos/8535183/pexels-photo-8535183.jpeg?auto=compress&cs=tinysrgb&w=1600',
  intro: 'https://images.pexels.com/photos/8441839/pexels-photo-8441839.jpeg?auto=compress&cs=tinysrgb&w=1200',
  story: 'https://images.pexels.com/photos/8422191/pexels-photo-8422191.jpeg?auto=compress&cs=tinysrgb&w=1200',
  quote: 'https://images.pexels.com/photos/8535173/pexels-photo-8535173.jpeg?auto=compress&cs=tinysrgb&w=1600',
  aboutHero:
    'https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg?auto=compress&cs=tinysrgb&w=1600',
  aboutPhilosophy:
    'https://images.pexels.com/photos/8613108/pexels-photo-8613108.jpeg?auto=compress&cs=tinysrgb&w=1200',
  aboutEnvironment:
    'https://images.pexels.com/photos/8422170/pexels-photo-8422170.jpeg?auto=compress&cs=tinysrgb&w=1200',
  aboutApproach:
    'https://images.pexels.com/photos/8364069/pexels-photo-8364069.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ourDayHero:
    'https://images.pexels.com/photos/8612970/pexels-photo-8612970.jpeg?auto=compress&cs=tinysrgb&w=1600',
  enquireHero:
    'https://images.pexels.com/photos/8422255/pexels-photo-8422255.jpeg?auto=compress&cs=tinysrgb&w=1600',
};

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/8535183/pexels-photo-8535183.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Children playing with blocks and a cardboard house in a cozy classroom', category: 'play' },
  { src: 'https://images.pexels.com/photos/7025567/pexels-photo-7025567.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Three children painting creatively at a wooden table', category: 'creativity' },
  { src: 'https://images.pexels.com/photos/35107666/pexels-photo-35107666.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Group of children playing happily at a vibrant playground', category: 'outdoors' },
  { src: 'https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'A teacher engaging young children with a storybook', category: 'learning' },
  { src: 'https://images.pexels.com/photos/8435758/pexels-photo-8435758.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Two children playing with toys in a sandbox', category: 'play' },
  { src: 'https://images.pexels.com/photos/4393383/pexels-photo-4393383.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Children painting with colourful watercolours around a wooden table', category: 'creativity' },
  { src: 'https://images.pexels.com/photos/8613065/pexels-photo-8613065.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Three children joyfully playing with a hula hoop', category: 'play' },
  { src: 'https://images.pexels.com/photos/8422150/pexels-photo-8422150.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Preschool children and teachers enjoying an interactive learning session', category: 'learning' },
  { src: 'https://images.pexels.com/photos/35107541/pexels-photo-35107541.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Joyful children playing on colourful playground equipment outdoors', category: 'outdoors' },
  { src: 'https://images.pexels.com/photos/8422170/pexels-photo-8422170.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Kids at a preschool table playing with colourful clay', category: 'creativity' },
  { src: 'https://images.pexels.com/photos/18830151/pexels-photo-18830151.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'A cheerful child enjoying playtime outdoors on a bright playground', category: 'outdoors' },
  { src: 'https://images.pexels.com/photos/8535626/pexels-photo-8535626.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Two young girls crafting in a colourful preschool classroom', category: 'creativity' },
  { src: 'https://images.pexels.com/photos/8441836/pexels-photo-8441836.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Two boys engaged with educational toys in a kindergarten classroom', category: 'learning' },
  { src: 'https://images.pexels.com/photos/8612958/pexels-photo-8612958.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Two children laughing and playing in a soft ball pit', category: 'play' },
  { src: 'https://images.pexels.com/photos/11163731/pexels-photo-11163731.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Happy children playing indoors with toys, showcasing joyful interaction', category: 'play' },
  { src: 'https://images.pexels.com/photos/36297699/pexels-photo-36297699.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Two children painting ceramic items outdoors in a natural setting', category: 'outdoors' },
] as const;

export const galleryCategories = [
  'all',
  'play',
  'learning',
  'creativity',
  'outdoors',
  'adventures',
] as const;

export const homeGalleryImages = galleryImages.slice(0, 10);
