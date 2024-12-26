import React from 'react'
import SocialMediaSidebar from './SocialMediaSidebar'
import Image from 'next/image'

type Props = {}

const Sidebarmapping = ({selectedSidebar}:any) => {
  return (
    <main>
        {
            selectedSidebar === 'conversations' &&  (

                <SocialMediaSidebar />
            )

        }
        {
            selectedSidebar === 'users' &&  (

                <div className="sidebar w-20 bg-[#3D3D3D] text-white p-4 h-full">
                    <ul className='space-y-6 w-20 bg-[#3D3D3D] text-white p-1 h-full pt-32 gap-20  '>
                        <li className="flex items-center mb-6">
                            <Image
                                src="/Icons/user.png"
                                alt="User"
                                className='bg-white rounded-full'
                                width={40}
                                height={40}
                                    />
                        </li>
                        <li className="flex items-center mb-6">
                        <Image
                                src="/Icons/user.png"
                                alt="User"
                                className='bg-white rounded-full'
                                width={40}
                                height={40}
                                    />
                        </li>
                        <li className="flex items-center mb-6">
                        <Image
                                src="/Icons/user.png"
                                alt="User"
                                className='bg-white rounded-full'
                                width={40}
                                height={40}
                                    />
                        </li>
                    </ul>
                </div>
            )
        }
    </main>
  )
}

export default Sidebarmapping