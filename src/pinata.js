const axios = require('axios');

const authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhYWUyNzEzYS04ZWZlLTQ4MTktYmExYi0yZWIzODY1YTIxMzUiLCJlbWFpbCI6ImFrc2hhdGdhZG9kaWFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjRhOTA1OGZlOGExODI1OTY3YmUxIiwic2NvcGVkS2V5U2VjcmV0IjoiODUwNWQ3MjZhMGUzMWI5Yjc1YmVkOWYyNzI2YTY5MTU0YTRhMjc1MTY1ZmQ4OTRmZDllMTUwNTZlNGY3YWNlOSIsImlhdCI6MTY1ODUwOTQzNX0.u7xxj3HttYcLOM5dP2SKslquRve-cLIukDNMSNY5lKE";
//const pinata_api_key = '4a9058fe8a1825967be1';
//const pinata_secret_api_key = '8505d726a0e31b9b75bed9f2726a69154a4a275165fd894fd9e15056e4f7ace9'


const call = async(NFTDataArg) =>{
    var NFTData = NFTDataArg
    var data = JSON.stringify({
        "pinataOptions": {
        "cidVersion": 1
        },
        "pinataMetadata": {
        "name": "Warranty Card Data",
        "keyvalues": {
            "customKey": "customValue",
            "customKey2": "customValue2"
        }
        },
        "pinataContent": NFTData
    });
    var config = {
    method: 'post',
    url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${authorization}`
    },
    data:data
    };
    const res = await axios(config);
    return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`
}

export default call;

//https://gateway.pinata.cloud/ipfs/bafkreicwahtqjym6c65jlc4dmhx6s67ccikynzswvnepnzmayok2j43nzm