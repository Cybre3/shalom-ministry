require('dotenv').config();
const config = require('config');
const mongoose = require('mongoose');
const { CwatTicket } = require('./models/cwatTicketModel');
const { CwatUnregistered } = require('./models/cwatUnregisteredModel');

const cwatTickets = [
  {
    name: 'tierOne',
    price: 500,
    bedType: 'single room',
    numberOfBedsAvailable: 0,
    description: 'Villa Lodging (single room) - Lodging Meals - Program',
    displayLine: '',
  },
  {
    name: 'tierTwo',
    price: 350,
    bedType: 'Queen / Double / Full',
    numberOfBedsAvailable: 3,
    description: 'Villa Lodging (shared room - Queen / Double / Full Bed) - Lodging Meals - Program',
    displayLine: '',
  },
  {
    name: 'tierThree',
    price: 300,
    bedType: 'Twin Bed',
    numberOfBedsAvailable: 4,
    description: 'Villa Lodging (shared room - Twin Bed) - Lodging Meals - Program',
    displayLine: '',
  },
];

// add paid in full, registered, payments/amount left, Villa KVPs
const cwatUnregisteredData = [
  {
    firstName: 'Brianna',
    lastName: 'Jones',
    paymentMethod: 'CashApp',
    NumberOfPayments: 2,
    verifyTicketCode: '93Azgc4',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Regina',
    lastName: 'Jordan',
    paymentMethod: 'CashApp',
    NumberOfPayments: 2,
    verifyTicketCode: 'U8D7W8O',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Tarae',
    lastName: 'Thibeaux',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'dLyRC9Q',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Laverne',
    lastName: 'Connor',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'LUDvb8F',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Rosa',
    lastName: 'Combs',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'PCaYJ7N',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: `A'lisa`,
    lastName: 'Combs',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'k83zhz8',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Rebecca',
    lastName: 'Hall',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'V2wz48D',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Christine',
    lastName: 'Harrod',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: '29q5CKy',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Janelle',
    lastName: '',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'Q7JMQk8',
    roomType: 'Bunk',
    bedType: 'Twin',
  },
  {
    firstName: 'Destinee',
    lastName: 'Evans',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'sYh22pQ',
    roomType: 'Bunk',
    bedType: 'Twin',
  },
  {
    firstName: 'Alicia',
    lastName: 'Henson',
    paymentMethod: 'Zelle',
    NumberOfPayments: 1,
    verifyTicketCode: 'XNRNMr1',
    roomType: 'Bunk',
    bedType: 'Twin',
  },
  {
    firstName: 'Jasmine',
    lastName: 'Anita',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: '3YUDQPp',
    roomType: 'Bunk',
    bedType: 'Double',
  },
  {
    firstName: 'Shadine',
    lastName: '',
    paymentMethod: 'Zelle',
    NumberOfPayments: 1,
    verifyTicketCode: 'QcL6Eq9',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Christina',
    lastName: 'Powell',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'Hh6AzxV',
    roomType: '',
    bedType: '',
  },
  {
    firstName: 'Beatrice',
    lastName: '',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'JWOR7wc',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Natasha',
    lastName: '',
    paymentMethod: 'Zelle',
    NumberOfPayments: 1,
    verifyTicketCode: 'aQp1oZx',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Ylourdes',
    lastName: '',
    paymentMethod: 'Zelle',
    NumberOfPayments: 1,
    verifyTicketCode: 'dpYx283',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Jasmine',
    lastName: 'Jean',
    paymentMethod: 'Zelle',
    NumberOfPayments: 1,
    verifyTicketCode: 'J8UPohK',
    roomType: 'Bunk',
    bedType: 'Twin',
  },
  {
    firstName: 'Babara',
    lastName: 'Pierre',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'g1rkgGp',
    roomType: '',
    bedType: '',
  },
  {
    firstName: 'Chantelle',
    lastName: '',
    paymentMethod: '',
    NumberOfPayments: 0,
    verifyTicketCode: '6T79ZsS',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstName: 'Cheyenne',
    lastName: '',
    paymentMethod: 'Zelle',
    NumberOfPayments: 1,
    verifyTicketCode: '7D61Jss',
    roomType: 'Single',
    bedType: 'Queen',
  },
  {
    firstName: 'Amirah',
    lastName: 'Abdullah',
    paymentMethod: 'Zelle',
    NumberOfPayments: 1,
    verifyTicketCode: 'U6BFW5A',
    roomType: 'Single',
    bedType: 'King',
  },
  {
    firstName: 'Leandria',
    lastName: '',
    paymentMethod: 'CashApp',
    NumberOfPayments: 1,
    verifyTicketCode: 'W92PGyS',
    roomType: 'Bunk',
    bedType: 'Double',
  },
  {
    firstName: 'Becky',
    lastName: 'Negrillo',
    paymentMethod: 'Zelle',
    NumberOfPayments: 1,
    verifyTicketCode: 'dx2zNMz',
    roomType: 'Single',
    bedType: 'King',
  },
];

async function seedCwatUnregistered() {
  await CwatUnregistered.deleteMany({});
  await CwatUnregistered.insertMany(cwatUnregisteredData);

  mongoose.disconnect();

  console.info('Cwat Unregistered Seed Done!');
}

async function seedCwatTickets() {
  cwatTickets.forEach((ticket) => {
    ticket.disabled = ticket.numberOfBedsAvailable === 0 ? true : false;
    ticket.displayLine = `$${ticket.price} - ${ticket.description}${ticket.disabled ? ' - SOLD OUT!!' : ''}`;
  });

  await CwatTicket.deleteMany({});
  await CwatTicket.insertMany(cwatTickets);

  mongoose.disconnect();

  console.info('Cwat Ticket Seed Done!');
}

async function CONNECT_TO_DB() {
  let db;
  const environment = config.get('env');

  switch (environment) {
    case 'production':
      const { dbName, host, pass, user } = config.get('db');
      db = `${host}://${process.env[user]}:${process.env[pass]}@${dbName}.gg9r8ag.mongodb.net/shalom-ministry?retryWrites=true&w=majority`;
      break;
    case 'test':
      db = 'mongodb://localhost/shalom-ministry_test';
      break;
    case 'development':
      db = 'mongodb://localhost/shalom-ministry';
      break;
  }

  mongoose.set('strictQuery', false);
  await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
}

CONNECT_TO_DB();
seedCwatUnregistered();
