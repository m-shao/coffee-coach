import logo from '../images/logo.svg'
import video from  '../images/video.svg'
import user from '../images/user.svg'
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect} from 'react';

import LoginButton from './LoginButton'

function Navbar({setPage}) {
    const { isAuthenticated } = useAuth0();
    // useEffect(() => {
        
    // }, [])
    return (
        <div className="w-full h-12 rounded-full text-sm bg-neutral-800 flex items-center px-6 justify-evenly">
            <div className="flex gap-2 font-black h-full py-2 px-6 items-center">
                <img className='h-full' src={logo} alt="" />
                <div className='leading-4 '>
                    Coffee<br/>Coach
                </div>
            </div>
            <div className='h-full flex flex-1 items-center justify-end gap-10'>
                <ul className='flex gap-10 items-center'>
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li className='bg-neutral-600 px-4 py-1 rounded-md'>
                        <button onClick={() => {setPage("setup")}} className='flex items-center gap-1'>
                            Start Chat <img className='h-6' src={video} alt="" />
                        </button>
                    </li>
                </ul>
                {isAuthenticated ? <img className='h-3/4' src={user} alt="" /> : <LoginButton/>}
            </div>
        </div>
    )
}

export default Navbar