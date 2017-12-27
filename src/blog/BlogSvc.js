function BlogSvc($q, $http) {
  this.findAll = function () {
    return $http.get("./data/posts.json").then(function (response) {
      return response.data;
    });
  };
}

export default BlogSvc;
