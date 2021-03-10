import { getPosts } from "./DataManager.js"
import { PostList } from "./postList.js"

const showPostList = () => {
  const postElement = document.querySelector(".postList");
	getPosts().then((allPosts) => {
		postElement.innerHTML = PostList(allPosts);
	})
}

showPostList();

