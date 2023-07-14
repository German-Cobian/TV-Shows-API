import './style.css';
import Logo from '../assets/Tv-shows-icon.png';
import Collage from '../assets/Tv-shows-collage.png';
import { countTvShows, updateTvShowsCount } from './count.js';
import reloadWindow from './reload.js';
import findTvShowById from './tvShowDetails';

// Make img files available to the app

const logo = document.getElementById('logo');
logo.src = Logo;

const collage = document.getElementById('collage');
collage.src = Collage;

// Search for tv-shows by keyword

const getTvShows = async (searchString) => {
  const URL = `https://api.tvmaze.com/search/shows?q=${searchString}`;
  const results = await fetch(`${URL}`);
  const tvShows = await results.json();
  displayTvShows(tvShows, searchString);
};

// Search bar

document.getElementById('search-bar').addEventListener('submit', (e) => {
  e.preventDefault();
  const searchString = document.getElementById('search-category').value;
  searchString.toLowerCase();
  getTvShows(searchString);
  const landingPage = document.getElementById('tv-shows-info');
  landingPage.style.display = 'none';
});

// Display Collection

const displayTvShows = async (collectionArray, searchString) => {
  const tvShowsCategory = document.getElementById('tv-shows-category');
  tvShowsCategory.innerHTML = `<h3>${searchString}</h3>`;
  const tvShowsList = document.getElementById('tv-shows-listing');
  collectionArray.forEach((tvShow) => {
    tvShowsList.insertAdjacentHTML('beforeend', ` 
      <div class="tv-shows-container">
        <div class="">
          <img src="${tvShow.show.image.medium}" />
        </div>
        <div>
          <h6>${tvShow.show.id}</h6>
          <h6>${tvShow.show.name}</h6>
        </div>
        <button data-id="${tvShow.show.id}" class="btn-details">Details</button>
      </div> 
    `);
    const detailsButton = document.querySelectorAll(`[data-id="${tvShow.show.id}"]`)[0];
    detailsButton.addEventListener('click', (e) => {
      const tvShowId = e.target.getAttribute('data-id');
      findTvShowById(tvShowId);
    });
  });
  const count = countTvShows();
  updateTvShowsCount(count);
};

fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
  method: 'POST',
}).then(response => response.text()).then(response => console.log(response));

// response (app code): LO9gluM6sh4CT4MBVKTJ
