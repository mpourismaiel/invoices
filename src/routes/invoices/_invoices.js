// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const invoices = [
  {
    slug: 'invoice-001',
    to: '',
    project: '',
    invoiceNumber: '#001',
    invoiceDate: '2020/02/01',
    serviceDate: '2020/01/01',
    items: [
      {
        title: '',
        hours: '0',
        rate: '$0.00',
        amount: '$0.00',
      },
    ],
    total: '$0.00',
    amountPaid: '$0.00',
    balanceDue: '$0.00',
    notes: [['', '']],
  },
];

export default invoices;
