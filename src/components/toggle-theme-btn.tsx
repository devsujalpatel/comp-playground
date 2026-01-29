"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export const ToggleThemeBtn = ({className}: {className?: string}) => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button onClick={handleClick} className={className}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
