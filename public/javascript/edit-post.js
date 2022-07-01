// Function to edit a post
async function editFormHandler(event) {
    event.preventDefault();

    // getting post id from the url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
