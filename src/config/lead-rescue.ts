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
   * `link.phrase` must appear verbatim in `text`. The page turns that phrase
   * into the anchor and leaves the wording alone; if it stops matching, the
   * paragraph renders as plain text rather than breaking.
   */
  whyMe: [
    {
      text: 'I build payment infrastructure for a living. Systems that move money and cannot quietly lose a transaction. The unglamorous work of making sure nothing disappears between two services is what I do professionally, and it is the same problem as an enquiry that never reaches a fee earner.',
    },
    {
      text: 'Most people setting up automations cannot tell you when one has stopped working. I built a tool that watches for exactly that: when an integration fails silently, it gets caught and replayed rather than found weeks later. That is the difference between a system you can trust and one you find out about from a client who never heard back.',
      link: {
        phrase: 'a tool that watches for exactly that',
        href: '/work/hookdrop/',
      },
    },
    {
      text: 'Everything runs on infrastructure I control. Your enquiries are not scattered across half a dozen services I do not run, and nothing about your clients goes anywhere it should not. I built the system that found your firm, so you can see the standard of the work before you commit to any of it.',
    },
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
