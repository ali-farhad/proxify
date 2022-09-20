
export default function Features() {
  return (
    <div>
          {/* <!-- Features Tabs --> */}
    <section id="tabs">
      {/* <!-- Tabs/Panels Container --> */}
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs"></div>
        {/* <!-- Tabs Flex Container --> */}
        <div
          className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row"
        >
          {/* <!-- Tab 1 --> */}
          <div
            className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-1"
          >
            <div className="py-5 border-b-4 border-softRed" data-target="panel-1">
            100% Genuine Residential Proxies
            </div>
          </div>

          {/* <!-- Tab 2 --> */}
          <div
            className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-2"
          >
            <div className="py-5" data-target="panel-2">Superior Performance Datacenter Proxies</div>
          </div>

          {/* <!-- Tab 3 --> */}
          <div
            className="flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-3"
          >
            <div className="py-5" data-target="panel-3">Improved Security</div>
          </div>
        </div>

        {/* <!-- Tab Panels --> */}
        <div id="panels" className="container mx-auto">
          {/* <!-- Panel 1 --> */}
          <div
            className="flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1"
          >
            {/* <!-- Panel Image --> */}
            <div className="flex justify-center md:w-1/2">
              <img
                src="images/illustration-features-tab-1.svg"
                alt=""
                className="relative z-10"
              />
            </div>
            {/* <!-- Panel Content --> */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3
                className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left"
              >
                Guaranteed Results
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
              Our residential proxy network consists of real IP addresses from real users, making sure you never get detected or blocked. 
Residential proxies are ideal for reliable data scraping because they’re indistinguishable from organic visitors. We created our own network of residential proxies with genuine users all over the world. Every participant can enter or leave the pool as they wish, and they’re all compensated for their resources.

              </p>
              <div className="mx-auto md:mx-0">
                <a
                  href="#"
                  className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >More Info</a
                >
              </div>
            </div>
          </div>

          {/* <!-- Panel 2 --> */}
          <div
            className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2"
          >
            {/* <!-- Panel Image --> */}
            <div className="flex justify-center md:w-1/2">
              <img
                src="images/illustration-features-tab-2.svg"
                alt=""
                className="relative z-10"
              />
            </div>
            {/* <!-- Panel Content --> */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3
                className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left"
              >
                Quality Confirmed
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
              Our datacenter solutions feature unlimited bandwidth with no extra charges, blazing speeds, and easy integration. You can pick from different locations worldwide, so geo-blocking becomes a thing of the past. Every IP is reserved for you, so you can enjoy anonymous web scraping, SERP data gathering, and unrestricted content anywhere in the world.
              </p>
              <div className="mx-auto md:mx-0">
                <a
                  href="#"
                  className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >More Info</a
                >
              </div>
            </div>
          </div>

          {/* <!-- Panel 3 --> */}
          <div
            className="flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3"
          >
            {/* <!-- Panel Image --> */}
            <div className="flex justify-center md:w-1/2">
              <img
                src="images/illustration-features-tab-3.svg"
                alt=""
                className="relative z-10"
              />
            </div>
            {/* <!-- Panel Content --> */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3
                className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left"
              >
                Privacy Protected
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
              No business wants its employees to access inappropriate content via the company network. When using a proxy, a network administrator can easily control which devices can access the internet and even which web locations are available to employees. Our solutions enable you to block any undesirable content and websites, so you don't have to worry about employees wasting time..
              </p>
              <div className="mx-auto md:mx-0">
                <a
                  href="#"
                  className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >More Info</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
