import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink to='/' className={({isActive}) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] bg-white' : ''}>Home</NavLink>
      </li>
      <li>
        <NavLink to='/list' className={({isActive}) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] bg-white' : ''}>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to='/reading' className={({isActive}) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] bg-white' : ''}>Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto pt-5 lg:pt-10 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl gap-0 md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#0897a7] bg-clip-text text-transparent">Reading<span className=" bg-gradient-to-r from-transparent to-[#6bf756] bg-clip-text text-transparent">Realm</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-1 md:gap-3">
        <a className="btn text-white bg-[#59C6D2] md:px-6 md:text-lg">Sign In</a>
        <a className="btn text-white bg-[#23BE0A] md:px-6 md:text-lg">Sign Up</a>
      </div>
    </div>
  );
};

export default Nav;
