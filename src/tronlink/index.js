const TronGrid = require('trongrid');
const TronWeb = require('tronweb');

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io'
});

/** 代币地址 */
const atAddress = 'TPzuUuPUZhdf1sPLU46jxYrciFb4BqC6Yq';
const tronGrid = new TronGrid(tronWeb);
tronGrid.setExperimental('9707e954-515c-4bf9-b3b3-e86c0a07dcb6');

var timer = null;
var pullCount = 1;
var maxPullCount = 5;

export async function getTronlinkAddress() {
    clearInterval(timer);
    return new Promise((resolve, reject) => {
        timer = setInterval(() => {
            pullCount += 1;
            if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                clearInterval(timer);
                const defaultAddress = window.tronWeb.defaultAddress.base58;
                console.log('--------------');
                console.log(defaultAddress);
                console.log('--------------');
                localStorage.setItem('address', defaultAddress);
                resolve(defaultAddress)
            }
            if (pullCount >= maxPullCount) {
                clearInterval(timer);
                reject('自动登录失败,请先安装TronLink并登录');
            }
        }, 1000)
    })
}

// 充值
export async function transaction(amount, address) {
    console.log(address, amount);
    let contract = await tronWeb.contract().at(atAddress);
    // awaiting
    return contract.transfer(
        address,
        tronWeb.toHex(amount)
    ).send({
        feeLimit: 10000000
    })
}