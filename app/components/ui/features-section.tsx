import { cn } from "@/lib/utils";
import {
  FaDumbbell,
  FaRunning,
  FaAppleAlt,
  FaPrayingHands,
} from "react-icons/fa";

const cards2 = [
  {
    description: "Henkilökohtainen treeniohjelma 8 viikkoa xx€",
    title: "Henkilökohtainen treeniohjelma",
    icon: <FaDumbbell className="text-primary text-6xl mt-4 mb-4" />,
    ctaLink: "#",
    content: () => (
      <p>
        Sisältää kaksi ohjattua treeniä missä liikkeet käydään lävitse (Hintaan
        lisätään valitun salin käyntimaksut). Ohjelmaa muokataan etenemisen
        mukaan.
      </p>
    ),
  },
  {
    description: "Ohjattu treeni xx€/h",
    title: "Ohjattu treeni",
    icon: <FaRunning className="text-primary text-6xl mt-4 mb-4" />,
    ctaLink: "#",
    content: () => <p>Hintaan lisätään valitun salin käyntimaksut.</p>,
  },
  {
    description: "Henkilökohtainen ravinto-ohjelma 12 viikkoa xx€",
    title: "Henkilökohtainen ravinto-ohjelma",
    icon: <FaAppleAlt className="text-primary text-6xl mt-4 mb-4" />,
    ctaLink: "#",
    content: () => (
      <p>Sisältää kahden viikon välein ohjelman muokkaamisen tarvittaessa.</p>
    ),
  },
  {
    description: "Joogan perusteet 6 viikkoa xx€",
    title: "Joogan perusteet",
    icon: <FaPrayingHands className="text-primary text-6xl mt-4 mb-4" />,
    ctaLink: "#",
    content: () => (
      <p>
        Tämä kurssi johdattaa osallistujat joogan maailmaan, keskittyen
        perusliikkeisiin ja hengitystekniikoihin.
      </p>
    ),
  },
];

export default function FeatureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {cards2.map((card, index) => (
        <Feature key={card.title} {...card} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-neutral-300 py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l border-neutral-300",
        index < 4 && "lg:border-b border-neutral-300"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-secondary to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-secondary to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-dark">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-[var(--color-primary)] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-dark">
          {title}
        </span>
      </div>
      <p className="text-sm text-dark max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
