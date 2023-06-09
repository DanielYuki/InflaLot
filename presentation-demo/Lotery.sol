// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import "./TicketSystem.sol";

contract Lotery is ChainlinkClient, ConfirmedOwner {
  using Chainlink for Chainlink.Request;
  
  int256 public inflationWei;
  
  // Goerli Testnet data
  address oracleId = 0x6888BdA6a975eCbACc3ba69CA2c80d7d7da5A344;
  string jobId = "d220e5e687884462909a03021385b7ae";
  uint256 fee = 500000000000000000;
  address tokenAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
  
  // Deploying TicketSystem instance
  TicketSystem public activePlayers = new TicketSystem();
  TicketSystem.Ticket winnerTicket;

  constructor() ConfirmedOwner(msg.sender){
    setChainlinkToken(tokenAddress);
  }
  
  // In case you need to change the blockchain network from which
  // you will be receiving the truflation data

  /*
  function changeOracle(address _oracle) public onlyOwner {
    oracleId = _oracle;
  }

  function changeJobId(string memory _jobId) public onlyOwner {
    jobId = _jobId;
  }

  function changeFee(uint256 _fee) public onlyOwner {
    fee = _fee;
  }

  function getChainlinkToken() public view returns (address) {
    return chainlinkTokenAddress();
  }
  */

  // for debugging
  /*
  function withdrawLink() public onlyOwner {
    LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
    require(link.transfer(msg.sender, link.balanceOf(address(this))),
    "Unable to transfer");
  }

  function withdraw() public onlyOwner {
    payable(msg.sender).transfer(address(this).balance);
  }
  */

  function getWinner() public{
    requestInflationWei();
    winnerTicket = activePlayers.determineCloser(inflationWei);
    winnerTicket.playerAddress.transfer(uint256((95 * address(this).balance)/100));
    activePlayers.reset();
  }
  
  function requestInflationWei() public returns (bytes32 requestId) { 
    Chainlink.Request memory req = buildChainlinkRequest(
      bytes32(bytes(jobId)),
      address(this),
      this.fulfillInflationWei.selector
    );
    req.add("service", "truflation/current");
    req.add("keypath", "yearOverYearInflation");
    req.add("abi", "int256");
    req.add("multiplier", "1000000000000000000");
    req.add("refundTo",
      Strings.toHexString(uint160(msg.sender), 20));

    return sendChainlinkRequestTo(oracleId, req, fee);
  }

  function fulfillInflationWei(
    bytes32 _requestId,
    bytes memory _inflation
  ) public recordChainlinkFulfillment(_requestId) {
    inflationWei = toInt256(_inflation);
  }

  function toInt256(bytes memory _bytes) internal pure
  returns (int256 value) {
    assembly {
      value := mload(add(_bytes, 0x20))
    }
  }

  function buyTicket(int256 _inflationBet) payable public{
    require(msg.value >= 0.01 ether, "The ticket costs 0.01 Ether");
    require(getTimeLeft() > 1 days, "The submission period for this month has ended.");
    activePlayers.addPlayer(_inflationBet, payable(msg.sender));
  }

  function seePool() public view returns(uint256){
    return uint256((95 * address(this).balance)/100);
  }

  function getTicketNumbers() public view returns(uint256){
    return activePlayers.TicketCount();
  }

  function getAddressTickets() public view returns(uint256[][2] memory){
    return activePlayers.getTickets(msg.sender);
  }

  function getTimeLeft() public view returns(uint256){
    uint256 currentBlockTime = block.timestamp;
    uint256 elapsedTime = currentBlockTime - activePlayers.start();
    return (2543357 - elapsedTime);
  }
}
