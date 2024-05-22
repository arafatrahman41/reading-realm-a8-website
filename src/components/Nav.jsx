const Nav = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Listed Books</a>
      </li>
      <li>
        <a>Pages to Read</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
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
        <a className="btn btn-ghost text-xl gap-0 md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#0897a7] bg-clip-text text-transparent">Reading<span className=" bg-gradient-to-r from-transparent to-[#6bf756] bg-clip-text text-transparent">Realm</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn text-white bg-[#59C6D2] px-6 text-lg">Sign In</a>
        <a className="btn text-white bg-[#23BE0A] px-6 text-lg">Sign Up</a>
      </div>
    </div>
  );
};

export default Nav;
