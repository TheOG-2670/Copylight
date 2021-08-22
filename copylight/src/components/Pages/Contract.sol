pragma solidity 0.8.7;



contract MyContract {
    
    event Purchased(address owner, address user, uint256 amount);
    mapping (address => uint256) public balances;
    address payable ownerWallet;
    
    
    constructor(address payable _ownerWallet) payable{
        ownerWallet = _ownerWallet;
    }
    
    function Purchase() public payable {
        ownerWallet.transfer(msg.value);
        emit Purchased(ownerWallet,msg.sender,msg.value);
    }
    
    
    
    
    
    
}
