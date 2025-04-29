import { UserProps } from "@/models/user";
import clsx from "clsx";
import { FC } from "react";

interface RatingProps {
  avis: {
    note: number;
    commentaire: string;
    utilisateur: UserProps;
  }[];
  className?: string;
}

export const Rating: FC<RatingProps> = ({ avis, className }) => {
  let moyenne = avis.length > 0 ? avis.reduce((sum, curr) => sum + curr.note, 0) / avis.length : 0;

  return (
    <div className={clsx("flex items-center", className)}>
      {Array.from({ length: 5 }, (_, i) => {
        const percentage = Math.min(Math.max(moyenne - i, 0), 1) * 100;

        return (
          <span
            key={i}
            className="relative"
            style={{
              background: `linear-gradient(to right, #fbbf24 ${percentage}%, #d1d5db ${percentage}%)`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};
