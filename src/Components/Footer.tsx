import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
          <div className=" bg-[#F2F2F2] border-t border-zinc-200 mt-8">

<section className="container flex justify-between items-center px-5 sm:px-7 py-8 sm:py-10 mx-auto lg:max-w-[1280px]">
    <div className=" text-xs text-center order-1 sm:order-none  ">© {new Date().getFullYear()} ASAA . All rights reserved.</div>
    <div className=" text-xs text-center ">Made with <span className="text-[10px]">🖤</span> and <span className="text-[10px]">☕️</span> by <a href="https://och-woad.vercel.app/" className="border-b-2 border-solid border-black font-bold">Othmane charfaoui</a></div>
    <div className="flex text-2xl text-center">
      <a href="https://x.com/ASAAVolleyball?fbclid=PAZXh0bgNhZW0CMTEAAafG3-YNTO2-L8EottBVQ7OMukw6JcgoZLJmbhEa8UnleMPv7K00ZbgVBXN7wg_aem_A2JDVKC2yGtAd_PGjAJ3IQ"><FaSquareXTwitter
      width={50}
      /></a>
      <a href="https://www.instagram.com/asaavolleyball/"><FaInstagram
      width={50}
      className="ml-6"
      /></a>
    </div>
</section>

</div>
    </div>
  )
}

export default Footer
