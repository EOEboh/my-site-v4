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

  /**
   * Prices are numbers so the first-year totals below are derived, not typed
   * twice. Change a price here and every figure on the page follows.
   */
  tiers: [
    {
      name: 'Standard',
      setup: 700,
      monthly: 160,
      includes: [
        'Website form capture',
        'Cleaning and duplicate removal',
        'Routing to the right person',
        'Automatic acknowledgement',
        'Monitoring',
      ],
    },
    {
      name: 'Extended',
      setup: 1200,
      monthly: 160,
      includes: [
        'Everything in Standard',
        'Multiple enquiry sources',
        'Enrichment on each enquiry',
        'Custom routing rules',
        'Alerts when something stalls',
      ],
    },
  ],

  terms: '50% on start, balance on delivery.',

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
        'That is what the monthly covers. I monitor it and fix problems before they reach you.',
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

const gbp = (amount: number) => `£${amount.toLocaleString('en-GB')}`;

/** Display strings for each tier, with the first year costed out in full. */
export const tiers = leadRescue.tiers.map((tier) => ({
  ...tier,
  setupLabel: `${gbp(tier.setup)} setup`,
  monthlyLabel: `then ${gbp(tier.monthly)} a month`,
  firstYearLabel: `${gbp(tier.setup + tier.monthly * 12)} in the first year`,
}));

/**
 * The anchor. Deliberately does not quote a figure for what a lost enquiry
 * costs, because that number would be invented. It gives the firm the full
 * first-year cost and asks them to set it against two numbers they own.
 */
export const pricingAnchor = {
  lead: `In the first year, ${tiers
    .map((t) => `${t.name} is ${gbp(t.setup + t.monthly * 12)}`)
    .join(' and ')}.`,
  body: 'Set that against two numbers: what an average matter is worth to the firm, and how many enquiries you take in a month. If you do not know the second one, that is the thing this fixes.',
} as const;
