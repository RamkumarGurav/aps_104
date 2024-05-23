/*** nextjs ***/
/*** fonts ***/
import { Poppins } from "next/font/google";
const font = Poppins({ weight: "400", subsets: ["latin"] });
/*** meta ***/
import { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
export const metadata: Metadata = {
  title: {
    default: "Appolo Public School",
    template: "%s | APS",
  },
  description: "Welcome to Appolo Public School",
};
/*** components ***/
/*** packages ***/
/*****************************************************
      Page
 ****************************************************/
export default function Page() {
  return (
    <div className="w-[100%] overflow-hidden p-8  ||  flex flex-col gap-4 justify-center items-center text-white">
      <div className="max-w-md bg-blue-500 ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        cumque labore tenetur eos cum minima consequatur quisquam temporibus
        aspernatur similique quas fugiat dolorum sapiente veritatis nostrum a
        sit, rem natus accusamus sint delectus, asperiores incidunt sunt?
        Reiciendis, dolorum error. Quisquam ducimus soluta, odio, minus ut
        repudiandae, vel laudantium excepturi optio unde dolore officia debitis
        quidem nesciunt ipsa consequatur aperiam itaque nulla quibusdam eius?
        Inventore fugit labore at est saepe voluptas repudiandae consectetur
        quaerat incidunt aspernatur? Labore neque, saepe quas amet eos
        laudantium mollitia officia minus rerum! Velit blanditiis atque aut. Eum
        ad tenetur repudiandae in atque, nihil nesciunt quam nisi?
      </div>

      <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
        When you look
        <span className="before:block before:absolute mx-2 before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span className="relative text-white ">annoyed</span>
        </span>
        all the time, people think that you're busy.
      </blockquote>
      <div className="relative bg-red-400 p-8">
        <div className="absolute -inset-2 bg-blue-500"></div>
        <div className="relative z-10">
          Content above the positioned element.
        </div>
      </div>
    </div>
  );
}
/*****************************************************
           other
*****************************************************/
