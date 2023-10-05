import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { DataContext, DataProvider } from '../../context';

const MyNavbar = () => {

    const [navItem, setNavItem] = useState([]);
    const token = localStorage.getItem("token");
    const [display1, setDisplay1] = useState('none');
    const navigate = useNavigate()

    const {showNavbar, setShowNavbar} = useContext(DataContext);

    useEffect(() => {
        axios.get('http://localhost:8000/navbar/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((value) => {
            setNavItem(value.data);
        })
    }, [])


    return (
        <>
            <nav className="shadow-2xl w-[100%]">
                <div className="container  flex justify-between items-center mx-8">
                    <ul className="space-x-6 ">
                        {navItem.filter((item) => item.Level === 0).map((element, index) => {
                            return (
                                    <li key={index}
                                        className="inline-block py-[.8rem] {{home}} hover:underline hover:text-green-400 "
                                        onMouseEnter={()=>{setDisplay1(element.ID)}}
                                        onMouseLeave={()=>{setDisplay1('')}}
                                    ><a href="#" className="">{element?.MenuItemDescription}</a>
                                        <ul className='fixed z-[1000] bg-white  '>
                                        {navItem.filter((element1, index) => element1.Level == "1").
                                        filter((value1, index1) => value1.ParentID === element?.ID).
                                        map((myitem, myindex) => {
                                            return (<li key={myindex}
                                                className={`text-black hover:text-green-500 relative px-4 py-1 ${myindex==0 ? "pt-4 ": ""} ${display1 === myitem?.ParentID? 'block': "hidden"}` }>
                                                <NavLink to={myitem?.MenuLink}>
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
      onClick={()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("brand");
        setShowNavbar(false);
        navigate("/login")
      }}
    >
      Logout
    </Button>
                         </li>
                </div>
            </nav>

        </>
    )
}

export default MyNavbar
