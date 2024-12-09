"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const languages = [
  { id: "all", name: "All" },
  { id: "germany", name: "Germany" },
  { id: "canada", name: "Canada" },
  { id: "spain", name: "Spain" },
  { id: "australia", name: "Australia" },
  { id: "japan", name: "Japan" },
  { id: "france", name: "France" },
  { id: "korea", name: "Korea" },
];

const articles = [
  {
    id: 1,
    title:
      "Opening of Online German Course 32: 'Sharing a Common Ideal, Towards Success'",
    description:
      "Among the global study abroad destinations, Singapore stands out as a rich, multicultural environment...",
    image: "/placeholder.svg?height=200&width=400",
    category: "Language Training",
    date: "24/11/2024",
  },
  {
    id: 2,
    title: "Korean Language Course KH501",
    description:
      "Among the global study abroad destinations, Singapore stands out as a rich, multicultural environment...",
    image: "/placeholder.svg?height=200&width=400",
    category: "Language Training",
    date: "24/11/2024",
  },
  {
    id: 3,
    title: "German Language Course 24F23",
    description:
      "Among the global study abroad destinations, Singapore stands out as a rich, multicultural environment...",
    image: "/placeholder.svg?height=200&width=400",
    category: "Language Training",
    date: "24/11/2024",
  },
];

export default function EIResponsive() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="#" className="hover:text-primary">
          Services
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>Language Training</span>
      </nav>

      {/* Language selector */}
      <ScrollArea className="w-full whitespace-nowrap mb-8">
        <div className="flex space-x-4">
          {languages.map((language) => (
            <button
              key={language.id}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-primary data-[state=active]:text-primary"
            >
              {language.name}
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Featured Articles Title */}
      <h1 className="text-2xl font-bold mb-6">Featured articles</h1>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.id} className="overflow-hidden">
            <div className="aspect-[2/1] relative">
              <Image
                src={article.image}
                alt="asd"
                className="object-cover w-full h-full"
                fill
              />
            </div>
            <CardHeader className="p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <CardTitle className="text-lg leading-tight mb-2">
                {article.title}
              </CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Link
                href="#"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                See More
                <ChevronRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
