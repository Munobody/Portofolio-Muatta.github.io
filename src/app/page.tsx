"use client";
import About from "@/components/About";
import DesignPortfolio from "@/components/DesignPortofolio";
import Experience from "@/components/Experience";
import ProfileCenterLayout from "@/components/ProfileCenterLayout";
import Project from "@/components/Project";
import Card from "@/components/utils/Card";
import Head from "next/head";

const items = [
  {
    id: "1",
    img: "/assets/IMG_0639.JPG",
    url: "/assets/IMG_0639.JPG",
    height: 400,
  },
  {
    id: "2",
    img: "/assets/IMG_0735.JPG",
    url: "/assets/IMG_0735.JPG",
    height: 250,
  },
  {
    id: "3",
    img: "/assets/IMG_0828.JPG",
    url: "/assets/IMG_0828.JPG",
    height: 600,
  },
  {
    id: "4",
    img: "/assets/IMG_1482.JPG",
    url: "/assets/IMG_1482.JPG",
    height: 600,
  },
  {
    id: "5",
    img: "/assets/IMG_1483.JPG",
    url: "/assets/IMG_1483.JPG",
    height: 400,
  },
  {
    id: "6",
    img: "/assets/KJD_3086.JPG",
    url: "/assets/KJD_3086.JPG",
    height: 400,
  },
  {
    id: "7",
    img: "/assets/KJD_3521.JPG",
    url: "/assets/KJD_3521.JPG",
    height: 400,
  },
  {
    id: "8",
    img: "/assets/KJD_3585.JPG",
    url: "/assets/KJD_3585.JPG",
    height: 400,
  },
  {
    id: "9",
    img: "/assets/profile2.jpg",
    url: "/assets/profile2.jpg",
    height: 600,
  },
  {
    id: "10",
    img: "/assets/profile3.jpeg",
    url: "/assets/profile3.jpeg",
    height: 600,
  },
];



export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Honk&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <ProfileCenterLayout />
        <main className="mt-10">
          <div className="w-full">
            <About />
          </div>

          <div className="mt-10">
            <Experience />
          </div>

          <div className="mt-10">
            <Project />
          </div>

          <div className="mt-10">
            <DesignPortfolio />
          </div>

          <section className="w-full mt-10 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">
              Foto Pengalaman &amp; Hobi
            </h2>
            <p className="text-center text-gray-400 mb-6">
              Beberapa momen pengalaman dan hobi saya.
            </p>

            <div>
              <Card
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}