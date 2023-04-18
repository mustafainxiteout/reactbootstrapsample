import React from 'react'
import { Link } from 'react-router-dom'

function AddStaff() {
  return (
    <div className="googlesans isolate bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
        <div className='flex justify-end px-8 py-8'>
        <Link to='/dashboard' className='rounded-lg text-xs font-bold cursor-none lg:cursor-pointer text-gray-400 border border-gray-400 p-1 ml-2'>Go Back</Link>
        </div>
        <h2 className="text-3xl font-bold tracking-wider text-gray-900 sm:text-4xl">Add Staff</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Unlock your potential by adding courses - Create up now!
        </p>
      </div>
        <form className="card p-1 container mt-8 shadow bg-muted rounded-4">
        <div className="m-5">
          <div>
            <label className="my-1 fw-semibold">
              Employee ID
            </label>
            <div className="mt-2 mb-3">
              <input
                type="text"
                name="courseID"
                className="small-shadow form-control"
              />
            </div>
          </div>
          <div>
            <label className="my-1 fw-semibold">
              Position
            </label>
            <div className="mt-2 mb-3">
              <input
                type="text"
                name="credits" 
                className="small-shadow form-control"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="my-1 fw-semibold">
              Name
            </label>
            <div className="mt-2 mb-3">
              <input
                type="text"
                name="title"
                className="small-shadow form-control"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="my-2 fw-semibold">
              Description
            </label>
            <div className="mt-2">
              <textarea
                name="description"
                rows={4}
                className="small-shadow form-control"
              />
            </div>
          </div>
        </div>
        <div className="m-5 mt-0">
          <button
            type="submit"
            className="btn btn-success small-shadow"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddStaff