import { Post } from "./post.js";

export const PostList = (allPosts) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const postObj of allPosts) {
			//what is a postObject?
			postHTML += Post(postObj)
		}
		return postHTML;
	
}