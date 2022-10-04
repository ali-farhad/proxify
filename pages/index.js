import Script from 'next/script';
import Layout from '../components/Layout'
import Features from './../components/Features';
import Pricing from './../components/Pricing';


import { API_URL } from '../config';

export default function Home({plans}) {

  return (
    <div className="overflow-x-hidden">
    <Script src="ui.js" />

    <Layout>
      {/* <!-- Hero Section --> */}
    <section id="hero">
      {/* <!-- Container For Image and Content --> */}
      <div
        className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0"
      >
        {/* <!-- Content --> */}
        <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1
            className="text-3xl font-semibold text-center lg:text-6xl lg:text-left"
          >
            Welcome to Sockit2me
          </h1>
          <p
            className="max-w-md mx-auto text-lg text-justify text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0"
          >
            Our proxy network consists of real IP addresses from real users, making sure you never get detected or blocked. There&apos;s no sharing of any kind, so your proxy is available only to you
          </p>

          {/* <!-- Buttons Container --> */}
          <div
            className="flex items-center justify-center w-full space-x-4 lg:justify-start"
          >
            <a
              href="#"
              className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue"
              >Premium Proxies</a
            >
            <a
              href="#"
              className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
              >Try Free Proxies</a
            >
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          <div className="bg-hero"></div>
          <img
            src="images/illustration-hero.svg"
            alt=""
            className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
          />
        </div>
      </div>
    </section>

    {/* <!-- Features Heading --> */}
    <section id="features">
      <div className="container mx-auto mt-16 px-6">
        <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
        <p className="max-w-md mx-auto text-center text-grayishBlue">
        The world of IP networking can be confusing and intimidating. With so many options to choose from, you need a reliable and trustworthy service, with an excellent reputation. At Sockit2me, we aim to provide a sustainable and predictable solution tailored to your specific IP address business needs. Our solutions are cost-effective, reliable, and easy-to-use, giving you a first-rate experience that grows along with you.


        </p>
      </div>
    </section>

    {/* Features Component */}
    <Features/>
    {/* Pricing Component */}
    <Pricing plans={plans}/>

    {/* <!-- Newsletter Section --> */}
    <section id="newsletter" className="bg-softBlue mt-20">
      {/* <!-- Main Container --> */}
      <div className="max-w-lg mx-auto py-24">
        <p
          className="mb-6 text-lg tracking-widest text-center text-white uppercase"
        >
          350,000+ Proxies Already Bought
        </p>
        <h2
          className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl"
        >
          Get Custom Quote
        </h2>

        {/* <!-- Form --> */}
        <form
          className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0"
        >
          {/* <!-- Input and Button Container --> */}
          <div
            className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0"
          >
            <input
              type="text"
              className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
              placeholder="Enter your email address"
            />

            <input
              type="submit"
              className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
              value="Contact Us"
            />
          </div>
        </form>
      </div>
    </section>



      </Layout>
      </div>
  )
}


export async function getServerSideProps({req}) { 
  const resPlans = await fetch(`${API_URL}/api/plan`)
  const plans = await resPlans.json()

  return {
    props: {
      plans: plans.data.attributes,
  }
}

}