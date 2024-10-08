/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/K2TSxFu71Vv
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="size-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Stories
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Submit
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Share Your Story, Inspire Change
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our platform empowers advocates to share their personal stories and drive meaningful change. Submit
                  your story today and join the movement.
                </p>
                <div className="mt-6">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Submit Your Story
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                  height="550"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Stories, Lasting Impact</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore the personal journeys of our advocates and learn how they're driving change in their
                  communities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="border-0 rounded-xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <img
                    alt="Story"
                    className="object-cover aspect-video"
                    height={225}
                    src="/placeholder.svg"
                    width={400}
                  />
                </CardContent>
                <CardFooter className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Empowering Youth Through Education</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    Sarah's story of founding a non-profit to provide free educational resources to underprivileged
                    communities.
                  </p>
                  <Link
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                    href="#"
                  >
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <img
                    alt="Story"
                    className="object-cover aspect-video"
                    height={225}
                    src="/placeholder.svg"
                    width={400}
                  />
                </CardContent>
                <CardFooter className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Advocating for Disability Rights</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    John's journey of overcoming challenges and becoming a vocal advocate for disability inclusion.
                  </p>
                  <Link
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                    href="#"
                  >
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <img
                    alt="Story"
                    className="object-cover aspect-video"
                    height={225}
                    src="/placeholder.svg"
                    width={400}
                  />
                </CardContent>
                <CardFooter className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Driving Climate Action Through Grassroots Activism</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    Emily's story of organizing local communities to demand sustainable policies and environmental
                    justice.
                  </p>
                  <Link
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                    href="#"
                  >
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <img
                    alt="Story"
                    className="object-cover aspect-video"
                    height={225}
                    src="/placeholder.svg"
                    width={400}
                  />
                </CardContent>
                <CardFooter className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Uplifting Marginalized Communities Through Art</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    Jamal's story of using public murals to celebrate diversity and promote social justice in his
                    neighborhood.
                  </p>
                  <Link
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                    href="#"
                  >
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <img
                    alt="Story"
                    className="object-cover aspect-video"
                    height={225}
                    src="/placeholder.svg"
                    width={400}
                  />
                </CardContent>
                <CardFooter className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Bridging the Digital Divide Through Tech Education</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    Amelia's story of founding a non-profit to teach coding and digital skills to underserved
                    communities.
                  </p>
                  <Link
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                    href="#"
                  >
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="border-0 rounded-xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <img
                    alt="Story"
                    className="object-cover aspect-video"
                    height={225}
                    src="/placeholder.svg"
                    width={400}
                  />
                </CardContent>
                <CardFooter className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Empowering Women Entrepreneurs in Rural Areas</h3>
                  <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                    Fatima's story of establishing a microfinance program to support women-owned businesses in her
                    community.
                  </p>
                  <Link
                    className="inline-flex items-center text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                    href="#"
                  >
                    Read More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Share Your Story</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join our community of advocates and inspire others with your personal journey. Submit your story today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your story title" type="text" />
                <Button type="submit">Submit</Button>
              </form>
              <div className="flex items-center justify-center space-x-2">
                <Button size="icon" variant="ghost">
                  <VideoIcon className="h-5 w-5" />
                  <span className="sr-only">Record Video</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <ImageIcon className="h-5 w-5" />
                  <span className="sr-only">Upload Image</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link href="#">Our Mission</Link>
            <Link href="#">Our Team</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Stories</h3>
            <Link href="#">Featured Stories</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Submit a Story</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#">Blog</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Community Guidelines</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#">Twitter</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function ImageIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function VideoIcon(props) {
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}
