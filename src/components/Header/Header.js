import React from "react";
// import { MdClose, MdOutlineAddShoppingCart, MdOutlineMenu } from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import Container from "../container/Container.js";
import logo from "../../../src/Walmart_Spark.svg.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import SearchBar from '../SearchBar.js'



function Header() {
  initTWE({ Collapse, Dropdown });
  const loginStatus = Boolean(localStorage.getItem("status"))
  const navigate = useNavigate()
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: loginStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !loginStatus,
    },
    {
      name: "Register",
      slug: "/register",
      active: !loginStatus,
    },
    {
      name: "Product",
      slug: "/product",
      active: loginStatus,
    },
  ];

  const existingCart = JSON.parse(localStorage.getItem('cart')) || []
  const cartLength = existingCart.length

  const handleLogout = () => {
    console.log('handleLogout');
    localStorage.removeItem("token")
    localStorage.clear()
    navigate('/login')
  }

  return (
    <header className="shadow bg-blue-600">
      <Container>
        <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-blue-600  shadow-dark-mild  lg:flex-wrap lg:justify-start ">
          <div className="flex w-full items-center justify-between px-3 ">
            <button
              className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-twe-collapse-init
              data-twe-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {/* <div className="relative flex flex-wrap items-center justify-between w-3/4"> */}
            <div
              className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto flex "
              id="navbarSupportedContent1"
              data-twe-collapse-item
            >
              <a
                className="mb-4 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 sm:w-30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 0 hover:bg-blue-900 rounded-full sm:px-3 sm:py-2 sm:text-sm"
                href="/"
              >
                <img
                  src={logo}
                  style={{ height: "35px", width: "35px" }}
                  alt="Walmart"
                  loading="lazy"
                />
              </a>
              
              <div className="mx-2 relative flex items-center lg:w-80 h-14 rounded-3xl bg-blue-900 ">
                <div className="flex items-center invisible lg:visible">
                  <img className="w-8 h-8 absolute start-3 top-3" src="https://i5.walmartimages.com/dfw/4ff9c6c9-fef1/k2-_02b30b40-3838-4956-a9e4-36420d28015f.v1.png" alt="car" />
                  <h3 className="text-slate-200 absolute start-14 top-1 font-bold">Pickup</h3>
                  <div className="flex items-center"><span className="text-slate-200 absolute start-14 top-6 text-sm">Sacramento Supercenter</span></div>
                </div>
                
              </div>
              {/* <div className=" relative flex items-center  bg-white lg:w-1/2 w-full rounded-3xl"><input className="w-full p-3.5 px-4 border-0 bg-transparent outline-none rounded text-navy-700" type="text" placeholder="Search everything at Walmart online and in store" />
                  <button type="submit" className=" absolute  end-3  p-2.5 text-sm font-medium text-white  rounded-3xl  focus:outline-none focus:ring-blue-900 dark:bg-blue-900 dark:hover:bg-blue-900 dark:focus:ring-blue-900">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                      <span className="sr-only">Search</span>
                  </button> 
              </div> */}
            <SearchBar />
            </div>
            {/* </div> */}

             {loginStatus && (   
              
            <div className="relative flex items-center justify-between w-1/4">
             
              <button className=" w-18 hover:bg-blue-900 p-2 px-4 rounded-3xl invisible lg:visible text-sm">
              <div className="flex items-center">
                  <IoIosHeartEmpty className="w-4 h-4 text-white font-bold mr-2 " />
                  <div>
                  <div className="text-md  text-slate-50 ">Reorder</div>
                  <div className="text-sm font-bold text-slate-50 ">My Items</div>
                  </div>
              </div> 
                
              </button>
              <button className=" w-18 hover:bg-blue-900 p-2 px-4 rounded-3xl invisible lg:visible">
              <div className="flex items-center">
              <CiUser className="w-4 h-4 text-white font-bold mr-2" />
              <div>
                <div className="text-md  text-slate-50  ">Sign In</div>
                <div className="text-sm font-bold text-slate-50 ">Account</div>
                </div>
                </div>
              </button>
              <Link className="me-4 text-neutral-600 dark:text-white relative p-2" to={`/cart`} >
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </span>
                <div className="absolute rounded-full w-4 h-4 bg-red-500 text-white top-0 right-0 text-xs text-center">{cartLength}</div>
              </Link>
                             
              {/* <div
                className="relative"
                data-twe-dropdown-ref
                data-twe-dropdown-alignment="end"
              >
                <a
                  className="me-4 flex items-center text-neutral-600 dark:text-white"
                  href="#"
                  id="dropdownMenuButton1"
                  role="button"
                  data-twe-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  <span className="[&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                    1
                  </span>
                </a>
                <ul
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                  aria-labelledby="dropdownMenuButton1"
                  data-twe-dropdown-menu-ref
                >
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                      href="#"
                      data-twe-dropdown-item-ref
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                      href="#"
                      data-twe-dropdown-item-ref
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                      href="#"
                      data-twe-dropdown-item-ref
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* <div
                className="relative"
                data-twe-dropdown-ref
                data-twe-dropdown-alignment="end"
              >
                <a
                  className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  href="#"
                  id="dropdownMenuButton2"
                  role="button"
                  data-twe-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                    className="rounded-full"
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                  aria-labelledby="dropdownMenuButton2"
                  data-twe-dropdown-menu-ref
                >
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                      href="#"
                      data-twe-dropdown-item-ref
                    >
                      Your Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                      href="#"
                      data-twe-dropdown-item-ref
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                      href="#"
                      data-twe-dropdown-item-ref
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
