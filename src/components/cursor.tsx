import React, { useEffect, useState } from "react";


const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Update cursor position
      setPosition({ x, y });

      // Add a slight delay for the follower effect
      setTimeout(() => {
        setFollowerPosition({ x, y });
      }, 50);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Cursor (Orange dot) */}
      <div
        className="cursor"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>

      {/* Cursor Follower (Purplish circle) */}
      <div
        className="cursor-follower"
        style={{
          transform: `translate(${followerPosition.x - 20}px, ${followerPosition.y - 20}px)`, // Adjusted for centering
        }}
      ></div>
    </>
  );
};

export default Cursor;
