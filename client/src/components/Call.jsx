import fullscreen from '../images/fullscreen.svg'
import other from '../images/other.svg'
// import send from './images/send.svg'
import share from '../images/share.svg'
import share2 from '../images/share2.svg'
import volume from '../images/volume.svg'

import ChatAI from './ChatAI'
import person1 from '../images/image 3.png'
import Webcam from 'react-webcam';


function Call() {
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
                    </div>
                    <div className='h-12 w-full bg-neutral-800 rounded-md flex gap-6 justify-center items-center'>
                        <img className='h-1/2' src={volume} alt="" />
                        <img className='h-1/2' src={other} alt="" />
                        <img className='h-1/2' src={share} alt="" />
                        <img className='h-1/2' src={share2} alt="" />
                        <img className='h-1/2' src={fullscreen} alt="" />
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