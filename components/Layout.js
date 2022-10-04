import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"


function Layout({title, keywords, description, children}) {
  return (

    <div>
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
        </Head>
        <Navbar/>
        {children}
        <Footer/>

    </div>
 

  )
}

Layout.defaultProps = {
    title:'Sockit2me - Find the best proxy deals',
    description: 'Sockit2me is a proxy marketplace where you can find the best proxy deals',
    keywords: 'Sockit2me is one of the best and cheapest proxy service provider with 2M+ residential proxies and many other proxy types☑️! Start using it NOW!'

}

export default Layout