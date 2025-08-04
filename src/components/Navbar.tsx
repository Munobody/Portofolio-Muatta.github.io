"use client";
import React from "react";
import GooeyNav from "./utils/Nav";

// Update with your own items
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Blog", href: "#" },
  { label: "More", href: "#" },
];

export default function Navbar({ className = "" }: { className?: string }) {
  return (
    <div className={className} style={{ height: "100px", position: "relative" }}>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
    );      
}