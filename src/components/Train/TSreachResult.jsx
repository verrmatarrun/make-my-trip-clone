import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./TSreachResult.css";

const TSreachResult = ({
  from,
  to,
  depart,

  trains,
  setTrains,
  filteredTrains,
  setFilteredTrains,
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

  function handleBookNow() {
    navigate("/checkout");
  }

  return (
    <div className='search-result-section bg-light'>
      <div className='search-head pt-2 pb-3'>
        <div className='container'></div>
      </div>
      <div id='forms' className='container search-body bg-light'>
        {filteredTrains &&
          filteredTrains.map((data, index) => (
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
                            src='https://image.pngaaa.com/510/3737510-middle.png'
                            alt='log'
                            width='40'
                            height='40'
                          />
                          <div
                            className='flex-column'
                            style={{ marginLeft: "1rem" }}
                          >
                            <p>{data.train_number}</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                        <div className='departure-time'>
                          {/* <h5>{data.departure.departureTime}</h5> */}
                          <h5>{data.from}</h5>
                        </div>
                      </div>
                      <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                        <div className='duration'>
                          <p>{data.duration}</p>
                          <hr />
                          <p>{data.kilometers}KM</p>
                        </div>
                      </div>
                      <div className='col-lg-2 col-sm-2 d-none d-sm-block'>
                        <div className='arrival-time'>
                          <h5>{data.to}</h5>
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
                                <strong>Train Details</strong>
                              </h6>
                              <hr />

                              <div className='economy d-flex justify-content-between'>
                                <div className='list-items'>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      From : <strong> {data.from}</strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      To : <strong> {data.to}</strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      DEPARTURE: {""}
                                      <strong>
                                        {data.departure.departureDate} ||{" "}
                                        {data.departure.departureTime}
                                      </strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      KM: {""}
                                      <strong>
                                        {data.departure.kilometers}
                                      </strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-md-2'>
                              <h2 className='pt-2 text-center'>
                                <strong> &#8377; {data.price}</strong>
                              </h2>
                            </div>

                            <div className='col-md-4 text-center pt-3'>
                              <button
                                className='btn btn-success  book-now'
                                onClick={handleBookNow}
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

export default TSreachResult;
