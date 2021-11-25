import React from "react";
// import {useNavigate} from 'react-router-dom';
import { FaVideo } from "react-icons/fa";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Notifications from "../Notifications-panel/Notifications";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import UserProfile from "../User/UserProfile";
import SearchBar from "../Searchbar/SearchBar";


function STNavbar() {
  let history = useHistory();
  const [dropdown, setDropdown] = React.useState(false);

  const [profile, setProfile] = React.useState(false);
  const [profileDropwnState, setProfileDropdownState] = React.useState(false);
 const [searchBar, setSearchBar] = React.useState(false);

  const showDropdown = () => {
    setDropdown((prevState) => !prevState);
    console.log("hi there");
  };

  const handleClick = () => {
    history.push("/trending");
  };

  // const handleNew = () => {
  //   history.push("/new");
  // };

  const handleComedy = () => {
    history.push("/comedy");
  };

  const handleDropdown = () => {
    setProfile(!profile);
  };

   const handleProfileDropdown = () => {
    setProfileDropdownState(!profileDropwnState);
    
  };

  const handleSearch = () =>{
       setSearchBar(!searchBar)
  }



  return (
    <header id="main-header">
      <div class="main-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a
                  href="#"
                  class="navbar-toggler c-toggler"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <div class="navbar-toggler-icon" data-toggle="collapse">
                    <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                    <span class="navbar-menu-icon navbar-menu-icon--middle"></span>
                    <span class="navbar-menu-icon navbar-menu-icon--bottom"></span>
                  </div>
                </a>
                <a class="navbar-brand" href="index.html">
                  {" "}
                  <img
                    class="img-fluid logo"
                    src="http://multitude.io/frontend/images/logo.png"
                    alt="streamit"
                  />{" "}
                </a>

                <div class="mobile-more-menu">
                  <a
                    href="javascript:void(0);"
                    class="more-toggle"
                    id="dropdownMenuButton"
                    data-toggle="more-toggle"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="ri-more-line"></i>
                  </a>
                  <div class="more-menu" aria-labelledby="dropdownMenuButton">
                    <div class="navbar-right position-relative">
                      <ul class="d-flex align-items-center justify-content-end list-inline m-0">
                        <li>
                          <a href="#" class="search-toggle">
                            <i class="ri-search-line"></i>
                          </a>
                          <div class="search-box iq-search-bar">
                            <form action="#" class="searchbox">
                              <div class="form-group position-relative">
                                <input
                                  type="text"
                                  class="text search-input font-size-12"
                                  placeholder="type here to search..."
                                />
                                <i class="search-link ri-search-line"></i>
                              </div>
                            </form>
                          </div>
                        </li>
                        <li class="nav-item nav-icon">
                          <a
                            class="search-toggle position-relative"
                            onClick={showDropdown}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="22"
                              height="22"
                              class="noti-svg"
                            >
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                            </svg>
                            <span class="bg-danger dots"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div class="menu-main-menu-container">
                    <ul id="top-menu" class="navbar-nav ml-auto">
                      <li class="menu-item nav-fonts">
                        <Link to="/home">
                          <a href="index.html">Home</a>
                        </Link>
                      </li>
                      <li class="menu-item">
                        <Link to="/new">
                          <a>New</a>
                        </Link>
                      </li>
                      <li class="menu-item" onClick={handleClick}>
                        <a>Trending</a>
                      </li>
                      <li class="menu-item">
                        <a href="#">Catagories</a>
                        <ul class="sub-menu">
                          <li class="menu-item" onClick={handleComedy}>
                            <a >Cartoon</a>
                          </li>
                          <li class="menu-item " onClick={handleComedy}>
                            <a >Adventure</a>
                          </li>
                          <li class="menu-item" onClick={handleComedy}>
                            <a>Comedy</a>
                          </li>
                          <li class="menu-item" onClick={handleComedy}>
                            <a>Thriller</a>
                          </li>
                          <li class="menu-item" onClick={handleComedy}>
                            <a >Suspense</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="navbar-right menu-right">
                  <ul class="d-flex align-items-center list-inline m-0">
                    <li class="nav-item nav-icon">
                      <a href="#" class="search-toggle device-search" >
                        <i class="ri-search-line" onClick={ handleSearch}></i>
                      </a>
                     
                    </li>
                    <li class="nav-item nav-icon video-icon" >
                      <Link to="/createchannel">
                      <FaVideo  /></Link>
                     
                    </li>

                    <li class="nav-item nav-icon" onClick={handleDropdown}>
                      <a
                        href="#"
                        class="search-toggle"
                        data-toggle="search-toggle"
                         
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="22"
                          height="22"
                          class="noti-svg"
                         
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z" />
                        </svg>
                        <span class="bg-danger dots"></span>
                      </a>
                    </li>
                    <li class="nav-item nav-icon">
                      <a
                        href="#"
                        class="iq-user-dropdown search-toggle p-0 d-flex align-items-center"
                        data-toggle="search-toggle"
                      >
                        <img
                        src="https://i.pinimg.com/736x/f4/2c/98/f42c9809a608c2efff9377b695232bd3.jpg"
                          class="img-fluid avatar-40 rounded-circle"
                          alt="user"
                          onClick={handleProfileDropdown}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {profileDropwnState && <UserProfile/>}
      {profile && <Notifications/>}
      {searchBar && <SearchBar/>}

     
    </header>
  );
}

export default STNavbar;
