document.getElementById("postForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission to a server
  const name = document.getElementById("name").value;
  const content = document.getElementById("content").value;

  // Perform actions with the post data, such as saving it to the database or displaying it on the page
  console.log("User post:", name, content);

  // Clear the input fields
  document.getElementById("name").value = "";
  document.getElementById("content").value = "";
});
   