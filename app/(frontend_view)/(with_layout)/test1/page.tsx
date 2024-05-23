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
    <div className="w-[100%] overflow-hidden">
      <div
        className="flex flex-col gap-4 justify-center items-center w-full h-[170px] bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../../inner2.jpg')",
        }}
      >
        <Skeleton className="w-[120px] h-[40px] " />
        <div className="flex gap-4 justify-center items-center text-gray-200">
          <Skeleton className="w-[50px] h-[20px] " />
          -
          <Skeleton className="w-[50px] h-[20px] " />
          -
          <Skeleton className="w-[50px] h-[20px] " />
        </div>
      </div>

      <section id="albums" className="albumsShell py-20 pt-10 px-2 sm:px-12 ">
        <div className="|| xspring300pxFromLeft15">
          <div
            className="text-lg sm:text-xl md:text-2xl xl:text-4xl text-start font-bold text-gray-900 mb-4
           "
          >
            <Skeleton className="w-[300px] h-[50px] " />
          </div>
          <div className="w-[100px] border-b-[3px] border-red-500"></div>
        </div>

        <div className=" mt-4  grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
            <div
              key={i}
              className="xspringTrans300pxFromBelow10 rounded overflow-hidden w-[290px] sm:w-[385px] md:w-[330px] lg:w-[300px] xl:w-[385px]"
            >
              <Skeleton className=" h-[280px]" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
/*****************************************************
           other
*****************************************************/
