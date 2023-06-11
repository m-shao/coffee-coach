import { useState, useEffect } from 'react'
import ChatAI from './components/ChatAI';
import Call from  './components/Call'
import SetupPage from  './components/SetupPage'

import Navbar from './components/Navbar'

// import Sentiment from './components/Sentiment'

function App() {
    const [page, setPage] = useState("setup");
    const [prePrompt, setPrePrompt] = useState("");

    useEffect(() => {
        console.log(page)
    }, [page]);

    return (
        <div className='App bg-neutral-900 text-white w-screen h-screen p-6 flex flex-col gap-6 overflow-hidden'>
            {/* <Sentiment/> */}
            <Navbar setPage={setPage}/>
            {page == "setup" ? <SetupPage setPrePrompt={setPrePrompt} setPage={setPage}/> : <Call/>}
        </div>
    )
}

export default App
