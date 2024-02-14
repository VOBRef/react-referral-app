import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { getAccessTokenFromLocal } from "./AuthService"; 

const useAuthGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await getAccessTokenFromLocal();
      const isRegisterPage = location.pathname === '/register';

      if (!token && !isRegisterPage) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate, location.pathname]);

  return null;
};

export default useAuthGuard;
