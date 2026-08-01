/**
 * Copy for the /lead-rescue landing page.
 * Audience is UK law firms, so this file uses British spelling: enquiry, organised,
 * solicitors, the firm. The rest of the site is American. That is deliberate.
 *
 * Edit wording here, not in the page template.
 */

export const leadRescue = {
  hero: {
    headline: 'Every enquiry, in front of the right person, in under a minute.',
    subline:
      'I build systems that capture new business enquiries from your website and route them to whoever should see them, automatically. Set up in five working days.',
    primaryCta: 'Get in touch',
    secondaryCta: 'See how it works',
  },

  problems: [
    {
      title: 'The shared inbox has no owner.',
      body: 'Enquiries land in a mailbox everyone can see and nobody is responsible for. Reading it is not the same as acting on it.',
    },
    {
      title: 'One busy day is enough.',
      body: 'Someone is in court or with a client. The enquiry sits. By the time it is picked up, the caller has rung another firm.',
    },
    {
      title: 'Nobody can measure it.',
      body: 'Ask how long an enquiry takes to reach a fee earner. There is no answer. Not a slow one. No answer at all.',
    },
  ],

  capabilities: [
    {
      title: 'Captures',
      body: 'Takes enquiries from your website form, your enquiries inbox, and anywhere else they arrive.',
    },
    {
      title: 'Cleans',
      body: 'Fixes the obvious errors and removes duplicates, so one enquiry is one record.',
    },
    {
      title: 'Routes',
      body: 'Sends each one to the right person, based on rules you set.',
    },
    {
      title: 'Acknowledges',
      body: 'Replies to the enquirer straight away, in your wording.',
    },
    {
      title: 'Logs',
      body: 'Records what came in and what happened next, so you can check.',
    },
  ],

  /**
   * TODO: placeholder. Replace before this page goes in front of anyone.
   * The drafted copy is in git: `git log -p --follow src/pages/lead-rescue.astro`.
   * Paragraph lengths here match that draft so the layout stays representative.
   */
  whyMe: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
    'Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.',
  ],

  steps: [
    {
      title: 'A short call.',
      body: 'I look at how enquiries reach you now.',
    },
    {
      title: 'I build and test it.',
      body: 'Five working days.',
    },
    {
      title: 'It goes live.',
      body: 'You watch enquiries arrive where they should.',
    },
    {
      title: 'I keep it running.',
      body: 'I monitor it and fix things before you notice.',
    },
  ],

  faqs: [
    {
      question: 'How long does it take?',
      answer: 'Five working days from the deposit clearing.',
    },
    {
      question: 'Where does our data go?',
      answer:
        'It stays on infrastructure I run. Nothing is sold, shared, or used for anything else.',
    },
    {
      question: 'What if it breaks?',
      answer:
        'I monitor it and fix problems before they reach you. Keeping it running is part of the arrangement, not something you have to chase.',
    },
    {
      question: 'Do we need to change our website?',
      answer: 'Usually not. In most cases I work with the form you already have.',
    },
    {
      question: 'What if we already use a CRM?',
      answer: 'Then it feeds your CRM. That is a good starting point, not a problem.',
    },
  ],

  finalCta: {
    heading: 'Want this running at your firm?',
    body: 'Tell me how enquiries reach you now. I will tell you whether this fits and what it would take.',
    cta: 'Get in touch',
  },
} as const;
