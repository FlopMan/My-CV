"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DropItem() {
  return (
    <Select>
      <SelectTrigger className="text-[#121216] text-[0.97222rem] font-medium leading-[1.3] w-[8.88889rem] h-[2.5rem] p-[0.83333rem_0.55556rem_0.83333rem_1.11111rem] rounded-[0.41667rem] border-[1px] border-solid border-[#DEDEDF] bg-white">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}
