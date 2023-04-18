import React from 'react'
import { Link } from 'react-router-dom'

function StaffDash() {
  return (
    <div className="w-full m-5 mt-2 px-6 pt-3 lg:px-8 googlesans">
        <div className="w-full text-sm-start">
          <h2 className="display-6 fw-bold sm:text-4xl">Employee Dashboard</h2>
          <p className="mt-6">
          Upgrade your skills by reading courses - Read up now!
          </p>
        </div>
        <div className='d-lg-flex gap-3'>
        <div className='card p-4 pb-3 d-inline-flex rounded-4 text-black border border-success shadow'>
            <p className='fw-medium fs-lg-4'>Total tasks: 4</p>
        </div>
        <div className='card p-4 pb-3 d-inline-flex rounded-4 text-black border border-success shadow'>
            <p className='fw-medium fs-lg-4'>Pending tasks: 4</p>
        </div>
        <div className='card p-4 pb-3 d-inline-flex rounded-4 text-black border border-success shadow'>
            <p className='fw-medium fs-lg-4'>Completed tasks: 4</p>
        </div>
        <div className='card p-4 pb-3 d-inline-flex rounded-4 text-black border border-success shadow'>
            <p className='fw-medium fs-lg-4'>Team admin: Manoranjan</p>
        </div>
        </div>
        <div className='d-flex-col py-3'>
        <p className='fs-1'>Rewards</p>
        <div className='d-flex'>
            <img style={{width:"60px"}} src='./rewards.png' alt='img'/>
        <p className='pt-2'>101 points</p>
        </div>
        </div>
        <Link to='/user_details' className='button rounded-4 py-3 px-3 fs-6 fw-semibold text-white border border-success p-1 ml-2 btn btn-success shadow-lg'>View Your Details</Link>
      </div>
  )
}

export default StaffDash