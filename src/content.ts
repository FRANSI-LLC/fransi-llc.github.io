// All site copy and business details live here, so updating the page
// rarely means touching a component. Entries marked TODO still need real values.

export const site = {
  name: 'Fransi LLC',
  email: 'nataniel.jayaseelan@gmail.com',
  city: 'Bay Area, California', // TODO: city or region you serve
  responseTime: 'one business day', // TODO: how quickly you reply
};

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#what', label: 'Services' },
  { href: '#process', label: 'Process' },
];

export const hero = {
  eyebrow: 'Websites · Apps · Automations',
  title: 'Software built around people.',
  lead: 'Custom websites, apps and n8n workflows. Designed with the people who use them.',
};

export const principles = [
  { title: 'Listen first', body: 'We learn how your team works before we write code.' },
  { title: 'Keep it clear', body: 'Plain language, fixed scope, no surprises.' },
  { title: 'You own it', body: 'Clean code and docs. No lock-in.' },
  { title: 'Fit to you', body: 'Your goals set the plan, and the plan can change.' },
];

export const about = {
  eyebrow: 'About us',
  title: "We're students. That's the advantage.",
  paragraphs: [
    "We're a small team of engineering students who started building software for people around us, and kept going. We don't have years of habits to protect, so we question the default way of doing things and pick what actually works for you.",
    "We learn the newest tools because we use them every day. And when you work with us, you talk directly to the people writing your code.",
  ],
  strengths: [
    { title: 'Fresh eyes', body: 'We ask "why is it done this way?" before copying what everyone else does.' },
    { title: 'Real engineering', body: 'Computer engineering training and backend industry experience, not just templates.' },
    // { title: 'Shipped work', body: "We've built a mobile app for a college department, with user accounts and a live database." },
    { title: 'Fair pricing', body: 'Lean overhead means clear, honest quotes for start-ups and small teams.' },
  ],
};

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  tone: 'green' | 'amber';
};

// export const team: TeamMember[] = [
//   {
//     name: 'Nataniel Jayaseelan',
//     initials: 'NJ',
//     role: 'Co-founder · Backend & apps',
//     // TODO: add one line about what you love building
//     bio: 'Computer Engineering student with backend software engineering experience.',
//     tone: 'green',
//   },
//   {
//     name: 'Partner Name', // TODO
//     initials: 'PN', // TODO
//     role: 'Co-founder · Role', // TODO
//     bio: 'Background and focus. One line about what they love building.', // TODO
//     tone: 'amber',
//   },
// ];

export type ServiceIcon = 'web' | 'mobile' | 'workflow' | 'code';

export const services: { icon: ServiceIcon; title: string; body: string; tags: string }[] = [
  {
    icon: 'web',
    title: 'Custom websites',
    body: 'Marketing sites, portfolios and landing pages that load fast and work for everyone. We set you up with an editor so your team can change copy and images without touching code.',
    tags: 'Design · Development · CMS setup · SEO basics · Hosting',
  },
  {
    icon: 'mobile',
    title: 'Web & mobile apps',
    body: 'Web and mobile apps for iOS and Android, from first prototype to launch. We test with real users along the way and build on a backend that holds up as you grow.',
    tags: 'React Native · Web apps · Auth & databases · App Store launch',
  },
  {
    icon: 'workflow',
    title: 'n8n workflows',
    body: 'Automations that move data between your tools, send the follow-ups, and fill in the reports. Your team gets hours back and only handles the work that needs a person.',
    tags: 'Workflow mapping · Integrations · AI steps · Self-hosted or cloud',
  },
  {
    icon: 'code',
    title: 'Custom software',
    body: "Internal dashboards, APIs and one-off tools nobody sells off the shelf. If software could make part of your work easier, we'll help figure out what to build.",
    tags: 'Dashboards · APIs · Backend systems · Internal tools',
  },
];

export const process = {
  title: 'Our process',
  lead: 'A starting outline, not a script. We adjust the steps to fit your project, timeline and team.',
  steps: [
    { title: 'Talk', body: 'A free call about what you need.' },
    { title: 'Plan', body: 'A plan built around your goals, with a clear scope and price.' },
    { title: 'Build', body: 'Regular previews you can try.' },
    { title: 'Launch', body: 'Handoff, training and support.' },
  ],
};

export const flexible = {
  eyebrow: 'Flexible by design',
  title: 'No one-size-fits-all packages.',
  lead: 'Every business is different, so every plan starts from yours. We shape the outline, timeline and goals with you, and adjust as your needs change.',
  cards: [
    { title: 'Your scope', body: 'Start small with one page or workflow, or plan the full build. We size the project to what you need now.' },
    { title: 'Your pace', body: "Tight deadline or steady rollout, we build the timeline around your launch dates and your team's bandwidth." },
    { title: 'Room to change', body: 'Learned something new mid-project? We revisit the plan together instead of forcing the original one.' },
    { title: 'How you work with us', body: 'A fixed-price build, ongoing hourly support, or a mix of both. Pick what fits your budget.' },
  ],
};

export const audiences = [
  'Start-ups and small teams',
  'Teams outgrowing spreadsheets',
  'Businesses that want to own their software',
];

export const projectTypes = ['Website', 'App', 'n8n workflow', 'Other'];
