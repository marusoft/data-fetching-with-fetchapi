const apiUrl = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts";
const commentUrl = "https://jsonplaceholder.typicode.com/comments";
const photosUrl = "https://jsonplaceholder.typicode.com/photos";

const getUserProfile = async () => {
  try {
    const response = await fetch(apiUrl);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    let userData = "";
    data.map((d) => {
      userData += `
      <tr>
        <td>${d.id}</td>
        <td>${d.username}</td>
        <td>${d.name}</td>
        <td>${d.email}</td>
        <td>${d.address.city}</td>
      </tr>
    `;
    });
    document.getElementById("user-data").innerHTML = userData;
  } catch (error) {
    console.error(error);
  }
};
getUserProfile();

const postCardDetails = async () => {
  try {
    const res = await fetch(postUrl);
    const postData = await res.json();
    // console.log(postData);

    let cardContent = "";

    postData.slice(0, 10).map((post) => {
      cardContent += ` <div class="card-content">
        <span>ID: ${post.id}</span>
        <h2>Title: ${post.title}</h2>
        <p>${post.body}</p>
      </div>
      `;
    });

    document.getElementById("post-details").innerHTML = cardContent;
  } catch (error) {
    console.log(error);
  }
};
postCardDetails();

// {
//   "postId": 1,
//   "id": 1,
//   "name": "id labore ex et quam laborum",
//   "email": "Eliseo@gardner.biz",
//   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// },

const commentData = async () => {
  try {
    const res = await fetch(commentUrl);
    // console.log(res)
    const commentResult = await res.json();
    // console.log(commentResult)

    let commentContent = "";
    commentResult.slice(0, 20).map((comment) => {
      commentContent += `
      <div class="comment-content">
         <span class="post-id">postId: ${comment.postId}</span>
         <br>
        <span class="comment-id">id: ${comment.id}</span>
        <p>name: ${comment.name}</p>
        <p>email:${comment.email}</p>
        <p>
          body: ${comment.body}
        </p>
        </div>
      `;
    });
    document.getElementById("comment-result").innerHTML = commentContent;
  } catch (error) {
    console.log(error);
  }
};
commentData();

const fetchPhotos = async () => {
  try {
    const res = await fetch(photosUrl);
    const photoData = await res.json();
    // console.log(photoData); 
    let photoResult = "";
    photoData.slice(0, 10).map((photo) => {
      photoResult += `
      <div class="photo-content">
        <img
          src=${photo.url}
          alt=""
          class="photo"
        />
        <div class="photo-desc">
          <h2>id:${photo.id}</h2>
          <p>${photo.title}</p>
          <button>Share</button>
        </div>
     </div>
      `
    })
    document.getElementById("photo-result").innerHTML = photoResult;
  } catch (error) {
    console.log(error);
  }
};
fetchPhotos();
