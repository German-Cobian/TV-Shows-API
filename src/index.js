import './style.css';
import Logo from '../assets/Tv-shows-icon.png';
import Collage from '../assets/Tv-shows-collage.png';
import { countTvShows, updateTvShowsCount } from './count.js';
import reloadWindow from './reload.js';
import findTvShowById from './tvShowDetails.js';

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

// Likes API's calls

const AppCode = 'LO9gluM6sh4CT4MBVKTJ';
const likesURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${AppCode}/likes`;

const addLike = async (id) => {
  const likeBody = {
    item_id: id,
  };

  const response = await fetch(likesURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(likeBody),
  });
  return response.status;
};

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
          <h4 class="show-name">${tvShow.show.name}</h4>
        </div>
        <div class="btn-container">
          <button data-id="${tvShow.show.id}" class="btn-details">Details</button>
          <button like-id="${tvShow.show.id}" class="icon-likes"><i class="fas fa-heart"></i></button>
        </div>
      </div> 
    `);
    const detailsButton = document.querySelectorAll(`[data-id="${tvShow.show.id}"]`)[0];
    detailsButton.addEventListener('click', (e) => {
      const tvShowId = e.target.getAttribute('data-id');
      findTvShowById(tvShowId);
    });
    const likeButton = document.querySelectorAll(`[like-id="${tvShow.show.id}"]`)[0];
    likeButton.addEventListener('click', async (e) => {
      const tvShowId = e.target.parentElement.getAttribute('like-id');
      console.log(tvShowId);
      const status = await addLike(tvShowId);
      console.log(status);
    });
  });
  const count = countTvShows();
  updateTvShowsCount(count);
};
