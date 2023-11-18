import { Button } from "@/components/ui/button"
import Logo from "@/public/logo.jpg"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <header className="flex items-center justify-between px-8 py-4 bg-green-500">
        <span className="text-2xl text-white">VeggieMon</span>
        <Button className="text-white border-white" variant="outline">
          Login
        </Button>
      </header>
      <main className="flex-1">
        <section className="px-8 py-16 bg-green-500 text-white">
          <div className="flex flex-col gap-8 items-center justify-between">
            <div className="flex-grow flex justify-center">
              <img src="/logo.jpg" alt="VeggieMon" className="w-64 h-64 rounded-full" />  
            </div>
            <div className="flex flex-col text-center">
              <h1 className="text-4xl font-bold">Empowering Farmers Through Data</h1>
              <p className="my-4 text-xl">Make informed planting decisions with real-time market supply-demand data.</p>
            </div>
            <Button className="px-12 py-4 h-12 rounded-full text-green-500 bg-white">Get Started</Button>
          </div>
        </section>
        <section className="flex justify-around w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center grid-cols-2 gap-8 sm:gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <svg
                  className=" h-12 w-12 text-zinc-800 dark:text-zinc-200"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" x2="12" y1="20" y2="10" />
                  <line x1="18" x2="18" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="16" />
                </svg>
                <h3 className="text-xl font-bold mt-4">Real-time Analytics</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">Track market trends in real-time.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg
                  className=" h-12 w-12 text-zinc-800 dark:text-zinc-200"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
                <h3 className="text-xl font-bold mt-4">Supply and Demand</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">Balance out the supply and demand.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg
                  className=" h-12 w-12 text-zinc-800 dark:text-zinc-200"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <h3 className="text-xl font-bold mt-4">Global Market</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">Keep an eye on the global market.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="p-8 space-y-8 bg-gray-100 dark:bg-gray-700">
          <h2 className="text-2xl font-bold text-center">Farmer Testimonials</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">
              <p>"This app revolutionized how I approach planting. The data insights are incredibly helpful."</p>
              <p className="mt-4 text-sm font-bold">- Farmer Jane</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">
              <p>"I can't imagine going back to the old way of doing things. This app is a game changer."</p>
              <p className="mt-4 text-sm font-bold">- Farmer John</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg">
              <p>"With VeggieMon, I feel empowered to make the best decisions for my farm."</p>
              <p className="mt-4 text-sm font-bold">- Farmer Alex</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-8 py-4 text-center text-sm text-gray-700 bg-gray-200 dark:bg-gray-800">
        © VeggieMon. All rights reserved.
      </footer>
    </div>
  )
}
