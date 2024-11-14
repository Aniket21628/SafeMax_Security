import React, { useState, useEffect, useRef, useContext } from 'react';
import { 
  Users, LogOut, Menu,
  BarChart2,  Calendar, MessageSquare, UserPlus
} from 'lucide-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast';
import AuthContext from '../components/AuthContext';
import logo from '../assets/logo.jpg';

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)
  const [newUser, setNewUser] = useState({ 
    firstname: '',
    lastname: '',
    username: '',
    password: '' })
  const [appointments, setAppointments] = useState([])
  const [queries, setQueries] = useState([])
  const [adminUsers, setAdminUsers] = useState([])
  const navigate = useNavigate();

  const sidebarRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

const { authToken } = useContext(AuthContext); 

const handleAppointmentStatusChange = async (id, newStatus) => {
    if (!id) {
        console.warn("No ID provided to handleAppointmentStatusChange");
        return;
    }

    console.log(`Changing status for appointment ID: ${id} to ${newStatus}`);

    try {
        await axios.put(`https://safemax-security-uxq6.onrender.com/api/v1/admin/appointments/${id}/status`, 
            { status: newStatus }, 
            {
                headers: {
                    'Authorization': `Bearer ${authToken}` 
                }
            }
        );

        setAppointments(appointments.map(app => 
            app._id === id ? { ...app, status: newStatus } : app
        ));
        toast.success("Appointment status updated successfully!");
    } catch (error) {
        console.error("Error updating appointment status:", error);
        toast.error("Failed to update appointment status. Please try again.");
    }
};

const handleQueryStatusChange = async (id, newStatus) => {
    if (!id) {
        console.warn("No ID provided to handleQueryStatusChange");
        return;
    }

    console.log(`Changing status for query ID: ${id} to ${newStatus}`);

    try {
        await axios.put(`https://safemax-security-uxq6.onrender.com/api/v1/admin/queries/${id}/status`, 
            { status: newStatus }, 
            {
                headers: {
                    'Authorization': `Bearer ${authToken}` 
                }
            }
        );

        setQueries(queries.map(query => 
            query._id === id ? { ...query, status: newStatus } : query
        ));
        toast.success("Query status updated successfully!");
    } catch (error) {
        console.error("Error updating query status:", error);
        toast.error("Failed to update query status. Please try again.");
    }
};


const logout = () => {
  toast("Signing Out....", {
    duration: 2000,
  });
  setTimeout(() => {
    sessionStorage.removeItem("token");
    navigate("/signin");
  }, 2000); 
}

const toggleSidebar = () => {
  setIsSidebarOpen(prevState => !prevState);
};

useEffect(() => {
  const fetchAdminUsers = async () => {
      try {
          const response = await axios.get('https://safemax-security-uxq6.onrender.com/api/v1/admin/adminUsers', {
              headers: {
                  'Authorization': `Bearer ${authToken}` 
              }
          });
          setAdminUsers(response.data.adminUsers);
      } catch (error) {
          console.error("Error fetching admin users:", error);
          toast.error("Failed to fetch admin users. Please try again.");
      }
  };

  if (authToken) fetchAdminUsers();
}, [authToken]); 

useEffect(() => {
  const fetchAppointments = async () => {
      try {
          const response = await axios.get('https://safemax-security-uxq6.onrender.com/api/v1/appointment/appointments', {
              headers: {
                  'Authorization': `Bearer ${authToken}` 
              }
          });
          setAppointments(response.data.appointments);
      } catch (error) {
          console.error("Error fetching appointments:", error);
          toast.error("Failed to fetch appointments. Please try again.");
      }
  };

  if (authToken) fetchAppointments();
}, [authToken]); 

useEffect(() => {
  const fetchQueries = async () => {
      try {
          const response = await axios.get('https://safemax-security-uxq6.onrender.com/api/v1/appointment/queries', {
              headers: {
                  'Authorization': `Bearer ${authToken}` 
              }
          });
          setQueries(response.data.queries);
      } catch (error) {
          console.error("Error fetching queries:", error);
          toast.error("Failed to fetch queries. Please try again.");
      }
  };

  if (authToken) fetchQueries();
}, [authToken]); 

