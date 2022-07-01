// Function to delete a post
async function deleteFormHandler(event) {
    event.preventDefault();

    // getting post id from the url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        ];
    // delete the post with an async function
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
