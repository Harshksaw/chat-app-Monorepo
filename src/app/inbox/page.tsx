
import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'



const Inbox = (props: Props) => {
    return (
        <div className="message-app flex h-screen flex-col bg-white">
           <Navbar/>

           <div className='flex flex-row h-full bg-red-200'>


           <Sidebar/>
           </div>
           
        </div>
    )
}

export default Inbox