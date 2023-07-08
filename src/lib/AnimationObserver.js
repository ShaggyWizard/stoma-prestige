"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

export default function AnimationObserver() {
    let [observer, setObserver] = useState(null);
    const pathname = usePathname()

    useEffect(() => {
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach(entry => {
                //console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
                else {
                    //entry.target.classList.remove("show");
                }
            });
        })
        setObserver(observer);
        const animateElements = document.querySelectorAll(".animate");

        animateElements.forEach((el) => {
            observer?.observe(el)
        })
    }, [])

    useEffect(() => {
        const animateElements = document.querySelectorAll(".animate");

        animateElements.forEach((el) => {
            observer?.observe(el)
        })
    }, [pathname])

}