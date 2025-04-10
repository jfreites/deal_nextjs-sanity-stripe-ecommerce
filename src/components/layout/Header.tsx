'use client'

import { logoutUser } from "@/actions/auth";
import { User } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderSearchBar from "./HeaderSearchBar";

const AnnouncementBar = () => {
    return (
        <div className="w-full bg-black py-2">
            <div className="container mx-auto flex items-center justify-center px-8">
                <span className="text-center text-sm font-medium tracking-wide text-white">
                    FREE SHIPPING ON ORDERS OVER $15 📦 FREE RETURNS
                </span>
            </div>
        </div>
    )
}

type HeaderProps = {
    user: Omit<User, 'passwordHash'> | null;
    categorySelector: React.ReactNode
}

const Header = ({ user, categorySelector }: HeaderProps) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [prevScrollY, setPrevScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrolledUp = currentScrollY < prevScrollY;
            
            if (scrolledUp) {
                setIsOpen(true);
            } else if (currentScrollY > 100) {
                setIsOpen(false);
            }

            setPrevScrollY(currentScrollY);
        }

        setPrevScrollY(window.scrollY);

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [prevScrollY])

  return (
    <header className="w-full sticky top-0 z-50">
        <div 
        className={`w-full transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
            <AnnouncementBar />

            <div className="w-full flex justify-between items-center py-3 sm:py-4 bg-white/70 shadow-sm border-b border-gray-100 backdrop-blur-sm">
                <div className="flex justify-between items-center container mx-auto px-8">
                    <div className="flex flex-1 justify-start items-center gap-4 sm:gap-6">
                        <button className="text-gray-700 hover:text-gray-900 md:hiden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <nav className="hidden md:flex gap-4 lg:gap-6 text-sm font-medium">
                            {/* <Link href="#" className="">
                                Shop
                            </Link>
                            <Link href="#" className="">
                                New Arrivals
                            </Link> */}
                            {categorySelector}
                            <Link href="#" className="">
                                Sale
                            </Link>
                        </nav>
                    </div>

                    <Link href="#" className="absolute left-1/2 -translate-x-1/2">
                        <span className="text-xl sm:text-2xl font-bold tracking-tight">DEAL</span>
                    </Link>

                    <div className="flex flex-1 justify-end items-center gap-2 sm:gap-4">
                        <HeaderSearchBar />

                        {user ?
                         ( 
                            <div className="flex items-center gap-2 sm:gap-4">
                                <span className="text-xs sm:text-sm text-gray-700 hidden md:block">{user.email}</span>
                                <Link href="/auth/sign-out" className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900" onClick={async (e) => {
                                    e.preventDefault();
                                    await logoutUser();
                                    router.refresh()
                                }}>
                                    Sign Out
                                </Link>
                            </div>
                         ) : (
                            <>
                                <Link href="/auth/sign-in" className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sign In
                                </Link>
                                <Link href="/auth/sign-up" className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sign Up
                                </Link>
                            </>
                        )}

                        <button className="text-gray-700 hover:text-gray-900 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] sm:text-xs font-medium rounded-full w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center">0</span>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header

