const SovrynNft = artifacts.require("SovrynNft");

module.exports = function(deployer) {
  deployer.deploy(SovrynNft, "SovrynNft", "SOVNFT");
};
