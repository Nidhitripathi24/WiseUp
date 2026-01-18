import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {


  const { currency, calculateRating } = useContext(AppContext)
  return (
    <Link to={`/course/${course._id}`} onClick={() => scrollTo(0, 0)}

      className='border border-gray-700 pb-6 overflow-hidden rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20'
    >



      <img className='w-full'
        src={course.courseThumbnail} alt="" />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold text-white'>{course.courseTitle}</h3>
        <p className='text-gray-400'>{course.educator.name}</p>
        <div className='flex items-center space-x-2'>
          <p className='text-white'>{calculateRating(course)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (<img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt=''
              className='w-3.5 h-3.5' />))}
          </div>
          <p className='text-gray-400'> 25</p>
        </div>
        <p className='text-base font-semibold text-blue-400'>{currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default CourseCard