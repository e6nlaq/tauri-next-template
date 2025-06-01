"use client"

import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"
import { sourceCode } from "@/lib/css-font"

export function Nav() {
    return (
        <>
            <div className="flex items-center justify-center w-screen pt-4 px-4">
                <p className={cn("text-lg", sourceCode)}>
                    <Link href="/">
                        <span className="font-bold">Sitename</span>
                    </Link>
                </p>

                <div className="ml-auto">
                    <ModeToggle />
                </div>
            </div>
        </>
    )
}
