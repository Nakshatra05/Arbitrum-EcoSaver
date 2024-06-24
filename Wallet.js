// Wallet.js

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function Wallet() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => setAccount(accounts[0]))
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <div>
      <h2>Connected Account: {account}</h2>
    </div>
  );
}

export default Wallet;
