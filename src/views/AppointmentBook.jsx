import React from "react";
import { useState, useRef } from "react";
import BookingForm from "../components/BookingForm";
import Nav from "../components/Nav";
import axios from "axios";


function AppointmentBook(props) {
  // const [availableTimeForm, setAvailableTimeForm] = useState({});
  const [availableTime, setAvailableTime] = useState([]);

  // const dateRef = useRef("");

   
  async function bookAppointmentHandler(bookData) {
    const formData = new FormData();
    formData.append('date', bookData.date);
    formData.append('time', bookData.time);
    formData.append('reference', bookData.reference);
    formData.append('subject', bookData.subject);
  

    console.log(bookData);
    axios.post('http://localhost/php%20projects/Briefs/frontend_dental-appointment/backend/public/home/book', formData).then(response => {
      console.log(response);
      console.log(response.data);
      if (response.statusText === 'OK') {
        console.log(response.data);
        // setUserRegistered(true);
      }
      
    }  
    ).catch(error => {
      console.log(error);
    }
      )
  }
  
  async function availableTimeHandler(date) {
    const formData = new FormData();
    formData.append('date', date);

    console.log(date);
    axios.post('http://localhost/php%20projects/Briefs/frontend_dental-appointment/backend/public/appointment/getAllSlots', formData).then(response => {
      console.log(response);
      console.log(response.data);
      if (response.statusText === 'OK') {
        console.log(response.data);
        setAvailableTime(response.data);
        // setUserRegistered(true);
      }
      
    }  
    ).catch(error => {
      console.log(error);
    }
      )
  }

  return (
    <div>
      <Nav />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-2 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-4 lg:mb-0">
              <BookingForm  onSaveDataBook={bookAppointmentHandler} onSaveDataDate={availableTimeHandler} timeAvailable={availableTime}  />
            </div>            
            <img
              alt="e-commerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="http://localhost/php%20projects/Briefs/frontend_dental-appointment/backend/public/assets/images/undraw_medicine.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AppointmentBook;
