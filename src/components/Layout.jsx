import Head from "./Head";
import Footer from "./Footer";
import styles from '../assets/styles/Layout.module.css'
function Layout(props) {
    const {children} = props
    return ( <>
        <Head></Head>
        <section className={styles.layoutContenedor}>
        {children}
        </section>
        <Footer></Footer>
    </> );
}

export default Layout;