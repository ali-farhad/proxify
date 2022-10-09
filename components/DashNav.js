import { useState, useEffect, useContext } from "react";
import { GiAbstract012 } from "react-icons/gi";
import { GiProcessor } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GiArrowsShield } from "react-icons/gi";


import {useRouter} from 'next/router';
import Link from 'next/link'
import AuthContext from "../context/AuthContext";

import ClipLoader from "react-spinners/ClipLoader";



function DashNav({children}) {

    const {login, error, user, logout, loading,  checkUserLoggedIn} = useContext(AuthContext)
    
    useEffect(() => {
        async function checkUser() {
            checkUserLoggedIn()
        }
        checkUser()
        }, []); 
    

    const [mobile, setMobile] = useState(false)
    const [nav, setNav] = useState({
        dashboard: false,
        premium: false,
        buy: false
    })
    const router = useRouter()


    const handleClick = event => {
        // 👇️ toggle isActive state variable
        setMobile(current => !current);
      };

      useEffect(() => {
        if(router.pathname === '/users/dashboard'){
            setNav({
                dashboard: true,
                premium: false,
                buy: false
            })
        }else if(router.pathname === '/users/dashboard/premium'){
            setNav({
                dashboard: false,
                premium: true,
                buy: false
            })
        }else if(router.pathname === '/users/dashboard/buy'){
            setNav({
                dashboard: false,
                premium: false,
                buy: true
            })
        }
      }, [router.pathname])

      if(loading) {
        return (
          <div className="flex justify-center items-center h-screen">
            <ClipLoader color={"#123abc"} loading={loading} size={150} />
          </div>
        )
      }
        
     
  return (
    <div>
                {/* <!-- component --> */}
<aside className={`${mobile ? '' : 'ml-[-100%]'}  fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]`}>
    <div>
        <div className=" px-6 py-4 text-2xl">
            <Link href="/"> 
            <a className="flex space-x-5 items-center justify-center" title="home">
            <span className="text-3xl text-softBlue"><GiArrowsShield/></span> 
            <span className="font-bold text-1xl uppercase tracking-wider">Sockit2me</span>
            </a>
            </Link>
        </div>

        <div className="mt-8 text-center">
            <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{user && user?.username?.toUpperCase()}</h5>
            <span className="hidden text-gray-400 lg:block">Free User</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
            <li>
                <Link href="/users/dashboard">
                <a aria-label="dashboard" className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${nav.dashboard ? 'bg-gradient-to-r from-sky-600 to-cyan-400 text-white' : 'text-gray-600'}`}>
                    <GiAbstract012/>
                    <span className="-mr-1 font-medium">Free Proxies</span>
                </a>
                </Link>
            </li>
            <li>
                <Link href="/users/dashboard/premium">
                <a className={`px-4 py-3 flex items-center space-x-4 rounded-md  group ${nav.premium ? 'bg-gradient-to-r from-sky-600 to-cyan-400 text-white' : 'text-gray-600'}`}>
                    <GiProcessor/>
                    <span className="group-hover:text-gray-700">Premium Proxies</span>
                </a>
                </Link>
            </li>

            <li>
                <Link href="/users/dashboard/buy">
                <a className={`px-4 py-3 flex items-center space-x-4 rounded-md group ${nav.buy ? 'bg-gradient-to-r from-sky-600 to-cyan-400 text-white' : 'text-gray-600'}`}>
                    <RiMoneyDollarCircleLine/>
                    <span className="group-hover:text-gray-700">Buy more Proxies</span>
                </a>
                </Link>
            </li>
            
        </ul>
    </div>

    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span onClick={() => logout()} className="group-hover:text-gray-700">Logout</span>
        </button>
    </div>
</aside>

<div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
            <button onClick={handleClick} className="w-12 h-16 -mr-2 border-r lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div className="px-6 -mx-6  sm:flex md:hidden justify-between items-center">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span onClick={() => logout()} className="group-hover:text-gray-700">Logout</span>
        </button>
    </div>
        </div>

    </div>

    <div className="px-6 pt-6 2xl:container">
        <div className="grid gap-6 md:grid-cols-1">
          
           
           {children}


           
        </div>
    </div>
</div>
    </div>
  )
}

export default DashNav