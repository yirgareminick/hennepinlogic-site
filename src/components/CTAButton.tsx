import Link from 'next/link'

interface CTAButtonProps {
  href?: string
  external?: boolean
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function CTAButton({
  href = 'https://calendly.com/hennepinlogic-sales',
  external = true,
  variant = 'primary',
  children,
  className = '',
}: CTAButtonProps) {
  const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const combinedClass = `${buttonClass} ${className}`

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClass}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={combinedClass}>
      {children}
    </Link>
  )
}
