import React from "react";
import Link from "next/link";

const Nav = ({ categories, title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="/">{title}</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {categories.map((category) => {
            return (
              <li key={category.id} className="nav-item active">
                <Link as={`/category/${category.slug}`} href="/category/[id]">
                  <a className="nav-link">{category.name.toUpperCase()}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
