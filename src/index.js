import angular from "angular";
import "@uirouter/angularjs";
import IndexCtrl from "./IndexCtrl.js";

const app = angular.module("app", ["ui.router"])

app.config(function ($stateProvider) {
  const state = {
    name: "state",
    url: "/state",
    template: "<h1>hello State!</h1>"
  }

  $stateProvider.state(state);
});

app.controller("IndexCtrl", IndexCtrl);
