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
    firstname: 'Brianna',
    lastname: 'Jones',
    paymentMethod: 'CashApp',
    numberOfPayments: 2,
    verifyTicketCode: '93Azgc4',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Regina',
    lastname: 'Jordan',
    paymentMethod: 'CashApp',
    numberOfPayments: 2,
    verifyTicketCode: 'U8D7W8O',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Tarae',
    lastname: 'Thibeaux',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'dLyRC9Q',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Laverne',
    lastname: 'Connor',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'LUDvb8F',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Rosa',
    lastname: 'Combs',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'PCaYJ7N',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: `A'lisa`,
    lastname: 'Combs',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'k83zhz8',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Rebecca',
    lastname: 'Hall',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'V2wz48D',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Christine',
    lastname: 'Harrod',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: '29q5CKy',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Janelle',
    lastname: '',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'Q7JMQk8',
    roomType: 'Bunk',
    bedType: 'Twin',
  },
  {
    firstname: 'Destinee',
    lastname: 'Evans',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'sYh22pQ',
    roomType: 'Bunk',
    bedType: 'Twin',
  },
  {
    firstname: 'Alicia',
    lastname: 'Henson',
    paymentMethod: 'Zelle',
    numberOfPayments: 1,
    verifyTicketCode: 'XNRNMr1',
    roomType: 'Bunk',
    bedType: 'Twin',
  },
  {
    firstname: 'Jasmine',
    lastname: 'Anita',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: '3YUDQPp',
    roomType: 'Bunk',
    bedType: 'Double',
  },
  {
    firstname: 'Shadine',
    lastname: '',
    paymentMethod: 'Zelle',
    numberOfPayments: 1,
    verifyTicketCode: 'QcL6Eq9',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Christina',
    lastname: 'Powell',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'Hh6AzxV',
    roomType: '',
    bedType: '',
  },
  {
    firstname: 'Beatrice',
    lastname: '',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'JWOR7wc',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Natasha',
    lastname: '',
    paymentMethod: 'Zelle',
    numberOfPayments: 1,
    verifyTicketCode: 'aQp1oZx',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Ylourdes',
    lastname: '',
    paymentMethod: 'Zelle',
    numberOfPayments: 1,
    verifyTicketCode: 'dpYx283',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Jasmine',
    lastname: 'Jean',
    paymentMethod: 'Zelle',
    numberOfPayments: 1,
    verifyTicketCode: 'J8UPohK',
    roomType: 'Bunk',
    bedType: 'Twin',
  },
  {
    firstname: 'Babara',
    lastname: 'Pierre',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'g1rkgGp',
    roomType: '',
    bedType: '',
  },
  {
    firstname: 'Chantelle',
    lastname: '',
    paymentMethod: '',
    numberOfPayments: 0,
    verifyTicketCode: '6T79ZsS',
    roomType: 'Single',
    bedType: '',
  },
  {
    firstname: 'Cheyenne',
    lastname: '',
    paymentMethod: 'Zelle',
    numberOfPayments: 1,
    verifyTicketCode: '7D61Jss',
    roomType: 'Single',
    bedType: 'Queen',
  },
  {
    firstname: 'Amirah',
    lastname: 'Abdullah',
    paymentMethod: 'Zelle',
    numberOfPayments: 1,
    verifyTicketCode: 'U6BFW5A',
    roomType: 'Single',
    bedType: 'King',
  },
  {
    firstname: 'Leandria',
    lastname: '',
    paymentMethod: 'CashApp',
    numberOfPayments: 1,
    verifyTicketCode: 'W92PGyS',
    roomType: 'Bunk',
    bedType: 'Double',
  },
  {
    firstname: 'Becky',
    lastname: 'Negrillo',
    paymentMethod: 'Zelle',
    numberOfPayments: 1,
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
