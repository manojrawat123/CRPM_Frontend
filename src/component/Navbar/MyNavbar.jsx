import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { DataContext, DataProvider } from '../../context';
import API_BASE_URL, { API_ROUTE_URL } from "../../config";
import TableRowsIcon from '@mui/icons-material/TableRows';
import CloseIcon from '@mui/icons-material/Close';
import { ExpandMore } from '@mui/icons-material';
import Cookies from 'js-cookie';


const MyNavbar = () => {

    const [display1, setDisplay1] = useState('none');
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(true);

    const { navItem, navFunc} = useContext(DataContext);

    useEffect(() => {
        if (!navItem){
            navFunc();
        }
    }, [])


    return (
        <>
            <nav className="text-white w-[100%] justify-center items-center col-span-12 h-[4rem] bg-gradient-to-r from-blue-700 via-pink-300 to-red-700 pr-8 md:block hidden">
                <div className="container flex justify-between items-center mx-8">
                    <ul className="space-x-6 ">
                        {navItem?.filter((item) => item.Level === 0).map((element, index) => {
                            return (
                                <li key={index}
                                    className="inline-block py-[.8rem] hover:underline hover:text-green-400 "
                                    onMouseEnter={() => { setDisplay1(element.ID) }}
                                    onMouseLeave={() => { setDisplay1('') }}
                                ><span href="#" className="">{element?.MenuItemDescription}</span>
                                    <ul className='fixed z-[1000] bg-white  '>
                                        {navItem.filter((element1, index) => element1.Level == "1").
                                            filter((value1, index1) => value1.ParentID === element?.ID).
                                            map((myitem, myindex) => {
                                                return (<li key={myindex}
                                                    onClick={() => {
                                                        if (display1 == "") {
                                                            setDisplay1(element.ID)
                                                        }
                                                        else {
                                                            setDisplay1("")
                                                        }
                                                    }}
                                                    className={`text-black hover:text-green-500 relative px-4 py-1 ${myindex == 0 ? "pt-4 " : ""} ${display1 === myitem?.ParentID ? 'block' : "hidden"}`}>
                                                    <NavLink to={`${API_ROUTE_URL}/${myitem?.EndPoint}`}
                                                    >
                                                        {myitem?.MenuItemDescription}
                                                    </NavLink>
                                                </li>)
                                            })}
                                    </ul>
                                </li>
                            )
                        })}

                    </ul>
                    <li className='ml-auto inline-block py-[.8rem] hover:underline hover:text-green-400 cursor-pointer'>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<PowerSettingsNewIcon />}
                            onClick={() => {
                                localStorage.removeItem("token");
                                localStorage.removeItem("brand");
                                Cookies.remove('token');
                                Cookies.remove('name')
                                navigate("/login")
                            }}
                        >
                            Logout
                        </Button>
                    </li>
                </div>
            </nav>
           
           
                {/* Mobile Menu Start */}
            <div className='text-white w-full flex justify-center items-center col-span-12 h-[4rem] bg-gradient-to-r from-blue-700 via-pink-300 to-red-700 pr-8 md:hidden '>
                <div className='ml-auto '>

                    <button type='button' onClick={
                        () => {
                            if (showMenu == true) {
                                setShowMenu(false)
                            }
                            else {
                                setShowMenu(true)
                            }
                        }}>
                        {showMenu ? <TableRowsIcon fontSize='large' /> : <CloseIcon fontSize='large' />}
                    </button>
                </div>
            </div>


            <nav className={`${showMenu ? 'h-[0rem] none' : 'block'} absolute z-10  text-center shadow-2xl overflow-hidden bg-white px-12 right-0 rounded-xl transition-height duration-500 `}>

                <div className="container  flex justify-between items-center mx-8">
                    <ul className="space-x-6 ">
                        {navItem?.filter((item) => item.Level === 0)?.map((element, index) => {
                            return (
                                <li key={index}
                                    className="block py-[.8rem] hover:underline"
                                    onClick={() => {
                                        if (display1 == element.ID) {
                                            setDisplay1("");
                                        }
                                        else {
                                            setDisplay1(element.ID)
                                        }
                                    }}
                                ><a href="#" className="">{element?.MenuItemDescription}  <span className='mt-4'><ExpandMore /> </span></a>
                                    <ul className=' z-[1000] bg-black text-white rounded-2xl block'>
                                        {navItem.filter((element1, index) => element1.Level == "1").
                                            filter((value1, index1) => value1.ParentID === element?.ID).
                                            map((myitem, myindex) => {
                                                return (<li key={myindex}
                                                    className={` hover:text-green-500 hover:underline relative px-4 py-1 ${myindex == 0 ? "pt-4 " : ""} ${display1 === myitem?.ParentID ? 'block' : "hidden"}`}>
                                                    <NavLink to={`${API_ROUTE_URL}/${myitem?.EndPoint}`} onClick={() => {
                                                        setShowMenu(true);
                                                    }}>
                                                        {myitem?.MenuItemDescription}
                                                    </NavLink>
                                                </li>)
                                            })}
                                    </ul>
                                </li>
                            )
                        })}
                        <li className='ml-auto inline-block py-[.8rem] hover:underline hover:text-green-400 cursor-pointer'>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<PowerSettingsNewIcon />}
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("brand");
                                    navigate("/login")
                                }}
                            >
                                Logout
                            </Button>
                        </li>

                    </ul>
                </div>
            </nav>

        </>
    )
}

export default MyNavbar
