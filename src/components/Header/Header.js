import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./header.css";

const Header = () => {
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setMailId(localStorage.getItem("email"));
  }, []);

  return (
    <nav className='navbar'>
      <div className='container'>
        <a className='navbar' href='/'>
          <img src={logo} alt='logo' width='120' height='40' className='logo' />
        </a>
        <div className='navLinks'>
          <ul>
            <li>
              <Link to='/'>
                <button type='button' className='btn btn-outline-danger'>
                  FLIGHTS
                </button>
              </Link>
            </li>
            <li>
              <Link to='/masterHotel'>
                <button type='button' className='btn btn-outline-danger'>
                  HOTELS
                </button>
              </Link>
            </li>
            <li>
              <Link to='/masterTrain'>
                <button type='button' className='btn btn-outline-danger'>
                  TRAINS
                </button>
              </Link>
            </li>
            <li>
              <div className='dropdown ms-2'>
                <button
                  className='btn btn-primary dropdown-toggle bg-primary'
                  type='button'
                  id='dropdownMenuButton'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Login/SignUp
                </button>
                <ul
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuButton'
                >
                  <li>
                    <a className='dropdown-item' href='.'>
                      {mailId}
                    </a>
                  </li>
                  <Link to='/login'>
                    <li>
                      <a
                        className='dropdown-item'
                        href='.'
                        onClick={() => setMailId("hello user")}
                      >
                        Logout
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
