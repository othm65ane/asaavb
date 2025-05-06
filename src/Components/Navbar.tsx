import logo from '../assets/logo.png'

const NavBar = () => {

    
  return (
    <header className='flex justify-between items-center text-black py-4 px-8
    md:px-32 border-b-[1px] border-gray-300'>
        <a href="/">
       <img src={logo} width={100} />
        </a>
        

    </header>
  )
}

export default NavBar
