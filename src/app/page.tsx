"use client";
import { cn } from "@/lib/utils";
import { sourceCode } from "@/lib/css-font";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { commands } from "@/bindings";

export default function Home() {
    const [name, setName] = useState("");
    const [greet, setGreet] = useState("");

    async function getGreet() {
        setGreet(await commands.greet(name));
    }

    return (
        <div className="flex flex-col gap-y-16 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <TypingAnimation
                    className={cn(
                        "font-bold lg:text-5xl md:text-4xl text-2xl break-words",
                        sourceCode,
                    )}>
                    Welcome to Tauri + Next.js!
                </TypingAnimation>
                <p className={cn("lg:text-sm text-xs", sourceCode)}>
                    This is working on Tauri, Next.js, TypeScript and shadcn/ui.
                </p>
            </div>

            <div className="flex gap-x-2">
                <Input
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={getGreet}>Greet</Button>
            </div>
            <p>{greet}</p>
        </div>
    );
}
