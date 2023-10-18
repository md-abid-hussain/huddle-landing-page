import Logo from "/images/logo.svg";
import Mockup from "/images/illustration-mockups.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  const socialButtonStyle =
    "border-[2px] p-[0.5rem] rounded-full h-4 w-4 hover:text-custom_magenta hover:border-custom_magenta hover:cursor-pointer sm:w-[22px] sm:h-[22px] mx-1";

  return (
    <main className="bg-custom_violet bg-bg-mobile min-h-screen bg-cover md:bg-bg-desktop text-white px-11 pt-11 pb-9 lg:px-20 lg:pt-16">
      <section className=" mb-14">
        <img src={Logo} alt="logo" className="h-8 md:h-[52px]" />
      </section>
      <div className="lg:flex lg:items-center gap-14">
        <figure className=" mb-16 lg:m-w-[720px]">
          <img src={Mockup} alt="mockup illustration" />
        </figure>
        <div className="lg:flex-1">
          <h1 className=" font-[600] text-[24px] text-center mb-6 sm:text-4xl lg:text-left">
            Build The Community Your Fans Will Love
          </h1>

          <p className=" text-base font-[400] text-center mb-6 sm:text-xl lg:text-left">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <button className=" block mx-auto bg-white py-[14px] px-16 text-custom_violet text-sm rounded-full mb-14 hover:bg-custom_magenta hover:text-white hover:cursor-pointer shadow-md shadow-violet-950 sm:text-xl lg:ml-0">
            Register
          </button>
        </div>
      </div>
      <figure>
        <div className="text-center lg:text-right">
          <FontAwesomeIcon icon={faFacebookF} className={socialButtonStyle} />
          <FontAwesomeIcon icon={faXTwitter} className={socialButtonStyle} />
          <FontAwesomeIcon icon={faInstagram} className={socialButtonStyle} />
        </div>
      </figure>
    </main>
  );
}

export default App;
