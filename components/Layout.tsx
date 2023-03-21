import Header from "./Menu";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
    children: string | JSX.Element
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Head><script src="https://kit.fontawesome.com/71157948d4.js" crossOrigin="anonymous"></script></Head>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;