import { NavLink, Link } from "react-router-dom"
import logo from '../../../assets/logo.svg'
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react"

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })


    }
    const navItems = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/service'}>Service</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        {
            user?.email ? <>
            <li><NavLink to={'/bookings'}>My Bookings</NavLink></li>
            <li><button onClick={handelLogOut}>Log Out</button></li>
            </>
                :
                <li><NavLink to={'/Login'}>Log in</NavLink></li>
        }




    </>
    return (
        <div>
            <div className="navbar bg-base-100 h-28 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img className="" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline btn-warning">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;