const { ethers } = require('ethers');

async function getAddressDetails(address) {
  // Connect to an Ethereum provider (you can use Infura, Alchemy, or any other)
  const provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);

  try {
    // Fetch the balance of the address
    const balance = await provider.getBalance(address);
    console.log('Balance:', ethers.utils.formatEther(balance), 'ETH');

    // Fetch ERC20 token balances (example)
    const tokenAddress = '0xYourERC20TokenAddress';
    const tokenContract = new ethers.Contract(tokenAddress, ['function balanceOf(address) returns (uint256)'], provider);
    const tokenBalance = await tokenContract.balanceOf(address);
    console.log('Token Balance:', tokenBalance.toString());

    // Fetch transaction history
    const transactions = await provider.getHistory(address);
    console.log('Transaction History:', transactions);

    // Fetch additional data as needed

  } catch (error) {
    console.error('Error fetching address details:', error);
  }
}

// Example usage
const address = '0xYourEthereumAddress';
getAddressDetails(address);
