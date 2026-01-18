import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
import Loading from "../../components/students/Loading"
import { assets } from "../../assets/assets"
import humanizeDuration from "humanize-duration"
import Footer from '../../components/students/Footer'
import YouTube from 'react-youtube'
import { toast } from "react-toastify"
import axios from "axios"

const CourseDetails = () => {
  const { id } = useParams()
  const [openSection, setOpenSection] = useState({})
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)
  const [courseData, setCourseData] = useState(null)
  const [playerData, setPlayerData] = useState(null)
  const { allCourses, calculateRating, calculateChapterTime, calculateCourseDuration, calculateNumberofLectures, currency
    , backendUrl, userData, getToken
  } = useContext(AppContext)

  const fetchCourseData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/course/' + id)
      if (data.success) {
        setCourseData(data.courseData)

      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const enrollCourse = async () => {
    try {
      if (!userData) {
        return toast.warn("Login to Enroll")

      } if (isAlreadyEnrolled) {
        return toast, warn("Already Enrolled")
      }
      const token = await getToken()
      const { data } = await axios.post(backendUrl + '/api/user/purchase', { courseId: courseData._id }, { headers: { Authorization: `Bearer ${token}` } })
      if (data.success) {
        const { session_url } = data
        window.location.replace(session_url)

      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


  useEffect(() => {
    fetchCourseData()
  }, [])

  useEffect(() => {
    if (userData && courseData) {
      setIsAlreadyEnrolled(userData.enrolledCourses.includes(courseData._id))
    }
  }, [userData, courseData])

  const toggleSection = (index) => {
    setOpenSection((prev) => (
      {
        ...prev,
        [index]: !prev[index]
      }
    )
    )

  }

  return courseData ?
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 text-left">
        <div className="absolute top-0 left-0 w-full h-section-height -z-10  bg-gradient-to-b from-gray-900 to-black"></div>
        {/* Left Column*/}
        <div className="max-w-xl z-10 text-gray-300">
          <h1 className="md:text-course-details-heading  text-course-details-heading-large text-course-details-heading-small font-semibold text-white">{courseData.courseTitle}</h1>
          <p className="pt-3 md:text-base text-sm"
            dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 200) }}></p>
          {/* Review */}
          <div className='flex items-center space-x-2  pt-3 pb-1 text-sm'>
            <p>{calculateRating(courseData)}</p>
            <div className='flex'>
              {[...Array(5)].map((_, i) => (<img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt=''
                className='w-3.5 h-3.5' />))}
            </div>
            <p className='text-gray-400'>{courseData.courseRatings.length}{courseData.courseRatings.length > 1 ? " ratings" : " rating"}</p>
            <p className="text-blue-400">({courseData.enrolledStudents.length}{courseData.enrolledStudents.length > 1 ? " students" : " student"})</p>
          </div>

          <p className="text-sm">Course by <span className="text-blue-400 underline ">{courseData.educator.name} </span></p>
          <div className="pt-8 text-white">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-5 ">
              {courseData.courseContent.map((chapter, index) =>
              (
                <div className="border border-gray-700 bg-gray-900/70 mb-2 rounded-2xl" key={index}>
                  <div onClick={() => toggleSection(index)} className="flex items-center justify-between px-4 py-3 cursor-pointer select-none hover:bg-gray-900 transition-colors">
                    <div className="flex items-center gap-2">
                      <img className={`transform transition-transform ${openSection[index] ? 'rotate-180' : ''}`} src={assets.down_arrow_icon} alt="Down_Arrow_Icon" />
                      <p className="font-medium md:text-base text-sm text-white">{chapter.chapterTitle}</p>
                    </div>
                    <p className="text-sm md:text-default text-gray-300">{chapter.chapterContent.length} lectures-{calculateChapterTime(chapter)}</p>
                  </div>

                  <div className={`overflow-hidden transition-all duration-2000 ${openSection[index] ? 'max-h-96' : 'max-h-0'}`}>
                    <ul className="list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-300 border-t border-gray-700 ">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li className="flex items-start gap-2 py-1" key={i}>
                          <img src={assets.play_icon} alt="play icon" className="w-4 h-4 mt-1
                              "/>
                          <div className="flex items-center justify-between w-full text-white text-xs md:text-default">
                            <p> {lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.isPreviewFree && <p onClick={() => setPlayerData({
                                videoId: lecture.lectureUrl.split('/').pop()
                              })}
                                className="text-blue-400 cursor-pointer hover:text-blue-300">Preview</p>}
                              <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ["h", 'm'] })}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>
          </div>
          <div className="py-20 text-sm md:text-default">
            <h3 className="text-xl font-semibold text-white">Course Description</h3>
            <p className="pt-3 rich-text"
              dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}></p>
          </div>

        </div>

        {/* Right Column*/}


        <div className="max-w-course-card z-10 shadow-lg shadow-blue-500/10 rounded-t md:rounded-none overflow-hidden bg-gray-900 border border-gray-700 min-w-[300px] sm:min-w-[420ox] ">
          {
            playerData ?
              <YouTube videoId={playerData.videoId} opts={{
                playerVars: {
                  autoplay: 1
                }
              }} iframeClassName='w-full aspect-video' />
              : <img src={courseData.courseThumbnail} alt="" />
          }

          <div className="p-5">
            <div className="flex items-center gap-2">
              <img className="w-3.5 " src={assets.time_left_clock_icon} alt="time left clock icon" />
              <p className="text-red-400"><span className="font-medium">5 Days</span>left at this Price!</p>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-white md:text-4xl text-2xl font-semibold">
                {currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}
              </p>
              <p className="md:text-lg text-gray-400 line-through">{currency}{courseData.coursePrice}</p>
              <p className="md:text-lg text-gray-300">{courseData.discount} % off</p>
            </div>
          </div>
          <div className="flex items-center text-sm md:text-default  gap-4 pt-2 md:pt-4 text-gray-300">
            <div className="flex items-center gap-1">
              <img src={assets.star} alt="star icon" />
              <p>{calculateRating(courseData)} </p>
            </div>
            <div className="h-4 w-px bg-gray-600"> </div>
            <div className="flex items-center gap-1">
              <img src={assets.time_clock_icon} alt=" time clock icon" />
              <p>{calculateCourseDuration(courseData)} </p>
            </div>

            <div className="h-4 w-px bg-gray-600"> </div>


            <div className="flex items-center gap-1">
              <img src={assets.lesson_icon} alt="lesson  icon" />
              <p>{calculateNumberofLectures(courseData)} </p>
            </div>


          </div>
          <button onClick={enrollCourse}
            className="md:mt-6 mt-4 w-full py-3 rounded bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium">
            {isAlreadyEnrolled ? 'Already Enrolled' : 'Enroll Now'}
          </button>

          <div className="pt-6">
            <p className="md:text-xl text-lg font-medium text-white">What's in the course?</p>
            <ul className="ml-4 pt-2 text-sm md:text-default list-disc text-blue-400" >
              <li>Lifetime access with free updates .</li>
              <li>Step-by-step, hands-on project guidance .</li>
              <li>Downloadable resources and source code. </li>
              <li>Quizzes to test your knowledge .</li>
              <li>Certificate of completion. </li>
            </ul>
          </div>

        </div>
      </div>

      <Footer />
    </>
    : <Loading />
}

export default CourseDetails