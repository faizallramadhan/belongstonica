// Type definitions for the birthday website

export interface Photo {
  id: string;
  src: string;
  caption: string;
  memory?: string;
}

export interface Memory {
  id: string;
  image: string;
  caption: string;
  story: string;
}

export interface AnimationConfig {
  duration: number;
  delay: number;
  ease: string;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}
