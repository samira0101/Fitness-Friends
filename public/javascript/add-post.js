// New Post Form Handler
async function newFormHandler(event) {
    event.preventDefault();

    // Get the post title and post text from the form
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;

