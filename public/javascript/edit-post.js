// Function to edit a post
async function editFormHandler(event) {
    event.preventDefault();

    // getting post id from the url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // Getting post title and post text from the form
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;
