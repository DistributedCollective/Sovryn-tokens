const SovrynNft = artifacts.require("SovrynNft");

contract('SovrynNft', function(accounts) {
 it("should mint an nft for given address", function() {
    return TestNft.deployed().then(function(instance) {
      return instance.mint("0x764330A5A9e4018FcDb4A99266EdCDb274fc26d4", {from: accounts[0]}).then(function(res) {
        console.log("result");
        console.log(res);
        assert(true);
      });
    });
  });  
  it("should set the meta-data-uri for minted nft", function() {
    return TestNft.deployed().then(function(instance) {
      return instance.setTokenURI(1, "http://ec2-54-190-101-255.us-west-2.compute.amazonaws.com:3001/t1.json", {from: accounts[0]}).then(function(res) {
        console.log("result");
        console.log(res);
        assert(true);
      });
    });
  });  
  it("should get the nft meta-data url", function() {
    return TestNft.deployed().then(function(instance) {
      return instance.tokenURI(1).then(function(res) {
        console.log("result");
        console.log(res);
        assert(true);
      });
    });
  });
});
