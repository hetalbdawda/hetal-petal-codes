// Central content source for the portfolio.
// Edit values here to update the site. No component changes needed.

export const profile = {
  name: 'Hetal Dawda',
  title: 'Software Engineer',
  tagline: 'Front-end engineer shipping React Native consumer apps',
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
      'Developed core mobile UI using React Native (Expo), TypeScript/JavaScript, React Navigation, and Redux for flows including Shop Navigation, Ticket Details, Onboarding, Production, and Account Profile.',
      'Applied domain-driven design with RTK Query for API and server state; implemented deep linking and Braze-powered push notifications aligned with lifecycle and campaign needs.',
      'Contributed Storybook stories and reusable design-system components consumed across the app where appropriate.',
      'Designed and implemented full-stack solutions for ticket pricing optimization and internationalization (i18n) across 10 countries, using Optimizely and feature flags for A/B testing and controlled rollouts to expand user base and increase revenue.',
      'Refactored major screens to improve code quality and app performance by 20%; improved unit tests with Jest and React Native Testing Library and raised Maestro E2E automation coverage to 100%.',
      'Collaborated with cross-functional teams in an Agile/Scrum environment to deliver high-quality software.',
      'Worked on-call to resolve bugs found in DataDog or Sentry in production software in a time-sensitive manner, including releasing updated applications on App Store and Play Store and deploying OTA updates via EAS for rapid fixes.',
      'Delivered offline-first capabilities with local caching and persisted state, and used AI-assisted tools (Claude, Codex, Cursor) to accelerate development velocity and reduce turnaround time.',
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
      'Built a COVID-19 rapid diagnostic scanning pipeline: Flutter/Kivy front-end integrated with Python/OpenCV/matplotlib image processing and ML/statistical models for concentration estimates.',
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
    description:
      'Built a React web application that consumed and displayed real-time concussion monitoring data streamed from wearable sensors via live communication protocols.',
    tags: ['React', 'Real-time', 'Wearables'],
  },
  {
    name: 'Cafe Ordering & Reservations Website',
    context: 'Personal Project',
    description:
      'Built a React web application with a component-driven UI for menu browsing, table reservations, ingredient/allergen information, and a raffle promotion.',
    tags: ['React', 'UI/UX'],
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
