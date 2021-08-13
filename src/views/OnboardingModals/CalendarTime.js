import {React, useState} from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import './CalendarTime.css'
import { Calendar, utils } from 'react-modern-calendar-datepicker';



const CalendarTime = () => {
  

    const defaultValue = {
        year: 2021,
        month: 7,
        day: 9,
    }
    
      const [selectedDay, setSelectedDay] = useState(defaultValue);
      const minimumDate = {
        year: 2010,
        month: 1,
        day: 1
      };
      return (
          <div>
        <p style={{
            textAlign: 'center',
            position:'absolute',
            left: '25%',
            marginTop: '-15%',
            fontFamily: 'Mulish, sans-serif',
            fontStyle: 'normal',
            fontWeight: 'lighter',
            fontSize: '24px',
            lineHeight: '38px',
            color: '#121212'
        }}>When did you start at Dialexa?</p>
        <Calendar
          value={selectedDay}
          onChange={setSelectedDay}
          colorPrimary="#DAB773" // added this
          calendarClassName="custom-calendar" // and this
          calendarTodayClassName="custom-today-day" // also this
          maximumDate={utils().getToday()}
          minimumDate={minimumDate}
          renderFooter={() => (   <div style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem 2rem' }}>
          <button
            type="button"
            onClick={() => {
              setSelectedDay(null)
            }}
            style={{
              position: 'absolute',
              marginTop: '-09%',
              left: '50%',
              border: '#0fbcf9',
              color: '#fff',
              borderRadius: '0.5rem',
              padding: '.8rem 3rem',
            }}
          >
            Set Date
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedDay(null)
            }}
            style={{
              position: 'absolute',
              marginTop: '-09%',
              left: '9%',
              border: '#0fbcf9',
              color: '#fff',
              borderRadius: '0.5rem',
              padding: '.8rem 3rem',
            }}
          >
           Cancel
          </button>

        </div>
        )}
        />
        </div>
      );
    };
    
  
  export default CalendarTime;