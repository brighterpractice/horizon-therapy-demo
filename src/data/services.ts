export interface Service {
 slug: string;
 title: string;
 href: string;
 description: string;
 homeDescription?: string;
 showOnHome?: boolean;
 published: boolean;
}

export const services: Service[] = [
 {
  slug: 'individual-therapy',
  title: 'Individual Therapy',
  href: '/services/individual-therapy/',
  description: 'One-to-one counseling for adults who want time to step back, understand the terrain they are in, and choose a direction.',
  published: true,
 },
 {
  slug: 'trauma-ptsd',
  title: 'Trauma & PTSD',
  href: '/services/trauma-ptsd/',
  description: 'Support when difficult experiences continue to change how safe, connected, or steady the present feels.',
  homeDescription: 'A paced approach to experiences that still shape the present long after the original moment has passed.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'anxiety-stress',
  title: 'Anxiety & Stress',
  href: '/services/anxiety-stress/',
  description: 'Counseling for worry, pressure, tension, and the feeling that attention is always pulled toward the next possible problem.',
  homeDescription: 'Support when worry narrows the view and makes it hard to experience the ground you are already standing on.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'grief-loss',
  title: 'Grief & Loss',
  href: '/services/grief-loss/',
  description: 'Support when loss changes the landscape of daily life, relationships, identity, or what you imagined would come next.',
  homeDescription: 'Room to navigate the altered landscape that follows a meaningful loss.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'depression-emotional-disconnection',
  title: 'Depression & Emotional Disconnection',
  href: '/services/depression-emotional-disconnection/',
  description: 'Counseling when momentum has gone quiet and life feels farther away, flatter, or harder to engage with.',
  homeDescription: 'A place to look for direction when your sense of movement or connection has faded.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'chronic-pain-chronic-illness',
  title: 'Chronic Pain & Chronic Illness Counseling',
  href: '/services/chronic-pain-chronic-illness/',
  description: 'Support for the adjustment, grief, relationship changes, and shifting plans that can follow ongoing pain or illness.',
  published: true,
 },
 {
  slug: 'life-transitions',
  title: 'Life Transitions',
  href: '/services/life-transitions/',
  description: 'Counseling while identity, work, family, relationships, health, or direction are changing and the next route is not fully clear yet.',
  homeDescription: 'Support while standing between a familiar chapter and one you have not learned to navigate yet.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'relationship-concerns',
  title: 'Relationship Concerns',
  href: '/services/relationship-concerns/',
  description: 'Individual counseling for communication, boundaries, trust, conflict, and recurring relationship routes that keep ending in the same place.',
  homeDescription: 'A closer look at the relationship patterns that keep leading somewhere you do not want to go.',
  showOnHome: true,
  published: true,
 },
 {
  slug: 'self-esteem-personal-growth',
  title: 'Self-Esteem & Personal Growth',
  href: '/services/self-esteem-personal-growth/',
  description: 'A reflective place to build self-trust, clarify values, strengthen boundaries, and choose a more deliberate direction.',
  published: true,
 },
];

export const homepageServices = services.filter((service) => service.showOnHome);
