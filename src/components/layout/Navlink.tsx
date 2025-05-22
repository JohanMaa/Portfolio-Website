"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    // Jika internal section link (#about, #contact, dll)
    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.replace("#", "");

      if (pathname === "/") {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/#${sectionId}`);
      }

      onClick?.();
    }

    // Jika klik Home ("/") dari dalam halaman "/" sendiri
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      onClick?.();
    }
  };

  if (href.startsWith("#") || (href === "/" && pathname === "/")) {
    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
