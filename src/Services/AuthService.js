// import { useNavigate } from "react-router-dom";

export const logout = async () => {
    try {
      await localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.log("Error removing userToken:", error);
    }
  };
  
  export const getAccessTokenFromLocal = async () => {
    try {
      const token = await localStorage.getItem("token");
      return token;
    } catch (error) {
      console.log("Error retrieving token:", error);
      return null;
    }
  };
  