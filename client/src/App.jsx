import fullscreen from './images/fullscreen.svg'
import other from './images/other.svg'
import send from './images/send.svg'
import share from './images/share.svg'
import share2 from './images/share2.svg'
import volume from './images/volume.svg'

import person1 from './images/image 3.png'
import person2 from './images/image 4.png'

import Navbar from './components/Navbar'

import Webcam from 'react-webcam';


function App() {
    return (
        <div className='App bg-neutral-900 text-white w-screen h-screen p-6 flex flex-col gap-6 overflow-hidden'>
            <Navbar/>
            <div className='h-full w-full flex gap-4 '>
                <div className='h-full flex-1 flex flex-col gap-4 relative'>
                    <div className='h-3/4 bg-blue-500 rounded-md overflow-hidden flex justify-end items-end'>
                        <img className='object-cover h-full w-full' src={person1} alt="" />
                        <img className='absolute w-64 rounded-md m-1' src={person2} alt="" />
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
                    <div className='w-full h-full bg-neutral-800'></div>
                </div>
            </div>
        </div>
    )
}

export default App
