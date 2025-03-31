
document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add('loaded');
});

window.onbeforeunload = function() {
  document.body.classList.remove('loaded');
};