var Migrations = artifacts.require("./Migrations.sol");
var URC = artifacts.require("./URC.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(URC);
};
