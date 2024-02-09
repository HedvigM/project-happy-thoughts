"use client";
import { useState } from "react";
import "./InputContainer.css";

export function InputContainer() {
  const [thought, setThought] = useState("");
  return (
    <>
      <input
        name="thought"
        type="text"
        placeholder="Write your thoughts here."
        value={thought}
        onChange={(event) => setThought(event.target.value)}
      />
      <div className="letter-counter">
        <p>{140 - thought.length} / 140 </p>
      </div>
      <button
        type="submit"
        className="send-button"
        disabled={thought.length > 140}
      >
        <p>❤️ Send happy Thought! ❤️</p>
      </button>
    </>
  );
}
