'use client'
import { useEffect, useRef, useState } from "react"
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NightMode = () => {
    const toggle = useRef(null)

    useEffect(() => {
        const savedMode = localStorage.getItem("nightMode")
        if (savedMode == "true") {
            document.body.setAttribute("data-theme", "light")
            toggle.current.checked = true
        } else {
            document.body.setAttribute("data-theme", "dark")
            toggle.current.checked = false
        }
    }, [])

    return (
        <label className="swap swap-rotate flex items-center relative">
            {/* this hidden checkbox controls the state */}
            <input ref={toggle} onChange={(e) => {
                if (e.target.checked == true) {
                    document.body.setAttribute("data-theme", "light")
                    localStorage.setItem("nightMode", "true")
                } else {
                    document.body.setAttribute("data-theme", "dark")
                    localStorage.setItem("nightMode", "false")
                }
            }} type="checkbox" />

            {/* sun icon */}
            <BsFillSunFill className="swap-on text-3xl text-orange-500 absolute left-0"/>

            {/* moon icon */}
            <BsFillMoonStarsFill className="swap-off text-2xl text-slate-500 absolute left-0"/>
        </label>
    )
}

export default NightMode