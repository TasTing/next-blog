import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children, categories, seo, title }) => (
  <>
    <Nav categories={categories} title={title} />
    {children}
    <Footer/>
  </>
);

export default Layout;
