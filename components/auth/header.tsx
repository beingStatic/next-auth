"use client";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-center">
      <h1 className="text-5xl font-medium">Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
