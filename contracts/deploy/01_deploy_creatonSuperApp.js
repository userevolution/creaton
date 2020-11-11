const func = async function (hre) {
  const {deploy} = hre.deployments;
  const useProxy = !hre.network.live;

  // proxy only in non-live network (localhost and hardhat) enabling HCR (Hot Contract Replaement)
  // in live network, proxy is disabled and constructor is invoked
  //Superfluid, work in progress
  /*
  console.log('Static erc1820 deployment initiated');
  const rawTx = {
    nonce: 0,
    gasPrice: 10000,
    value: 0,
    data: '0x' + require('../src/superfluid/introspection/ERC1820Registry.json').bin,
    gasLimit: 800000,
    v: 27,
    r: '0x1820182018201820182018201820182018201820182018201820182018201820',
    s: '0x1820182018201820182018201820182018201820182018201820182018201820',
  };

  console.log('test');
  const tx = new Transaction(rawTx);

  const signer = await ethers.getSigners();
  const res = {
    sender: ethUtils.toChecksumAddress('0x' + tx.getSenderAddress().toString('hex')),
    rawTx: '0x' + tx.serialize().toString('hex'),
    contractAddr: ethUtils.toChecksumAddress(
      '0x' + ethUtils.generateAddress(tx.getSenderAddress(), ethUtils.toBuffer(0)).toString('hex')
    ),
  };

  const tx1 = await signer[0].sendTransaction({
    to: res.sender,
    value: ethers.utils.parseEther('0.08'), //ethers.utils.parseEther("0.08"),
  });
  await tx1.wait();
  console.log('erc1820 target address funded');
  const tx2 = await ethers.provider.sendTransaction(res.rawTx);
  await tx2.wait();
  console.log('successful erc1820 deploy!');

  const version = process.env.RELEASE_VERSION || 'test';
  console.log('release version:', version);

  const sf = new SuperfluidSDK.Framework({
    chainId: network.config.chainId,
    version: version,
    web3Provider: ethers.providers.Web3Provider,
  });
  await sf.initialize();

  const usdcAddress = await sf.resolver.get('tokens.fUSDC');
  const usdc = await sf.contracts.TestToken.at(usdcAddress);
  const usdcxWrapper = await sf.getERC20Wrapper(usdc);
  const usdcx = await sf.contracts.ISuperToken.at(usdcxWrapper.wrapperAddress);

  await deploy('CreatonSuperApp', {
    from: deployer,
    proxy: useProxy,
    args: [sf.host.address, sf.agreements.cfa.address, usdcx.address],
    log: true,
  });*/

  return !useProxy; // when live network, record the script as executed to prevent rexecution
};

module.exports = func;