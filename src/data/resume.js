// Central content source for the portfolio.
// Edit values here to update the site. No component changes needed.

export const profile = {
  name: 'Hetal Dawda',
  title: 'Software Engineer',
  tagline: 'Full-stack engineer shipping React Native consumer apps',
  email: 'hetalbdawda@gmail.com',
  phone: '(416) 854-2165',
  location: 'Toronto, ON',
  // TODO: replace the "#" placeholders with your real profile URLs.
  links: {
    github: 'https://github.com/hetalbdawda',
    linkedin: 'https://www.linkedin.com/in/hetal-dawda-110b16177',
    devpost: 'https://devpost.com/hetalbdawda',
  },
}

export const skills = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS', 'Java', 'C++'],
  },
  {
    category: 'Mobile & Front-end',
    items: [
      'React Native',
      'Expo',
      'React',
      'React Navigation',
      'Redux',
      'RTK Query',
      'Storybook',
      'Jest',
      'React Native Testing Library',
      'Maestro',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Git',
      'Figma',
      'Firebase',
      'OpenCV',
      'Bash',
      'Optimizely',
      'Braze',
      'DataDog',
      'Sentry',
    ],
  },
  {
    category: 'Electrical & Mechanical',
    items: [
      'SolidWorks',
      '3D printing',
      'Machinery',
      'Oscilloscopes',
      'Multimeters',
      'Soldering',
      'PCB',
    ],
  },
]

export const experience = [
  {
    role: 'Front-End Software Engineer',
    company: 'Vivid Seats Ltd.',
    location: 'Toronto, ON',
    period: 'May – Sept 2022, July 2023 – Present',
    highlights: [
      'Championed the transition from native development to a modern React Native codebase powering over $1 billion in annual gross order value (GOV) across iOS and Android, aligning the initiative with C-suite and stakeholder strategy to enable a company-wide migration without business disruption.',
      'Achieved feature parity with the legacy native apps on an accelerated timeline, ensuring a seamless transition for millions of customers.',
      'Architected a scalable cross-platform React Native architecture and a Node.js/TypeScript backend-for-frontend (BFF) layer that unified multiple internal microservices behind a single mobile-optimized API.',
      'Developed core mobile UI using React Native (Expo), TypeScript/JavaScript, React Navigation, and Redux for flows including Shop Navigation, Ticket Details, Onboarding, Production, and Account Profile.',
      'Partnered with UX to launch an accessible React Native design system with animations and micro-interactions, contributing 50+ reusable components and Storybook stories that accelerated development cycles and ensured consistent, engaging experiences across iOS and Android.',
      'Applied domain-driven design with RTK Query for API and server state; implemented deep linking and Braze-powered push notifications aligned with lifecycle and campaign needs.',
      'Integrated MLB barcode ticketing by wrapping native iOS and Android SDKs into React Native through custom Expo modules; delivered working demos and secured rollout approval from MLB, Live Nation, and Tickets.com.',
      'Led the mobile ticketing experience for the College Basketball Crown with Fox Sports and MGM, delivering a seamless in-app purchase and entry flow for a high-profile national event.',
      'Designed and implemented full-stack solutions for ticket pricing optimization and internationalization (i18n) across 10 countries, using Optimizely and feature flags for A/B testing and controlled rollouts to expand user base and increase revenue.',
      'Shipped UI/UX enhancements that lifted checkout conversion by +0.2%, driving meaningful incremental revenue across millions of transactions.',
      'Refactored major screens to improve code quality and app performance by 20%; improved unit tests with Jest and React Native Testing Library and raised Maestro E2E automation coverage to 100%.',
      'Architected mobile error monitoring and on-call posture with Sentry and Datadog: defined the alerting strategy, reduced noisy pages, and improved MTTR, resolving time-sensitive production issues and shipping fixes via the App Store, Play Store, and EAS OTA updates.',
      'Delivered offline-first capabilities with local caching and persisted state, and used AI-assisted tools (Claude, Codex, Cursor) to accelerate development velocity and reduce turnaround time.',
      'Managed the mobile co-op hiring pipeline (resume screening, technical interviews, and candidate ranking) and built a co-op support program with a buddy system and team outings that earned a 9.5/10 rating from University of Waterloo participants.',
      'Collaborated with cross-functional teams in an Agile/Scrum environment to deliver high-quality software.',
    ],
  },
  {
    role: 'Engineering Research Lead',
    company: 'Healthcare Systems R&A',
    location: 'Mississauga, ON',
    period: 'Jan – April 2022',
    highlights: [
      'Built a React Native app (React Navigation, Redux, Jest, React Native Testing Library) to analyze rapid diagnostic tests using JavaScript, HTML, and CSS.',
      'Bridged the app to native Android (Android Studio, Java) for OpenCV-based image crop/analysis workflows.',
      'Used the Android camera to detect rapid diagnostic tests (RDTs) and estimate their concentration with a machine learning model trained on curated datasets.',
      'Implemented Firebase Auth and Firestore for authentication and data storage.',
      'Led a team of six developers using Jira for sprint planning.',
    ],
  },
  {
    role: 'Engineering Assistant',
    company: 'Health & Rehab Research Inc.',
    location: 'Mississauga, ON',
    period: 'May – Aug 2021',
    highlights: [
      'Developed a COVID-19 Rapid Diagnostic Test scanning tool that outputs RDT results with concentration levels.',
      'Processed images using OpenCV and matplotlib in Python.',
      'Implemented mathematical and statistical models for calibration and machine learning algorithms to accurately determine the concentration of an RDT.',
      'Developed a front-end application using Flutter and Kivy to integrate with the image processing backend logic.',
      'Delivered calibration tooling and backend logic tying imaging outputs to lab workflows.',
    ],
  },
  {
    role: 'Hermetics System Developer & Researcher',
    company: 'Lumentum Holdings Inc.',
    location: 'Ottawa, ON',
    period: 'Jan – Apr 2020',
    highlights: [
      'Used VB to create an application to collect data and analyze temperature readings from 12 thermocouples.',
      'Designed and performed experiments in a dry optics lab with specialized equipment and analyzed results in JMP.',
      'Presented findings from the research, trials, and JMP results to the team to inform next steps.',
    ],
  },
  {
    role: 'Biophotonics Developer',
    company: 'Schlegel-UW Research Institute for Aging',
    location: 'Waterloo, ON',
    period: 'May – Dec 2019',
    highlights: [
      'Created and troubleshooted a GUI using Python and Tkinter for a biomedical imaging camera prototype.',
      'Designed a 3D printed case and machined a tripod adapter using SolidWorks & AutoCAD.',
      'Implemented a 3D camera application in C++ to convert images into 3D meshes; conducted 30+ clinical trials.',
      'Soldered PCB for the electrical design of the camera prototype.',
    ],
  },
  {
    role: 'Embedded Systems Engineer',
    company: 'Living in Silico Inc.',
    location: 'Mississauga, ON',
    period: 'May 2017 – Jan 2018',
    highlights: [
      'Designed a biomedical wearable device using Arduino, a pulse rate sensor, accelerometer, and microphone.',
      'Created an algorithm to process sensor data using C++.',
      'Used GROMACS on a Linux VM to simulate molecular dynamics for DNA sequencing using GPU acceleration.',
    ],
  },
]

