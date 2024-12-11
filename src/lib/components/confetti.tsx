"use client";
import confetti from "canvas-confetti";
 
type TODO = any;
 
interface ConfettiOptions extends confetti.Options {
  particleCount?: number;
  angle?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  drift?: number;
  flat?: boolean;
  ticks?: number;
  origin?: { x: number; y: number };
  colors?: string[];
  shapes?: confetti.Shape[];
  zIndex?: number;
  disableForReducedMotion?: boolean;
  useWorker?: boolean;
  resize?: boolean;
  canvas?: HTMLCanvasElement | null;
  scalar?: number;
}
 
const Confetti = (options: ConfettiOptions) => {
  if (
    options.disableForReducedMotion &&
    window.matchMedia("(prefers-reduced-motion)").matches
  ) {
    return;
  }
 
  const confettiInstance = options.canvas
    ? confetti.create(options.canvas, {
        resize: options.resize ?? true,
        useWorker: options.useWorker ?? true,
      })
    : confetti;
 
  confettiInstance({
    ...options,
  });
};
 
Confetti.shapeFromPath = (options: { path: string; [key: string]: TODO }) => {
  return confetti.shapeFromPath({ ...options });
};
 
Confetti.shapeFromText = (options: { text: string; [key: string]: TODO }) => {
  return confetti.shapeFromText({ ...options });
};
 
export { Confetti };
 
/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        FUNCTIONS                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
 
// 1. Basic
export const confettiBasic = () => {
  Confetti({});
};
 
// 2. Random
export const confettiRandom = () => {
  Confetti({
    angle: Math.random() * 360,
  });
};
 
// 3. Fireworks
export const confettiFireworks = () => {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
 
  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
 
  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();
 
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
 
    const particleCount = 50 * (timeLeft / duration);
    Confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    Confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};
 
// 4. Side Cannons
export const confettiSideCannons = () => {
  const end = Date.now() + 3 * 1000; // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
 
  const frame = () => {
    if (Date.now() > end) return;
 
    Confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });
    Confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });
 
    requestAnimationFrame(frame);
  };
 
  frame();
};
 
// 5. Stars
export const confettiStars = () => {
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
  };
 
  const shoot = () => {
    Confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });
 
    Confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  };
 
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};
 
// 6. Custom shapes
export const confettiCustomShapes = () => {
  const scalar = 2;
  const triangle = Confetti.shapeFromPath({
    path: "M0 10 L5 0 L10 10z",
    scalar,
  });
  const square = Confetti.shapeFromPath({
    path: "M0 0 L10 0 L10 10 L0 10 Z",
    scalar,
  });
  const coin = Confetti.shapeFromPath({
    path: "M5 0 A5 5 0 1 0 5 10 A5 5 0 1 0 5 0 Z",
    scalar,
  });
  const tree = Confetti.shapeFromPath({
    path: "M5 0 L10 10 L0 10 Z",
    scalar,
  });
 
  const defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: [triangle, square, coin, tree],
    scalar,
  };
 
  const shoot = () => {
    Confetti({
      ...defaults,
      particleCount: 30,
    });
 
    Confetti({
      ...defaults,
      particleCount: 5,
      flat: true,
    });
 
    Confetti({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: ["circle"],
    });
  };
 
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};
 
// 7. Emojis
export const confettiEmojis = () => {
  const scalar = 2;
  const unicorn = Confetti.shapeFromText({ text: "🦄", scalar });
 
  const defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 20,
    shapes: [unicorn],
    scalar,
  };
 
  const shoot = () => {
    Confetti({
      ...defaults,
      particleCount: 30,
    });
 
    Confetti({
      ...defaults,
      particleCount: 5,
      flat: true,
    });
 
    Confetti({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: ["circle"],
    });
  };
 
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};