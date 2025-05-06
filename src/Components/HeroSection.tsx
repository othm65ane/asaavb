
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
            <p className="mb-4"> We are a dedicated and passionate group of athletes who represent Club in local and regional volleyball competitions. United by teamwork, discipline, and a love for the game, our team strives for excellence both on and off the court.</p>
            <p>🏅 Our Mission: To foster talent, promote sportsmanship, and build a community through the spirit of volleyball.</p>
            <p className="mb-4 text-2xl tracking-tight text-gray-900 dark:text-white">Head Coach:<span className='text-blue-700 border-solid border-b-2'>   Azouz Houssam</span></p>
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
        <p className='mb-6 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-800 mt-[50px]'>We're excited to unveil our VB team's brand-new jersey!
Featuring a sleek modern design with breathable fabric,
this jersey combines style and performance on the court.
The team logo and colors stand out with pride and energy.
Get ready to spike in style this season!
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
      className=' lg:ml-6 mt-4'/>
      </div>
       </div>
       <div className="mx-5 bg-blue-900 text-white lg:ml-125 flex-col gap-8 justify-between lg:w-180 items-center px-8 py-4 rounded-lg mt-20 md:flex-row md:gap-0 md:px- ">
          <div>
            <h1 className="text-3xl font-semibold">Get Ready !</h1>
            <p className="text-base font-normal leading-7 text-zinc-400 lg:max-w-lg md:max-w-md my-2">
            Our volleyball team page is almost here. Soon, you'll meet the players, explore our achievements, and follow us throughout the season. Stay tuned for updates, photos, and match highlights!
            </p>
          </div>

       
        </div>
           </div>
  )
}

export default HeroSection
