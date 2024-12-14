"use client";

import Link from "next/link";

import { Theme } from "@/lib/constant";

const templates = [
    {
        link: Theme.DESIGNER1,
        name: "Designer style 1",
    },
    {
        link: Theme.DESIGNER2,
        name: "Designer style 2",
    },
    {
        link: Theme.DESIGNER3,
        name: "Designer style 3",
    },
];

export default function Index() {
    return (
        <div className="flex flex-col gap-4 items-center mt-40">
            {templates.map((item) => (
                <Link
                    key={item.link}
                    href={`/home/?theme=${item.link}`}
                    className="px-2 py-1 bg-blue-400 hover:bg-blue-500 rounded-md"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(`/home/?theme=${item.link}`, "_blank");
                    }}
                    target="_blank"
                >
                    {item.name}
                </Link>
            ))}
        </div>
    );
}
