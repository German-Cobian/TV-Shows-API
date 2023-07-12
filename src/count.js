// Count Tv-shows in the serached-for category

const countTvShows = () => {
  const tvShowsCount = document.getElementById('tv-shows-listing').children.length;
  return tvShowsCount;
};

const updateTvShowsCount = (count) => {
  const tvShowsTitle = document.getElementById('by-category-shows');
  tvShowsTitle.innerText = `Tv Shows in this Category: (${count})`;
};

export { countTvShows, updateTvShowsCount };
