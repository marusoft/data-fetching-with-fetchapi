const apiUrl = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

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

    postData.map((post) => {
      cardContent += 

    ` <div class="card-content">
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
