const {profile} = require('./profile')
const {Wallets, Gateway} = require('fabric-network')
const path = require('path')
const fs = require('fs')

class EventListener {
    async blockEventListener(role,identityLabel,channelName){
        let gateway=new Gateway();
        try{
            this.Profile = profile[role.toLowerCase()]
           const ccpPath = path.resolve(this.Profile["CP"])
           const ccp = JSON.parse(fs.readFileSync(ccpPath,'utf-8'))
           let wallet = await Wallets.newFileSystemWallet(this.Profile["Wallet"])
           await gateway.connect(ccp,{wallet, identity: identityLabel,discovery: {enabled:true, asLocalhost:true}})
           let network = await gateway.getNetwork(channelName)
           await network.addBlockListener(async(event)=>{
               console.log('Event:',event);
               console.log("Block Number",event.blockNumber.toString());
            });

        }catch(error){
            console.log('Error:',error);
            console.log(error.stack);
            
           
        }
    }

    async contactEventListener(role,identityLabel,channelName,
        chaincodeName,contractName,eventName){
           
            let gateway=new Gateway();
        try{
            this.Profile = profile[role.toLowerCase()]
           const ccpPath = path.resolve(this.Profile["CP"])
           const ccp = JSON.parse(fs.readFileSync(ccpPath,'utf-8'))
           let wallet = await Wallets.newFileSystemWallet(this.Profile["Wallet"])
           await gateway.connect(ccp,{wallet, identity: identityLabel,discovery: {enabled:true, asLocalhost:true}})
           let network = await gateway.getNetwork(channelName)
           //Access smmart contract
           let contract=await network.getContract(chaincodeName,contractName);
           await contract.addContractListener(async (event)=>{
               if(event.eventName===eventName){
                   console.log('Event:',event.payload.toString());
               }
           })
        }catch(error){
            console.log('Error:',error);
            console.log(error.stack);
            
           
        }
    }

    async txnEventListener(role,identityLabel,channelName,
        chaincodeName,contractName,transactionName,...args){
        let gateway=new Gateway();
        try{
            this.Profile = profile[role.toLowerCase()]
           const ccpPath = path.resolve(this.Profile["CP"])
           const ccp = JSON.parse(fs.readFileSync(ccpPath,'utf-8'))
           let wallet = await Wallets.newFileSystemWallet(this.Profile["Wallet"])
           await gateway.connect(ccp,{wallet, identity: identityLabel,discovery: {enabled:true, asLocalhost:true}})
           let network = await gateway.getNetwork(channelName)
           let contract= await network.getContract(chaincodeName,contractName);
           let transaction =contract.createTransaction(transactionName);
           let peers = network.channel.getEndorsers();
           let transactionId=transaction.getTransactionId();
           await network.addCommitListener(async(error,event)=>{
               if(error){
                   console.log("Error:",error);
               } else{
                   console.log("TransactionId:",event.transactionId);
                   console.log("Transaction status:",event.status)
               }
            },peers,transactionId);

            await transaction.submit(...args);

        }catch(error){
            console.log('Error:',error);
            console.log(error.stack);
            
           
        }finally {
            console.log("Disconnect from the gateway.")
            gateway.disconnect()
        }
    }
}

module.exports = {EventListener}