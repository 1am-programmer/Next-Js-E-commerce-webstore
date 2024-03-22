// "use client";
import Aboutlook from "@/components/Aboutlook";
import Beautiful from "@/components/Beautiful";
import Complete from "@/components/Complete";
import Female from "@/components/Female";
import From from "@/components/From";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import Review from "@/components/Review";
import Video from "@/components/Video";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <Aboutlook />
      <Female />
      <Video />
      <Beautiful />
      <Complete />
      <Review />
      <From />
    </div>
  );
}
