import Logo from '/images/logo.svg'
import Mockup from '/images/illustration-mockups.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function App() {

  return (
    <section className="bg-custom_violet bg-bg-mobile min-h-screen bg-cover md:bg-bg-desktop text-white p-9">
      <header className=' mb-14'>
        <img src={Logo} alt="logo" className=' h-8' />
      </header>
      <figure className=' mb-16'>
        <img src={Mockup} alt="mockup illustration" />
      </figure>
      <h1 className=" font-[600] text-[24px] text-center mb-6 ">Build The Community Your Fans Will Love</h1>

      <p className=' text-base font-[400] text-center mb-6 '>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
        Create connections with your users as you engage in genuine discussion.</p>

      <button className=' block mx-auto bg-white py-[14px] px-16 text-custom_violet text-xs rounded-full mb-14 '>Register</button>

      <figure className='flex gap-4 justify-center mb-1'>
        <FontAwesomeIcon icon={faFacebookF} className='border-[1px] p-[0.25rem] rounded-full h-[20px] w-[20px]' />
        <FontAwesomeIcon icon={faXTwitter} className='border-[1px] p-[0.25rem] rounded-full h-[20px] w-[20px]' />
        <FontAwesomeIcon icon={faInstagram} className='border-[1px] p-[0.25rem] rounded-full h-[20px] w-[20px]' />
      </figure>
    </section>
  )
}

export default App
