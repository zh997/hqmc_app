const TronGrid = require('trongrid');
const TronWeb = require('tronweb');

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io'
});

const tronGrid = new TronGrid(tronWeb);
tronGrid.setExperimental('9707e954-515c-4bf9-b3b3-e86c0a07dcb6');

var timer = null;
var pullCount = 1;
var maxPullCount = 10;

export async function getTronlinkAddress() {
    return new Promise((resolve,reject) => {
        timer = setInterval(() => {
            pullCount += 1;
            if(window.tronWeb && window.tronWeb.defaultAddress.base58){
                const defaultAddress = window.tronWeb.defaultAddress.base58;
                console.log('--------------');
                console.log(defaultAddress);
                console.log('--------------');
                resolve(defaultAddress)
                clearInterval(timer);
            }
            if (pullCount >= maxPullCount) {
                reject('自动登录失败,请先安装TronLink并登录');
                clearInterval(timer);
            }
        }, 1000)
    })
}

// 获取账号信息
export async function getAccount() {
    const address = await getTronlinkAddress();

    const options = {
        Show_assets: true,
        only_confirmed: true,
    };

    // awaiting
    return await tronGrid.account.get(address, options);
}

export async function getTransactions() {
    const address = getTronlinkAddress();

    const options = {
        only_to: true,
        only_confirmed: true,
        limit: 100,
        order_by: 'timestamp,asc',
        min_timestamp: Date.now() - 60000 // from a minute ago to go on
    };

    // awaiting
    return await tronGrid.account.getTransactions(address, options);

}