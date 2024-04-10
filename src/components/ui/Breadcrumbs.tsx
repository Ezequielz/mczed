'use client'

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

export const Breadcrumbs = () => {

    const path = usePathname();   
    const breadcrumbs = path?.split('/').filter(Boolean);
    let pathName = '';

    return (
        <div className="w-full text-left">
            <nav aria-label="breadcrumb" className="block w-full">
                <ol className="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 ">
                    {
                        breadcrumbs.map((breadcrumb, i) => {
                            
                            pathName += `/${breadcrumb}`;
                            
                            return (

                                <li key={i} className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
                                    <Link href={pathName} className={
                                        clsx(
                                            "capitalize opacity-50",
                                            i === breadcrumbs.length - 1 && 'opacity-100 font-medium text-blue-gray-900 transition-colors hover:text-pink-500'
                                        )
                                    }>
                                        {breadcrumb}
                                    </Link>
                                    {
                                        i !== breadcrumbs.length - 1 && (
                                            <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
                                                <IoIosArrowForward />
                                            </span>

                                        )
                                    }
                                </li>

                            )
                        })
                    }

                </ol>
            </nav>
        </div>
    )
}
