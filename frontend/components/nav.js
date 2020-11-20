import React from "react";
import Link from "next/link";
import {getStrapiMedia} from "../lib/media";


const Nav = ({categories, global}) => {
    const backgroundImage = getStrapiMedia(global.defaultSeo.shareImage)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"
             style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
            <a className="navbar-brand" href="/">{global.siteName}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li key={"about"} className="nav-item active">
                        <Link as={`/about`} href={`/about`}>
                            <a className="nav-link">{"about".toUpperCase()}</a>
                        </Link>
                    </li>
                    {categories.map((category) => {
                        return (
                            <li key={category.id} className="nav-item active">
                                <Link as={`/category/${category.slug}`} href={`/category/${category.id}`}>
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
