import React from 'react'
import {Table, Row,Col} from 'react-bootstrap'
import { withRouter } from 'next/router'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/fr';
moment.locale("fr");
moment.updateLocale("fr", {
	week: {
		dow: 1,
		doy: 4,
	},
});
const localizer = momentLocalizer(moment)

class CalendarTab extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let {rentals, bookings} = this.props
    var events = []
    for(var i=0 ; i < rentals.length; i++){
      events.push({
          start:rentals[i].date_begin,
          end:rentals[i].date_end,
          title:"Location "+rentals[i].id+" - "+rentals[i].customer.firstname +" "+rentals[i].customer.lastname ,
        })
    }
    for(var i=0 ; i < bookings.length; i++){
      events.push({
          start:bookings[i].date_begin,
          end:bookings[i].date_end,
          title:"Réservation "+bookings[i].id+" - "+bookings[i].customer.firstname +" "+bookings[i].customer.lastname  ,
        })
    }

    return (
      <Row className="col-sm-12" style={{height:"600px",margin:"20px"}}>
      <center>
      <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={{
              month: 'Mois',
              day: 'Jour',
              week: 'Semaine',
              today: 'Aujourd\'hui',
              previous: '<',
              next:'>'
            }}
        />
        </center>
      </Row>
    )
  }
}

export default withRouter(CalendarTab)
