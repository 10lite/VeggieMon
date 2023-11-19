# VeggieMon
VeggieMon is a supply chain management dashboard powered by Blockchain technology that leverages satellite imagery to optimize crop selection and yield based on the local and global market demand. 

This project is developed with [Next.js](https://nextjs.org/), [Tailwind](https://tailwindcss.com/), and is deployed to the Internet Computer using [DFX](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent). 

This is the official submission of Team 2k for [THINK Hackathon](https://lu.ma/thinkhackathon). Learn more about VeggieMon [here](https://gamma.app/public/VeggieMon-byv7xw1fiqq2uos?mode=present#card-e9q8jzrjsf3zwkg).

## About VeggieMon
VeggieMon stands at the forefront of agricultural innovation, providing a decentralized app that empowers farmers in the digital era. Leveraging the synergy of blockchain technology and satellite data, VeggieMon offers real-time analytics, supply and demand insights, and market trends to enable farmers to optimize crop planning. This revolutionary platform fosters data-driven decision-making, ensuring farmers are equipped with the tools needed for efficient and informed agricultural practices.

**Our Vision and Mission**

At the core of VeggieMon is a passionate team dedicated to transforming the agri-food industry. Our vision is to create a sustainable and transparent ecosystem where farmers can thrive through optimized planning and informed decision-making. The mission is clear — harness the power of technology to bridge the gap between farmers and consumers, fostering trust, reducing waste, and promoting sustainable farming practices.

**Features**

The VeggieMon app boasts a user-friendly interface, allowing farmers to seamlessly navigate through a wealth of information. Customizable notifications keep users informed about crop planting, market updates, and weather conditions. Integration with existing agri-food systems ensures efficient information exchange, making VeggieMon a versatile tool adaptable to various agricultural environments.

**Impact and Future Developments**

VeggieMon has a profound impact on farmers and the agri-food industry. Through increased efficiency, improved profitability, and a commitment to sustainable agriculture, the platform is reshaping the way farming is approached. Looking ahead, VeggieMon envisions future expansions, exploring possibilities in new geographical areas and embracing emerging technologies to continually elevate and refine its contribution to the agricultural landscape.

## Authors
- [@10lite](https://github.com/10lite)
- [@nbryleibanez](https://github.com/nbryleibanez)
- [@ArJSarmiento](https://github.com/arjsarmiento)
- [@seangaaab](https://github.com/seangaaab)
- [@jaanides0213](https://github.com/jaanides0213)
- [@curioushyuman](https://github.com/curioushyuman)

## Running the project locally
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






