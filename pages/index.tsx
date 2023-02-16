import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Form from '../components/Form'
import { Header } from '../components/Header'
import PickupWidget from '../components/PickupWidget'


const Home: NextPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      {
          showForm ? <Form /> : null
        }
      <Header />
      <Head>
        <title>Rine App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className=" text-center">
          <h1 className='text-5xl font-bold my-2'>
            Do you care about Earth?
          </h1>
          <p>
            Our mission is to reduce plastic waste and create a cleaner, healthier planet through our innovative plastic waste management solutions. Our team of dedicated professionals have years of experience in sustainability and waste management and are committed to finding creative, sustainable solutions to our plastic waste problem.
          </p>

        </div>




      </main>

      <p onClick={() => setShowForm(!showForm)
      }>
        <PickupWidget />
      </p>

    </div>
  )
}

export default Home
