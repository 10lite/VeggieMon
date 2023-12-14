import { Button } from "@/components/ui/button"
import Logo from "@/public/logo.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { BarChart3, FolderKanban, BrainCircuit } from "lucide-react"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <header className="flex items-center justify-between px-8 py-4 bg-green-600/40">
        <span className="flex gap-4 text-2xl text-white font-semibold">
          <Image width={32} height={32} src="/logo.jpg" alt="VeggieMon" className="rounded-full"/> VeggieMon
        </span>
        <Button className="text-white border-white hover:text-green-600 hover:bg-white" variant="outline">
          Login
        </Button>
      </header>
      <main className="flex-1">
        <section className="px-8 py-16 text-green-600 bg-white">
          <div className="flex flex-col gap-8 items-center justify-between">
            <div className="flex-grow flex justify-center">
              <Image width={256} height={256} src="/logo.jpg" alt="VeggieMon" className="rounded-full" priority/>  
            </div>
            <div className="flex flex-col text-center text-zinc-800">
              <h1 className="text-4xl font-bold">Empowering Farmers Through Data</h1>
              <p className="my-2 text-xl">Make informed planting decisions with <span className="font-semibold text-green-600">real-time market supply-demand data</span>.</p>
            </div>
            <Button className="px-8 py-4 h-12 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold text-lg">
              <Link href='/dashboard'>
                Get Started
              </Link>
            </Button>
          </div>
        </section>
        <section className="flex justify-around w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:grid items-center grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center [&>svg]:w-12 [&>svg]:h-12 text-green-200">
                <BarChart3 />
                <h2 className="text-xl font-bold mt-4">Real-time Analytics Dashboard</h2>
                <p className="text-zinc-400 dark:text-zinc-300 mt-2">VeggieMon offers a real-time monitoring dashboard that enables tracking of crop supply and demand data at every step of the supply chain.</p>
              </div>
              <div className="flex flex-col items-center text-center [&>svg]:w-12 [&>svg]:h-12 text-green-200">
                <FolderKanban />
                <h2 className="text-xl font-bold mt-4">Crop Management Platform</h2>
                <p className="text-zinc-400 dark:text-zinc-300 mt-2">VeggieMon offers farmers related data to the market and supply-demand chain, which gives suggestions for efficient and effective crop management and planning.</p>
              </div>
              <div className="flex flex-col items-center text-center [&>svg]:w-12 [&>svg]:h-12 text-green-200">
                <BrainCircuit />
                <h2 className="text-xl font-bold mt-4">Blockchain and Satellite Data Integration</h2>
                <p className="text-zinc-400 dark:text-zinc-300 mt-2">Veggiemon boasts data transparency, providing access to timely and accurate market insights, ultimately reducing price volatility and enabling informed decision-making.</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="flex flex-col items-center p-8 space-y-8 bg-gray-100 dark:bg-gray-700">
          <h2 className="text-2xl font-bold text-center">Farmer Testimonials</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-[80%]">
            <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">
              <p>&quot;This app revolutionized how I approach planting. The data insights are incredibly helpful.&quot;</p>
              <p className="mt-4 text-sm font-bold">- Farmer Jane</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">
              <p>&quot;I can&apos;t imagine going back to the old way of doing things. This app is a game changer.&quot;</p>
              <p className="mt-4 text-sm font-bold">- Farmer John</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">
              <p>&quot;With VeggieMon, I feel empowered to make the best decisions for my farm.&quot;</p>
              <p className="mt-4 text-sm font-bold">- Farmer Alex</p>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="px-8 py-4 text-center text-sm text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-800">
        © VeggieMon. All rights reserved.
      </footer>
    </div>
  )
}
