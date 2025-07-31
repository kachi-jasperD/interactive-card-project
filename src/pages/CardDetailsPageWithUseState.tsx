import cardImage from "/assets/bg-card-back.png";
import backgroundImage from "/assets/bg-main-desktop.png";
import cardFrontImage from "/assets/bg-card-front.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CardDetailsPageWithUseState = () => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const card = {
      cardHolderName,
      cardNumber,
      cardMonth,
      cardYear,
      cardCvc,
    };

    // setIsSubmitting(true);

    fetch("http://localhost:8000/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(card),
    }).then(() => {
      console.log("New card added");
    });

    // setIsSubmitting(false);
  };

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

        {/* Card details form */}
        <main className="col-start-2 col-end-4 h-screen flex justify-center items-center gap-30 ">
          <form action="" method="" onSubmit={handleSubmit}>
            <Label className="label">CARDHOLDER NAME</Label>
            <Input
              type="text"
              placeholder="e.g Jane Appleseed"
              className="input"
              value={cardHolderName}
              onChange={(e) => {
                setCardHolderName(e.target.value);
              }}
            />

            <Label className="label">CARD NUMBER</Label>
            <Input
              type="text"
              placeholder="e.g 1234 5678 9123 0000"
              className="input"
              value={cardNumber}
              onChange={(e) => {
                setCardNumber(e.target.value);
              }}
            />
            <div className="other-details flex gap-10">
              <div className="date">
                <Label className="label">EXP. DATE (MM/YY)</Label>
                <div className="date flex gap-4">
                  <Input
                    type="text"
                    placeholder="MM"
                    className="h-11 w-28"
                    maxLength={2}
                    value={cardMonth}
                    onChange={(e) => {
                      setCardMonth(e.target.value);
                    }}
                  />
                  <Input
                    type="text"
                    placeholder="YY"
                    className="h-11 w-28"
                    maxLength={2}
                    value={cardYear}
                    onChange={(e) => {
                      setCardYear(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="cvc">
                <Label className="label">CVC</Label>
                <Input
                  type="text"
                  placeholder="e.g 123"
                  className="h-11 w-30"
                  maxLength={3}
                  value={cardCvc}
                  onChange={(e) => {
                    setCardCvc(e.target.value);
                  }}
                />
              </div>
            </div>
            <Button className="submit-btn h-15 text-white bg-[#220930] leading-[2] w-[400px] hover:bg-white hover:border-2 hover:border-[#220930] hover:text-[#220930]">
              Confirm
            </Button>
          </form>
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
                {cardNumber && cardNumber.trim()
                  ? cardNumber
                      .trim()
                      .match(/.{1,4}/g)
                      ?.join(" ")
                  : "0000 0000 0000 0000"}
              </p>

              <div className="flex justify-between text-xs font-bold w-[380px]">
                <p>
                  {cardHolderName && cardHolderName.trim()
                    ? cardHolderName.toUpperCase()
                    : "JANE APPLESEED"}
                </p>
                <p>
                  {cardMonth && cardMonth.trim() ? cardMonth : "00"}/
                  {cardYear && cardYear.trim() ? cardYear : "00"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CardBack Image */}
        <div className="card-back position: relative bottom-100 right-70 h-0">
          <img src={cardImage} alt="Image of the Back of a debit card" />
          <p className="w-7.5 text-white position: relative bottom-34 left-87 font-semibold">
            {cardCvc && cardCvc.trim() ? cardCvc : "000"}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardDetailsPageWithUseState;
