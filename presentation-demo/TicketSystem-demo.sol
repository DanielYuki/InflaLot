// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract TicketSystem{
    uint256 public start;
    address owner;
    mapping (address => uint256[][2]) private addressToTicket;

    constructor(){
        start = block.timestamp;
        owner = msg.sender;
    }

    struct Ticket{
        int256 inflationBet;
        address payable playerAddress;
        uint256 timeFromStart;
    }

    Ticket[] public ticketList;

    function addPlayer(int256 _inflationBet, address payable _playerAddress) public{
        uint256 _timeFromStart = block.timestamp - start;
        ticketList.push(Ticket(_inflationBet, _playerAddress, _timeFromStart));
        addressToTicket[_playerAddress][0].push(uint256(_inflationBet));
        addressToTicket[_playerAddress][1].push(uint256(_timeFromStart));
    }

    function getTickets(address _address) public view returns(uint256[][2] memory){
      return addressToTicket[_address];
    }

    function reset() public{
        require(msg.sender == owner, "Only the owner can call this function");
        for (uint256 i = 0; i < ticketList.length; i++){
          delete addressToTicket[ticketList[i].playerAddress];
        }
        delete ticketList;
        start = block.timestamp;
    }

    function TicketCount() public view returns(uint256){
      return ticketList.length;
    }
    
    function determineCloser(int256 inflationWei) public view returns(Ticket memory){
        uint256 betDiff;
        uint256 betDiff_min = 9999999999999999999999;
        uint256 betDiff_minINDEX;
        uint256 timeElaps;
        for (uint256 i = 0; i < ticketList.length; i++){
          timeElaps = ticketList[i].timeFromStart;
      
          if (timeElaps < 10 days)
            betDiff = uint256((ticketList[i].inflationBet - inflationWei)/inflationWei);
          else if (timeElaps < 20 days)
            betDiff = 10 * uint256((ticketList[i].inflationBet - inflationWei)/inflationWei);
          else 
            betDiff = 100 * uint256((ticketList[i].inflationBet - inflationWei)/inflationWei);
      
          if (betDiff < betDiff_min){
            betDiff_min = betDiff;
            betDiff_minINDEX = i;
          }
        }
        return ticketList[betDiff_minINDEX];
    }
}