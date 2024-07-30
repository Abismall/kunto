/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  MenuItem,
  HoveredLink,
  ComponentItem,
  PictureItem,
} from "./navbar-menu";
import { changeTheme } from "@/lib/theme";
import OALogo from "./oa-logo";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [previous, setPrevious] = useState(0);
  const [logoVariant, setLogoVariant] = useState<"flat" | "circle">("circle");
  const [logoLocale, setLogoLocale] = useState<"fi" | "sve" | "en">(
    ["fi", "sve", "en"][Math.floor(Math.random() * 3)] as "fi" | "sve" | "en"
  );

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handler = () => {
      setDirection(window.scrollY > previous ? "down" : "up");
      setPrevious(window.scrollY);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [previous]);

  const handleMouseEnter = (item: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setActive(item);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActive(null);
    }, 300); // delay in milliseconds
  };

  return (
    <nav
      className={`navbar fixed top-0 z-50 w-full transition-transform duration-300 ${
        previous <= 0
          ? "translate-y-0"
          : direction === "up" && previous >= 0
            ? "translate-y-0"
            : "-translate-y-full"
      }`}
      style={{
        background:
          "linear-gradient(to right, var(--color-primary), var(--color-primary-dark))",
      }}
    >
      <div
        className={cn(
          "relative w-full flex justify-center items-center px-4 sm:px-6 lg:px-8",
          className
        )}
      >
        <p className="absolute left-4 text-2xl shadow-lg text-typography">
          Kuntoäijät
        </p>
        <Menu>
          <div
            onMouseEnter={() => handleMouseEnter("Navigointi")}
            onMouseLeave={handleMouseLeave}
          >
            <MenuItem setActive={setActive} active={active} item="Navigointi">
              <HoveredLink href="/">Etusivu</HoveredLink>
              <HoveredLink href="/dashboard">Hallintapaneeli</HoveredLink>
            </MenuItem>
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Themes")}
            onMouseLeave={handleMouseLeave}
          >
            <MenuItem setActive={setActive} active={active} item="Themes">
              <div className="flex flex-col">
                <PictureItem
                  title="Default theme"
                  onClick={() => changeTheme("")}
                  src="/theme-1-palette.png"
                />
                <PictureItem
                  title="Theme 1"
                  onClick={() => changeTheme("theme1")}
                  src="/theme-1-palette.png"
                />
                <PictureItem
                  title="Theme 2"
                  onClick={() => changeTheme("theme2")}
                  src="/theme-1-palette.png"
                />
                <PictureItem
                  title="Theme 3"
                  onClick={() => changeTheme("theme3")}
                  src="/theme-1-palette.png"
                />
              </div>
            </MenuItem>
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Logo")}
            onMouseLeave={handleMouseLeave}
          >
            <MenuItem setActive={setActive} active={active} item="Logo">
              <ComponentItem
                title={logoVariant === "circle" ? "Flat" : "Circle"}
                onClick={() =>
                  logoVariant === "circle"
                    ? (setLogoVariant("flat"),
                      setLogoLocale(
                        ["fi", "sve", "en"][Math.floor(Math.random() * 3)] as
                          | "fi"
                          | "sve"
                          | "en"
                      ))
                    : (setLogoVariant("circle"),
                      setLogoLocale(
                        ["fi", "sve", "en"][Math.floor(Math.random() * 3)] as
                          | "fi"
                          | "sve"
                          | "en"
                      ))
                }
                Comp={<OALogo variant={logoVariant} locale={logoLocale} />}
              />
            </MenuItem>
          </div>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
