import { ethers } from "ethers";
import { useState } from "react";
import React from "react";

const MetaMusk: React.FC = () => {
  const [address, setAddress] = useState("");
  (async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const addressNew = await signer.getAddress();
    setAddress(addressNew);
  })();

  return (
    <div className="MetaMusk">
      <h3>Account:{address}</h3>
    </div>
  );
};

export default MetaMusk;
