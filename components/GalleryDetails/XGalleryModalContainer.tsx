"use client";
/*** nestjs ***/
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
/*** packages ***/
import { AnimatePresence, motion } from "framer-motion";
import { Dialog } from "../ui/dialog";
/*** components ***/
// import Modal from "./Modal";
// import GalleryCarousel from "../Carousels/GalleryCarousel";
/*** dynamic imports ***/
const Modal = dynamic(() => import("./Modal"), {
  ssr: false,
});
const GalleryCarousel = dynamic(() => import("../Carousels/GalleryCarousel"), {
  ssr: false,
});

/*****************************************************
           Component
*****************************************************/
export default function XGalleryModalContainer({
  data,
  keyIndex,
  srcUrl,
  blurUrl,
}: {
  data: any;
  srcUrl: string;
  blurUrl: string;
  keyIndex: number;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <div className="bg-white w-full  flex items-center justify-center">
      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring" }}
        viewport={{ once: true, amount: 0 }}
        id="image-container"
        onClick={() => (modalOpen ? close() : open())}
        className="relative  w-full h-[240px] mx-auto cursor-pointer"
      >
        <Image
          src={srcUrl}
          alt="school"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover "
          placeholder="blur"
          blurDataURL={blurUrl}
          priority={keyIndex < 9}
        />
      </motion.div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Dialog>
            <GalleryCarousel slides={data} currentIndex={keyIndex}>
              {data.map((item: { [key: string]: any }, i: number) => (
                //width and height attributes are not real width and heights of the image
                // most imp - always give width in terms of min-width and you must give the height
                //gieve object-cover to automatically adjuct the aspect ratio
                //if you give both width and height to Image component without placing Image component in any container then always use object-cover
                <Image
                  key={i}
                  src={`${item.imageUrl}`}
                  alt="school"
                  width={700}
                  height={500}
                  className="min-w-full md:w-[650px] h-[250px] sm:h-[400px] object-contain"
                  priority={keyIndex < 9}
                />
              ))}
            </GalleryCarousel>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
