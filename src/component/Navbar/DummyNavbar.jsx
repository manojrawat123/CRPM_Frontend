
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MyNavbar = () => {

    const [navItem, setNavItem] = useState([]);
    const token = localStorage.getItem("token");
    const [display1, setDisplay1] = useState('none');;


    useEffect(() => {
        axios.get('http://localhost:8000/navbar/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((value) => {
            console.log(value.data);
            setNavItem(value.data)
        })
    }, [])


    return (
        <>
            <nav class="">
                <div class="container mx-auto flex justify-between items-center">
                    <a href="#" class=" text-2xl font-bold">My Website</a>

                    <ul class="space-x-6 ">
                        {navItem.filter((item) => item.Level === 0).map((element, index) => {
                            return (
                                <>
                                    <li key={index}
                                        className="inline-block hover:text-blue-300 hover:bg-blue-700 px-4 py-4"


                                    ><a href="#" class="">{element?.MenuItemDescription}</a>
                                        {console.log(navItem.filter((elem, inde) => elem.Level == "1"))}
                                        {navItem.filter((element1, index) => element1.Level == "1").
                                            filter((value1, index1) => value1.ParentID === element?.ID).
                                            map((myitem, myindex) => {
                                                return (<li
                                                    className=" bg-blue-700 text-white py-2 px-4"
                                                >
                                                    {myitem?.MenuItemDescription}
                                                </li>)
                                            })}
                                    </li>
                                </>
                            )
                        })}
                        {/* <li class="inline-block hover:text-blue-300 hover:bg-blue-700 px-4 py-4"><a href="#" class="">Home</a></li>
                <li class="inline-block hover:text-blue-300 hover:bg-blue-700 px-4 py-4"><a href="#" class="">Services</a></li>
                <li class="inline-block hover:text-blue-300 hover:bg-blue-700 px-4 py-4"><a href="#" class="">Portfolio</a></li>
                <li class="inline-block hover:text-blue-300 hover:bg-blue-700 px-4 py-4"><a href="#" class="">Contact</a></li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default MyNavbar