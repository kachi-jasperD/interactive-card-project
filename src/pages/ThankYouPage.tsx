import cardImage from "/assets/bg-card-back.png";
import backgroundImage from "/assets/bg-main-desktop.png";
import cardFrontImage from "/assets/bg-card-front.png";
import icon from "/assets/icon-complete.svg";
import { Button } from "@/components/ui/button";

const ThankYouPage = () => {
  return (
    <>
      <div className="grid grid-cols-3 max-h-screen">
        {/* The purple column at the side */}
        <aside>
          <img
            src={backgroundImage}
            alt="Background-Image"
            className="col-start-1 col-end-2 h-screen"
          />
        </aside>

        {/* Thank you Section*/}
        <main className="col-start-2 col-end-4 h-screen flex flex-col justify-center items-center gap-10">
          <img src={icon} alt="" className="w-16 h-16 object-cover" />
          <h1 className="text-[#120023] text-2xl">THANK YOU!</h1>
          <p className="text-[#bcbcbc]">We've added your card details</p>
          <Button className="submit-btn h-12 text-white bg-[#220930] leading-[2] w-[400px] hover:bg-white hover:border-2 hover:border-[#220930] hover:text-[#220930]">
            Continue
          </Button>
        </main>

        {/* CardFront Image */}
        <div className="card-front h-0">
          <img
            src={cardFrontImage}
            alt=""
            className="position: relative left-30 bottom-170"
          />
          <div className="card-details text-white flex flex-col  justify-around">
            <div className="circles flex gap-3">
              <div className="image-circle-1 w-13 h-13 bg-white rounded-full"></div>
              <div className="image-circle-2 w-5 h-5 border border-white rounded-full self-center"></div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[1.75rem] tracking-[2px]">
                0000 0000 0000 0000
              </p>
              <div className="flex justify-between text-xs font-bold w-[380px]">
                <p>JANE APPLESEED</p>
                <p>00/00</p>
              </div>
            </div>
          </div>
        </div>

        {/* CardBack Image */}
        <div className="card-back position: relative bottom-100 right-70 h-0">
          <img src={cardImage} alt="Image of the Back of a debit card" />
          <p className="w-7.5 text-white position: relative bottom-34 left-87 font-semibold">
            000
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
