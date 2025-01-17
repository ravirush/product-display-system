"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";

const links = [
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "ProductList",
        path: "/productList"
    },
    {
        title: "AddProduct",
        path: "/addProduct"
    }
];

const Links = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title} />
                )))}
            </div>
            <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)}/>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};
  
export default Links;