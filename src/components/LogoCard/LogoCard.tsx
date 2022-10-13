import React, { ReactNode } from "react";

import "./logo-card.scss";

const Wrapper = ({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className: string;
  href?: string;
}) =>
  href ? (
    <a className={className} href={href} target="_blank">
      {children}
    </a>
  ) : (
    <span className={className}>{children}</span>
  );

export const LogoCard = ({
  href,
  label,
  logoUrl,
}: {
  href?: string;
  label: string;
  logoUrl: URL;
}) => (
  <Wrapper
    className="logo-card items-center flex flex-col text-inherit hover:no-underline"
    href={href}
  >
    <div className="logo-card__image-wrapper mb-2 p-2 ring-1 ring-slate-900/5 rounded-xl shadow-md dark:bg-white md:p-4">
      <img
        alt={`Logo ${label}`}
        className="h-14 w-14"
        src={logoUrl.toString()}
      />
    </div>
    <div className="text-sm">{label}</div>
  </Wrapper>
);
