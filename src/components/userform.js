import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Field } from "formik";
import Data from "../user.json";

function UserForm({ errors, touched }) {
  //console.log(errors);

  return (
    <div>
      <h1>User Registration</h1>
      <Form>
        <div className="user-details">
          <div>
            <label>First Name</label>
            <Field
              type="text"
              className={
                touched.firstname
                  ? `${errors.firstname ? "invalid" : "valid"}`
                  : ``
              }
              name="firstname"
              id="firstname"
              placeholder="Enter First Name"
            />
            <small>{errors.firstname}</small>
          </div>

          <div>
            <label>Last Name</label>
            <Field
              className={
                touched.lastname
                  ? `${errors.lastname ? "invalid" : "valid"}`
                  : ``
              }
              name="lastname"
              type="text"
              placeholder="Enter Last Name"
            />
            <small>{errors.lastname}</small>
          </div>

          <div>
            <label>Gender</label>
            <div className="gender">
              <div>
                <Field type="radio" name="gender" value="Female" />
                Female
              </div>
              <div>
                <Field type="radio" name="gender" value="Male" />
                Male
              </div>
              <small>{errors.gender}</small>
            </div>
          </div>

          <div>
            <label>Date of Birth</label>
            <Field name="startDate" type="date" />

            {/* {({ values, setFieldValue }) => (
              <DatePicker
                selected={values.startDate}
                dateFormat="MMMM d, yyyy"
                className="form-control"
                name="startDate"
                onChange={(date) => setFieldValue("startDate", date)}
              />
            )} */}
            <small>{errors.startDate}</small>
          </div>
          {/* )} */}

          <div>
            <label>Email</label>
            <Field
              className={
                touched.email ? `${errors.email ? "invalid" : "valid"}` : ``
              }
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <small>{errors.email}</small>
          </div>
          <div>
            <label>Mobile Number</label>
            <Field
              className={
                touched.mobile ? `${errors.mobile ? "invalid" : "valid"}` : ``
              }
              name="mobile"
              type="number"
              placeholder="Enter your mobile number"
            />
            <small>{errors.mobile}</small>
          </div>

          <div>
            <label>State</label>

            <Field
              as="select"
              name="state"
              className={
                touched.state ? `${errors.state ? "invalid" : "valid"}` : ``
              }
            >
              <option>Select State</option>

              {Data.map((state) => {
                let s = state.name;
                return (
                  <>
                    <option>{s}</option>
                  </>
                );
              })}
            </Field>
            <small>{errors.state}</small>
          </div>

          <div>
            <label>District</label>
            <Field
              as="select"
              name="district"
              className={
                touched.district
                  ? `${errors.district ? "invalid" : "valid"}`
                  : ``
              }
            >
              <option value="">Select District</option>

              {Data.map((district) => {
                return district.districts.map((d) => {
                  return (
                    <>
                      <option>{d.name}</option>
                    </>
                  );
                });
              })}
            </Field>
            <small>{errors.district}</small>
          </div>
        </div>
        <div className="address-details">
          <label>Address</label>
          <Field
            as="textarea"
            className={
              touched.address ? `${errors.address ? "invalid" : "valid"}` : ``
            }
            name="address"
            placeholder="Enter your address"
          ></Field>
          <small>{errors.address}</small>
        </div>
        <div className="button">
          <button type="submit">Register</button>
        </div>
      </Form>
    </div>
  );
}

export default UserForm;
