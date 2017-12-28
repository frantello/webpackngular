function BlogSvc($http) {
  this.findPosts = function () {
    return $http.get("./data/posts.json").then(response => response.data);
  };
}

export default BlogSvc;
