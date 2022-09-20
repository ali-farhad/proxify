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
    title:'Proxify - Find the best proxy deals',
    description: 'Proxify is a proxy marketplace where you can find the best proxy deals',
    keywords: 'Proxify is one of the best and cheapest proxy service provider with 2M+ residential proxies and many other proxy types☑️! Start using it NOW!'

}

export default Layout