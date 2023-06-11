import fullscreen from '../images/fullscreen.svg'
import other from '../images/other.svg'
// import send from './images/send.svg'
import share from '../images/share.svg'
import share2 from '../images/share2.svg'
import volume from '../images/volume.svg'

import ChatAI from './ChatAI'
import person1 from '../images/image 3.png'
import Webcam from 'react-webcam';

import mutedIco from "../images/muted.svg"
import unmutedIco from "../images/unmuted.svg"

import { useEffect, useState } from 'react'


function Call() {
    const [muted, setMuted] = useState(false)
    const [notif, setNotif] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setNotif(true)
        }, 5000)
        setTimeout(() => { 
            setNotif(false)
        }, 10000)
    }, [])


  return (
    <div>
        <div className='h-full w-full flex gap-4 '>
                <div className='h-screen pb-8 flex-1 flex flex-col gap-4 relative'>
                    <div className='h-3/4 bg-blue-500 rounded-md overflow-hidden flex justify-end items-end'>
                        <img className='object-cover h-full w-full' src={person1} alt="" />
                        <Webcam
                            audio={false}
                            mirrored={true}
                            className='w-56 absolute rounded-md m-1'
                        />
                        <div className={'bg-red-500 text-sm leading-4 px-4 py-2 bg-opacity-60  absolute left-2 border-2 border-red-700 flex items-center gap-4 transition-all duration-1000 ' + (!notif && 'opacity-0')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                            <h1>
                                That may have been informal or innapropriate. <br/> Please try to be more formal.
                            </h1>
                        </div>
                    </div>
                    <div className='h-12 w-full bg-neutral-800 rounded-md flex gap-6 justify-center items-center'>
                        <img className='h-1/2' src={volume} alt="" />
                        <img className='h-1/2' src={other} alt="" />
                        <img className='h-1/2' src={share} alt="" />
                        <img className='h-1/2' src={share2} alt="" />
                        <img className='h-1/2' src={fullscreen} alt="" />
                        <button className='h-1/2' onClick={() => {setMuted(muted => !muted)}}>
                            <img className='h-full' src={muted ? mutedIco : unmutedIco} alt="" />
                        </button>
                        
                    </div>
                </div>
                <div className='w-1/4 h-full justify-center rounded-md'>
                    {/* chat here */}
                    <div className='w-full h-4/5 bg-neutral-800 rounded-md'>
                        <ChatAI/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Call