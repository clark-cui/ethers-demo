// connect blockchain node by create JsonRpcProvider to link to a  infura rpc server.
import { ethers } from "ethers";
import React, { useState } from "react";
import api_key from "../../.api_key.json";

const Rpc: React.FC = () => {
  const [blockNumber, setBlockNumber] = useState(0);
  const [formatBalance, setFormatBalance] = useState("loading...");
  (async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${api_key.value}`
    );

    const newBlockNumber = await provider.getBlockNumber();
    setBlockNumber(newBlockNumber);
    const balance = await provider.getBalance("ethers.eth");
    //这个账户地址的余额
    // const balance = await provider.getBalance("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2");

    const newFormatBalance = ethers.utils.formatEther(balance);
    setFormatBalance(newFormatBalance);
  })();

  return (
    <div className="Rpc">
      <h2 className="title">RPC Provider</h2>
      <h3>BlockNumber:{blockNumber}</h3>
      <h3>Balance:{formatBalance}ETH</h3>
    </div>
  );
};

export default Rpc;
