// Lending.js

import React, { useState } from 'react';
import { ethers } from 'ethers';
import lendingContractABI from './LendingContract.json'; // ABI file for the Rust smart contract

function Lending() {
  const [amount, setAmount] = useState('');
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Update with actual deployed contract address

  const loadContract = async () => {
    if (!window.ethereum) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, lendingContractABI, signer);
    setContract(contract);
    const userBalance = await contract.get_balance(signer.getAddress());
    setBalance(userBalance);
  };

  const lend = async () => {
    if (!contract) return;
    try {
      const tx = await contract.lend(signer.getAddress(), ethers.utils.parseEther(amount));
      await tx.wait();
      console.log('Lend transaction successful');
      // Update balance after successful transaction
      const userBalance = await contract.get_balance(signer.getAddress());
      setBalance(userBalance);
    } catch (error) {
      console.log('Error lending:', error);
    }
  };

  return (
    <div>
      <h2>Lending</h2>
      <p>Your Balance: {balance}</p>
      <input
        type="text"
        placeholder="Amount to lend"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={lend}>Lend</button>
    </div>
  );
}

export default Lending;
