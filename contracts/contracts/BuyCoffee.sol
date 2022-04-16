// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Buy Coffee
 * @dev Transfer donations to an account with a fee to the deployer
 */
contract BuyCoffee {
    address payable owner;
    uint256 number;

    constructor() {
        owner = payable(msg.sender);
    }

    function donate(address destination) public payable {
        require(msg.value >= 100000 gwei, "Need to pay up at least 10 Finney");
        uint256 percent = msg.value / 100;
        owner.transfer(percent * 5);
        address payable target = payable(destination);
        target.transfer(percent * 95);
    }
}
