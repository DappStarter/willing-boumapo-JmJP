require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note meadow upgrade hope argue bridge giggle'; 
let testAccounts = [
"0x6641ed9b8066ba9c75594f62d48102accde9beb4c64dfc0627b909e4d618cde7",
"0x456653b71b48f4a53d6a30f07917fa383b183029b8aa20023b76621693311035",
"0x6e048c1537c0663d30988c88e1a7ad8dad2051362d806aebf6d4e967be9d8b01",
"0x839bc4f9f511fa0ee9171edfe9d712cd4ac1645d7241a3ae9a32802e65bec45b",
"0xae091dbdc3dded153b0ef794dbc4bfa629ee42b5844e402f36df0555b124bd1a",
"0x99d6a529abfa4048b50a905139e9e4be1992faab322862b0587cd573e82ea455",
"0x3c0ebfb9ef184e0e1e4372cdc9618c816113a7dc48ad2270f67de24a06ec87f4",
"0x8cf5ccf45bc149e894dcf69130d645dde3c30794bb1a95c0cbe3b079b21ed0ee",
"0xbfa0fb4481480defe5dd9fa5e4e3c1424341dbd0bb32380448cadfa7efe79d02",
"0xa4504d80780d27c027860e950ac1ae00bb36ab43ddfc95916a307e81addfe396"
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

