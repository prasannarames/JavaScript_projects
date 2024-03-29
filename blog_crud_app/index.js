let postsArray = [];
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
const form = document.getElementById("new-post");

function renderPosts() {
  let html = "";
  for (let post of postsArray) {
    html += `
        <div class="delete">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button class="delete" id="delete-btn">Delete</button>
            <button id="edit-btn">Edit</button>
            <hr />
        </div>     
        `;
  }
  document.getElementById("blog-list").innerHTML = html;
}

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     postsArray = data.slice(0, 0);
//     renderPosts();
//   });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = titleInput.value;
  const postBody = bodyInput.value;
  const data = {
    title: postTitle,
    body: postBody,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then((res) => res.json())
    .then((post) => {
      postsArray.unshift(post);
      renderPosts();
      /**
       * Challenge: clear the form out!
       */
      titleInput.value = "";
      bodyInput.value = "";
      // form.reset()
    });
});

let deleteBtn = document.getElementById("delete-btn");

deleteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
