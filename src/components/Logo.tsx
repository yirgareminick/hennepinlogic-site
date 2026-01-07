interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 36 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b4a" />
          <stop offset="100%" stopColor="#e25538" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f2c14e" />
          <stop offset="100%" stopColor="#e5a83d" />
        </linearGradient>
      </defs>
      
      {/* Main circle */}
      <circle cx="18" cy="18" r="17" fill="url(#logoGradient)" />
      
      {/* Lightning bolt / signal icon - represents speed and communication */}
      <path
        d="M20 8L12 19h6l-2 9 8-11h-6l2-9z"
        fill="white"
        strokeLinejoin="round"
      />
      
      {/* Small accent dot */}
      <circle cx="27" cy="10" r="3" fill="url(#accentGradient)" />
    </svg>
  );
}

export function LogoMark({ className = "", size = 36 }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={size} />
      <span className="font-semibold text-foreground tracking-tight">
        Nexly
      </span>
    </div>
  );
}
