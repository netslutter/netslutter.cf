var imgs = document.querySelectorAll('.hb');

for (var i = 0; i < imgs.length; i++) {
  imgs[i].onclick = toggleAnimation;
  imgs[i].style.webkitAnimationPlayState = 'running';
}

function toggleAnimation() {
  var style;
  for (var i = 0; i < imgs.length; i++) {
    style = imgs[i].style;
    if (style.webkitAnimationPlayState === 'running') {
      style.webkitAnimationPlayState = 'paused';
      document.body.className = 'paused';
    } else {
      style.webkitAnimationPlayState = 'running';
      document.body.className = '';
    }
  }
}