import { useState } from "react";
import { SingUpDesktop, SingUpMobile } from "../assets/images/index";
import { useNavigate } from "react-router-dom";

function Form() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleButtonClick = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(email));
  };

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/success", { state: { email } });
  };

  return (
    <>
      <main className="w-100% h-screen bg-darkGray flex justify-center items-center mb-16">
        <div
          className="flex bg-white p-5 rounded-3xl items-center w-[850px]"
          id="main_container"
        >
          <div id="mobile_image" className="hidden">
            <img src={SingUpMobile} alt="newsletter hero" />
          </div>
          <div className="p-5">
            <form className="pl-6" id="container-text" onSubmit={handleSubmit}>
              <h1 className="text-5xl font-display pb-5 font-bold">
                Stay updated!
              </h1>
              <p className="pb-5 text-justify text-base">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="pb-5 list-image-iconList pl-5 leading-7">
                <li className="pl-2">
                  Product discovery and building what matters
                </li>
                <li className="pl-2">
                  Measuring to ensure updates are a success
                </li>
                <li className="pl-2">And much more!</li>
              </ul>
              <div>
                <div className=" pb-3" id="input">
                  <label
                    htmlFor="email"
                    className="block text-[.7rem] font-display text-black font-bold "
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    required
                    placeholder="email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer border border-secondary w-full rounded-lg h-12  focus:ring-blue-500 focus:border-blue-500 p-5 text-sm "
                  />
                  <span
                    className={`text-red-500 text-sm ${
                      isEmailValid ? "invisible" : "visible"
                    }`}
                  >
                    Please enter a valid email address
                  </span>
                </div>
                <button
                  type="submit"
                  onClick={handleButtonClick}
                  className="bg-darkGray text-white  p-4 text-sm w-full rounded-lg hover:bg-gradient-to-r from-pink-400 to-orange-500 "
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
            </form>
          </div>
          <div id="desktop_image" className="block ml-10 w-auto">
            <img src={SingUpDesktop} alt="newsletter hero" />
          </div>
        </div>
      </main>
      <footer className="mt-1">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  );
}

export default Form;