export const projects = [
  {
    name: 'Impact Health: Smart Concussion Headband and React Website',
    context: 'Capstone Project',
    featured: true,
    description:
      'Built a React web application that consumed and displayed real-time concussion monitoring data streamed from wearable sensors via live communication protocols.',
    tags: ['React', 'Real-time', 'Wearables'],
    media: [
      {
        type: 'youtube',
        id: 'AwrQqS_T6LY',
        label: 'Project demo',
      },
      {
        type: 'video',
        src: '/media/impact-website.mp4',
        poster: '/media/impact-website.jpg',
        label: 'Website walkthrough',
      },
      {
        type: 'video',
        src: '/media/impact-blog.mp4',
        poster: '/media/impact-blog.jpg',
        label: 'Blog walkthrough',
      },
    ],
    links: [
      { label: 'Website', href: 'https://lailahashi.github.io/' },
      {
        label: 'Blog',
        href: 'https://impacthealthproject.wixsite.com/impact-health/blog',
      },
      { label: 'Demo', href: 'https://www.youtube.com/watch?v=AwrQqS_T6LY' },
    ],
  },
  {
    name: 'Cafe Ordering & Reservations Website',
    context: 'Personal Project',
    featured: true,
    description:
      'Built a React web application with a component-driven UI for menu browsing, table reservations, ingredient/allergen information, and a raffle promotion.',
    tags: ['React', 'UI/UX'],
    media: [
      {
        type: 'video',
        src: '/media/cafe-whisk-bean.mp4',
        poster: '/media/cafe-whisk-bean.jpg',
        label: 'Whisk & Bean walkthrough',
      },
    ],
  },
  {
    name: 'Search & Rescue Robot Navigation',
    context: 'Competition',
    description:
      'Implemented autonomous navigation and obstacle-avoidance algorithms using sensor inputs to enable efficient search and rescue robot movement.',
    tags: ['Robotics', 'Algorithms', 'Sensors'],
  },
  {
    name: 'Budget Grocery Mobile App',
    context: 'Hack the North',
    description:
      'Developed a Kotlin-based Android application featuring expense tracking, budget management, and user-friendly mobile workflows.',
    tags: ['Kotlin', 'Android'],
  },
  {
    name: 'Smart Parking System',
    context: 'JAMHacks 2 · Best Hardware Award',
    description:
      'Developed a miniature smart parking system using Arduino, C++, and sensors to track parking space occupancy in real time.',
    tags: ['Arduino', 'C++', 'Hardware'],
  },
  {
    name: 'Augmented Workouts',
    context: 'JAMHacks · Best Use of Projection (Christie)',
    description:
      'Built an interactive fitness system on an Intel Edison board: a pedometer that tracks steps, distance, and calories, RGB lights that celebrate every 100-step checkpoint, and a projector-driven 3D panorama the user can navigate for immersive indoor cardio.',
    tags: ['C++', 'JavaScript', 'Intel Edison', 'Hardware'],
  },
]

export const education = {
  school: 'University of Waterloo',
  degree: 'Bachelor of Applied Science',
  program: 'Mechatronics Engineering, Biomechanics Option',
  graduation: 'April 2023',
}
