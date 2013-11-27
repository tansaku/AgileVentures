
var basicStepDefinitionsWrapper = function () {
  this.World = require("../support/world.js").World; // overwrite default World constructor

  this.Given(/^I am on the home page$/, function(callback) {
     this.visit('http://localhost:8000/app/index.html', callback);
  });

  this.Then(/^the title should be "([^"]*)"$/, function(title, callback) {
    if (this.browser.text('title').indexOf(title) !== -1) {
      callback();
    } else {
      callback.fail(new Error("Expected to be on page with title " + title));
    }
  });

  this.Then(/^I should see a mission statement$/, function(callback) {
    // express the regexp above with the code you wish you had
    if (this.browser.text('body').indexOf("Mission Statement") !== -1) {
      callback();
    } else {
      callback.fail(new Error("Expected to be on page with mission statement " + pageBody));
    }
  });

  this.Then(/^I should see links to projects that I can join$/, function(callback) {
    // express the regexp above with the code you wish you had
    if (this.browser.text('a[href="project1"]').indexOf("Project 1") !== -1) {
      callback();
    } else {
      callback.fail(new Error("Expected to have a project1 link "));
    }
  });

  this.Then(/^I should see an invitation to connect with us$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see nothing else in the body of the page$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^I am on the projects page$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see a list of all projects$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^each projects should have a short description$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^each project should have a "([^"]*)" link$/, function(arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^I am on the "([^"]*)" page$/, function(arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should see info inviting me to skype chat and IRC$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^info inviting me to weekly scrum meetings$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^a link to our event history$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^info about how to pair$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I see info about our pairing philosophy$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^how to publicize pairing$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^how to use events \/ hangouts$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^the topic of pairing philosophy$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^it should say why "([^"]*)"$/, function(arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^why I should publicize all pairing as much as possible$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should feel welcome to sit\-in and observe others' pairing sessions$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

};

module.exports = basicStepDefinitionsWrapper;