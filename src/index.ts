import plugin from "tailwindcss/plugin";
import animateUtilities from "./utilities";
import animateKeyframes from "./keyframes";
import animateAnimation from "./animation";

export default function getPlugin() {
  return plugin(
    function ({ addUtilities }) {
      addUtilities(animateUtilities);
    },
    {
      theme: {
        keyframes: animateKeyframes,
        animation: animateAnimation,
      },
    }
  );
}
