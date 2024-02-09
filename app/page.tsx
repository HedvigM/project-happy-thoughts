import React from "react";
import "./index.css";
import { Metadata } from "next";
import { WriteThought } from "../components/WriteThought";
import { Thoughts } from "../components/Thoughts";

export const metadata: Metadata = {
  title: "Happy thoughts",
};

export default function Page() {
  return (
    <div className="main-container">
      <WriteThought />
      <Thoughts />
    </div>
  );
}
