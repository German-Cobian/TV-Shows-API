// Reload the page for a new search

const reloadWindow = document.getElementById('reload');
reloadWindow.addEventListener('click', () => {
  window.location.reload();
});

export default reloadWindow;
