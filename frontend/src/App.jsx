import React , {useContext} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import LandingPage from "./pages/LandingPage";
import AdminSignIn from './pages/SignIn';
import AdminDashboard from './pages/DashBoard';
import NotFound from './pages/Error';
import AuthContext from './components/AuthContext';

function App() {
  const { authToken } = useContext(AuthContext);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<AdminSignIn />}></Route>
          <Route
          path="/dashboard"
          element={authToken ? <AdminDashboard /> : <Navigate to="/signin" />}
        />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;