import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchResult.css";

const SearchResult = ({
  from,
  to,
  depart,
  arrival,
  flights,
  setFlights,
  filteredflights,
  setFilteredFlights,
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

  const handleBookNow = (price) => {
    navigate("/checkout");
  };

  return (
    <div className='search-result-section bg-light'>
      <div className='search-head pt-2 pb-3'>
        <div className='container'></div>
      </div>
      <div id='forms' className='container search-body bg-light'>
        {filteredflights &&
          filteredflights.map((data, index) => (
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
                            src='https://static.vecteezy.com/system/resources/thumbnails/002/736/939/small_2x/the-passenger-plane-is-taking-off-at-an-angle-airplane-flight-forward-in-the-air-passenger-transportation-isolated-illustrations-on-white-background-free-vector.jpg'
                            alt='log'
                            width='40'
                            height='40'
                          />
                          <div
                            className='flex-column'
                            style={{ marginLeft: "1rem" }}
                          >
                            <p>{data.airlineName}</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                        <div className='departure-time'>
                          <h5>{data.departure.departureTime}</h5>
                          <p>{data.from}</p>
                        </div>
                      </div>
                      <div className='col-lg-2 col-sm-3 d-none d-sm-block'>
                        <div className='duration'>
                          <p>{data.duration}</p>
                          <hr />
                          <p>{data.via === undefined ? "Direct" : data.via}</p>
                        </div>
                      </div>
                      <div className='col-lg-2 col-sm-2 d-none d-sm-block'>
                        <div className='arrival-time'>
                          <h5>{data.return.returnTime}</h5>
                          <p>{data.to}</p>
                        </div>
                      </div>
                      <div className='col-lg-2 d-none'></div>
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
                                <strong>Flight Details</strong>
                              </h6>
                              <hr />

                              <div className='economy d-flex justify-content-between'>
                                <div className='list-items'>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      <strong>From :</strong>{" "}
                                      <strong> {data.from}</strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      <strong>To :</strong>{" "}
                                      <strong> {data.to}</strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      <strong> DEPARTURE:</strong> {""}
                                      <strong>
                                        {data.departure.departureDate} ||{" "}
                                        {data.departure.departureTime}
                                      </strong>
                                    </p>
                                  </div>
                                  <div className='mt-1 mb-1'>
                                    <p className='d-inline px-2'>
                                      <strong> Return:</strong> {""}
                                      <strong>
                                        {data.return.returnDate} ||{" "}
                                        {data.return.returnTime}
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
                                  &#8377; {data.price}
                                </strong>
                              </h2>
                            </div>

                            <div className='col-md-4 text-center pt-3'>
                              <button
                                className='btn btn-success  book-now'
                                onClick={() => handleBookNow(data.price)}
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

export default SearchResult;
