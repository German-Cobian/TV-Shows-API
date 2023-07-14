// Obtain details on a specific Tv-shows

const findTvShowById = async (id) => {
  const result = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const tvShow = await result.json();
  console.log(tvShow)
};

export default findTvShowById;