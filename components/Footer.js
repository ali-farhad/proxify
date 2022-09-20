import { GiArrowsShield } from "react-icons/gi";

function Footer() {
  return (
    <div>
          <footer className="py-16 bg-veryDarkBlue">
      {/* <!-- Footer Flex Container --> */}
      <div
        className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0"
      >
        {/* <!-- Logo/Menu Container --> */}
        <div
          className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue"
        >
          {/* <img src="images/logo-bookmark-footer.svg" alt="" className="mb-1" /> */}
          <div className="z-30 flex items-center justify-between space-x-4">
          {/* <img src="images/logo-bookmark.svg" id="logo" /> */}
          <span className="text-3xl text-white"><GiArrowsShield/></span> <span className="font-bold text-1xl uppercase tracking-wider">Proxify</span>
        </div>


          <a href="#features" className="uppercase hover:text-softRed">Features</a>
          <a href="#pricing" className="uppercase hover:text-softRed">Pricing</a>
        </div>

        {/* <!-- Social Container --> */}
        <div className="flex space-x-10">
          <a href="#">
            <img src="images/icon-facebook.svg" alt="" className="h-6 ficon" />
          </a>
          <a href="#">
            <img src="images/icon-twitter.svg" alt="" className="h-6 ficon" />
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer