import React from 'react'

const FeedList = () => {

    const lists = ["All", "Java", "Javascript", "Music", "SM", "Rap", "Beats", "Projects", "Cricket", "Games", "Python", "College", "Fest", "Mahakumbh"];


  return (
    <div className='flex w-full gap-4 items-center'>
        {
            lists.map((item) => (
                <button
                key={item}
                className='bg-gray-200 font-medium text-slate-700 px-3 py-1 rounded-md hover:bg-gray-300'
                >
                    {item}
                </button>
            ))
        }
    </div>
  )
}

export default FeedList