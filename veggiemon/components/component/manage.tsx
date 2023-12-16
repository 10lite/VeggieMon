import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Image from 'next/image'
import { JSX, SVGProps } from "react"
import { Package } from "lucide-react"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function Manage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr]">
      <div className="border-r bg-gray-100/40 md:block dark:bg-green-600/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Image width={32} height={32} src="/logo.jpg" alt="VeggieMon" className="rounded-full" priority/>  
              <span className="">VeggieMon</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start gap-2 px-4 text-lg font-medium text-[#FEF5E7]">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#FEF5E7] hover:bg-green-200 hover:text-[#315830] transition-all"
                href="/"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-zinc-800 transition-all hover:text-[#315830] bg-green-200 "
                href="/manage"
              >
                <Package className="h-4 w-4" />
                Manage
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#FEF5E7] hover:bg-green-200 hover:text-[#315830] transition-all"
                href="/dashboard"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b  px-6 bg-zinc-800">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full  shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 bg-gray-950"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/logo.jpg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-800">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-[#FEF5E7] text-black">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Crop Details</h1>
          </div>
          <section className="flex flex-col lg:grid gap-4 grid-cols-2 ">
            <Card className="border-zinc-800">
              <CardHeader className="pb-4 flex flex-row items-center gap-4">
                <CardTitle className="text-2xl font-bold text-[#315830]">Rice</CardTitle>
                <Badge variant="destructive" className="bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-none">High Demand</Badge>
                <Badge variant="destructive" className="bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-none">Low Supply</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Planting Season: Summer</p>
                <p>Soil Requirements: Clayey Soil</p>
                <p>Care Instructions: Maintain water levels, requires high temperature</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800">
              <CardHeader className="pb-4 flex flex-row items-center gap-4">
                <CardTitle className="text-2xl font-bold text-[#315830]">Corn</CardTitle>
                <Badge variant="destructive" className="bg-red-500 dark:bg-red-500] cursor-none">Low Demand</Badge>
                <Badge variant="destructive" className="bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-none">Low Supply</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Planting Season: Spring</p>
                <p>Soil Requirements: Loamy Soil</p>
                <p>Care Instructions: Water regularly, ensure good sunlight exposure</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800">
              <CardHeader className="pb-4 flex flex-row items-center gap-4">
                <CardTitle className="text-2xl font-bold text-[#315830]">Durian</CardTitle>
                <Badge variant="destructive" className="bg-red-500 dark:bg-red-500 cursor-none">Low Demand</Badge>
                <Badge variant="destructive" className="bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-none">Low Supply</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Planting Season: Summer</p>
                <p>Soil Requirements: Clayey Soil</p>
                <p>Care Instructions: Maintain water levels, requires high temperature</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800">
              <CardHeader className="pb-4 flex flex-row items-center gap-4">
                <CardTitle className="text-2xl font-bold text-[#315830]">Banana</CardTitle>
                <Badge variant="destructive" className="bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-none">High Demand</Badge>
                <Badge variant="destructive" className="bg-red-500 dark:bg-red-500 cursor-none">High Supply</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Planting Season: Summer</p>
                <p>Soil Requirements: Clayey Soil</p>
                <p>Care Instructions: Maintain water levels, requires high temperature</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800">
              <CardHeader className="pb-4 flex flex-row items-center gap-4">
                <CardTitle className="text-2xl font-bold text-[#315830]">Pineapple</CardTitle>
                <Badge variant="destructive" className="bg-red-500 dark:bg-red-500 cursor-none">Low Demand</Badge>
                <Badge variant="destructive" className="bg-red-500 dark:bg-red-500  cursor-none">High Supply</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Planting Season: Summer</p>
                <p>Soil Requirements: Clayey Soil</p>
                <p>Care Instructions: Maintain water levels, requires high temperature</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800">
              <CardHeader className="pb-4 flex flex-row items-center gap-4">
                <CardTitle className="text-2xl font-bold text-[#315830]">Coconut</CardTitle>
                <Badge variant="destructive" className="bg-red-500 dark:bg-red-500] cursor-none">Low Demand</Badge>
                <Badge variant="destructive" className="bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-none">Low Supply</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Planting Season: Summer</p>
                <p>Soil Requirements: Clayey Soil</p>
                <p>Care Instructions: Maintain water levels, requires high temperature</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800">
              <CardHeader className="pb-4 flex flex-row items-center gap-4">
                <CardTitle className="text-2xl font-bold text-[#315830]">Sugar Cane</CardTitle>
                <Badge variant="destructive" className="bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-none">High Demand</Badge>
                <Badge variant="destructive" className="bg-red-500 dark:bg-red-500 cursor-none">High Supply</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Planting Season: Summer</p>
                <p>Soil Requirements: Clayey Soil</p>
                <p>Care Instructions: Maintain water levels, requires high temperature</p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800">
              <CardHeader className="pb-4 flex flex-row items-center gap-4">
                <CardTitle className="text-2xl font-bold text-[#315830]">Cassava</CardTitle>
                <Badge variant="destructive" className="bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-none">High Demand</Badge>
                <Badge variant="destructive" className="bg-green-500 dark:bg-green-500 hover:bg-green-600 dark:hover:bg-green-600 cursor-none">Low Supply</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Planting Season: Summer</p>
                <p>Soil Requirements: Clayey Soil</p>
                <p>Care Instructions: Maintain water levels, requires high temperature</p>
              </CardContent>
            </Card>

          </section>
        </main>
      </div>
    </div>
  )
}

function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}

function TractorIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 4h9l1 7" />
      <path d="M4 11V4" />
      <path d="M8 10V4" />
      <path d="M18 5c-.6 0-1 .4-1 1v5.6" />
      <path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" />
      <circle cx="7" cy="15" r=".5" />
      <circle cx="7" cy="15" r="5" />
      <path d="M16 18h-5" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function FlowerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
      <circle cx="12" cy="12" r="3" />
      <path d="m8 16 1.5-1.5" />
      <path d="M14.5 9.5 16 8" />
      <path d="m8 8 1.5 1.5" />
      <path d="M14.5 14.5 16 16" />
    </svg>
  )
}


function SunSnowIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 9a3 3 0 1 0 0 6" />
      <path d="M2 12h1" />
      <path d="M14 21V3" />
      <path d="M10 4V3" />
      <path d="M10 21v-1" />
      <path d="m3.64 18.36.7-.7" />
      <path d="m4.34 6.34-.7-.7" />
      <path d="M14 12h8" />
      <path d="m17 4-3 3" />
      <path d="m14 17 3 3" />
      <path d="m21 15-3-3 3-3" />
    </svg>
  )
}

function SettingsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function LineChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}