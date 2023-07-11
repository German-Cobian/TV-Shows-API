import './style.css';
import Logo from '../assets/Tv-shows-icon.png';
import Collage from '../assets/Tv-shows-collage.png';

const logo = document.getElementById('logo');
logo.src = Logo;

const collage = document.getElementById('collage');
collage.src = Collage;

// Tv-shows API calls

const getTvShows = async (searchString) => {
  const URL = `https://api.tvmaze.com/search/shows?q=${searchString}`;
  const results = await fetch(`${URL}`);
  const tvShows = await results.json();
  console.log(tvShows);
  displayTvShows(tvShows, searchString);
};

// Search bar

document.getElementById('search-bar').addEventListener('submit', (e) => {
  e.preventDefault();
  const searchString = document.getElementById('search-category').value;
  searchString.toLowerCase();
  getTvShows(searchString);
  console.log(searchString);
  const landingPage = document.getElementById('tv-shows-info');
  landingPage.style.display = 'none';
});

const countTvShows = () => {
  const tvShowsCount = document.getElementById('tv-shows-listing').children.length;
  return tvShowsCount;
};

const updateTvShowsCount = (count) => {
  const tvShowsTitle = document.getElementById('by-category-shows');
  tvShowsTitle.innerText = `Tv Shows in this Category: (${count})`;
};

// Display Collection

const displayTvShows = async (collectionArray, searchString) => {
  const tvShowsCategory = document.getElementById('tv-shows-category');
  console.log(searchString);
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
      </div> 
    `);
  });
  const count = countTvShows();
  updateTvShowsCount(count);
};