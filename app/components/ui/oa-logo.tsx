import React from "react";
import Image from "next/image";
import { useTranslation } from "../../../lib/translation";

type OALogoProps = {
  variant: "flat" | "circle";
  locale: "fi" | "en" | "sve";
};

const OALogo: React.FC<OALogoProps> = ({ variant, locale }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className={`relative flex items-center justify-center ${
          variant === "circle" ? "rounded-full" : ""
        } shadow-lg bg-gray-50
          `}
        style={{
          width: "150px",
          height: "150px",
        }}
      >
        <Image
          src="/oa.svg"
          alt="OA Logo"
          width={120}
          height={120}
          className={`object-contain`}
        />
        <div
          className={`absolute bottom-0 w-full bg-gray-700 text-white text-center py-1`}
        >
          {useTranslation(locale, "certifiedInstructor")}
        </div>
      </div>
    </div>
  );
};

export default OALogo;
