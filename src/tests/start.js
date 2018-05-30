const path = require(`path`);

global.rootRequire = name => require(path.join(__dirname, `..`, name));

const Jasmine = require(`jasmine`);
const jasmine = new Jasmine();

const loc = path.join(
  __dirname, `..`, `..`, `spec`, `support`, `jasmine.json`);
jasmine.loadConfigFile(loc);

jasmine.onComplete(function () {
  process.exit(0);
});

jasmine.execute();
