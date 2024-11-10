import React, { useState } from 'react'
import { X } from 'lucide-react'
import { Heading } from './Heading'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'
import moment from 'moment'

const ConsultationModal = ({ isOpen, onClose, onSubmit }) => {
  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    appointmentDate: '',
    comments: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
  
const formattedDate = moment(appointment.appointmentDate).format('DD-MM-YY');
console.log(formattedDate); 
  
    try {
      const response = await axios.post("http://localhost:3000/api/v1/appointment/appointments", {
        name: appointment.name,
        email: appointment.email,
        appointmentDate: formattedDate,
        comments: appointment.comments,
      });
      
      if (response.status === 201) {
        toast.success("Appointment booked successfully");
        setAppointment({
          name: '',
          email: '',
          appointmentDate: '',
          comments: '',
        });
      }
    } catch (error) {
      console.error("Appointment booking error:", error);
      toast.error("Error booking appointment");
    }
  };
  
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50">
       <Toaster position="top-right" reverseOrder={false} />
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-gray-800">
        <div className="mt-3 text-center">
          <Heading label={"Schedule a Consulatation"}/>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="mt-2 px-7 py-3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={appointment.name}
                  onChange={(e) => setAppointment({...appointment, name: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={appointment.email}
                  onChange={(e) => setAppointment({...appointment, email: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-300">Appointment Date</label>
                <input
                  type="date"
                  name="appointmentDate"
                  id="appointmentDate"
                  value={appointment.appointmentDate}
                  onChange={(e) => setAppointment({...appointment, appointmentDate: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={appointment.comments}
                  onChange={(e) => setAppointment({...appointment, comments: e.target.value})}
                  className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-gray-700 text-white"
                  required
                ></textarea>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Schedule Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultationModal