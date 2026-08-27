import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-sage-600 text-cream-50 hover:bg-sage-700 shadow-sm hover:shadow-md',
  secondary:
    'bg-clay-500 text-cream-50 hover:bg-clay-600 shadow-sm hover:shadow-md',
  outline:
    'border-2 border-sage-600 text-sage-700 hover:bg-sage-50 bg-transparent',
  ghost: 'text-sage-700 hover:bg-sage-100',
};

const sizeClasses: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
