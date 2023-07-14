// Obtain details on a specific Tv-shows

const findTvShowById = async (id) => {
  const result = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const tvShow = await result.json();
  console.log(tvShow);
  displayTvShowDetails(tvShow);
};

const displayTvShowDetails = async (tvShow) => {
  const tvShowInfo = document.getElementById('tv-show-details');
  console.log(tvShow.image.medium);
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
      </div>
    <div>
  `;
};

export default findTvShowById;