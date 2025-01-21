import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../auth/AuthProvider.jsx";
import { Navigate } from "react-router";

import Home from "../pages/Home/Home.jsx";
import Heroes from "../pages/Heros/Heros.jsx";
import Contact from "../pages/Contact/contact.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default function Router() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />

            <Route 
                path="/héros" 
                element={
                    <ProtectedRoute>
                        <Heroes />
                    </ProtectedRoute>
                } 
            />
        </Routes>
    ); 
}