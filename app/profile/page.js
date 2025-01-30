'use client';
import { useState } from 'react';

export default function Home() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, visible: false });
  const [borders, setBorders] = useState({
    top: false,
    right: false,
    bottom: false,
    left: false
  });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y, visible: true });

    const rotateX = (y - rect.height / 2) / 20;
    const rotateY = -(x - rect.width / 2) / 20;
    
    setRotation({ x: rotateX, y: rotateY });

    // Border glow effect when near edges
    const threshold = 50; // Pixels from edge
    setBorders({
      top: y < threshold,
      right: x > rect.width - threshold,
      bottom: y > rect.height - threshold,
      left: x < threshold
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setMousePosition({ x: 0, y: 0, visible: false });
    setBorders({ top: false, right: false, bottom: false, left: false });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
      <div
        className=" lg:w-1/2 max-w-2xl bg-blue-200 rounded-lg p-8 shadow-xl shadow-blue-700  transition-all duration-200 ease-out relative overflow-hidden"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          borderTop: borders.top ? '2px solid #3b82f6' : '2px solid transparent',
          borderRight: borders.right ? '2px solid #3b82f6' : '2px solid transparent',
          borderBottom: borders.bottom ? '2px solid #3b82f6' : '2px solid transparent',
          borderLeft: borders.left ? '2px solid #3b82f6' : '2px solid transparent',
          transition: "border 0.5s ease-in-out"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Circular Glow Effect */}
        {mousePosition.visible && (
          <div
            className="absolute pointer-events-none"
            style={{
              top: mousePosition.y - 50,
              left: mousePosition.x - 50,
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "rgba(59, 130, 246, 0.4)", // Blue glow effect
              boxShadow: "0 0 10px 25px rgba(59, 130, 246, 0.2)", // Soft glow
              filter: "blur(25px)",
              transition: "top 0.03s linear, left 0.03s linear"
            }}
          />
        )}

        {/* Profile Image */}
        <div className="flex justify-center mb-6 ">
          <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl ">
            profile
          </div>
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-center mb-2">Name</h1>
        <hr width="100%" height="10%" size="2" color="blue" noshade className="text-center"></hr>
        <p className="text-gray-600 text-center mb-6">name@gmail.com</p>
<div className="border-4 rounded-lg bg-blue-100 shadow-inner-lg">

        {/* Skill Set */}
        <div className="mb-6 text-center ">
          <h2 className="text-xl font-semibold text-blue-500 mb-3">Skill Set</h2>
          <ul className="space-y-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* College Name */}
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold text-blue-500 mb-2">College Name</h2>
          <p>ABC Institute of Technology</p>
        </div>

        {/* Achievements */}
        <div className="mb-6 text-center">
          <h2 className="text-xl font-semibold text-blue-500 mb-3">Achievements</h2>
          <ul className="list-decimal list-inside space-y-2">
            <li>Won 1st place in Hackathon 2023</li>
            <li>Published a research paper on AI in healthcare</li>
            <li>Completed a full-stack development internship</li>
          </ul>
        </div>

</div>
        {/* Edit Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-center mt-3">
          Edit
        </button>
      </div>
    </main>
  );
}
