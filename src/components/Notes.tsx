import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Notes = ({ children }: Props) => {
  if (window.localStorage.getItem("WITH_NOTES") !== "true") {
    return null;
  }

  return <aside className="notes">{children}</aside>;
};
