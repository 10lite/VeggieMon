"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CardDescription, CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import Image from 'next/image'
import { Package } from "lucide-react"
import { JSX, ClassAttributes, HTMLAttributes } from "react"

export function Dashboard() {
  return (
    <div className="grid h-screen min-h-screen w-full lg:grid-cols-[280px_1fr]">
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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#FEF5E7] hover:bg-green-200 hover:text-[#315830] transition-all"
                href="/manage"
              >
                <Package className="h-4 w-4" />
                Manage
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg  px-3 py-2 text-zinc-800 transition-all hover:text-[#315830] bg-green-200 "
                href="/dashboard"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
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
          <div className="flex items-center gap-4">
            <Button size="icon" variant="outline" className="border-zinc-800 hover:bg-[#FACE8A]">
              <Link href="/">
                <ArrowLeftIcon className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="font-semibold text-lg md:text-xl">Crop Market Analytics</h1>
            <div className="ml-auto flex items-center gap-2">
              <Button className="hidden sm:flex border-zinc-800" variant="outline">
                Today
              </Button>
              <Button className="hidden md:flex border-zinc-800" variant="outline">
                This Month
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-[280px] justify-start text-left font-normal border-zinc-800" id="date" variant="outline">
                    <CalendarClockIcon className="mr-2 h-4 w-4" />
                    Nov 01, 2023 - Nov 30, 2023
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-auto p-0  bg-zinc-800">
                  <Calendar initialFocus mode="range" numberOfMonths={2} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <Card className="flex grow flex-col border-zinc-800">
                <CardHeader>
                  <CardDescription className="text-2xl font-bold text-[#315830]">Top Selling Crops</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center">
                    <div className="text-xl font-semibold">Rice</div>
                    <div className="font-semibold ml-auto">3K</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-xl font-semibold">Coconut</div>
                    <div className="font-semibold ml-auto">1.2K</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-xl font-semibold">Corn</div>
                    <div className="font-semibold ml-auto">1.1K</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex grow flex-col border-zinc-800">
                <CardHeader>
                  <CardDescription className="text-2xl font-bold text-red-500">Worst Selling Crops</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center">
                    <div className="text-xl font-semibold">Cabbage</div>
                    <div className="font-semibold ml-auto">0.1K</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-xl font-semibold">Carrot</div>
                    <div className="font-semibold ml-auto">0.2K</div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-xl font-semibold">Cucumber</div>
                    <div className="font-semibold ml-auto">0.3K</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="flex flex-col border-zinc-800">
              <CardHeader>
                <CardDescription className="text-2xl font-bold text-[#315830]">Price Chart of Rice</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChart className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
            <Card className="flex flex-col border-zinc-800">
              <CardHeader>
                <CardDescription className="text-2xl font-bold text-[#315830]">Average Prices</CardDescription>
              </CardHeader>
              <CardContent>
                <CurvedlineChart className="w-full aspect-[3/2]" />
              </CardContent>
            </Card>

          </div>
        </main>
      </div>
    </div>
  )
}


function PlaneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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


function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function CalendarClockIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.25V14" />
      <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
    </svg>
  )
}


function BarChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          {
            name: "January",
            data: 111,
          },
          {
            name: "February",
            data: 157,
          },
          {
            name: "March",
            data: 129,
          },
          {
            name: "April;",
            data: 187,
          },
          {
            name: "May",
            data: 119,
          },
          {
            name: "June",
            data: 22,
          },
          {
            name: "July",
            data: 101,
          },
          {
            name: "August",
            data: 83,
          },
        ]}
        keys={["data"]}
        indexBy="name"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Month",
          legendPosition: "middle",
          legendOffset: 45,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Price",
          legendPosition: "middle",
          legendOffset: -45,
          truncateTickAt: 0,
        }}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function CurvedlineChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "B",
            data: [
              { x: "2018-01-01", y: 7 },
              { x: "2018-01-02", y: 5 },
              { x: "2018-01-03", y: 11 },
              { x: "2018-01-04", y: 9 },
              { x: "2018-01-05", y: 12 },
              { x: "2018-01-06", y: 16 },
              { x: "2018-01-07", y: 13 },
              { x: "2018-01-08", y: 13 },
            ],
          },
          {
            id: "A",
            data: [
              { x: "2018-01-01", y: 9 },
              { x: "2018-01-02", y: 8 },
              { x: "2018-01-03", y: 13 },
              { x: "2018-01-04", y: 6 },
              { x: "2018-01-05", y: 8 },
              { x: "2018-01-06", y: 14 },
              { x: "2018-01-07", y: 11 },
              { x: "2018-01-08", y: 12 },
            ],
          },
        ]}
        enableCrosshair={false}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{
          type: "time",
          format: "%Y-%m-%d",
          useUTC: false,
          precision: "day",
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "X",
          legendOffset: 45,
          legendPosition: "middle",
          format: "%b %d",
          tickValues: "every 1 day",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Y",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        colors={{ scheme: "paired" }}
        pointSize={5}
        pointColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        pointBorderWidth={2}
        pointBorderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        pointLabelYOffset={-12}
        useMesh={true}
        curve="monotoneX"
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 14,
            symbolShape: "circle",
          },
        ]}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
