import React from 'react'
import './services.css';
import { Link, Outlet } from 'react-router-dom';
const Service = () => {
  return (
    <div className='services-container'>
      <h2 className='services-title'>Our services</h2>
      <p className='services-subtitle'>Choose one of our services</p>

      <div className='service-link'>
        <Link to='web-development'
        className='service-link  web'>
          web deavelopment
        </Link>
          <Link to='app-development'
        className='service-link app'>
          app deavelopment
        </Link>
          <Link to='design'
        className='service-link design'>
        design
        </Link>
      </div>
      {/* nested router content */}
<Outlet/>
    </div>
  )
}

export default Service
