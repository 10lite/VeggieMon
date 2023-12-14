# 🍃 VeggieMon

VeggieMon, a pioneering agricultural solution, operates as a decentralized app underpinned by Blockchain technology and satellite imagery. Its core functionality revolves around offering farmers a sophisticated supply chain management dashboard. This powerful platform provides real-time analytics, supply and demand insights, and market trends, enabling farmers to strategically optimize crop planning. The project's overarching purpose is to establish a sustainable and transparent ecosystem within the agri-food industry, facilitating data-driven decision-making for farmers. VeggieMon aims to cultivate trust, diminish waste, and champion sustainable farming practices, thereby transforming conventional agricultural approaches. Through technological integration, the platform is poised to significantly enhance efficiency, bolster profitability, and contribute to long-term environmental sustainability, positioning itself as a pivotal player in reshaping the agricultural landscape.

## 🚀 Introduction
VeggieMon is a supply chain management dashboard powered by Blockchain technology that leverages satellite imagery to optimize crop selection and yield based on the local and global market demand.

**Key Features:**
- Real-time analytics dashboard of supply-demand chain of crops
- Satellite imagery and machine learning for automized data feeding to the dashboard
- Integration of blockchain for full transparency on supply chain
- Crop management platform to determine ideal crop to plant in consideration with farmer cooperatives

**Things to Note:**
- This project is developed with [Next.js](https://nextjs.org/), [Tailwind](https://tailwindcss.com/), and is deployed to the Internet Computer using [DFX](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent). 
- This is the official submission of Team 2k for [THINK Hackathon](https://lu.ma/thinkhackathon). Learn more about VeggieMon [here](https://gamma.app/public/VeggieMon-byv7xw1fiqq2uos?mode=present#card-e9q8jzrjsf3zwkg).

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



