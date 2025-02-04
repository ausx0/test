import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    return (
        <div className='  dark:text-white md:text-3xl md:grid '>
            <h2 className='md:flex justify-center mt-14'>404 | page not found</h2>
            <br />
            <button onClick={() => navigate('/')}> Go to Homepage</button>
        </div>
    )
}

export default Notfound