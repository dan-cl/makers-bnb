process.env.NODE_ENV = 'test';
var Browser = require('zombie');
var assert = require('assert');

describe('new listings page', function() {
 before(function() {
   this.browser = new Browser({ site: 'http://localhost:3000' });
 });

 before(function(done) {
   this.browser.visit('/users', done);
 });

 it('should show contact a form', function(){
   assert.ok(this.browser.success);
   assert.equal(this.browser.text('title'), 'Expres');

 });
 // it('should refuse empty submissions');
 // ...

});
