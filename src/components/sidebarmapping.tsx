import React from 'react'
import SocialMediaSidebar from './SocialMediaSidebar'

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

                <div
                className="sidebar w-20 bg-gray-900 text-white p-4">Users</div>
            )
        }
    </main>
  )
}

export default Sidebarmapping