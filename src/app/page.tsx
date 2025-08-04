"use client";
import About from "@/components/About";
import TechnologiesCard from "@/components/Icon";
import Navbar from "@/components/Navbar";
import Card from "@/components/utils/Card";
import ProfileCard from "@/components/utils/ProfileCardComponent";

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
      {/* Section 2 Kolom */}
      <section className="w-full flex flex-col md:flex-row items-start justify-center gap-8">
        {/* Kiri: Profile Card */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <ProfileCard
            name="Muatta Muhariq"
            title="Frontend Developer"
            handle="muatta_"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/Atta.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
          {/* Info & Social Media */}
          <div className="flex flex-col items-center mt-4">
            <span className="text-sm text-gray-500 mb-2">
              Front-End Developer
            </span>
            <div className="flex gap-4">
              <a
                href="https://github.com/Munobody"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:scale-110 transition-transform text-white"
              >
                {/* GitHub SVG */}
                <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/muatta-muhariq-464b16286/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:scale-110 transition-transform text-white"
              >
                {/* LinkedIn SVG */}
                <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.27h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </a>
              <a
                href="https://wa.me/6281362680696"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:scale-110 transition-transform text-white"
              >
                {/* WhatsApp SVG */}
                <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.994c-.003 5.456-4.438 9.891-9.893 9.891zm8.413-18.306a11.815 11.815 0 0 0-8.413-3.488c-6.627 0-12 5.373-12 12 0 2.121.555 4.199 1.607 6.032l-1.693 6.179a1 1 0 0 0 1.237 1.237l6.18-1.693a11.93 11.93 0 0 0 5.669 1.447h.005c6.627 0 12-5.373 12-12 0-3.182-1.243-6.174-3.488-8.514z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Kanan: Tentang Saya & Technologies */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <About />
          <div>
            <TechnologiesCard />
          </div>
        </div>
      </section>
      {/* Galeri Foto */}
      <section className="w-full mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Foto Pengalaman & Hobi
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Beberapa momen pengalaman dan hobi saya, mulai dari kegiatan
          profesional hingga aktivitas santai.
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
    </>
  );
}
