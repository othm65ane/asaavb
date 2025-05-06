
import team from '../assets/team.jpg'
import team2 from '../assets/team2.jpg'
import jersey from '../assets/jersey.jpg'
import nat from '../assets/nat.jpg'
import nat2 from '../assets/nat2.jpg'


const HeroSection = () => {
  return (
    <div>
        <div className='text-center mt-[120px] lg:mt-[200px]'>
            
<h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">ASAA : Volleyball Team in Morocco</h1>
<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Fueled by passion and powered by teamwork,
we spike harder, dive deeper, and rise higher together.</p>
<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    Contact Us 
    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

        </div>
        <div className='destination min-h-screen lg:mt-[150px] mt-[280px]'>
       <h1 className='text-center text-5xl'>About <span className='text-blue-700'>Us</span></h1>
       <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl tracking-tight font-semibold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p className="mb-4"> Discover the ultimate travel experience with [Your Website Name]! Whether you're looking for guided tours, local delicacies, or unique souvenirs, we have it all. Explore breathtaking destinations, enjoy exquisite cuisine, and shop for exclusive handcrafted treasures—all in one place. Your adventure starts here !</p>
            <p>Wanderoc is your one-stop destination for unforgettable travel experiences. From expert-led tours and authentic local food to a curated selection of souvenirs, we bring the best of your favorite destinations to you. Plan, explore, and indulge—all with ease!</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={team}/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={team2}/>
    </div>
    </div>
</section>
       </div>
       <div className=' mt-12 lg:mt-[100px]'>
       <h1 className='text-center text-5xl'>Our <span className='text-blue-700'>jersey</span></h1>
       <h1 className='text-center text-xl text-gray-500 sm:text-lg '>2025/2026</h1>
       <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 lg:mt-[120px]  mt-[100px]'>
        <img src={jersey}
        width={400}
        />
        <p className='mb-6 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-800 mt-[50px]'>I' am a dedicated and versatile with a passion Junior Software developer for creating efficient and user-friendly web applications.  I have worked with a variety of technologies
        </p>
      </div>
       </div>
       <div className=' mt-12 lg:mt-[100px]'>
       <h1 className='text-center text-5xl'>Last <span className='text-blue-700'> Activity</span></h1>
       <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 lg:mt-[120px]  mt-[100px]'>
        <img src={nat}
        width={400}
        />
        <img src={nat2}
        width={400}
      className=' lg-ml-6 mt-4'/>
      </div>
       </div>
           </div>
  )
}

export default HeroSection
