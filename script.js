// Profile DropDown Menu

let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
  profileMenu.classList.toggle("open-menu");
}

// Post box functionality
const postTextarea = document.querySelector(".post-box textarea");
const postButton = document.querySelector(".row-1 button");
const feed = document.querySelector(".mid-container");

postButton.addEventListener("click", () => {
  const text = postTextarea.value.trim();
  if (text) {
    const newPost = document.createElement("div");
    newPost.classList.add("feed-box");
    newPost.innerHTML = `
      <div class="poster">
        <div class="post-img"><img src="Img/prof3.jpeg" alt=""></div>
        <div class="post-details">
          <h3>You</h3><span>Just now</span>
        </div>
      </div>
      <p>${text}</p>
    `;
    feed.prepend(newPost);
    postTextarea.value = "";
  } else {
    alert("Please write something before posting!");
  }
});

// Like Button

const likeButtons = document.querySelectorAll(".buttons p:first-child");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});

// Comment Box

const commentButtons = document.querySelectorAll(".buttons p:nth-child(2)");

commentButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let commentBox = document.createElement("textarea");
    commentBox.placeholder = "Write a comment...";
    commentBox.classList.add("comment-box");
    btn.parentElement.after(commentBox);
  });
});