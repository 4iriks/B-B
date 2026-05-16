import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  icon,
  variant = "primary",
  external = false
}: ButtonLinkProps) {
  const className = `button button--${variant}`;

  if (external) {
    return (
      <a className={className} href={href} rel="noreferrer" target="_blank">
        <span>{children}</span>
        {icon}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      <span>{children}</span>
      {icon}
    </Link>
  );
}
