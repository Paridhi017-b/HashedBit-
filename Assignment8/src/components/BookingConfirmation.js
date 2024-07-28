import React from 'react';
import { useLocation, Link } from 'react-router-dom';



const Confirmation = () => {
  const location = useLocation();
  const { name, email, mobile, bookingId } = location.state || {};

  if (!location.state) {
    return <p>No booking details found.</p>;
  }

  return (
    <div className="confirmation">
      <h1>Booking Confirmation!!!!!</h1>
      <p>Thank you, {name}! Your booking is confirmed.</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      <p>Booking ID: {bookingId}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Confirmation;







