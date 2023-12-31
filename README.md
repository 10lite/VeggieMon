![alt text](https://imgur.com/xHFYFzc.png)

# 🍃 VeggieMon

VeggieMon, a pioneering agricultural solution, operates as a decentralized app underpinned by Blockchain technology and satellite imagery. Its core functionality revolves around offering farmers a sophisticated supply chain management dashboard. This powerful platform provides real-time analytics, supply and demand insights, and market trends, enabling farmers to strategically optimize crop planning. The project's overarching purpose is to establish a sustainable and transparent ecosystem within the agri-food industry, facilitating data-driven decision-making for farmers. VeggieMon aims to cultivate trust, diminish waste, and champion sustainable farming practices, thereby transforming conventional agricultural approaches. Through technological integration, the platform is poised to significantly enhance efficiency, bolster profitability, and contribute to long-term environmental sustainability, positioning itself as a pivotal player in reshaping the agricultural landscape.

Learn more about VeggieMon [here](https://gamma.app/public/VeggieMon-byv7xw1fiqq2uos?mode=present#card-e9q8jzrjsf3zwkg).


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![MIT License](https://img.shields.io/badge/Made_with-Web3.0-green)](https://choosealicense.com/licenses/mit/) [![AGPL License](https://img.shields.io/badge/Made_with-Internet_Computer-blue)](http://www.gnu.org/licenses/agpl-3.0) 

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## 🚀 Introduction
VeggieMon is a supply chain management dashboard powered by Blockchain technology that leverages satellite imagery to optimize crop selection and yield based on the local and global market demand.

**Key Features:**
- Real-time analytics dashboard of supply-demand chain of crops
- Satellite imagery and machine learning for automized data feeding to the dashboard
- Integration of blockchain for full transparency on supply chain
- Crop management platform to determine ideal crop to plant in consideration with farmer cooperatives

**Things to Note:**
- This project is developed with [Next.js](https://nextjs.org/), [Tailwind](https://tailwindcss.com/), and is deployed to the Internet Computer using [DFX](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent). 
- This is the official submission of Team 2k for [THINK Hackathon](https://lu.ma/thinkhackathon).

## 🗺️ Product Roadmap
**⚠️ Disclaimer: VeggieMon is under tedious construction.**

1. 🔗 **Blockchain Integration**
- A decentralized information system would allow for transparent, accurate, and timely information dissemination on the supply-demand chain.

2. 📊 **Crop Market Price Analytics Dashboard**
- A unified dashboard achieved through data scraping market prices from the uploaded data of the Department of Agriculture and the Philippine Statistics Authority 

3. 📄 **Crop Management System for Farmers**
- Farmers get a better grasp of the supply-demand chain through AI recommendations based on the price dashboard. Decisions on what to plant next are suggested.

4. 🛰️ **Integration of Satellite Data & Machine Learning for Automated Geo-mapping of Supply-Demand Chain**

## ⚙️ Running the project locally
On any Linux CLI, use the following commands to run the project locally:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

## ⭐ Acknowledgements
- Sir [Eliezer Rabadon](https://www.linkedin.com/in/seiferxiii/) for the active mentorship!
- [ICP Philippines](https://web.facebook.com/ICPPhilippines) for the hackathon!
- [Davao DeFi Community](https://web.facebook.com/davaodeficommunity) for bringing the event possible to Davao City.

## 🪶 Authors
- [@10lite](https://github.com/10lite)
- [@nbryleibanez](https://github.com/nbryleibanez)
- [@ArJSarmiento](https://github.com/arjsarmiento)
- [@seangaaab](https://github.com/seangaaab)
- [@jaanides0213](https://github.com/jaanides0213)
- [@curioushyuman](https://github.com/curioushyuman)

## 📖 References
- [Internet Computer](https://internetcomputer.org/)
- [dfx](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent)



