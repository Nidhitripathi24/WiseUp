import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SearchBar = ({ data }) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')
  const onSearchHandler = (e) => {
    e.preventDefault()
    navigate('/course-list/' + input)
  }
  return (

    <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-gray-800 border border-gray-600 rounded'>
      <img src={assets.search_icon} alt="Search Icon" className='md:w-auto w-10 px-3 ' />
      <input onChange={e => setInput(e.target.value)} value={input}
        type='text' placeholder='Search for Courses' className='w-full h-full outline-none text-white placeholder-gray-400 bg-transparent'></input>
      <button type='submit' className='bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1 hover:bg-blue-700 transition-colors' >Search </button>
    </form>

  )
}

export default SearchBar