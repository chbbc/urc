pragma solidity ^0.4.21;

import "./EIP20Interface.sol";

contract URC is EIP20Interface {

    uint256 constant private MAX_UINT256 = 2**256 - 1;
    mapping (address => uint256) public balances;
    mapping (address => mapping (address => uint256)) public allowed;
    
    string public user_uuid;            // Único identificador do usuário
    address public user_wallet;         // Carteira do usuário

    uint8 public decimals;              // Quantidade de casas decimais
    string public name;                 // Nome por extenso da moeda
    string public symbol;               // Símbolo

    address creatorAddress;             // Endereço da carteira que é dona do contrato

    modifier restricted() {
        if (msg.sender == creatorAddress) _;
    }

    constructor() public {
        totalSupply = 0;
        decimals = 0;
        name = 'Universal Reward Club';
        symbol = 'URC';
        creatorAddress = msg.sender;
    }
    
    function createTokens(address _receiver, uint256 _value) public restricted returns (bool success)  {
        totalSupply += _value;
        balances[_receiver] += _value;
        
        return true;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        emit Transfer(msg.sender, _to, _value); //solhint-disable-line indent, no-unused-vars
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        uint256 allowance = allowed[_from][msg.sender];
        require(balances[_from] >= _value && allowance >= _value);
        balances[_to] += _value;
        balances[_from] -= _value;
        if (allowance < MAX_UINT256) {
            allowed[_from][msg.sender] -= _value;
        }

        emit Transfer(_from, _to, _value); //solhint-disable-line indent, no-unused-vars
        return true;
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value); //solhint-disable-line indent, no-unused-vars
        return true;
    }

    function allowance(address _owner, address _spender) public view returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }
  
}
