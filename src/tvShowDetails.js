// Obtain details on a specific Tv-shows

const findTvShowById = async (id) => {
  const result = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const tvShow = await result.json();
  displayTvShowDetails(tvShow);
};

// Post comments on a specific Tv-show

const AppCode = 'LO9gluM6sh4CT4MBVKTJ';
const commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${AppCode}/comments`;

const createComment = async (id, username, comment) => {
  const commentBody = {
    item_id: id,
    username,
    comment,
  };

  const results = await fetch(commentsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentBody),
  });
  return results.status;
};

const getComments = async (id) => {
  const result = await fetch(`${commentsURL}?item_id=${id}`);
  const comments = await result.json();
  if (comments.error?.status === 500 || comments.error?.status === 400) {
    return [];
  }
  return comments;
};

// Close display Tv-Show details

const closeTvShowDetails = () => {
  const popup = document.getElementById('tv-show-details');
  popup.style.display = 'none';
};

// Display details for specific Tv-Show

const displayTvShowDetails = async (tvShow) => {
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
          <h6 class="detail-m-r">Network: <span>${tvShow.network.name}</span></h6>
          <h6>Genre: <span>${tvShow.genres}</span></h6>
        </div>
        <div class="details">
          <h6 class="detail-m-r">Language: <span>${tvShow.language}</span></h6>
          <h6>Rating: <span>${tvShow.rating.average}</span></h6>
        </div>
        <h6>Summary: <span>${tvShow.summary}</span></h6>
        <div class="details">
          <h6 class="detail-m-r">Premiered: <span>${tvShow.premiered}</span></h6>
          <h6>Ended: <span>${tvShow.ended}</span></h6>
        </div>
        <div class="comments-generate" ></div>
        <div>
          <button id="close-window" class="btn-close" >Close Window</button>
        </div>
      </div>
    <div>
  `;
  const commentsContent = document.querySelector('.comments-generate');
  commentsContent.innerHTML = `
    <div class="">
      <div class="">
        <h4 class="">Comments:<span class="comments-counter"></span></h4>
        <div class="comments-data"></div>
      </div>          
    </div>
    <div class="">
    <form id="post-comment" action="">
      <label for="name">Name:</label><br>
      <input id="name" type="text" name="fname" required><br>
      <label for="comment">Comment:</label></br>
      <textarea id="commentText" rows="4" cols="50" name="comment" form="post-comment" required></textarea></br>
      <input id="comment-btn" class="btn-comment" type="submit" value="Submit">
    </form> 
    </div></br>
  `;
  const submitComment = document.getElementById('comment-btn');
  submitComment.addEventListener('click', (e) => {
    e.preventDefault();
    // eslint-disable-next-line prefer-destructuring
    const id = tvShow.id;
    const username = document.getElementById('name').value;
    const comment = document.getElementById('commentText').value;
    createComment(id, username, comment);
    document.getElementById('post-comment').reset();
  });
  const commentsData = document.querySelector('.comments-data');
  const id = tvShow.id;
  const comments = await getComments(id);
  comments.forEach((comment) => {
    commentsData.insertAdjacentHTML('afterend', `
      <p class="comments-font"><b>** Dated:</b> ${comment.creation_date}  <b>** By:</b> ${comment.username}</p>
      <p class="comments-font"><b>Comment:</b> ${comment.comment}</p>
      <br>
    `);
  });
  const closeButton = document.getElementById('close-window');
  closeButton.addEventListener('click', closeTvShowDetails);
};

export default findTvShowById;
