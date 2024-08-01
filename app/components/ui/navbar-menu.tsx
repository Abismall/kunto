/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.8,
  damping: 10,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-typography hover:opacity-[0.8]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] shadow-xl"
                style={{
                  background: "var(--color-secondary-dark)",
                }}
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full border border-transparent bg-primary shadow-input flex justify-center space-x-4 px-2 py-2">
      {children}
    </nav>
  );
};

export const PictureItem = ({
  title,
  onClick,
  src,
}: {
  title: string;
  onClick: () => void;
  src: string;
}) => {
  return (
    <button onClick={onClick} className="flex space-x-2">
      <Image
        src={src}
        width={80}
        height={80}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-typography hover:text-primary">
          {title}
        </h4>
      </div>
    </button>
  );
};
export const ComponentItem = ({
  title,
  onClick,
  Comp,
}: {
  title: string;
  onClick: () => void;
  Comp: React.JSX.Element;
}) => {
  return (
    <button onClick={onClick} className="flex space-x-2">
      {Comp}
      <div>
        <h4 className="text-xl font-bold mb-1 text-typography">{title}</h4>
      </div>
    </button>
  );
};

export const HoveredLink = ({ children, className, ...rest }: any) => {
  return (
    <Link {...rest} className={`text-typography ${className}`}>
      {children}
    </Link>
  );
};
export const HoveredButton = ({ children, className, ...rest }: any) => {
  return (
    <button {...rest} className={`text-typography ${className}`}>
      {children}
    </button>
  );
};
