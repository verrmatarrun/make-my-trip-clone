import React, { useState, useEffect } from "react";
import "./flight.css";

const FlightSearch = ({
  from,
  setfrom,
  to,
  setTo,
  depart,
  setDepart,
  arrival,
  setArrival,
  flightsProps,
  setFilteredFlights,
}) => {
  const [flights, setFlights] = useState([]);

  const [flightOption, setFlightOption] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights`
      );
      const data = await response.json();
      setFlightOption(data);
      setFlights(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = [...flightsProps];
    let result = data.filter((data) => data.from == from && data.to == to);
    setFilteredFlights(result);
  };

  const handleFromChange = (event) => {
    setfrom(event.target.value);
    // console.log(event.target.value);
  };
  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleDepartureChange = (event) => {
    setDepart(event.target.value);
  };

  const handleReturnChange = (event) => {
    setArrival(event.target.value);
  };

  return (
    <>
      <div className='flight-search-section'>
        <div className='container  bg-light  rounded-3 px-5 '>
          <form
            onSubmit={handleSubmit}
            className='pb-5 pt-3'
            style={{ width: "100%", marginLeft: "100px" }}
          >
            <div className='row g-2'>
              <div className='col-md'>
                <div className='form-floating'>
                  <select
                    className='form-select'
                    id='floatingSelectGrid'
                    aria-label='Floating label select example'
                    defaultValue='1'
                    onChange={handleFromChange}
                  >
                    <option value='' disabled>
                      Select City
                    </option>
                    {flightOption.map((form, index) => (
                      <option key={index} value={form.from}>
                        {form.from}
                      </option>
                    ))}
                  </select>
                  <label htmlFor='floatingSelectGrid'>FROM</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <select
                    className='form-select'
                    id='floatingSelectGrid'
                    aria-label='Floating label select example'
                    defaultValue='2'
                    onChange={handleToChange}
                  >
                    <option value='' disabled>
                      Select City
                    </option>
                    {flightOption.map((to, index) => (
                      <option key={index} value={to.to}>
                        {to.to}
                      </option>
                    ))}
                  </select>
                  <label htmlFor='floatingSelectGrid'>TO</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='date'
                    className='form-control'
                    onChange={handleDepartureChange}
                  />
                  <label htmlFor='floatingSelectGrid'>Departure Date</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='date'
                    className='form-control'
                    onChange={handleReturnChange}
                  />
                  <label htmlFor='floatingSelectGrid'>Return Date</label>
                </div>
              </div>
            </div>
            <div className='container d-flex justify-content-center position-relative'>
              <button type='submit' id="btn" className='bg-primary btn btn-primary px-5' style={{marginTop:"20px"}}>
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
