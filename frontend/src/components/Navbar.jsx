import { useState } from "react";
import yumLogo from "../assets/images/yumLogo.png";
import { NavLink} from "react-router-dom";

const Navbar = () => {
    const [isHamActive, toggleHam] = useState(false);
    const [isMobileSearchActive, toggleMobileSearchState] = useState(false);

    return (
        <>
            <div className="flex justify-between p-5 sticky top-0 border-b-2">
                <div className="lg:hidden pt-4 size-5 pl-3">
                    <button onClick={() => toggleHam(!isHamActive)}>
                        {!isHamActive ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="lg:pl-20 pt-1">
                    <img src={yumLogo} alt="loading" width={130} height={130} />
                </div>
                <div className="pt-2 hidden lg:block flex">
                    <NavLink to="/" className={({ isActive }) => isActive ? "p-4 text-teal-500 font-bold" : "p-4"}>
                        Home
                    </NavLink>
                    <NavLink to="/menu" className={({ isActive }) => isActive ? "p-4 text-teal-500 font-bold" : "p-4"}>
                        Menu
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "p-4 text-teal-500 font-bold" : "p-4"}>
                        Contact
                    </NavLink>
                </div>
                <div className="flex gap-7 pr-2 md:pr-10 pt-3 relative top-[-3px] md:pb-2">
                    <button className="md:hidden pb-2" onClick={() => toggleMobileSearchState(!isMobileSearchActive)}>
                        {!isMobileSearchActive ?
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                            </svg> :
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                        }


                    </button>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden md:block rounded-full w-64 focus:outline-none font-md  pl-4 bg-teal-100 ring-2 ring-teal-300 py-1"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>

            {isMobileSearchActive && (
                <input
                    type="text"
                    placeholder="Search..."
                    className="md:hidden pl-3 mt-1 rounded-md w-screen focus:outline-none bg-teal-100 font-md ring-2 ring-teal-200"
                />
            )}

            {isHamActive && (
                <div className="lg:hidden flex flex-col items-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? "p-4 text-teal-500 font-bold" : "p-4"}>
                        Home
                    </NavLink>
                    <NavLink to="/menu" className={({ isActive }) => isActive ? "p-4 text-teal-500 font-bold" : "p-4"}>
                        Menu
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "p-4 text-teal-500 font-bold" : "p-4"}>
                        Contact
                    </NavLink>
                </div>
            )}
        </>
    );
};

export default Navbar;