const handleAddUser = async (event) => {
  event.preventDefault();

  if (!newUser.username || !newUser.firstname || !newUser.lastname || !newUser.password) {
      toast.error("Please fill in all fields");
      return;
  }

  try {
      const response = await axios.post(
          'https://safemax-security-uxq6.onrender.com/api/v1/admin/adminUsers/signup',
          {
              firstname: newUser.firstname,
              lastname: newUser.lastname,
              username: newUser.username,
              password: newUser.password
          },
          {
              headers: {
                  'Authorization': `Bearer ${authToken}` 
              }
          }
      );

      if (response.status === 201) {
          toast.success('User added successfully!');
          setNewUser({ username: '', firstname: '', lastname: '', password: '' });
          setIsAddUserModalOpen(false);
      }
  } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user. Please try again.");
  }
};

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-2 lg:grid-cols-3 gap-4">
      <Toaster
  position="top-center"
  reverseOrder={false}
/>  
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-white text-lg font-semibold mb-2">Total Appointments</h3>
          <p className="text-white text-3xl font-bold">{appointments.length}</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-white text-lg font-semibold mb-2">Total Queries</h3>
          <p className="text-white text-3xl font-bold">{queries.length}</p>
        </div>

        <div className="hidden lg:block bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-white text-lg font-semibold mb-2">Admin Users</h3>
          <p className="text-white text-3xl font-bold">{adminUsers.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 px-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-white text-lg font-semibold mb-2">Pending Appointments</h3>
          <p className="text-white text-3xl font-bold">
            {appointments.filter((appointment) => appointment.status === 'pending').length}
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-white text-lg font-semibold mb-2">New Queries</h3>
          <p className="text-white text-3xl font-bold">
            {queries.filter((query) => query.status === 'new').length}
          </p>
        </div>

        <div className="block lg:hidden bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-white text-lg font-semibold mb-2">Admin Users</h3>
          <p className="text-white text-3xl font-bold">{adminUsers.length}</p>
        </div>
      </div>
    </>
  );


      case 'appointments':
        return (
          <div className=" px-4 sm:px-6 lg:px-0.5">
  <Toaster position="top-right" reverseOrder={false} />
  <h2 className="text-white text-xl font-semibold mb-4">Appointment Management</h2>
  <div className="bg-gray-800 rounded-lg shadow overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-700">
      <thead className="bg-gray-700">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Comments</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider" style={{ width: '170px' }}>Actions</th>
        </tr>
      </thead>
      <tbody className="bg-gray-800 divide-y divide-gray-700">
        {appointments.map((appointment) => (
          <tr key={appointment._id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{appointment.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{appointment.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{appointment.appointmentDate}</td>
            <td className="px-6 py-4 text-sm text-gray-300 lg:max-w-[300px]">
                    <div className="break-words whitespace-normal">{appointment.comments}</div>
                  </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {appointment.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ width: '170px' }}>
              <select 
                value={appointment.status}
                onChange={(e) => handleAppointmentStatusChange(appointment._id, e.target.value)}
                style={{ width: '120px' }} 
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="canceled">Canceled</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
)
        case 'queries':
          return (
            <div className="px-4 sm:px-6 lg:px-0.5">
      <Toaster position="top-right" reverseOrder={false} />
        <h2 className="text-white text-xl font-semibold mb-4">Query Management</h2>
        <div className="bg-gray-800 rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider lg:w-[300px]">Comments</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-[170px]">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {queries.map((query) => (
                <tr key={query._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{query.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{query.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{query.subject}</td>
                  <td className="px-6 py-4 text-sm text-gray-300 lg:max-w-[300px]">
                    <div className="break-words whitespace-normal">{query.comments}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      query.status === 'resolved' ? 'bg-green-100 text-green-800' : 
                      query.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-red-100 text-red-800'
                    }`}>
                      {query.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <select 
                      value={query.status}
                      onChange={(e) => handleQueryStatusChange(query._id, e.target.value)}
                      className="w-[120px] block py-2 px-3 border border-gray-300 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                      <option value="new">New</option>
                      <option value="in-progress">In-Progress</option>
                      <option value="resolved">Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

          );
        
      case 'users':
        return (
          <div className="px-4 sm:px-6 lg:px-8">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-xl font-semibold">Admin User Management</h2>
              <button
  onClick={() => setIsAddUserModalOpen(true)}
  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm py-1.5 px-3 rounded inline-flex items-center sm:py-2 sm:px-4 sm:text-base"
>
  <UserPlus className="mr-1.5 w-4 h-4 sm:w-5 sm:h-5" />
  Add New Admin
</button>
            </div>
            <div className="bg-gray-800 rounded-lg shadow overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Username</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Firstname</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Lastname</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {adminUsers.map((user) => (
                    <tr key={user._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.firstname}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.lastname}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Admin</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      default:
        return <div>Select a tab</div>
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div ref={sidebarRef} className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
        <div className="flex items-center space-x-2 px-4">
        <a href="">
          <img src={logo} alt="1729957758751" width={80}
          height={80}
          className="mx-auto rounded-full" />
        </a>
          <span className="text-2xl font-extrabold">SafeMax</span>
        </div>
        <nav>
          <a
            href="#"
            className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === 'dashboard' ? 'bg-teal-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart2 className="inline-block mr-2" size={16} /> Dashboard
          </a>
          <a
            href="#"
            className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === 'appointments' ? 'bg-teal-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('appointments')}
          >
            <Calendar className="inline-block mr-2" size={16} /> Appointments
          </a>
          <a
            href="#"
            className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === 'queries' ? 'bg-teal-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('queries')}
          >
            <MessageSquare className="inline-block mr-2" size={16} /> Queries
          </a>
          <a
            href="#"
            className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === 'users' ? 'bg-teal-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('users')}
          >
            <Users className="inline-block mr-2" size={16} /> Admin Users
          </a>
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-800 shadow-md">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button
              onClick={() => toggleSidebar()}
              className="text-gray-300 hover:text-white md:hidden"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-semibold text-white">Admin Dashboard</h1>
            <div className="flex items-center">
              <button className="text-gray-300 hover:text-white" onClick={logout}>
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {renderContent()}
          </div>
        </main>
      </div>

      {isAddUserModalOpen && (
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <Toaster position="top-right" reverseOrder={false} />
    <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-sm sm:w-full">
        <div className="bg-gray-800 px-8 py-6">
          <h3 className="text-lg font-medium text-white text-center mb-6">Add New Admin User</h3>
          <form onSubmit={handleAddUser} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={newUser.username}
                onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                className="w-full h-10 px-3 rounded-md bg-gray-700 border border-gray-600 focus:border-teal-500 focus:ring-teal-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-300">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={newUser.firstname}
                onChange={(e) => setNewUser({...newUser, firstname: e.target.value})}
                className="w-full h-10 px-3 rounded-md bg-gray-700 border border-gray-600 focus:border-teal-500 focus:ring-teal-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-300">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={newUser.lastname}
                onChange={(e) => setNewUser({...newUser, lastname: e.target.value})}
                className="w-full h-10 px-3 rounded-md bg-gray-700 border border-gray-600 focus:border-teal-500 focus:ring-teal-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={newUser.password}
                onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                className="w-full h-10 px-3 rounded-md bg-gray-700 border border-gray-600 focus:border-teal-500 focus:ring-teal-500 text-white"
                required
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="px-4 py-2 mr-2 rounded-md bg-gray-600 text-gray-300 hover:bg-gray-500 focus:outline-none"
                onClick={() => setIsAddUserModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 focus:outline-none">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )}
    </div>
  )
}