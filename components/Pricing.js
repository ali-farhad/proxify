import {useRouter} from 'next/router';
import Link from 'next/link'


function Pricing({plans}) {
    const router = useRouter()

    const {basicPrice, proPrice, ultimatePrice, basic_quantity, pro_quantity, ultimate_quantity} = plans
  return (
    <div id="pricing">
        {/* // <!-- Download Heading --> */}


{/* // <!-- Download Boxes --> */}
<section id="download-boxes" className="">
  {/* <!-- Boxes Container --> */}
  <div
    className="relative flex flex-col items-center justify-center mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row"
  >
    {/* <!-- Box 1 --> */}
<div className="w-fit flex flex-col md:flex-row items-stretch mx-auto justify-stretch md:space-x-10 ">

<div className="rounded-lg shadow-lg overflow-hidden mb-2 w-full">
    <div className="px-6 py-4 bg-white dark:bg-gray-800 sm:p-4 sm:pb-6">
        <div className="flex justify-center">
            <span className="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                Discounted Plan
            </span>
        </div>
        <div className="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
            <span className="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                from
            </span>
            ${basicPrice}
            <span className="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                {/* /{basic_quantity} proxies */}
                per proxy
            </span>
        </div>
    </div>
    <div className="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
        <ul>
            <li className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                    180+ countries available
                </p>
            </li>
            <li className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                    99.9% uptime
                </p>
            </li>
            <li className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                    Traffic Never expires
                </p>
            </li>
            <li className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                SOCKS5 supported
                </p>
            </li>
        </ul>
        <div className="mt-6 rounded-md shadow">
            <Link href="/users/register">
            <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Buy Now
            </a>
            </Link>
        </div>
    </div>
</div>


    {/* <!-- Box 2 --> */}
    {/* <div className="rounded-lg shadow-lg overflow-hidden mb-4 w-full">
    <div className="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
        <div className="flex justify-center">
            <span className="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                Pro Plan
            </span>
        </div>
        <div className="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
            <span className="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                from
            </span>
            ${proPrice}
            <span className="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                /{pro_quantity} Proxies
            </span>
        </div>
    </div>
    <div className="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
        <ul>
            <li className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                99.9% uptime
                </p>
            </li>
            <li className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                Unlimited bandwidth and threads
                </p>
            </li>
            <li className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                Not shared
                </p>
            </li>
        </ul>
        <div className="mt-6 rounded-md shadow">
            <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Buy Now
            </a>
        </div>
    </div>
</div> */}

    {/* <!-- Box 3 --> */}
    {/* <div className="rounded-lg shadow-lg overflow-hidden mb-4 w-full">
    <div className="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
        <div className="flex justify-center">
            <span className="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                Ultimate Plan
            </span>
        </div>
        <div className="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
            <span className="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                from
            </span>
            ${ultimatePrice}
            <span className="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                /{ultimate_quantity} Proxies
            </span>
        </div>
    </div>
    <div className="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
        <ul>
            <li className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                Unlimited Bandwidth and threads
                </p>
            </li>
            <li className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                Instant delivery
                </p>
            </li>
            <li className="mt-4 flex items-start">
                <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7">
                        </path>
                    </svg>
                </div>
                <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                Unbanned on most websites

                </p>
            </li>
        </ul>
        <div className="mt-6 rounded-md shadow">
            <a href="#" className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
               Buy Now
            </a>
        </div>
    </div>
</div> */}
</div>

  </div>
</section>
    </div>
  )
}

export default Pricing

