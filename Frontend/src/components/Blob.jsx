"use client";

import React, { useEffect, useState } from "react";

const Blob = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
    };

    // Attach the event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up function to remove listener on unmount
    // return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: '150px',
        top: cursorY,
        left: cursorX,
      }}
    >
    </div>
  );
};

export default Blob;
