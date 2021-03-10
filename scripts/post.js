export const Post = (postObj) => {
    return `
      <section class="post">
        <h3>${postObj.title} </h3>
        <img class="postImage" src="${postObj.imageURL}" />
        <p>${postObj.description} </p>
      </section>
    `
  }