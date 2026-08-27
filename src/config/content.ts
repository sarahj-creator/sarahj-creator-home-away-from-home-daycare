export const whyChooseUs = [
  {
    title: 'A Home Away from Home',
    description:
      'A warm and comfortable environment designed to help children feel safe, relaxed, and cared for.',
  },
  {
    title: 'Small & Personal',
    description:
      'A more intimate setting allows us to build meaningful relationships with children and their families.',
  },
  {
    title: 'Learn Through Play',
    description:
      'We encourage creativity, exploration, and hands-on experiences that help children discover the world around them.',
  },
  {
    title: 'Room to Grow',
    description:
      'Every child develops differently. We provide guidance, encouragement, and space for children to progress with confidence.',
  },
] as const;

export const dayPreview = [
  {
    title: 'Arrival & Settling In',
    description: 'A gentle start to the day.',
  },
  {
    title: 'Learning & Discovery',
    description:
      'Activities designed around curiosity, creativity, and development.',
  },
  {
    title: 'Play & Exploration',
    description: 'Time to move, imagine, create, and connect.',
  },
  {
    title: 'Rest & Reset',
    description: 'Quiet moments when children can recharge.',
  },
  {
    title: 'More Adventures',
    description:
      'Every day brings new opportunities to discover something new.',
  },
] as const;

export const services = [
  {
    title: 'Daycare',
    description:
      'A nurturing environment where children can learn, play, and grow.',
  },
  {
    title: 'Babysitting',
    description:
      'Flexible childcare support for those occasions when parents need a helping hand.',
  },
  {
    title: 'Field Trips & Experiences',
    description:
      'Fun and educational adventures that take learning beyond the everyday environment.',
  },
] as const;

export const fullDaySchedule = [
  {
    title: 'Welcome & Settle In',
    time: '[EDITABLE TIME]',
    description:
      'Children arrive and settle in with a warm welcome. A gentle transition from home to daycare.',
  },
  {
    title: 'Play & Exploration',
    time: '[EDITABLE TIME]',
    description:
      'Free play and guided exploration where children choose activities that spark their curiosity.',
  },
  {
    title: 'Creative Learning',
    time: '[EDITABLE TIME]',
    description:
      'Hands-on activities designed around creativity, discovery, and age-appropriate development.',
  },
  {
    title: 'Outdoor Time',
    time: '[EDITABLE TIME]',
    description:
      'Fresh air and movement in our safe outdoor space — running, climbing, and exploring nature.',
  },
  {
    title: 'Meals / Snacks',
    time: '[EDITABLE TIME]',
    description:
      'A social, relaxed time for children to enjoy healthy food together.',
  },
  {
    title: 'Rest & Quiet Time',
    time: '[EDITABLE TIME]',
    description:
      'Quiet moments when children can rest, recharge, or enjoy calm activities.',
  },
  {
    title: 'Activities & Discovery',
    time: '[EDITABLE TIME]',
    description:
      'Afternoon activities, stories, and new discoveries before the day winds down.',
  },
] as const;

export const team = [
  {
    name: 'Ellen Goddard-Lynch',
    role: 'Founder',
    bio: 'A mother and the founder of Home Away from Home Daycare. Ellen has a long-standing passion for caring for children. She studied Early Childhood Education at Erdiston College and brings years of experience working with children. Her passion for helping children feel comfortable, supported, and confident is what led her to create Home Away from Home — a place where every child is genuinely known and cared for.',
    portrait: 'https://images.pexels.com/photos/8613108/pexels-photo-8613108.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Zoe Lynch',
    role: 'Co-Founder',
    bio: 'Zoe grew up watching her mother care for children and developed her own passion for working with them. She studied Child and Youth Worker training in Canada and gained experience in schools, childcare services, and working with families. Zoe returned to Barbados to continue building her experience in childcare and joined her mother in creating Home Away from Home — a family-built daycare where children feel safe, supported, and encouraged to be themselves.',
    portrait: 'https://images.pexels.com/photos/8613091/pexels-photo-8613091.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
] as const;

export const enquiryTypes = [
  { value: 'daycare', label: 'Daycare' },
  { value: 'babysitting', label: 'Babysitting' },
  { value: 'booking_a_visit', label: 'Booking a Visit' },
  { value: 'general_enquiry', label: 'General Enquiry' },
] as const;

export const contactMethods = [
  { value: 'phone', label: 'Phone' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'email', label: 'Email' },
] as const;
