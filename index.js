const { ethers } = require("ethers");

async function connect() {
    if(window.ethereum !== "undefined"){
        await ethereum.request({ method: "eth_requestAccounts" })
    }
}

module.exports = {
    connect,
}
