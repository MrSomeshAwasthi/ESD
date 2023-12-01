import { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import Navbar from './Navbar';
import { createRef } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import listPlugin from '@fullcalendar/list';
import codePlugin from "@fullcalendar/core";
// import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'react-calendar/dist/Calendar.css';
import EventItem from './EventItem';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import loadingGif from '../images/loading.gif';
import { useNavigate } from 'react-router-dom';
// import "@fullcalendar/core/main.css";  
// import "@fullcalendar/daygrid/main.css";  

// const ValuePiece = Date | null;

// const Value = ValuePiece | [ValuePiece, ValuePiece];

const MyCalendar = () => {
  // const [value, onChange] = useState<Value>(new Date());


  const [data, setData] = useState([])
  const [state, setState] = useState([]);
  const [authState, setAuthState] = useState(false);

  const calendarComponentRef = useRef();
  const ValuePiece = Date | null;
  const Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, setValue] = useState(new Date());

  const [event, setEvents] = useState(null);

  const fetchData = async (id) => {

    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:9191/get_course_by_student_id?student_id=${id}`)
        .then((res) => { resolve(res.data) })
        .catch((error) => { reject(error) })
    })
  }

  const navigate = useNavigate();

  window.history.forward();


  useEffect(() => {
    
    const auth = window.localStorage.getItem('IsAuthenticated');
    console.log("auth: "+auth);
    if(auth===null){
      navigate('/');
      return;
    }

    const student = JSON.parse(window.localStorage.getItem('student'));

    setAuthState(auth);

    // if(authState)
    // {
      let events = [];
      fetchData(student.student_id)
        .then((data) => {
          setData(data);
          return data
        })
        .then((data) => {
          // console.log(data);
          data.map((course) => {
            course.schedules.map((schedule) => {
              events.push({
                id: uuidv4(),
                title: course.course_name,
                start: schedule.time.slice(0, 19),
                allDay: false,
                extendedProps: {
                  course_code: course.course_code,
                  day: schedule.day,
                  room: schedule.room,
                  building: schedule.building
                }
              })
            })
          })
          setEvents(events);
        })
    // }

    // const events;
  }, []);




  const handleDateChange = (e) => {
    setValue(e);
    let calApi = calendarComponentRef.current.getApi();
    calApi.gotoDate(e);
  }


  return (
    <>
      {
        event
          ?

          <div>
            {/* {console.log(event)} */}
            {/* {JSON.stringify(events)} */}
            <Navbar props={{"page":"cal"}}/>
            <div className='container cal'>
              <div className='row'>
                <div className='col-md-3'>
                  <Calendar onChange={handleDateChange} value={value} />
                </div>
                <div className='col-md-9'>
                  <FullCalendar
                    schedulerLicenseKey="GPL-My-Project-Is-Open-Source"

                    ref={calendarComponentRef}
                    initialView='listWeek'
                    displayEventTime={true}
                    headerToolbar={{
                      left: "prev,next,today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                    }}
                    selectable={true}
                    plugins={[
                      dayGridPlugin,
                      interactionPlugin,
                      timeGridPlugin,
                      resourceTimeGridPlugin,
                      listPlugin
                    ]}
                    eventClick={event => {
                      console.log(event.event._def.publicId);
                    }}
                    events={event}
                    eventContent={(info) => <EventItem info={info} />}

                  />
                </div>
              </div>
            </div>
          </div>

          :
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
      }
    </>
  );
}

export default MyCalendar;