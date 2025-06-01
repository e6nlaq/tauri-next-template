"use client";
import { cn } from "@/lib/utils";
import { sourceCode } from "@/lib/css-font";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { commands } from "@/bindings";
import { message } from "@tauri-apps/plugin-dialog";

export default function Home() {
    const [name, setName] = useState("");

    async function greet() {
        const greetMessage = await commands.greet(name);
        await message(greetMessage, { title: "Greet" });
    }

    useEffect(() => {
        const setUserName = async () => {
            setName((await commands.whoami()).trim());
            console.log("Hello", await commands.whoami());
        };
        setUserName();
    }, []);

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={greet}>Greet</Button>
            </div>
        </div>
    );
}
