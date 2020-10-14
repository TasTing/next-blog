import Nav from "./nav";

const Layout = ({ children, categories, seo, webTitle }) => (
  <>
    <Nav categories={categories} webTitle={webTitle} />
    {children}
  </>
);

export default Layout;
