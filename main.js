import anime from "animejs"; // ✅ 这样即可，Vite 会自动处理

anime({
  targets: ".box",
  translateX: 250,
  rotate: "1turn",
  backgroundColor: "#f87171", // Tailwind 红色
  duration: 2000,
  easing: "easeInOutQuad",
});
