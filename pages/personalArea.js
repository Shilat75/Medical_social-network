const postContainer = document.getElementById("postContainer");

// Specify the image URL and the number of copies you want to create
const imageUrl = "followers.jpg";
const numCopies = 10;

for (let i = 0; i < numCopies; i++) {
  // Create a div element for the post
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  // Create an image element for the post
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;

  // Append the image element to the post element
  postElement.appendChild(imageElement);

  // Append the post element to the post container
  postContainer.appendChild(postElement);
}
