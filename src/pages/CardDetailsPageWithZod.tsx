import cardImage from "/assets/bg-card-back.png";
import backgroundImage from "/assets/bg-main-desktop.png";
import cardFrontImage from "/assets/bg-card-front.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const cardDetailsSchema = z.object({
  names: z.string().max(40, "Can't be blank"),
  numbers: z.string().min(16, "Wrong format, numbers only"),
  month: z.string().min(2, "Can't be blank"),
  year: z.string().min(2),
  cvc: z.string().min(2, "Can't be blank"),
});

const CardDetailsPageWithZod = () => {
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    // getValues,
  } = useForm({
    resolver: zodResolver(cardDetailsSchema),
  });

  // const cardYear = watch("year", "");
  // const cardMonth = watch("month", "");
  // const cardCvc = watch("cvc", "");
  // const cardHolderName = watch("name", "");
  // const cardNumber = watch("numbers", "");

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
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
          <form onSubmit={handleSubmit(onSubmit)} action="" method="">
            <Label className="label">CARDHOLDER NAME</Label>
            <Input
              {...register("names")}
              type="text"
              placeholder="e.g Jane Appleseed"
              className="input"
            />
            {errors.names && (
              <p className="text-red-500 text-xs">{`${errors.names.message}`}</p>
            )}

            <Label className="label">CARD NUMBER</Label>
            <Input
              {...register("numbers")}
              type="text"
              placeholder="e.g 1234 5678 9123 0000"
              className="input"
            />
            {errors.numbers && (
              <p className="text-red-500 text-xs">{`${errors.numbers.message}`}</p>
            )}
            <div className="other-details flex gap-10">
              <div className="date">
                <Label className="label">EXP. DATE (MM/YY)</Label>
                <div className="date flex gap-4">
                  <Input
                    {...register("month")}
                    type="text"
                    placeholder="MM"
                    className="h-11 w-28"
                    maxLength={2}
                  />
                  <Input
                    {...register("year")}
                    type="text"
                    placeholder="YY"
                    className="h-11 w-28"
                    maxLength={2}
                  />
                </div>
                {errors.month && (
                  <p className="text-red-500 text-xs">{`${errors.month.message}`}</p>
                )}
              </div>
              <div className="cvc">
                <Label className="label">CVC</Label>
                <Input
                  {...register("cvc")}
                  type="text"
                  placeholder="e.g 123"
                  className="h-11 w-30"
                  maxLength={3}
                />
                {errors.cvc && (
                  <p className="text-red-500 text-xs">{`${errors.cvc.message}`}</p>
                )}
              </div>
            </div>
            <Button
              disabled={isSubmitting}
              className="submit-btn h-15 text-white bg-[#220930] leading-[2] w-[400px] hover:bg-white hover:border-2 hover:border-[#220930] hover:text-[#220930]"
            >
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
                {/* {cardNumber && cardNumber.trim()
                  ? cardNumber
                      .trim()
                      .match(/.{1,4}/g)
                      ?.join(" ")
                  : "0000 0000 0000 0000"} */}
              </p>

              <div className="flex justify-between text-xs font-bold w-[380px]">
                <p>
                  {/* {cardHolderName && cardHolderName.trim()
                    ? cardHolderName.toUpperCase()
                    : "JANE APPLESEED"} */}
                </p>

                <p>
                  {/* {cardMonth && cardMonth.trim() ? cardMonth : "00"}/
                  {cardYear && cardYear.trim() ? cardYear : "00"} */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CardBack Image */}
        <div className="card-back position: relative bottom-100 right-70 h-0">
          <img src={cardImage} alt="Image of the Back of a debit card" />
          <p className="w-7.5 text-white position: relative bottom-34 left-87 font-semibold">
            {/* {cardCvc && cardCvc.trim() ? cardCvc : "000"} */}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardDetailsPageWithZod;
