import React,{useState} from 'react'
import './CSS/Transfer.css'
import contract from './contract.js'
import { useSelector} from 'react-redux'

const Transfer = () => {
  const account = useSelector((state)=>state.slice.account);
  const [processStarted, setProcessStarted] = useState(false)
  const [tokenId, setTokenId] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault();
    setProcessStarted(true);
    if(account===null){
      alert("Please connect your metamask wallet first");
    }
    else if(receiverAddress===''){
      alert("New Owner Metamask Address cannot be empty")
    }
    else{
      try{
        //const data = await contract.methods.ownerOf(tokenId).call();
        await contract.methods.safeTransferFrom(account,receiverAddress,tokenId,).send({
          from : account
        });
        alert(`NFT with Id ${tokenId} transferred to ${receiverAddress}`)
      }
      catch(err){
        console.log(err)
        alert("Some Error Occurred! Please check and try again")
      }
      setTokenId('');
      setReceiverAddress('');
    }
    setProcessStarted(false);
  }

  return (
    <div className='transfer'>
      <div className="transfer-div">
      {processStarted && <div className='transfer-loading-spinner'>
          <div className='transfer-loading-spinner-shadow'></div>
          <div className='transfer-loading-spinner-box'></div>
        </div> }
        <h2>Transfer NFT Warranty</h2><br /><br />
        <div className='transfer-form'>
        <form  onSubmit={onSubmit}>
          <label htmlFor="nftId">NFT Id</label><br/>
          <input type="number" id="nftId" name="nftId" value={tokenId} placeholder='NFT Id'
                onChange={event=>setTokenId(event.target.value)} minLength='1' required/><br /><br />
          <label htmlFor="newOwnerAddress">New Owner Metamask Address</label><br/>
          <input type="text" id="newOwnerAddress" name="newOwnerAddress" value={receiverAddress} placeholder='New Owner Address'
                onChange={event=>setReceiverAddress(event.target.value)} minLength='1' maxLength="42" required/><br /><br />
          <input type="submit" value="Transfer"/><br /><br /><br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Transfer