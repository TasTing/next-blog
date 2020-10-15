import Nav from "./nav";

const Layout = ({ children, categories, seo, title }) => (
  <>
    <Nav categories={categories} title={title} />
    {children}
  </>
);

export default Layout;
