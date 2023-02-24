import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./HSearchRes";

const HSearchRes = ({
  from,
  hotels,
  setHotels,
  filteredHotels,
  setFilteredHotels,
  modal2Open,
  setModal2Open,
}) => {
  const navigate = useNavigate();

  const [openCollaspe, setOpenCollaspe] = useState(null);

  const handleCollapse = (collapseId) => {
    if (openCollaspe === collapseId) {
      setOpenCollaspe(null);
    } else {
      setOpenCollaspe(collapseId);
    }
  };

  const handleBookNow = () => {
    navigate("/checkout");
  };

  return (
    <div className='search-result-section bg-light'>
      <div className='search-head pt-2 pb-3'>
        <div className='container'></div>
      </div>
      <div id='forms' className='container search-body bg-light'>
        {filteredHotels &&
          filteredHotels.map((data, index) => (
            <>
              <div className='accordion-item search-item'>
                <h2 className='accordion-header' id='headingOne'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='false'
                    aria-controls='collapseOne'
                    onClick={() => handleCollapse(index)}
                  >
                    <div className='row' style={{ width: "100%" }}>
                      <div className='col-lg-2 .d-none .d-sm-block'></div>
                      <div className='col-lg-2 col-sm-3'>
                        <div className='airline d-flex'>
                          <img
                            src='https://www.iconpacks.net/icons/2/free-hotel-icon-1880-thumb.png'
                            alt='log'
                            width='40'
                            height='40'
                          />
                          <div
                            className='flex-column'
                            style={{ marginLeft: "1rem" }}
                          >
                            <p>{data.hotel_name}</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                        <div className='departure-time'>
                          {/* <h5>{data.departure.departureTime}</h5> */}
                          <h5>{data.city}</h5>
                        </div>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    openCollaspe === index ? "show" : ""
                  }`}
                >
                  <div className='accordion-body'>
                    <div className='details'>
                      <div className='row mb-4'>
                        <div className='col-lg-12'>
                          <div className='row'>
                            <div className='col-lg-6'>
                              <h6>
                                <strong>Hotel Details</strong>
                              </h6>
                              <hr />

                              <div className='economy d-flex justify-content-between'>
                                <div className='list-items'>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      City : <strong> {data.city}</strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      Hotel Name :{" "}
                                      <strong> {data.hotel_name}</strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      check_in: {""}
                                      <strong>{data.check_in} </strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      check_out: {""}
                                      <strong>
                                        <strong>{data.check_out} </strong>
                                      </strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      Room Type: {""}
                                      <strong>
                                        <strong>{data.room_type} </strong>
                                      </strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      Guest: {""}
                                      <strong>
                                        <strong>{data.guests} </strong>
                                      </strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      Rating: {""}
                                      <strong>
                                        <strong>
                                          {data.rating + "/" + "10"}{" "}
                                        </strong>
                                      </strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-md-2'>
                              <h2 className='pt-2 text-center'>
                                <strong style={{ color: "green" }}>
                                  {" "}
                                  &#8377; {data.price_per_night}
                                </strong>
                              </h2>
                            </div>

                            <div className='col-md-4 text-center pt-3'>
                              <button
                                className='btn btn-success  book-now'
                                onClick={() => handleBookNow()}
                              >
                                BOOK NOW
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        <br />
      </div>
    </div>
  );
};

export default HSearchRes;
