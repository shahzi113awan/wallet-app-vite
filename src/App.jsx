import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css' 
import { Web3ReactProvider } from '@web3-react/core';
import Web from './components/Web'
import { ethers } from 'ethers'
const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
     <Web />
     </Web3ReactProvider>
    </div>
  )
}

export default App
