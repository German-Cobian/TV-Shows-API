// Obtain details on a specific Tv-shows

const findTvShowById = async (id) => {
  const result = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const tvShow = await result.json();
  displayTvShowDetails(tvShow);
};

// Display Tv-Show details

const closeTvShowDetails = () => {
  const popup = document.getElementById('tv-show-details');
  popup.style.display = 'none';
};

// eslint-disable-next-line no-var
const displayTvShowDetails = (tvShow) => {
  const tvShowInfo = document.getElementById('tv-show-details');
  tvShowInfo.classList.add('popup-container');
  tvShowInfo.innerHTML = ` 
    <div class="tv-show-details-container">
      <div class="">
        <img src="${tvShow.image.medium}" />
      </div>
      <div>
        <h6>${tvShow.id}</h6>
        <h4>${tvShow.name}</h4>
        <div class="details">
          <h6>Network: <span>${tvShow.network.name}</span></h6>
          <h6>Genre: <span>${tvShow.genres}</span></h6>
        </div>
        <div class="details">
          <h6>Language: <span>${tvShow.language}</span></h6>
          <h6>Rating: <span>${tvShow.rating.average}</span></h6>
        </div>
        <h6>Summary: <span>${tvShow.summary}</span></h6>
        <div class="details">
          <h6>Premiered: <span>${tvShow.premiered}</span></h6>
          <h6>Ended: <span>${tvShow.ended}</span></h6>
        </div>
        <div>
          <button id="close-window" class="btn-close" >Close Window</button>
        </div>
      </div>
    <div>
  `;
  const closeButton = document.getElementById('close-window');
  closeButton.addEventListener('click', closeTvShowDetails);
};

export default findTvShowById;
