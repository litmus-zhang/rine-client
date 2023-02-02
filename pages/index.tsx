import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <header className='flex w-full justify-between my-2'>
        <Image src="/rine-logo.png" alt="Rine Logo" width={72} height={16} />
        <nav className='flex font-medium hover:green-200 gap-2 items-center'>
          <p>Home</p>
          <p>
            <button className='bg-green-500 text-white p-2'>
              Request for pickup
            </button>
          </p>
        </nav>

      </header>

      <Head>
        <title>Rine App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-5xl font-bold'>
        Do you care about Earth?
      </h1>
      <p>
        Get tips on how to improve your environment with our weekly update      </p>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/rine-logo.png" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
