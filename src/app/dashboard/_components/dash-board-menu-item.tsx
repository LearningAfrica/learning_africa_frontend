"use client";
import { useEffect, useRef, useState } from "react";
import { LucideChevronDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
export type DashboardMenuItemProps = {
  Icon: LucideIcon;
  name: string;
  showIcon?: boolean;
  iconSize?: number;
  href?: string;
  sub_items?: DashboardMenuItemProps[];
  toggleSidebar?: () => void;
} & {
  className?: string;
};
export function DashboardMenuItem(props: DashboardMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useRouter();
  const hasSubItems = props.sub_items && props.sub_items.length > 0;

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex items-center justify-start gap-4  w-full",
        props.className
      )}
      ref={wrapperRef}
    >
      {hasSubItems ? (
        <div
          className={cn("relative w-full", {
            "mb-2": isOpen,
          })}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(`flex items-center justify-between w-full gap-2`, {
              "mb-4": isOpen,
            })}
          >
            <div className={cn(`flex items-center justify-start gap-4 w-full`)}>
              <props.Icon size={props.iconSize || 20} />
              <span>{props.name}</span>
            </div>
            <LucideChevronDown
              size={props.iconSize || 20}
              className={`transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isOpen && (
            <div className="flex px-2 flex-col gap-2">
              {props.sub_items!.map((item) => (
                <DashboardMenuItem
                  key={item.name}
                  Icon={item.Icon}
                  name={item.name}
                  href={item.href}
                  iconSize={props.iconSize || 20}
                  sub_items={item.sub_items}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          href={props.href!}
          onClick={props.toggleSidebar}
          className={cn(
            `flex items-center justify-start gap-4  w-full p-1 sm:p-2 rounded transition-all duration-300 hover:bg-primary-pk border border-transparent hover:border-b hover:border-black`
          )}
        >
          <props.Icon size={props.iconSize || 20} />
          <span>{props.name}</span>
        </Link>
      )}
    </div>
  );
}
