import React from 'react'

function Services() {
    return (
        <div className='bg-gray-900 space-y-14'>
            <h2 className='uppercase text-center text-3xl text-white font-semibold italic hover:border-b-2 hover:border-pink-600 pt-20 w-36 m-auto'>services</h2>
            <div className='grid grid-cols-2 gap-5'>
                {/* --right-- */}
            <div className='border'>
                <h2>image section</h2>
            </div>
            {/* --left-- */}
            <div className='border'>
                <h2>card section</h2>
            </div>
            </div>
        </div>
    )
}

export default Services
