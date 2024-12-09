/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import * as React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAxiosSWR } from "@/hooks/use-axios-swr";
import ProjectService from "@/services/project";
import Link from "next/link";
import { ItemProject } from "@/types/project";
import { SLUG_USER } from "@/utils/constants";

export default function ProjectsSearch() {
  //
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredProjects, setFilteredProjects] = React.useState<ItemProject[]>(
    []
  );
  console.log("🚀 ~ ProjectsSearch ~ filteredProjects:", filteredProjects);

  const { getAllProject } = ProjectService;

  const { data: dataProjects, mutate: mutateProjects }: any = useAxiosSWR(
    "/projects",
    () => getAllProject({ p: 1, limit: 10, user_slug: SLUG_USER })
  );
  console.log("🚀 ~ ProjectsSearch ~ dataProjects:", dataProjects);

  React.useEffect(() => {
    const filtered = dataProjects?.ITEMS?.filter(
      (project: any) =>
        project.TITLE.toLowerCase().includes(searchQuery.toLowerCase())
      // ||
      // tour.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("🚀 ~ React.useEffect ~ filtered:", filtered);
    setFilteredProjects(filtered);
  }, [searchQuery, dataProjects]);

  return (
    <div className="w-full mx-auto p-6">
      <div className="flex items-center justify-between mb-[2rem]">
        <h2 className="text-lg font-semibold">Tìm kiếm dự án</h2>
        <Link target="_blank" href={"/projects"}>
          <Button variant={"secondary"}>Danh sách dự án</Button>
        </Link>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
        <Input
          placeholder="Tìm kiếm..."
          className="pl-10 bg-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="border rounded-lg">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="hover:bg-transparent flex items-centers">
              <TableHead className="flex items-center">Project</TableHead>
              <TableHead className="flex items-center justify-center">
                Technologies
              </TableHead>
              <TableHead className="flex items-center justify-center">
                Delete
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full ">
            {Array.isArray(filteredProjects) &&
              filteredProjects?.map((project: ItemProject, index: number) => (
                <TableRow
                  key={project.ID}
                  className="flex items-centers hover:bg-transparent"
                >
                  <TableCell>
                    <div className="flex gap-4 flex-col">
                      <Image
                        src={project.THUMBNAIL || "https://placehold.co/80x60"}
                        alt={project.TITLE}
                        width={80}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="font-medium line-clamp-1">
                        {project.TITLE}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>HTML, CSS, JS</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
