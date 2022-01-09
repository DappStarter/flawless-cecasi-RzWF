require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain hole gloom argue surge gesture'; 
let testAccounts = [
"0x775b521fa40e6b66d227597c41e5667a631b2828e81070dd8a5c3ed34ed64cfc",
"0x7c4fb26dd5ee97370b5179ec9b8cd2a471adfe3f9ba1131a0b31bcc6754be51e",
"0xc0ec6dc3a016be0aedfdd13e8947e42b6fb42d8c96591c04b05c889f9955b516",
"0x2536417075a6aa0d5fc24395e281eab0d0165a262ccb19008dcd39c1d8307246",
"0x020a25b6b9604de3d6c96488f7fdc17b8a8f577b6ac1a487264a1522dcd150dd",
"0xd2483a51516e26521c348244e22daf12daca7507240eb83fe0f2220c30381f0f",
"0x4ba0857e3304f25b83c77e2489979298d3b15bda079b98740308c1fe38fcc321",
"0x91a70b81c6cce0684c4a99a81992734881e25f3558d5167946fcc3310852efda",
"0xb74b8b80c27b460504b4db96c8b65e8746605c52373b702bf9cd8c47876ece84",
"0xd145d45c809f05c154374c65aca3f0673a2d9e504baffd0c57f866bf311ba8bb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

