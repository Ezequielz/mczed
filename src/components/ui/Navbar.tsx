import Image from "next/image"
import Link from "next/link"

import { type INavbar } from "@/interfaces"

export const Navbar = ({ topNav, navItems, img, btn }: INavbar) => {
    return (
        <nav className="px-36  border-b-2 border-slate-200">
            <div className=" flex items-center gap-3 px-3">


                <Image
                    src={img.src}
                    width={img.width ?? 90}
                    height={img.height ?? 90}
                    alt={img.alt}


                />


                <div className="w-full pb-3">

                    <div className="flex justify-between items-center w-full p-2 text-xs">
                        <ul className="flex gap-4  ">
                            {
                                topNav.map(item => (
                                    <li key={item.name}>
                                        <Link href={item.href}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))

                            }
                        </ul>

                        <Link
                            href={btn.href}
                            className="bg-[#ffbc0d]  -2 flex gap-2 justify-center items-center px-4 py-2">
                            {
                                btn.icon && (
                                    <Image
                                        src={'/imgs/phone.png'}
                                        width={25}
                                        height={25}
                                        alt="logo"

                                    />
                                )
                            }

                            {btn.text}

                        </Link>


                    </div>

                    <ul className="flex gap-4 p-2 text-sm">
                        {
                            navItems.map(item => (
                                <li key={item.name}>
                                    <Link href={item.href}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>



            </div>

        </nav>
    )
}
