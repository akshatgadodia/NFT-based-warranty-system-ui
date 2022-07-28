import React,{useState} from 'react'
import './CSS/Create.css'
import contract from './contract.js'
import { useSelector} from 'react-redux'
import axios from 'axios';

const Create = () => {
  const account = useSelector((state)=>state.slice.account);
  const [processStarted, setProcessStarted] = useState(false)
  const [sellerName, setSellerName] = useState('')
  const [buyerEmail, setBuyerEmail] = useState('')
  const [productName, setProductName] = useState('')
  const [brandName, setBrandName] = useState('')
  const [productId, setProductId] = useState('')
  const [buyerName, setBuyerName] = useState('')
  const [buyerAddress, setBuyerAddress] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const onSubmit = async (event) => {
    event.preventDefault();
    setProcessStarted(true);
    if(account===null){
      alert("Please connect your metamask wallet first");
    }
    else if(buyerAddress===''){
      alert("Buyer Metamask Address can't be null");
    }
    else{
      let nftcreated = false;
      try{
          const NFTData = {
            "description": "This is a Warranty Card", 
            "image": "ipfs://QmWvHbUYRZEUr4hx617nBiCsH2zrAGMBbLxJZEUpzwa6hh", 
            "name": "Warranty Card",
            "attributes": [{"trait_type": "Seller Name", "value": sellerName}, {"trait_type": "Product Name", "value": productName},
              {"trait_type": "Brand Name", "value": brandName}, {"trait_type": "Product Id", "value": productId }, 
              {"trait_type": "Buyer Name", "value": buyerName}, {"trait_type": "Expiry Date", "value": expiryDate},
              {"trait_type": "Token Standard", "value": "ERC721"}
            ]
          }
          const data = await axios.post('http://192.168.29.39:5000/getIfpsUrl',{data : NFTData});
          const ethData = await contract.methods.safeMint(buyerAddress,data.data.link).send({
            from : account
          });
          const tokenID = ethData.events.Transfer.returnValues._tokenId;
          nftcreated = true;
          await axios.post('http://192.168.29.39:5000/storeData',{data : {tokenID : tokenID, warrantyExpireDate : expiryDate}});
          await fetch("http://192.168.29.39:5000/sendMail", {
                method: "POST",
                body: JSON.stringify({tokenID : tokenID, warrantyExpireDate : expiryDate, name : buyerName, email : buyerEmail, productName : productName,
                  productId : productId,seller : sellerName, brand : brandName}),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
          alert(`NFT create with ID ${tokenID} and mail has been sent to the receiver`)
      }
      catch(err){
        console.log(err)
        if(nftcreated)
        alert(`NFT has been created but mail can't be send to the receiver`)
        else
          alert("Some Error Occurred! Please check and try again")
      }
      setSellerName('');
      setProductName('');
      setBrandName('');
      setProductId('');
      setBuyerName('');
      setBuyerAddress('');
      setBuyerEmail('');
      setExpiryDate('')
    }
    
    setProcessStarted(false);
  }

  return (
    <div className='create'>
      <div className="create-div">
        {processStarted && <div className='loading-spinner'>
          <div className='loading-spinner-shadow'></div>
          <div className='loading-spinner-box'></div>
        </div> }
        <h2>Create NFT Warranty</h2><br /><br />
        <div className='create-form'>
          <form  onSubmit={onSubmit}>
            <label htmlFor="sellerName">Seller Name</label><br/>
            <input type="text" id="sellerName" name="sellerName" value={sellerName} placeholder='Seller Name' minLength='1' required
                    onChange={event=>setSellerName(event.target.value)}/><br /><br />

            <label htmlFor="productName">Product Name</label><br/>
            <input type="text" id="productName" name="productName" value={productName} placeholder='Product Name'
                    onChange={event=>setProductName(event.target.value)} minLength='1' required/><br /><br />

            <label htmlFor="brandName">Brand Name</label><br/>
            <input type="text" id="brandName" name="brandName" value={brandName} placeholder='Brand Name'
                    onChange={event=>setBrandName(event.target.value)} minLength='1' required/><br /><br />

            <label htmlFor="productId">Product Id</label><br/>
            <input type="text" id="productId" name="productId" value={productId} placeholder='Product Id'
                  onChange={event=>setProductId(event.target.value)} minLength='1' required/><br /><br />

            <label htmlFor="buyerName">Buyer Name</label><br/>
            <input type="text" id="buyerName" name="buyerName" value={buyerName} placeholder='Buyer Name'
                  onChange={event=>setBuyerName(event.target.value)} minLength='1' required/><br /><br />

            <label htmlFor="buyerMetamaskAddress">Buyer Metamask Address</label><br/>
            <input type="text" id="buyerMetamaskAddress" name="buyerMetamaskAddress" value={buyerAddress} placeholder='Buyer Metamask Address'
                    onChange={event=>setBuyerAddress(event.target.value)} minLength='1' maxLength="42" required/><br /><br />

            <label htmlFor="buyerEmailAddress">Buyer Email Address</label><br/>
            <input type="email" id="buyerEmailAddress" name="buyerEmailAddress" value={buyerEmail} placeholder='Buyer Email Address'
                    onChange={event=>setBuyerEmail(event.target.value)} minLength='1' required/><br /><br />

            <label htmlFor="expiryDate">Warranty Expiry Date</label><br/>
            <input type="date" id="expiryDate" name="expiryDate" value={expiryDate} placeholder='Warranty Expiry Date'
                    onChange={event=>setExpiryDate(event.target.value)} required/><br /><br /><br />

            <input type="submit" value="Create"/><br /><br /><br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create