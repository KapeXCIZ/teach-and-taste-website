'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { cn } from "@/lib/utils";

export default function CustomLink({ children, href = "", buttonClassName = "", linkClassName = "", variant }) {
    const pathName = usePathname();
    return (
        <Link href={href} className={cn("w-fit", linkClassName)}><Button active={pathName === href} className={buttonClassName} variant={variant}>{children}</Button></Link>
    );
};
