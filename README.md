
# Web3Modal SDK JavaScript Implementation
This repository is dedicated to implementing WalletConnect's Web3Modal and Ethers using TypeScript. 
https://docs.walletconnect.com/web3modal/about



## Installing Dependencies

### Install Web3 modal and ethers for Ethereum blockchain interactions
```bash
npm install --save @web3modal/ethers ethers
```

### Install TypeScript for writing your project in TypeScript
```bash
npm install --save-dev typescript
```

### Install Webpack and its CLI for bundling your JavaScript applications
```bash
npm install --save-dev webpack webpack-cli
```

### Install ts-loader to integrate TypeScript compilation with Webpack
```bash
npm install --save-dev ts-loader
```

### Install ESLint for linting your JavaScript/TypeScript code
```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Install http-server to serve your project locally and test it in a browser
```bash
npm install --save-dev http-server
```



## Compile the TypeScript Code
To compile the TypeScript code in `src/main.ts` and generate `js/main.js`, run:
```bash
npx tsc
```



## Create the Bundle
To create the `bundle.js` and other necessary JS files in the `dist/` folder, run:
```bash
npx webpack
```



## Run the Server
Start the server to serve `index.html`:
```bash
http-server
```

Now, you can open http://127.0.0.1:8080 in your browser to view the project.

## Other Imports:
### Stakeit
```bash
npm install --save @stakekit/widget  
```
