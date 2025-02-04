import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import eventList from '../Components/Events/eventList';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalender = (props) => (
  <div className="p-10">
    <Calendar
      localizer={localizer}
      events={eventList.events}
      defaultDate={new Date()}
      defaultView="month"
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);


export default MyCalender;