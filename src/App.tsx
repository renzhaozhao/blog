import React, { useState, FC, useEffect } from 'react'
import { wei2eth } from '@/utils'
import './App.css'

const accout = '0x324a1c5f646F5aA117afCa9e8cC9fe74547f822e'
// const accout1 = '0x19fAe8328f9CD2869153a6fBF898ab6713337641'
// const accout2 = '0x8C6622fdF3aE4CFD94e9D4bcBe3Ef6BD37860033'
const App: FC = () => {
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    async function getBalance(address: string) {
      const result = await web3.eth.getBalance(address)
      setBalance(result)
    }

    getBalance(accout)
  })

  return (
    <div className="App">
      <div>区块链测试</div>
      <div>我的账号: {!!balance && wei2eth(balance)}</div>
    </div>
  )
}

export default App
