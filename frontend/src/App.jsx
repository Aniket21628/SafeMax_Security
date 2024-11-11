import React, { useContext, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from './components/AuthContext';

// Lazy load components for better performance
const LandingPage = lazy(() => import("./pages/LandingPage"));
const AdminSignIn = lazy(() => import('./pages/SignIn'));
const AdminDashboard = lazy(() => import('./pages/DashBoard'));
const NotFound = lazy(() => import('./pages/Error'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
  </div>
);

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { authToken } = useContext(AuthContext);
  
  if (!authToken) {
    // Redirect to signin if not authenticated
    return <Navigate to="/signin" replace />;
  }
  
  return children;
};

function App() {
  const { authToken } = useContext(AuthContext);
  
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/signin" 
            element={authToken ? <Navigate to="/dashboard" replace /> : <AdminSignIn />}
          />
          
          {/* Protected dashboard route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          
          {/* 404 route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;