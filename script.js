window.onload = () => {
    const addBlogPostBtn = document.getElementById("add-blog-post-btn")

    // Add a new blog post when the button is clicked
    addBlogPostBtn.addEventListener("click", addBlogPost)

    // Display the initial blog posts
    blogPosts.map((blog) => {
        createBlogPost(blog.title, blog.content)
    })
}

// initial blog post data
const blogPosts = [
    {
        title: "My Journey at AUPP",
        content: "I am a software development student at AUPP. University has helped me improve my communication, teamwork, and problem-solving skills. I am also learning how to manage my studies while being involved in different activities."
    },
    {
        title: "My Youth Leadership Experience",
        content: "I am currently a Public Relations Officer of the U.S. Ambassador's Youth Council and a Local Coordinator for Students For Liberty. These experiences give me opportunities to work with young people, share ideas, organize activities, and learn from different perspectives."
    },
    {
        title: "Travel and Adventure in Cambodia",
        content: "I enjoy traveling around Cambodia and discovering new places. I like exploring different provinces, trying local food, meeting new people, and having new adventures. Traveling helps me learn more about my country and create memorable experiences."
    },
    {
        title: "My Interest in History",
        content: "I enjoy learning about history because it helps me understand how people, countries, and cultures have changed over time. I especially like learning about Cambodian history and important events that shaped the country."
    }
]

// create and display a blog post
const createBlogPost = (getTitle, getContent) => {

    // get the <ul> that stores the blog posts
    const blogPostList = document.getElementById("blog-post")

    // create <li> for each blog post
    const blogPost = document.createElement("li")

    // create <h3> for the blog title
    const title = document.createElement("h3")
    title.textContent = getTitle

    // create <p> for the blog content
    const content = document.createElement("p")
    content.textContent = getContent

    // create button to edit the blog title
    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"

    editTitleBtn.addEventListener("click", e =>
        editTitle(e.target.parentElement.parentElement)
    )


    // create button to edit the blog content
    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"

    editContentBtn.addEventListener("click", e =>
        editContent(e.target.parentElement.parentElement)
    )


    // create button to delete the blog post
    const deleteBlogPostBtn = document.createElement("button")
    deleteBlogPostBtn.textContent = "Delete Post"

    deleteBlogPostBtn.addEventListener("click", e =>
        deleteBlogPost(e.target.parentElement.parentElement)
    )

    deleteBlogPostBtn.setAttribute("class", "delete-blog-post-btn")

    // create rows to organize the blog post
    const titleRow = document.createElement("div")
    titleRow.setAttribute("class", "title-row")

    const contentRow = document.createElement("div")
    contentRow.setAttribute("class", "content-row")

    const btnRow = document.createElement("div")
    btnRow.setAttribute("class", "btn-row")

    // put the title and edit button together
    titleRow.append(title, editTitleBtn)

    // put the content inside the content row
    contentRow.append(content)

    // put the edit and delete buttons together
    btnRow.append(editContentBtn, deleteBlogPostBtn)

    // put everything inside the blog post
    blogPost.append(titleRow, contentRow, btnRow)

    // add the blog post to the webpage
    blogPostList.appendChild(blogPost)
}

// add a new blog post
const addBlogPost = () => {

    // ask the user for the blog title
    const getTitle = prompt("Enter your blog post title: ")

    // ask the user for the blog content
    const getContent = prompt("Enter your blog post content: ")

    // prevent creating an empty blog post
    if (
        !getTitle ||
        !getContent ||
        getTitle.trim() === "" ||
        getContent.trim() === ""
    ) {
        alert("Blog post title and content cannot be empty")
        return
    }

    // create the new blog post
    createBlogPost(getTitle, getContent)
}

// edit the blog post title
const editTitle = (target) => {

    // ask the user for the new title
    const getEditedTitle = prompt("Edit your blog post title: ")

    // prevent an empty title
    if (!getEditedTitle || getEditedTitle.trim() === "") {
        return
    }

    // find the title inside the selected blog post
    const titleToEdit = target.firstChild.firstChild

    // update the title
    titleToEdit.textContent = getEditedTitle
}

// edit the blog post content
const editContent = (target) => {

    // ask the user for the new content
    const getEditedContent = prompt("Edit your blog post content: ")


    // prevent empty content
    if (!getEditedContent || getEditedContent.trim() === "") {
        return
    }

    // find the content inside the selected blog post
    const contentToEdit = target.childNodes[1].firstChild

    // update the content
    contentToEdit.textContent = getEditedContent
}

// delete a blog post
const deleteBlogPost = (target) => {

    // get the title of the blog post
    const title = target.firstChild.firstChild.textContent

    // ask the user to confirm before deleting
    const confirmToDelete = confirm(
        `Are you sure you want to delete this blog post "${title}"?`
    )

    // delete the post if the user confirms
    if (confirmToDelete) {
        target.remove()

        alert(
            `Blog post "${title}" has been deleted successfully.`
        )
    }
}