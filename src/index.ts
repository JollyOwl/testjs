import { greetUser } from '$utils/greet';
import type { NeatConfig } from "@firecms/neat";
import { NeatGradient } from "@firecms/neat";

(() => {
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const name = 'you';
    greetUser(name);
  });

  document.addEventListener('DOMContentLoaded', () => {
    console.log("Document is ready");

    // Gradient config
    const config: NeatConfig = {
      colors: [
        { color: "#C0B7FD", enabled: true },
        { color: "#EFD8FF", enabled: true },
        { color: "#17E7FF", enabled: true },
        { color: "#A689FF", enabled: true },
        { color: "#f5e1e5", enabled: false }
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

    const gradientElement = document.getElementById("gradient") as HTMLCanvasElement | null;
    if (!gradientElement) {
      console.error("Element with ID 'gradient' not found or is not a canvas element.");
      return;
    }

    console.log("Gradient element found");

    const neat = new NeatGradient({
      ref: gradientElement,
      ...config
    });

    console.log("NeatGradient initialized");

    // Draw something on the canvas for testing
    const ctx = gradientElement.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, gradientElement.width, gradientElement.height);
      console.log("Test rectangle drawn on the canvas");
    } else {
      console.error("Failed to get 2D context");
    }

    // Wait a bit to ensure the gradient is rendered
    setTimeout(() => {
      console.log("Timeout reached, attempting to get data URL");

      // Create URL for the gradient
      const gradientURL = gradientElement.toDataURL();
      console.log("Gradient URL:", gradientURL);

      // Set gradientURL as the background image for the #container
      const container = document.getElementById("container") as HTMLElement | null;
      if (!container) {
        console.error("Element with ID 'container' not found.");
        return;
      }

      console.log("Container element found");

      container.style.backgroundImage = `url(${gradientURL})`;
      console.log("Background image set for #container");
    }, 1000); // Adjust the timeout as necessary to ensure rendering
  });
})();
