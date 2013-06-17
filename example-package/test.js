Tinytest.add('sample passing test', function(test) {
  test.equal(10, 10);
});

Tinytest.add('sample failing test', function(test) {
  test.equal(10, 20);
});