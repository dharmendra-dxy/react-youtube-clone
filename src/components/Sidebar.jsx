import React from 'react'
import { IoMdHome } from 'react-icons/io';
import { MdSubscriptions } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const sidebarItem =[
        {name: "Home", logo: <IoMdHome size={25}/>},
        {name: "Shorts", logo: <SiYoutubeshorts size={25}/>},
        {name: "Subscription", logo: <MdSubscriptions size={25}/>},
        {name: "Home", logo: <IoMdHome size={25}/>},
        {name: "Shorts", logo: <SiYoutubeshorts size={25}/>},
        {name: "Subscription", logo: <MdSubscriptions size={25}/>},
        {name: "Home", logo: <IoMdHome size={25}/>},
        {name: "Shorts", logo: <SiYoutubeshorts size={25}/>},
        {name: "Subscription", logo: <MdSubscriptions size={25}/>},
        {name: "Home", logo: <IoMdHome size={25}/>},
        {name: "Shorts", logo: <SiYoutubeshorts size={25}/>},
        {name: "Subscription", logo: <MdSubscriptions size={25}/>},
        {name: "Home", logo: <IoMdHome size={25}/>},
        {name: "Shorts", logo: <SiYoutubeshorts size={25}/>},
        {name: "Subscription", logo: <MdSubscriptions size={25}/>},
        {name: "Home", logo: <IoMdHome size={25}/>},
        {name: "Shorts", logo: <SiYoutubeshorts size={25}/>},
        {name: "Subscription", logo: <MdSubscriptions size={25}/>},
        {name: "Home", logo: <IoMdHome size={25}/>},
        {name: "Shorts", logo: <SiYoutubeshorts size={25}/>},
        {name: "Subscription", logo: <MdSubscriptions size={25}/>},
        {name: "Home", logo: <IoMdHome size={25}/>},
        {name: "Shorts", logo: <SiYoutubeshorts size={25}/>},
        {name: "Subscription", logo: <MdSubscriptions size={25}/>},
    ];

    // get state from redux:
    const sidebarToggle = useSelector((store)=> store.app.sidebarToggle);

  return (
    <div className={`flex-col px-5 ${sidebarToggle ? "lg:w-[15%] w-[30%]": "lg:w-[5%] w-[10%]"}  h-[calc(100vh-4.625rem)] overflow-y-scroll`}>

        <div className='flex-col border-b pb-4 border-gray-400'>
            {
                sidebarItem.map((item)=> (
                    <div 
                    className='flex py-2 gap-4 items-center cursor-pointer hover:bg-gray-100 hover:rounded-xl'
                    key={item.name}
                    >
                        <div>{item.logo}</div>
                        <div className={`${sidebarToggle ? "": "hidden"} sm:text-sm lg:text-base`}>{item.name}</div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Sidebar