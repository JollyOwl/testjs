import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Saso';
  greetUser(name);
});

import type { NeatConfig } from "@firecms/neat";
import { NeatGradient } from "@firecms/neat";

// Define your config
 const config: NeatConfig = {
    colors: [
        {
            color: "#C0B7FD",
            enabled: true
        },
        {
            color: "#EFD8FF",
            enabled: true
        },
        {
            color: "#17E7FF",
            enabled: true
        },
        {
            color: "#A689FF",
            enabled: true
        },
        {
            color: "#f5e1e5",
            enabled: false
        }
    ],
    speed: 4,
    horizontalPressure: 4,
    verticalPressure: 5,
    waveFrequencyX: 2,
    waveFrequencyY: 3,
    waveAmplitude: 5,
    shadows: 0,
    highlights: 2,
    saturation: 7,
    wireframe: false,
    colorBlending: 6,
    backgroundColor: "#003FFF",
    backgroundAlpha: 1
};


// define an element with id="gradient" in your html
const gradientElement = document.getElementById("gradient") as HTMLCanvasElement | null;
if (gradientElement) {
    const neat = new NeatGradient({
        ref: gradientElement,
        ...config
    });
} else {
    console.error("Element with ID 'gradient' not found or is not a canvas element.");
}


