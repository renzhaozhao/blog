import React, { useState, FC, useEffect } from 'react'
import { wei2eth } from '@/utils'
import './App.css'

const accout = '0x00e0ec8E78D1eB3003b196F40D558299a241b328'
// const accout1 = '0x19fAe8328f9CD2869153a6fBF898ab6713337641'
// const accout2 = '0x8C6622fdF3aE4CFD94e9D4bcBe3Ef6BD37860033'
const App: FC = () => {
  const [balance, setBalance] = useState(0)
  useEffect(() => {
    getBalance(accout)

    contractCall()
  }, [])

  async function getBalance(address: string) {
    const result = await web3.eth.getBalance(address)
    setBalance(result)
  }

  async function contractCall() {
    const result = await fetch('/MetaCoin.json').then(res => res.json())
    const contract = new web3.eth.Contract(
      result.abi,
      '0x2434D907d93A895a6cDe1afEb20243c628768484'
    )
    console.log(contract.methods)
    // const res = await contract.methods
    //   .sendCoin('0x8be5a6263114382937a50B6f26e4f665C50C212F', 50)
    //   .call({ from: '0x00e0ec8E78D1eB3003b196F40D558299a241b328' })
    const res = await contract.methods
      .getBalance('0x8be5a6263114382937a50B6f26e4f665C50C212F')
      .call()
    console.log(res)
  }

  return (
    <div className="App">
      <div>区块链测试</div>
      <div>余额: </div>
      <div>
        WEI: <span className="balance">{balance}</span>
      </div>
      <div>
        ETH: <span className="balance">{wei2eth(balance)}</span>
      </div>
    </div>
  )
}

export default App
