import React from 'react'
import { Calendar } from 'react-native-calendars'

const OtherCalendar = ({ contactMarkedDates }) => {


    return (
        <Calendar
            markedDates={contactMarkedDates}
        />
    )
}

export default OtherCalendar
