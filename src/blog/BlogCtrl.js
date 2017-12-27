function BlogCtrl($scope, BlogSvc, _posts) {
  $scope.idx = 1;
  $scope.post = _posts[0];

  /*
  // Resolving promise aproach
  BlogSvc.findAll().then(function (data) {
    $scope.post = data[0];
  });
  */
}

// Required for minification
BlogCtrl.$inject = ["_posts"];

BlogCtrl.resolve = {
  _posts: function (BlogSvc) {
    return BlogSvc.findAll();
  }
}

export default BlogCtrl;
