import React from "react";
import Border from "./utils/Border";

export default function About() {
  return (
    <Border
      as="div"
      className="custom-class"
      color="cyan"
      speed="5s"
    >
      <h3 className="text-xl font-semibold mb-2">Tentang Saya</h3>
      <p className="text-base leading-relaxed">
        Saya adalah seorang Front-End Developer yang antusias membangun
        antarmuka web interaktif dan modern. Berpengalaman menggunakan
        React, Next.js, dan Tailwind CSS. Saya senang belajar hal baru,
        berkolaborasi dalam tim, dan selalu berusaha memberikan solusi
        terbaik untuk setiap project yang saya kerjakan.
      </p>
    </Border>
  );
}