"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
  children: React.ReactNode;
};

export function DialogProvider({ open, setOpen, className, children }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger></DialogTrigger>
      <DialogContent className={cn("!p-0 bg-white", className)}>
        {children}
      </DialogContent>
    </Dialog>
  );
}
