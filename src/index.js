import angular from "angular";
import uiRouter from "@uirouter/angularjs";

import IndexCtrl from "./IndexCtrl.js";
import BlogCtrl from "./blog/BlogCtrl.js";
import AboutCtrl from "./about/AboutCtrl.js";
import ContactCtrl from "./contact/ContactCtrl.js";

import BlogSvc from "./blog/BlogSvc.js";

const app = angular.module("app", [uiRouter, "app.blog", "app.about", "app.contact"]);
app.controller("IndexCtrl", IndexCtrl);

const blog = angular.module("app.blog", []);
blog.controller("BlogCtrl", ["$scope", "BlogSvc", "_posts", BlogCtrl]);

const about = angular.module("app.about", []);
blog.controller("AboutCtrl", ["$scope", AboutCtrl]);

const contact = angular.module("app.contact", []);
blog.controller("ContactCtrl", ["$scope", ContactCtrl]);

app.service("BlogSvc", ["$q", "$http", BlogSvc]);

app.config(function ($stateProvider) {
  $stateProvider.state({
    name: "blogState",
    url: "/blog",
    templateUrl: "./blog/blog.html",
    controller: "BlogCtrl",
    resolve: BlogCtrl.resolve
  });

  $stateProvider.state({
    name: "aboutState",
    url: "/about",
    templateUrl: "./about/about.html",
    controller: "AboutCtrl"
  });

  $stateProvider.state({
    name: "contactState",
    url: "/contact",
    templateUrl: "./contact/contact.html",
    controller: "ContactCtrl"
  });
});
