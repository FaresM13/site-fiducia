
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '',
  icon 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-[#F6C453] text-[#0E3A5B] hover:bg-[#f5bf3d] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#0E3A5B] text-white hover:bg-[#1a4a6b] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#F6C453] text-[#0E3A5B] hover:bg-[#F6C453] hover:text-[#0E3A5B]'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
