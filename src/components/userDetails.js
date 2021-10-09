import React from "react";

const UserDetails = (prop) => {
  return (
    <div>
      <h1>Your Details</h1>
      <p>
        Name: {prop.firstname}
        {prop.lastname}
      </p>
      <p>DoB: {prop.selectDate}</p>
      <p>Gender: {prop.gender}</p>
      <p>Email: {prop.email}</p>
      <p>Mobile: {prop.mobile}</p>
      <p>
        Address: {prop.address},{prop.district}
        {prop.state}
      </p>
    </div>
  );
};

export default UserDetails;
