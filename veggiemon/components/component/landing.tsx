import { Button } from "@/components/ui/button"
import Logo from "@/public/logo.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { BarChart3, FolderKanban, BrainCircuit } from "lucide-react"
import { Card } from "../ui/card"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-800">
      <header className="flex items-center justify-between px-4 lg:px-8 py-4 bg-[#315830]">
        <span className="flex gap-4 text-2xl text-white font-semibold">
          <Image width={32} height={32} src="/logo.jpg" alt="VeggieMon" className="rounded-full"/> VeggieMon
        </span>
        <Button className="font-semibold px-6 text-[#315830] bg-[#FEF5E7] hover:text-green-600 hover:bg-white" variant="outline">
          Login
        </Button>
      </header>
      <main className="flex-1">
        <section className="flex flex-col lg:flex-row gap-4 justify-around px-8 text-green-600 bg-[#FEF5E7] py-8 lg:py-[8.5rem]">
          <div className="flex flex-col gap-8 items-left justify-center">
            <div className="flex flex-col text-left text-zinc-800">
              <h1 className="text-[3rem] lg:text-[5rem] font-[900] text-center lg:text-left leading-tight lg:leading-[5.5rem] pb-4">Empowering Farmers <br />Through <span className="text-green-600">Data</span></h1>
              <p className="my-2 text-lg lg:text-3xl">Make informed planting decisions with real-time <br />market supply-demand data.</p>
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-4 justify-between lg:justify-start">
              <Link className="flex items-center px-4 py-2 lg:px-12 lg:h-[3.25rem] rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold text-lg" href='/dashboard'>
                Get Started
              </Link>
              <Button variant="outline" className="border-none shadow-none lg:border-zinc-800 px-4 py-4 lg:px-12 lg:h-[3.25rem] text-lg font-semibold hover:underline">
                <Link href="#">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <Image width={690} height={690} src="/analytics.svg" alt="VeggieMon" className="rounded-lg" priority/>
        </section>
        <section className="flex justify-around w-full pb-4 lg:py-[5.5rem] bg-zinc-800">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-[#FEF5E7] font-[700] text-[3rem] lg:text-[4rem] pt-12 lg:pt-0 pb-12">Our Features</h1>
            <div className="flex flex-col lg:grid items-center grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center [&>svg]:w-16 [&>svg]:h-16 text-green-200">
                <BarChart3 />
                <h2 className="text-2xl font-bold mt-4">Real-time Analytics Dashboard</h2>
                <p className="text-[#FEF5E7] lg:text-xl mt-2">VeggieMon offers a real-time monitoring dashboard that enables tracking of crop supply and demand data at every step of the supply chain.</p>
              </div>
              <div className="flex flex-col items-center text-center [&>svg]:w-16 [&>svg]:h-16 text-green-200">
                <FolderKanban />
                <h2 className="text-2xl font-bold mt-4">Crop Management Platform</h2>
                <p className="text-[#FEF5E7] lg:text-xl mt-2">VeggieMon offers farmers related data to the market and supply-demand chain, which gives suggestions for efficient and effective crop management and planning.</p>
              </div>
              <div className="flex flex-col items-center text-center [&>svg]:w-16 [&>svg]:h-16 text-green-200">
                <BrainCircuit />
                <h2 className="text-2xl font-bold mt-4">Blockchain & Satellite Data Integration</h2>
                <p className="text-[#FEF5E7] lg:text-xl mt-2">Veggiemon boasts data transparency, providing access to timely and accurate market insights, ultimately reducing price volatility and enabling informed decision-making.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-around w-full pb-4 lg:py-[5.5rem] bg-[#FEF5E7]">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-zinc-800 font-[700] text-[3rem] lg:text-[4rem] pt-12 lg:pt-0 pb-12">About VeggieMon</h1>
            <Card className="flex flex-col items-center text-center gap-4 border-zinc-800 p-8 shadow-2xl">
              <h2 className="text-green-600 text-4xl font-extrabold mt-4">Our Mission</h2>
              <p className="text-zinc-800 lg:text-2xl mt-2">VeggieMon, a pioneering agricultural solution, operates as a decentralized app underpinned by Blockchain technology and satellite imagery. Its core functionality revolves around offering farmers a sophisticated supply chain management dashboard. This powerful platform provides real-time analytics, supply and demand insights, and market trends, enabling farmers to strategically optimize crop planning. </p>
              <h2 className="text-green-600 text-4xl font-extrabold mt-4">Our Vision</h2>
              <p className="text-zinc-800 lg:text-2xl mt-2">The project&#39;s overarching purpose is to establish a sustainable and transparent ecosystem within the agri-food industry, facilitating data-driven decision-making for farmers. VeggieMon aims to cultivate trust, diminish waste, and champion sustainable farming practices, thereby transforming conventional agricultural approaches. Through technological integration, the platform is poised to significantly enhance efficiency, bolster profitability, and contribute to long-term environmental sustainability, positioning itself as a pivotal player in reshaping the agricultural landscape.</p>
            </Card>
          </div>
        </section>
      </main>
      <footer className="px-8 py-4 text-center text-sm text-gray-700 dark:text-white bg-zinc-800">
        © VeggieMon. All rights reserved.
      </footer>
    </div>
  )
}
