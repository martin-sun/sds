// 使用 CDN 方式引入
const anime = window.anime;

// 等待 DOM 完全加载
window.addEventListener('DOMContentLoaded', () => {
  // 添加一个简单的控制台日志来检查脚本是否执行
  console.log('DOM fully loaded, starting animation...');
  
  // 执行动画
  const animation = anime({
    targets: ".box",
    translateX: 250,
    rotate: "1turn",
    backgroundColor: "#f87171", // Tailwind 红色
    duration: 2000,
    easing: "easeInOutQuad",
    loop: true,
    direction: 'alternate'
  });

  // 添加一个按钮来控制动画
  const button = document.createElement('button');
  button.textContent = 'Restart Animation';
  button.className = 'mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors';
  button.onclick = () => {
    animation.restart();
  };
  
  document.body.appendChild(button);
});
