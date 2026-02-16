import { CloudRain, Droplets, PaintBucket, Sparkles } from 'lucide-react'

export const business = {
  name: '704 Pressure Washing Services',
  phoneDisplay: '(704) 651-6329',
  phoneHref: '7046516329',
  address: '303 Summermore Dr, Charlotte, NC 28270',
  hours: 'Monday - Sunday, 9:00 AM - 9:00 PM',
  rating: '5.0',
  reviewCount: '86',
  years: '5+',
  reviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJ6x_X-XjFQwgRaVFtSgZ7Www',
  mapsUrl: 'https://maps.app.goo.gl/oCV4sjnE2osYvFN57',
}

export const areas = [
  'Charlotte, NC',
  'Matthews, NC',
  'Huntersville, NC',
  'Indian Trail, NC',
  'Weddington, NC',
  'Mint Hill, NC',
  'Lake Norman, NC',
  'Concord, NC',
  'Pineville, NC',
  'Gastonia, NC',
  'Lake Wylie, SC',
  'Fort Mill, SC',
]

export const services = [
  {
    slug: 'pressure-washing',
    icon: Droplets,
    title: 'Pressure Washing',
    bestFor: 'Best for driveways, sidewalks, patios',
    short: 'Restore hard surfaces like driveways, sidewalks, and patios with a deep exterior clean.',
    hero: 'Dependable pressure washing that restores curb appeal and removes years of buildup.',
    details: [
      'Surface-specific pressure settings for concrete, pavers, and stone',
      'Oil, grime, algae, and staining removal for high-traffic areas',
      'Great for driveways, sidewalks, pool decks, and retaining walls',
    ],
  },
  {
    slug: 'soft-washing',
    icon: CloudRain,
    title: 'Soft Washing',
    bestFor: 'Best for siding, stucco, painted exteriors',
    short: 'Low-pressure cleaning designed for delicate surfaces like siding, stucco, and roofing.',
    hero: 'Protect your home with soft washing designed for delicate materials and long-term results.',
    details: [
      'Low-pressure application with appropriate detergents and dwell time',
      'Safe for vinyl, painted surfaces, stucco, and roof exteriors',
      'Targets algae, mildew, and organic growth at the source',
    ],
  },
  {
    slug: 'window-cleaning',
    icon: Sparkles,
    title: 'Pure Water Window Cleaning',
    bestFor: 'Best for streak-free exterior glass',
    short: 'Streak-free, chemical-free window cleaning for residential and commercial properties.',
    hero: 'Pure water technology delivers clean, clear windows without soap residue or streaking.',
    details: [
      'Deionized water-fed pole cleaning for exterior glass',
      'Spot-free finish that dries clean without chemicals',
      'Works for residential and multi-unit commercial exteriors',
    ],
  },
  {
    slug: 'gutter-brightening',
    icon: PaintBucket,
    title: 'Gutter Brightening',
    bestFor: 'Best for oxidation and tiger striping',
    short: 'Remove oxidation and tiger striping from gutter exteriors to refresh your home facade.',
    hero: 'Bring back bright, clean gutter exteriors with targeted oxidation and streak treatment.',
    details: [
      'Specialized process for black streaking and oxidation stains',
      'Improves the visual line of your roof and exterior trim',
      'Ideal as part of whole-home curb appeal refresh',
    ],
  },
]

export const galleryProjects = [
  {
    title: 'Driveway and Walkway Revival',
    location: 'Matthews, NC',
    service: 'Pressure Washing',
    result: 'Lifted deep grime and restored original concrete color for stronger first impression.',
    before: '/logo.png',
    after: '/logo.png',
  },
  {
    title: 'Full Home Soft Wash',
    location: 'Indian Trail, NC',
    service: 'Soft Washing',
    result: 'Removed algae and discoloration across siding while protecting paint finish.',
    before: '/logo.png',
    after: '/logo.png',
  },
  {
    title: 'Gutters and Exterior Glass',
    location: 'Huntersville, NC',
    service: 'Gutter Brightening + Window Cleaning',
    result: 'Cleaned gutter striping and delivered spot-free glass for a full exterior refresh.',
    before: '/logo.png',
    after: '/logo.png',
  },
]

export const locationPosts = [
  {
    slug: 'matthews-pressure-washing',
    city: 'Matthews, NC',
    title: 'Matthews Pressure Washing: Restore Exterior Surfaces Without Guesswork',
    focus: 'Pressure Washing',
    intro:
      'Homes in Matthews see heavy pollen, humidity, and seasonal debris. A proper pressure washing process protects surfaces and dramatically improves curb appeal.',
    points: [
      'We set pressure by surface type to avoid etching and damage.',
      'Driveways and sidewalks benefit from routine deep cleaning before staining sets.',
      'Pairing pressure washing with soft washing provides full-home consistency.',
    ],
  },
  {
    slug: 'huntersville-gutter-brightening',
    city: 'Huntersville, NC',
    title: 'Huntersville Gutter Brightening: Remove Tiger Stripes and Oxidation',
    focus: 'Gutter Brightening',
    intro:
      'Gutter exteriors in Huntersville commonly collect oxidation streaks that regular washing will not remove. Brightening restores a cleaner finish.',
    points: [
      'Oxidation and runoff lines require targeted chemistry and dwell time.',
      'Bright gutters improve roofline aesthetics and perceived property upkeep.',
      'Bundling with window cleaning creates a stronger exterior finish.',
    ],
  },
  {
    slug: 'concord-window-cleaning',
    city: 'Concord, NC',
    title: 'Concord Pure Water Window Cleaning for Streak-Free Results',
    focus: 'Pure Water Window Cleaning',
    intro:
      'Pure water window cleaning in Concord helps eliminate residue and streaks while improving natural light and visibility.',
    points: [
      'Deionized water rinses clean and dries without spotting.',
      'Excellent for second-story exterior glass and hard-to-reach windows.',
      'Ideal add-on with siding or gutter services for complete curb appeal.',
    ],
  },
]
