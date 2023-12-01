import React from 'react'

const EventItem = (props) => {
    console.log(props)
    const { event } = props.info;
    console.log(event.extendedProps)
    return (
        <div className='event'>
            <div>
                <span>Subject: {event.title}</span>
                <span>Room: {event.extendedProps.course_code}</span>

            </div>
            <div>

                <span>Room: {event.extendedProps.room}</span>
                <span>Building: {event.extendedProps.building}</span>
            </div>
        </div>
    );
}

export default EventItem