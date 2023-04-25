const config = require('config');
const mongoose = require('mongoose');
const { CwatTicket } = require('./models/cwatTicketModel');

const cwatTickets = [
  {
    name: 'Tier One',
    price: 500,
    bedType: 'single room',
    numberOfBedsAvailable: 0,
    description: 'Villa Lodging (single room) - Lodging Meals - Program',
  },
  {
    name: 'Tier Two',
    price: 350,
    bedType: 'Queen / Double / Full',
    numberOfBedsAvailable: 3,
    description: 'Villa Lodging (shared room - Queen / Double / Full Bed) - Lodging Meals',
  },
  {
    name: 'Tier Three',
    price: 300,
    bedType: 'Twin Bed',
    numberOfBedsAvailable: 4,
    description: 'Villa Lodging (shared room - Twin Bed) - Lodging Meals - Program',
  },
];

const cwatUnregistered = [
  {
    firstName: '',
    lastName: '',
    paymentMethod: '',
    NumberOfPayments: '',
    verifyTicketTypeCode: '',
    ticketType: '',
  },
  {
    firstName: '',
    lastName: '',
    paymentMethod: '',
    NumberOfPayments: '',
    verifyTicketTypeCode: '',
    ticketType: '',
  },
  {
    firstName: '',
    lastName: '',
    paymentMethod: '',
    NumberOfPayments: '',
    verifyTicketTypeCode: '',
    ticketType: '',
  },
  {
    firstName: '',
    lastName: '',
    paymentMethod: '',
    NumberOfPayments: '',
    verifyTicketTypeCode: '',
    ticketType: '',
  },
];

async function seedCwatUnregistered() {}

async function seedCwatTickets() {
  await mongoose.connect(config.get('db'));
  await CwatTicket.deleteMany({});
  await CwatTicket.insertMany(cwatTickets);

  mongoose.disconnect();

  console.info('Cwat Ticket Seed Done!');
}
