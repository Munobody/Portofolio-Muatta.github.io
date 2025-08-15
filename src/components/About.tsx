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
A fresh graduate Software Developer with a Bachelor's degree in Informatics from Syiah Kuala University. Passionate about creating innovative solutions and eager to contribute to meaningful projects. Currently seeking opportunities to apply my skills and knowledge in a professional environment.
      </p>
    </Border>
  );
}