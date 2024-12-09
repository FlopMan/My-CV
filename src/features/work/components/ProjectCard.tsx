"use client";
import Link from "next/link";

import Image, { IImageProps } from "@/components/base/Image";
import TagItem from "@/components/TagItem";
import { cn } from "@/lib/utils";
import { ItemProject } from "@/types/project";

interface Props {
  item: ItemProject;
  className?: string;
  imageProps?: Partial<IImageProps>;
}

function ProjectCard(props: Props) {
  const { item, className, imageProps } = props;

  return (
    <div className={className}>
      <Link href={`work/${item.ID}`} className="block">
        <Image
          src={item.THUMBNAIL}
          alt={item.TITLE}
          className={cn("object-cover", imageProps?.className)}
          {...imageProps}
        />
        <div
          className={cn(
            "mt-4 text-title-h4 max-lg:text-md-title-h4",
            "light:text-[#272626]",
            "dark:text-white",
            "green:text-white"
          )}
        >
          {item.TITLE}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {/* {technologies.map((item) => (
            <TagItem key={item} label={item} />
          ))} */}
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
