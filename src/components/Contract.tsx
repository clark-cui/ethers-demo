// read blockchain contract data
import { ethers } from "ethers";
import { useState } from "react";
import React from "react";
import api_key from "../../.api_key.json";
//DAI token contract address
const DAI_contract_address = `0x6B175474E89094C44Da98b954EedeAC495271d0F`;
/*ABI is a file to tell provider or signer what data I need.
DAI token contract ABI is a json file but it is too big.Also, we don't need them all,we just need some functions that we are going to use.
so i made a simple one, which is implemented in all ERC20 token contracts.
The tips is that,in ethers.js,the ABI can be a array.*/
const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
];
const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${api_key.value}`
);
const contract = new ethers.Contract(DAI_contract_address, ERC20_ABI, provider);
const Contract: React.FC = () => {
  const [name, setName] = useState("loading...");
  const [symbol, setSymbol] = useState("loading...");
  const [totalSupply, setTotalSupply] = useState("loading...");
  const [balanceOf, setBalanceOf] = useState("loading...");
  (async () => {
    // get name
    const newName = await contract.name();
    setName(newName);
    // get symbol
    const newSymbol = await contract.symbol();
    setSymbol(newSymbol);
    // get totalSupply
    const newTotalSupply = await contract.totalSupply();
    const formatTotalSupply = ethers.utils.formatEther(newTotalSupply);
    setTotalSupply(formatTotalSupply);
    // get balanceOf
    const someoneAddress = `0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7`; //someone's address
    const newBalanceOf = await contract.balanceOf(someoneAddress);
    const formatBalanceOf = ethers.utils.formatEther(newBalanceOf);
    setBalanceOf(formatBalanceOf);
  })();

  return (
    <div className="Contract">
      <h2 className="title">Contract</h2>
      <h3>name is: {name}</h3>
      <h3>symbol is: {symbol}</h3>
      <h3>
        totalSupply is: {totalSupply} {symbol}
      </h3>
      <h3>
        balance is: {balanceOf} {symbol}
      </h3>
    </div>
  );
};

export default Contract;
