// connect blockchain node by create JsonRpcProvider to link to a  infura rpc server.
import { ethers } from "ethers";
import React, { useState } from "react";
import api_key from "../../.api_key.json";

const Transaction: React.FC = () => {
  const [blockNumber, setBlockNumber] = useState(0);
  const [formatBalance, setFormatBalance] = useState("loading...");
  (async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${api_key.value}`
    );

    const balance = await provider.getBalance("ethers.eth");
    const newFormatBalance = ethers.utils.formatEther(balance);
    setFormatBalance(newFormatBalance);
  })();

  return (
    <div className="Transaction">
      <h2 className="title">Transaction</h2>
      <h3>Balance:{formatBalance}ETH</h3>
    </div>
  );
};

export default Transaction;
