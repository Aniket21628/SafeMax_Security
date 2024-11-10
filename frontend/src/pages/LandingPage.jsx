import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ChevronDown, Lock, Zap, Users, CheckCircle, Star, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { Heading } from '../components/Heading';
import NavBarButton from '../components/NavBarButton';
import NavBarButton2 from '../components/NavBarButton2';
import SubText from '../components/SubText';
import TestimonialCard from '../components/TestimonialCard';
import axios from 'axios';
import ConsultationModal from '../components/ConsulationModal';
import toast, {Toaster} from 'react-hot-toast';
import logo from '../assets/logo.jpg';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [query, setQuery] = useState([
    {
      name: '',
      email: '',
      subject: '',
      comments: '',
    }
  ])
  const navigate = useNavigate();

  const handleQuerySubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post("https://safemax-security-uxq6.onrender.com/api/v1/appointment/queries", {
        name:query.name,
        email:query.email,
        subject:query.subject,
        comments:query.comments,
      });
      if(response.status === 201){
        toast.success("Query Sent Successfully");
        setQuery({
          name: '',
          email: '',
          subject: '',
          comments: '',
        });     
      }     
    } catch (error) {
      console.error("Failed Sending Query", error);
      toast.error("Query Could Not Be Sent");
    }    
  }
  const handleConsultationSubmit = (appointmentData) => {
    console.log('Consultation booked:', appointmentData)
  }

  const gotoAdmin = () => {
    navigate("/signin");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Toaster position="top-right" reverseOrder={false} />
      <nav className="bg-gray-900 shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
           <div className="flex items-center space-x-2">
              <a href="#">
                <img src={logo} alt="SafeMax Logo" className="h-10 w-10 rounded-full" />
              </a>
              <span className="text-xl font-bold text-white lg:block xl:block md:hidden">SafeMax Security</span>
            </div>
            <div className="hidden sm:flex space-x-8">
              <NavBarButton label="about" name="About" />
              <NavBarButton label="services" name="Services" />
              <NavBarButton label="why-choose-us" name="Why Choose Us" />
              <NavBarButton label="testimonials" name="Testimonials" />
              <NavBarButton label="contact" name="Contact" />
              <button
                type="button"
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                onClick={gotoAdmin}
              >
                Admin Login
              </button>
            </div>
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <ChevronDown className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} />
                <ChevronDown className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} />
              </button>
            </div>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavBarButton2 label="about" name="About" />
            <NavBarButton2 label="services" name="Services" />
            <NavBarButton2 label="why-choose-us" name="Why Choose Us" />
            <NavBarButton2 label="testimonials" name="Testimonials" />
            <NavBarButton2 label="contact" name="Contact" />
            <button
              type="button"
              className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              onClick={gotoAdmin}
            >
              Admin Login
            </button>
          </div>
        </div>
      </nav>
      <section className="bg-gray-800 text-white p-6">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <br />
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Secure Your Digital Future
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Comprehensive Vulnerability Assessment & Penetration Testing Services
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
            <button
                onClick={() => setIsModalOpen(true)}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-12 bg-gray-900">
        <br />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg text-teal-400 font-semibold tracking-wide uppercase">About Us</h2>
            <Heading label={"Innovating Cybersecurity Since 2020"}/>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              SafeMax Security has been at the forefront of cybersecurity innovation, offering comprehensive and tailored Vulnerability Assessment & Penetration Testing (VAPT) services to secure the digital assets of businesses worldwide.
            </p>
          </div>
        </div>
        <br />
      </section>
      <section id="services" className="py-12 bg-gray-800">
        <br />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg text-teal-400 font-semibold tracking-wide uppercase">Our Services</h2>
            <Heading label={"Comprehensive Cybersecurity Solutions"}/>
          </div>
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <Lock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-white">Vulnerability Assessment</h3>
                  <SubText label={"Comprehensive scanning and analysis to identify potential vulnerabilities in your systems."} />
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-white">Penetration Testing</h3>
                  <SubText label={"Simulated cyber attacks to test your defenses and identify security weaknesses."} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>

      <section id="why-choose-us" className="py-12 bg-gray-900">
        <br />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg text-teal-400 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <Heading label={"Unparalleled Expertise and Innovation"}/>
          </div>
          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-white">Experienced Team</h3>
                    <SubText label={"Our team of cybersecurity experts brings years of experience and cutting-edge knowledge."} />
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-white">Proven Track Record</h3>
                    <SubText label={"Trusted by over 50 clients, including 22 international organizations across diverse industries."} />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <br />
      </section>

      <section id="testimonials" className="py-12 bg-gray-800">
        <br />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-lg text-teal-400 font-semibold tracking-wide uppercase">Testimonials</h2>
      <Heading label={"What Our Clients Say"}/>
    </div>
    <div className="mt-10 relative overflow-hidden">
      <div class="flex animate-testimonial-carousel">
        <TestimonialCard name={"- John Doe, CTO of Tech Innovators Inc."} message={"\"SafeMax Security's VAPT services have been instrumental in strengthening our cybersecurity posture. Their team's expertise and thorough approach gave us confidence in our systems' security.\""}/>
        <TestimonialCard name={"- Jane Doe, CIO of Acme Corp."} message={"\"We've been extremely satisfied with the level of service and expertise provided by SafeMax Security. Their VAPT assessments have helped us identify and address critical vulnerabilities in our systems.\""}/>
        <TestimonialCard name={"- Bob Smith, CISO of Global Enterprises"} message={"\"SafeMax Security's VAPT services have been a game-changer for our organization. The insights they provided have empowered us to significantly strengthen our cybersecurity posture.\""}/>
        <TestimonialCard name={"- John Doe, CTO of Tech Innovators Inc."} message={"\"SafeMax Security's VAPT services have been instrumental in strengthening our cybersecurity posture. Their team's expertise and thorough approach gave us confidence in our systems' security.\""}/>
        <TestimonialCard name={"- Jane Doe, CIO of Acme Corp."} message={"\"We've been extremely satisfied with the level of service and expertise provided by SafeMax Security. Their VAPT assessments have helped us identify and address critical vulnerabilities in our systems.\""}/>
        <TestimonialCard name={"- Bob Smith, CISO of Global Enterprises"} message={"\"SafeMax Security's VAPT services have been a game-changer for our organization. The insights they provided have empowered us to significantly strengthen our cybersecurity posture.\""}/>
      </div>
    </div>
  </div>
  <br />
