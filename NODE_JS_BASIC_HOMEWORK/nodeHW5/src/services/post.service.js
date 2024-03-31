import Post from "../models/post.model.js";

export class PostService {
  static getAllPosts(postData) {
    return Post.find(postData);
  }
  //
  //
  //

  static getPostById(postId) {
    return Post.findById(postId);
  }
  //
  //
  //

  static createPost(postData) {
    const post = new Post(postData);

    return post.save();
  }
  //
  //
  //
  static updatePost(postId, updateData) {
    return Post.findByIdAndUpdate(postId, updateData);
  }
  //
  //
  //

  static deletePost(postId) {
    return Post.findByIdAndDelete(postId);
  }
  //
  //
  //
  static deleteAllPosts() {
    return Post.deleteMany();
  }
}
