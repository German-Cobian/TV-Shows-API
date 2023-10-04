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

// Display details for specific Tv-Show

const displayTvShowDetails = async (tvShow) => {
  const tvShowInfo = document.getElementById('tv-show-details');
  tvShowInfo.classList.add('popup-container');
  tvShowInfo.innerHTML = ` 
    <div class="tv-show-details-container">
      <div class="show-img">
        <img src="${tvShow.image.medium}" />
      </div>
      <div>
        <div class="details-header">
          <h2>${tvShow.name}</h2>
          <h6>Genre: <span>${tvShow.genres}</span></h6>
        </div>
        <div class="details">
          <h6 >Language: <span>${tvShow.language}</span></h6>
          <h6>Network: <span>${tvShow.network.name}</span></h6>
          <h6>Rating: <span>${tvShow.rating.average}</span></h6>
        </div>
        <h6>Summary: <span>${tvShow.summary}</span></h6>
        <div class="details">
          <h6>Premiered: <span>${tvShow.premiered}</span></h6>
          <h6>Ended: <span>${tvShow.ended}</span></h6>
        </div>
        <div class="comments-generate" ></div>
        <div class="details-close">
          <button id="refresh-window" class="btn-refresh" >New Search</button>
        </div>
      </div>
    <div>
  `;
  const commentsContent = document.querySelector('.comments-generate');
  commentsContent.innerHTML = `
    <div id="comments-container" class="">
      <div>
        <h4>Comments:<span class="comments-counter"></span></h4>
        <div class="comments-data"></div>
      </div>          
    </div>
    <div class="">
    <form id="post-comment" action="">
      <label for="name" class="c-font">Name:</label><br>
      <input id="name" type="text" name="fname" required><br>
      <label for="comment" class="c-font">Comment:</label></br>
      <textarea id="commentText" rows="4" cols="50" name="comment" form="post-comment" required></textarea></br>
      <input id="comment-btn" class="btn-comment" type="submit" value="Submit">
    </form> 
    </div></br>
  `;
  const submitComment = document.getElementById('comment-btn');
  submitComment.addEventListener('click', async (e) => {
    e.preventDefault();
    // eslint-disable-next-line prefer-destructuring
    const id = tvShow.id;
    const username = document.getElementById('name').value;
    const comment = document.getElementById('commentText').value;
    const status = await createComment(id, username, comment);

    if (status === 201) {
      // Comment created successfully, update the comments display
      const commentHtml = `
        <p class="comments-font"><b>** Dated:</b> ${new Date().toLocaleString()}  <b>** By:</b> ${username}</p>
        <p class="comments-font"><b>Comment:</b> ${comment}</p>
        <br>
      `;
      const commentsContainer = document.querySelector('.comments-data');
      commentsContainer.insertAdjacentHTML('beforeend', commentHtml);
      document.getElementById('post-comment').reset();
    }
  });
  const commentsData = document.querySelector('.comments-data');
  // eslint-disable-next-line prefer-destructuring
  const id = tvShow.id;
  const comments = await getComments(id);
  comments.forEach((comment) => {
    commentsData.insertAdjacentHTML('afterend', `
      <p class="comments-font"><b>** Dated:</b> ${comment.creation_date}  <b>** By:</b> ${comment.username}</p>
      <p class="comments-font"><b>Comment:</b> ${comment.comment}</p>
      <br>
    `);
  });

  // Close display Tv-Show details and go back to Home page

  const refreshWindow = document.getElementById('refresh-window');
  refreshWindow.addEventListener('click', () => {
    window.location.href = '/';
  });
};

export default findTvShowById;
