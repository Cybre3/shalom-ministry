require('dotenv').config();
const config = require('config');
const mongoose = require('mongoose');

const { CwatTicket } = require('./models/cwatTicketModel');
const { CwatUnregistered } = require('./models/cwatUnregisteredModel');
const { CwatRegistrar } = require('./models/cwatRegistrarModel');
const { Constant } = require('./models/constantModel');
const { User } = require('./models/userModel');
const { Invoice } = require('./models/InvoiceModel');
const { Sponsor } = require('./models/sponsorModel');
const { Contact } = require('./models/contactModel');
const { Event } = require('./models/eventModel');

const cwatUnregisteredData = require('./seedData/cwatUnregisteredData');
const cwatTickets = require('./seedData/cwatTickets');
const constants = require('./seedData/constants');

async function seedCwatUnregistered() {
  await CwatUnregistered.deleteMany({});
  await CwatUnregistered.insertMany(cwatUnregisteredData);

  mongoose.disconnect();

  console.info('Cwat Unregistered Seed Done!');
}

async function seedCwatTickets() {
  cwatTickets.forEach((ticket) => {
    ticket.disabled = ticket.numberOfBedsAvailable === 0 ? true : false;
    ticket.soldOut = ticket.numberOfBedsAvailable === 0 ? true : false;
    ticket.displayLine = `Tier ${ticket.tier} - $${ticket.price} - ${ticket.description}${ticket.soldOut ? ' - SOLD OUT!!' : ''
      }`;
  });

  await CwatTicket.deleteMany({});
  await CwatTicket.insertMany(cwatTickets);

  mongoose.disconnect();

  console.info('Cwat Ticket Seed Done!');
}

async function translateTicketOptionData() {
  const allCwatRegistrars = await CwatRegistrar.find({});

  allCwatRegistrars.map(async (registrar) => {
    if (registrar.ticketOption && registrar.ticketOption.includes('Tier')) {
      registrar.ticketOption = remove_SOLDOUT_tag(registrar.ticketOption);
      await CwatRegistrar.findByIdAndUpdate(registrar._id, { ...registrar });
    } else if (!mongoose.Types.ObjectId.isValid(registrar.ticketOption)) {
      const ticket = await getTicketType(registrar.ticketPurchaseData);
      registrar.ticketOptionData = ticket;
      registrar.ticketOption = ticket.displayLine;
      await CwatRegistrar.findByIdAndUpdate(registrar._id, { ...registrar });
    } else {
      const unregisteredTicket = await CwatUnregistered.findById(registrar.ticketOption);
      const ticketData = await getTicketType(unregisteredTicket);
      registrar.ticketOptionData = ticketData;
      registrar.ticketPurchaseData = unregisteredTicket;
      registrar.ticketOption = ticketData.displayLine;
      await CwatRegistrar.findByIdAndUpdate(registrar._id, { ...registrar });
    }
  });

  // mongoose.disconnect();
  console.info('Cwat registrars Updated!');
}

async function getTicketType(unregisterdTicket) {
  const allCwatTickets = await CwatTicket.find({});
  let ROOM_OR_BED_TYPE = 1;

  if (unregisterdTicket.roomType === 'Single') ROOM_OR_BED_TYPE = 1;
  else if (['Queen', 'Double', 'Full'].includes(unregisterdTicket.bedType)) ROOM_OR_BED_TYPE = 2;
  else if (['Twin'].includes(unregisterdTicket.bedType)) ROOM_OR_BED_TYPE = 3;

  return allCwatTickets[ROOM_OR_BED_TYPE - 1];
}

async function seedConstants() {
  await Constant.deleteMany({});
  await Constant.insertMany(constants);

  mongoose.disconnect();

  console.info('Constants Seed Done!');
}

async function assignNumberIdToCollectionDocuments(Collection, constantType) {
  const collectionArr = await Collection.find({});
  const constant = await Constant.findOne({ type: constantType });
  let newCount = constant.amount;

  collectionArr.map(async (document) => {
    document[constantType] = newCount;
    newCount++;
    await Collection.findByIdAndUpdate(document._id, { ...document });
  });

  await Constant.findOneAndUpdate({ type: constantType }, { amount: newCount });

  setTimeout(() => {
    mongoose.disconnect();
  }, 1200);

  console.info(`${constantType}s assigned!`);
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

  await mongoose.set('strictQuery', false);
  await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
}

async function seedInfo(info) {
  await CONNECT_TO_DB();
  await info;
}

function remove_SOLDOUT_tag(string) {
  const newString = string.replace(' - SOLD OUT!!', '');

  return newString;
}

const [sWeekDay, sMon, sDay, sYear] =  new Date(10/19/2023).toString().split(' ');
const [eWeekDay, eMon, eDay, eYear] =  new Date(10/21/2023).toString().split(' ');
const newEvent = [{
  title: 'CWAT',
  subTitle: 'Conference With A Twist',
  dateStart:  new Date('October 19, 2023'),
  dateEnd: new Date('October 21, 2023'),
  location: 'Destin, FL'
}]
async function addEvent(event) {
  await Event.deleteMany({})
  await Event.insertMany(event)
  mongoose.disconnect();
}

// seedInfo(assignNumberIdToCollectionDocuments(User, 'userNumber'));
seedInfo(addEvent(newEvent));
