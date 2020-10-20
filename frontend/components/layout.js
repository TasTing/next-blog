import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children, categories, seo, global }) => (
  <>
    <Nav categories={categories} title={global.siteName} />
    {children}
    <Footer global={global} categories={categories}/>
  </>
);

export default Layout;
