import { Project, Service, Testimonial, ProcessStep } from '../types';

export const HERO_IMAGE = 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785896302/Untitled_design__10_-removebg-preview_zhmqs4.png';

export const PROJECTS: Project[] = [
  {
    id: 'fashion-ecommerce',
    title: 'Fashion Ecommerce Website',
    category: 'SHOPIFY • ECOMMERCE',
    categoryTag: 'SHOPIFY',
    description: 'A modern fashion shopping experience designed to improve product discovery and conversions.',
    desktopImage: 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785854042/F_screen_jp8t3t.png',
    mobileImage: 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785854041/new_3_screen_r2xsfn.png',
    metrics: [
      { label: 'Conversion Increase', value: '+142%' },
      { label: 'Avg Order Value', value: '+$38' },
      { label: 'Page Speed Score', value: '98/100' },
    ],
    client: 'AURA Luxury Apparel',
    year: '2025',
    liveUrl: 'https://shopify.com',
    fullStory: 'AURA required a complete custom Shopify store redesign to transition from a generic template to a high-fashion, immersive shopping destination. By optimizing product page hierarchy, implementing instant slide-out carts, and adding custom lookbook shoppable hotspots, we drove sales through the roof.',
    keyFeatures: [
      'Custom Shopify Liquid theme architecture',
      'Shoppable video & image lookbook hotspots',
      'One-click sticky add-to-cart drawer',
      'Custom size guide modal with unit converter',
      'Klaviyo email capture popup integration'
    ],
    toolsUsed: ['Shopify', 'Liquid', 'Tailwind CSS', 'Figma', 'Klaviyo', 'Alpine.js']
  },
  {
    id: 'beauty-skincare',
    title: 'Beauty & Skincare Website',
    category: 'SHOPIFY • BEAUTY',
    categoryTag: 'SHOPIFY',
    description: 'A premium skincare ecommerce experience focused on trust, product education, and repeat purchases.',
    desktopImage: 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785854043/bon_skincare_ea7fns.png',
    mobileImage: 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785937270/lune_lj2y0y.png',
    metrics: [
      { label: 'Subscription Rate', value: '+210%' },
      { label: 'Mobile Sales Share', value: '78%' },
      { label: 'Bounce Rate', value: '-34%' },
    ],
    client: 'LUMI Botanicals',
    year: '2025',
    liveUrl: 'https://shopify.com',
    fullStory: 'LUMI Botanicals suffered from low repeat orders and customer confusion regarding skincare routines. We engineered a step-by-step custom Routine Finder Quiz that recommended targeted skincare bundles, boosting average order value and recurring monthly subscription signups.',
    keyFeatures: [
      'Interactive 4-step Routine Quiz finder',
      'Recharge Subscription checkout integration',
      'Dermatologist trust badge & review sliders',
      'Ingredient spotlight interactive drawer',
      'Ultra-fast mobile image optimization'
    ],
    toolsUsed: ['Shopify Plus', 'Recharge API', 'JavaScript ES6', 'Figma', 'Judge.me']
  },
  {
    id: 'interior-design',
    title: 'Interior Design Website',
    category: 'WORDPRESS • SERVICE BUSINESS',
    categoryTag: 'WORDPRESS',
    description: 'A sophisticated website designed to showcase projects and generate qualified enquiries.',
    desktopImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
    metrics: [
      { label: 'Inquiry Rate', value: '+185%' },
      { label: 'Qualified Leads', value: '4.8x' },
      { label: 'Avg Session Time', value: '3m 42s' },
    ],
    client: 'Atelier Maison Studio',
    year: '2024',
    liveUrl: 'https://wordpress.org',
    fullStory: 'Atelier Maison needed an editorial, high-end portfolio website to capture elite residential projects. We created a bespoke WordPress & Elementor Pro design featuring interactive before/after sliders, full-bleed gallery views, and an automated consultation booking funnel.',
    keyFeatures: [
      'Interactive before/after transformation slider',
      'Filtered project gallery by room & style',
      'Typeform & Calendly consultation funnel',
      'Lightweight SVG vector animations',
      'Full Schema.org Local SEO implementation'
    ],
    toolsUsed: ['WordPress', 'Elementor Pro', 'ACF Pro', 'CSS3/GSAP', 'Calendly']
  },
  {
    id: 'fitness-gym',
    title: 'Fitness & Gym Website',
    category: 'WORDPRESS • FITNESS',
    categoryTag: 'WORDPRESS',
    description: 'A high-energy website with membership information, class schedules, and lead-generation features.',
    desktopImage: 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785854050/chat_gpt.jpg_1_badfxb.jpg',
    mobileImage: 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785854050/chat_gpt.jpg_1_badfxb.jpg',
    metrics: [
      { label: 'Free Pass Claims', value: '450+/mo' },
      { label: 'Class Booking Rate', value: '+88%' },
      { label: 'Google Ranking', value: '#1 Local' },
    ],
    client: 'APEX Performance Gym',
    year: '2024',
    liveUrl: 'https://wordpress.org',
    fullStory: 'APEX Gym wanted to dominate their local market and streamline trial membership signups. We created a high-impact, high-contrast website featuring live class schedule filters, trainer bio spotlight popups, and an automated SMS trial pass claim mechanism.',
    keyFeatures: [
      'Live filterable weekly class timetable',
      'Free 3-Day Trial Pass instant claim popup',
      'Interactive trainer roster & bio modals',
      'Mindbody Gym Management API integration',
      'High-contrast dark mode energetic UI'
    ],
    toolsUsed: ['WordPress', 'JavaScript', 'Mindbody API', 'Tailwind', 'Yoast SEO']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'shopify-design',
    number: '01',
    title: 'SHOPIFY WEBSITE DESIGN',
    shortDescription: 'High-converting Shopify stores designed to improve trust, showcase products, and increase sales.',
    fullDescription: 'We craft custom, bespoke Shopify storefronts tailored to your brand identity and optimized for maximum conversion. From product page layouts to custom checkout flows, every detail is engineered to drive revenue.',
    benefits: [
      'Custom Shopify Liquid development (no slow bulky apps)',
      'Mobile-first shopping experience optimized for 80%+ smartphone traffic',
      'Optimized product galleries with video & 3D model support',
      'High-converting upsell & cross-sell cart drawer features'
    ],
    deliverables: [
      'Complete Shopify Store Design & Setup',
      'Custom Homepage, Collection, & Product Pages',
      'Cart Drawer & One-Click Upsells',
      'Payment Gateway & Shipping Rate Config',
      'Email Marketing (Klaviyo/Omnisend) Integration',
      'Post-launch 30-day technical support'
    ],
    turnaroundTime: '2 - 3 Weeks',
    idealFor: 'D2C Brands, Fashion, Beauty, Electronics & General Ecommerce Businesses'
  },
  {
    id: 'ecommerce-design',
    number: '02',
    title: 'ECOMMERCE WEBSITE DESIGN',
    shortDescription: 'Strategic online shopping experiences built around customer journeys and conversion.',
    fullDescription: 'Comprehensive ecommerce engineering that spans user research, wireframing, high-fidelity UI/UX design, and seamless tech integration. Built to scale as your catalog and order volume expands.',
    benefits: [
      'Frictionless checkout paths reducing cart abandonment',
      'Smart search, instant filtering, and recommendation engines',
      'Trust badge placements, social proof sliders, and customer reviews',
      'Fast page load speeds under 1.5 seconds'
    ],
    deliverables: [
      'Customer Journey Mapping & Wireframes',
      'Custom UI/UX Design System in Figma',
      'Inventory & Product Catalog Architecture',
      'Custom Product Bundling & Quiz Finders',
      'Analytics & Conversion Funnel Tracking'
    ],
    turnaroundTime: '3 - 4 Weeks',
    idealFor: 'Growing brands needing custom shopping functionality and high scalability'
  },
  {
    id: 'wordpress-design',
    number: '03',
    title: 'WORDPRESS WEBSITE DESIGN',
    shortDescription: 'Professional, responsive, and easy-to-manage websites for service-based businesses.',
    fullDescription: 'Clean, modern, and lightning-fast WordPress websites built with intuitive page builders (Elementor Pro / Gutenberg) so you can edit your content effortlessly without technical headaches.',
    benefits: [
      '100% custom design reflecting your brand prestige',
      'Easy-to-use CMS dashboard for simple text & image edits',
      'SEO-friendly clean code structure for top search rankings',
      'Integrated lead capture forms and automated booking tools'
    ],
    deliverables: [
      'Custom WordPress Theme Development',
      'Responsive Page Layouts (Home, About, Services, Contact, Blog)',
      'Lead Generation & Inquiry Forms',
      'Security & Speed Optimization (Caching & CDN)',
      'Video Walkthrough Client Training'
    ],
    turnaroundTime: '2 - 3 Weeks',
    idealFor: 'Consultants, Agencies, Interior Designers, Real Estate, Clinics & Service Providers'
  },
  {
    id: 'redesign-optimization',
    number: '04',
    title: 'WEBSITE REDESIGN & OPTIMIZATION',
    shortDescription: 'Transform outdated websites into modern, fast, user-friendly, and conversion-focused experiences.',
    fullDescription: 'Is your current website losing potential clients due to slow speeds, outdated visuals, or poor mobile responsiveness? We revitalize your digital presence with a modern, high-converting makeover.',
    benefits: [
      'Immediate visual upgrade that impresses potential clients',
      'Drastic speed improvement (Score 90+ on Google PageSpeed)',
      'UX restructuring to eliminate visitor drop-off points',
      'Mobile optimization ensuring seamless viewing across all screen sizes'
    ],
    deliverables: [
      'Comprehensive Website Audit & Conversion Review',
      'Complete Visual & Structural Overhaul',
      'Speed & Performance Optimization Pass',
      'SEO Preservation & 301 Redirect Mapping',
      'A/B Conversion Testing Strategy'
    ],
    turnaroundTime: '1 - 2 Weeks',
    idealFor: 'Businesses with existing websites looking for higher conversion rates and a modern image'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Marcus Vance',
    clientRole: 'Founder & CEO',
    company: 'AURA Apparel',
    avatar: 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785967835/profile_2_f7xluw.png',
    rating: 5,
    quote: 'Solomon transformed our website into a professional and easy-to-use experience. The new design improved how we present our services and made it easier for customers to contact us. Our conversion rate jumped over 140% in month one!',
    metricHighlight: '+142% Sales Conversion'
  },
  {
    id: 't2',
    clientName: 'Elena Rostova',
    clientRole: 'Marketing Director',
    company: 'LUMI Botanicals',
    avatar: 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785967836/prolife_zu0cap.png',
    rating: 5,
    quote: 'Working with Solomon was the best decision for our skincare launch. He created an intuitive skincare finder quiz that increased our average order value instantly. Fast, communicative, and truly a master at Shopify.',
    metricHighlight: '+210% Subscriptions'
  },
  {
    id: 't3',
    clientName: 'Julian Thorne',
    clientRole: 'Principal Architect',
    company: 'Atelier Maison Studio',
    avatar: 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785967835/profile_rev_u9epms.jpg',
    rating: 5,
    quote: 'Our previous WordPress site felt cluttered and generic. Solomon delivered a masterpiece—an ultra-clean, magazine-style layout that captures our luxury interior projects. Enquiries have been non-stop since launch.',
    metricHighlight: '4.8x Lead Growth'
  },
  {
    id: 't4',
    clientName: 'David Kincaid',
    clientRole: 'Head of Operations',
    company: 'APEX Performance',
    avatar: 'https://res.cloudinary.com/akfcvfrw/image/upload/v1785967837/profile_3_ckon9a.png',
    rating: 5,
    quote: 'Solomon understands the psychology behind conversion design. He rebuilt our fitness center site in 2 weeks, and our trial pass signups quadrupled almost overnight. I cannot recommend him enough!',
    metricHighlight: '450+ Monthly Leads'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'DISCOVER',
    description: 'We discuss your business, audience, goals, challenges, and project requirements.',
    details: [
      'Comprehensive discovery intake & goal alignment',
      'Competitor audit & conversion gap analysis',
      'Target customer demographic & UX mapping'
    ]
  },
  {
    stepNumber: '02',
    title: 'STRATEGIZE',
    description: 'I create the website structure, user journey, and conversion strategy.',
    details: [
      'Information architecture & sitemap design',
      'Low-fidelity UX wireframes for key pages',
      'Conversion call-to-action strategy positioning'
    ]
  },
  {
    stepNumber: '03',
    title: 'DESIGN & BUILD',
    description: 'I design and develop a polished, responsive website.',
    details: [
      'High-fidelity UI mockup design in Figma',
      'Pixel-perfect responsive coding (Shopify/WordPress)',
      'Speed optimization & interactive animations'
    ]
  },
  {
    stepNumber: '04',
    title: 'LAUNCH & GROW',
    description: 'We test, launch, and prepare your website for growth.',
    details: [
      'Cross-browser & multi-device QA testing',
      'Domain migration & live deployment',
      '1-on-1 video training & ongoing technical support'
    ]
  }
];

export const TOOLS_MARQUEE = [
  'SHOPIFY',
  'WORDPRESS',
  'ELEMENTOR',
  'FIGMA',
  'WEBFLOW',
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'GOOGLE ANALYTICS',
  'SEO',
  'LIQUID',
  'KLAVIYO',
  'TAILWIND CSS',
  'GSAP'
];

export const VALUE_BENEFITS = [
  {
    number: '01',
    title: 'BUILD TRUST',
    description: 'Create a professional first impression that establishes immediate authority and credibility in your market.'
  },
  {
    number: '02',
    title: 'IMPROVE USER EXPERIENCE',
    description: 'Make it easier for visitors to find what they need with intuitive navigation, fast speeds, and clear layouts.'
  },
  {
    number: '03',
    title: 'INCREASE CONVERSIONS',
    description: 'Guide visitors seamlessly toward meaningful actions—whether making a purchase or booking a consultation.'
  },
  {
    number: '04',
    title: 'SUPPORT BUSINESS GROWTH',
    description: 'Create a scalable digital foundation that adapts as your product catalog, service offerings, and traffic grow.'
  }
];
