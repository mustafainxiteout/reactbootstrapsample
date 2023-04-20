import React from "react";
import Courses from "./components/Courses";


function App() {
  /*useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      const tokenExpiration = new Date(token.expiration);
      const now = new Date();
      const timeRemaining = tokenExpiration.getTime() - now.getTime();
      if (timeRemaining <= 10000) {
        localStorage.removeItem('access_token');
      } else {
        setTimeout(() => {
          localStorage.removeItem('access_token');
        }, timeRemaining);
      }
    }
  }, []);
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      const expirationTime = JSON.parse(atob(token.split('.')[1])).exp * 1000;
      if (Date.now() >= expirationTime) {
        localStorage.removeItem('access_token');
      }
    }
  }, []);

  // UseEffect hook to check for expired tokens and delete them
useEffect(() => {
  const expiryTime = localStorage.getItem('expiration_time');
  if (expiryTime && new Date().getTime() > parseInt(expiryTime)) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiration_time');
  }
}, []);*/
  return (
    <div className="googlesans">
      <Courses/>
    </div>
  );
}

export default App;
