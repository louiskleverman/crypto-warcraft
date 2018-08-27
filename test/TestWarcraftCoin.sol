pragma solidity ^0.4.18;

import "../contracts/WarcraftCoin.sol";
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";

contract TestWarcraftCoin{
    WarcraftCoin warcraftCoin;

    
    function testCorrectDeploymentOwner() public{

        warcraftCoin = new WarcraftCoin();
        address expected = address(warcraftCoin);
        
        address got = address(warcraftCoin.owner);

        Assert.equal(got, expected, "The address is supposed to be the caller : ");
    }
    function testCorrectDeploymentAmount() public{
        uint expected = 10000000000000;
        
        uint got = warcraftCoin.getBalanceOf(address(this));

        Assert.equal(got, expected, "Not the right quantity");
    }

}