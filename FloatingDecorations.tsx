'use client';

import * as React from 'react';

export default function FloatingDecorations() {
  const decorations = [
    { id: 1, emoji: '✨', top: '10%', left: '5%', delay: 0 },
    { id: 2, emoji: '💫', top: '20%', right: '8%', delay: 0.5 },
    { id: 3, emoji: '✨', bottom: '15%', left: '10%', delay: 1 },
    { id: 4, emoji: '💝', top: '50%', right: '5%', delay: 0.3 },
    { id: 5, emoji: '🌸', bottom: '30%', right: '12%', delay: 0.8 },
    { id: 6, emoji: '✨', top: '70%', left: '8%', delay: 1.2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {decorations.map((decoration) => (
        <div
          key={decoration.id}
          className="absolute text-2xl md:text-3xl"
          style={{
            top: decoration.top,
            bottom: decoration.bottom,
            left: decoration.left,
            right: decoration.right,
            animation: `floatY ${6 + decoration.delay}s ease-in-out ${decoration.delay}s infinite, floatX ${6 + decoration.delay}s ease-in-out ${decoration.delay}s infinite, spin ${6 + decoration.delay}s ease-in-out ${decoration.delay}s infinite, fade ${6 + decoration.delay}s ease-in-out ${decoration.delay}s infinite`,
          }}
        >
          {decoration.emoji}
        </div>
      ))}

      {/* Gradient orbs for depth */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-br from-rose/10 to-gold/10 rounded-full blur-3xl"
        style={{ top: '20%', left: '-10%', animation: 'orb1 20s ease-in-out 0s infinite' }}
      />

      <div
        className="absolute w-96 h-96 bg-gradient-to-br from-sage/10 to-rose/10 rounded-full blur-3xl"
        style={{ bottom: '10%', right: '-10%', animation: 'orb2 25s ease-in-out 0s infinite' }}
      />

      <style>{`
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }
        @keyframes floatX {
          0% { transform: translateX(0); }
          50% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          33% { transform: rotate(10deg); }
          66% { transform: rotate(-10deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes fade {
          0% { opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { opacity: 0.3; }
        }
        @keyframes orb2 {
          0% { transform: translate(0,0); }
          50% { transform: translate(-50px,-30px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </div>
  );
}
        @keyframes orb2 {
          0% { transform: translate(0,0); }
          50% { transform: translate(-50px,-30px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
    </div>
  );
}
