const Ebay = artifacts.require("Ebay");

module.exports = async function (deployer) {
  await deployer.deploy(Ebay);
};