</section>

      <section id="contact" className="py-12 bg-gray-900">
        <br />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-lg text-teal-400 font-semibold tracking-wide uppercase">Contact Us</h2>
            <Heading label={"Have a Question?"}/>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              We're here to help. Send us your query and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-10 max-w-lg mx-auto">
            <form onSubmit={handleQuerySubmit} className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="queryName" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="queryName"
                  id="queryName"
                  value={query.name}
                  onChange={(e) => setQuery({ ...query, name: e.target.value })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="queryEmail" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="queryEmail"
                  id="queryEmail"
                  value={query.email}
                  onChange={(e) => setQuery({ ...query, email: e.target.value })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="querySubject" className="block text-sm font-medium text-gray-300">Subject</label>
                <input
                  type="text"
                  name="querySubject"
                  id="querySubject"
                  value={query.subject}
                  onChange={(e) => setQuery({ ...query, subject: e.target.value })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="queryMessage" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="queryMessage"
                  name="queryMessage"
                  rows={4}
                  value={query.comments}
                  onChange={(e) => setQuery({ ...query, comments: e.target.value })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-gray-700 text-white"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Submit Query
                </button>
              </div>
            </form>
          </div>
        </div>
        <br />
      </section>

      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/safemax-security/" target="_blank" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2024 SafeMax Security. All rights reserved.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleConsultationSubmit}
      />
    </div>
  )
}