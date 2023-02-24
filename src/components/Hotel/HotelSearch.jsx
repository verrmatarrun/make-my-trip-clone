import React, { useState, useEffect } from "react";
import "./hotel.css";

const HotelSearch = ({
  from,
  setfrom,

  HotelsProps,
  setFilteredHotels,
}) => {
  const [hotels, setHotels] = useState([]);

  const [hotelOption, setHotelOption] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels`
      );
      const data = await response.json();
      setHotelOption(data);
      setHotels(data);
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
    let data = [...HotelsProps];
    let result = data.filter((data) => data.city == from);
    setFilteredHotels(result);
  };

  const handleFromChange = (event) => {
    setfrom(event.target.value);
  };
  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleDepartureChange = (event) => {
    setDepart(event.target.value);
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
                    {hotelOption.map((city, index) => (
                      <option key={index} value={city.city}>
                        {city.city}
                      </option>
                    ))}
                  </select>
                  <label htmlFor='floatingSelectGrid'>CITY </label>
                </div>
              </div>

              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='date'
                    className='form-control'
                    onChange={handleDepartureChange}
                  />
                  <label htmlFor='floatingSelectGrid'>CHECK-IN</label>
                </div>
              </div>
              <div className='col-md'>
                <div className='form-floating'>
                  <input
                    type='date'
                    className='form-control'
                    onChange={handleDepartureChange}
                  />
                  <label htmlFor='floatingSelectGrid'>CHECK-OUT</label>
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
                      Select class
                    </option>
                    <option value=''>A</option>
                    <option value=''>B</option>
                    <option value=''>C</option>
                  </select>
                  <label htmlFor='floatingSelectGrid'>CLASS</label>
                </div>
              </div>
            </div>
            <div className='container d-flex justify-content-center position-relative'>
              <button type='submit' id="btn" style={{marginTop:"20px"}} className='btn bg-primary btn-primary px-5  '>
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HotelSearch;
