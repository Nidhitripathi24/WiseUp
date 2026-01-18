import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios';

const Navbar = () => {
  const { navigate, isEducator, backendUrl, setIsEducator, getToken } = useContext(AppContext)
  const location = useLocation(); // Added missing hook
  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk()
  const { user } = useUser()

  const becomeEducator = async () => {
    try {
      console.log("Clicked Become Educator");

      if (isEducator) {
        console.log("Already educator, navigating...");
        navigate('/educator');
        return;
      }

      const token = await getToken();
      console.log("Token:", token);

      const { data } = await axios.get(`${backendUrl}/api/educator/update-role`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Backend response:", data);

      if (data.success) {
        setIsEducator(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error in becomeEducator:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-700 py-4 ${isCourseListPage ? 'bg-gray-900' : 'bg-black'}`}>

      {/* Replaced Logo Image with Text */}
      <h1
        onClick={() => navigate('/')}
        className="text-2xl lg:text-3xl font-bold text-white cursor-pointer font-['Poppins']"
      >
        WiseUp
      </h1>

      <div className='hidden md:flex items-center gap-5 text-gray-300'>
        <div className='flex items-center gap-5'>
          {user &&
            <>
              <button onClick={becomeEducator} className='hover:text-white transition-colors'>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
              | <Link to='/my-enrollments' className='hover:text-white transition-colors'>My Enrollments</Link>
            </>
          }
        </div>
        {user ? <UserButton /> : <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors'>Create Account</button>}
      </div>

      {/* for phone screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-300'>
        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {user &&
            <>
              <button onClick={becomeEducator}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
              | <Link to='/my-enrollments'>My Enrollments</Link>
            </>
          }
        </div>
        {
          user ? <UserButton /> : <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="" /></button>
        }
      </div>
    </div>
  )
}

export default Navbar