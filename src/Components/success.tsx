import { IconSucc } from "../assets/images/index";
import { useLocation, useNavigate } from "react-router-dom";
function success() {
  const location = useLocation();
  const email = location.state?.email;
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <main className="w-100% h-screen bg-darkGray flex justify-center items-center mb-16">
      <div
        className="flex bg-white p-5 rounded-3xl items-center w-[500px]"
        id="main_container"
      >
        <form className="p-9 " onClick={handleButtonClick}>
          <img src={IconSucc} alt="newsletter hero" className="pb-10" />
          <h1 className="text-darkGray text-5xl font-bold pb-5">
            Thanks for subscribing!
          </h1>
          <p className="font-display text-base mb-10">
            A confirmation email has been sent to {email}. Please open it and
            click the button inside to confirm your subscription.
          </p>
          <button
            id="button"
            className="bg-darkGray p-3 w-full text-white rounded-lg hover:bg-gradient-to-r from-pink-400 to-orange-500"
          >
            Dismiss message
          </button>
        </form>
      </div>
    </main>
  );
}

export default success;
