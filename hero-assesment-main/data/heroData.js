// Mock CMS data - simulates what you'd receive from a headless CMS
// In a real app, this would come from an API call or GraphQL query

export const heroSections = [
  {
    id: 'hero-1',
    title: 'Welcome to Our Platform',
    description: 'Discover amazing features that will transform your workflow and boost productivity.',
    backgroundImage: {
      src: '/sample-image.png',
      alt: 'Modern workspace with laptop and coffee'
    },
    layout: {
      titlePlacement: 'start center',
      descriptionPlacement: 'start center'
    },
    theme: 'dark'
  },
  {
    id: 'hero-2', 
    title: 'Innovation Meets Design',
    description: 'Experience the perfect blend of cutting-edge technology and beautiful user interface design that puts your users first.',
    backgroundImage: {
      src: '/sample-image.png',
      alt: 'Creative design workspace'
    },
    layout: {
      titlePlacement: 'center end',
      descriptionPlacement: 'center end'
    },
    theme: 'light'
  },
  {
    id: 'hero-3',
    title: 'Scale Your Business',
    description: 'From startup to enterprise, our platform grows with you. Built for teams of all sizes with enterprise-grade security and reliability you can trust.',
    backgroundImage: {
      src: '/sample-image.png',
      alt: 'Business team collaboration'
    },
    layout: {
      titlePlacement: 'end start',
      descriptionPlacement: 'end start'  
    },
    theme: 'dark'
  }
];