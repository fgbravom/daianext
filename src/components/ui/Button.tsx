import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const isPrimary = variant === 'primary'
    return (
      <button
        className={cn(
          'relative overflow-hidden inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-gradient-to-r from-[#0057B8] to-[#003865] hover:from-[#003865] hover:to-[#0057B8] text-white transform hover:scale-105 shadow-lg hover:shadow-xl focus-visible:ring-[#0057B8] group/btn':
              isPrimary,
            'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500':
              variant === 'secondary',
            'border border-[#0057B8] text-[#0057B8] hover:bg-blue-50 focus-visible:ring-[#0057B8]':
              variant === 'outline',
            'text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500':
              variant === 'ghost',
            'bg-white text-gray-900 hover:bg-gray-100 focus-visible:ring-gray-500':
              variant === 'white',
          },
          {
            'h-12 px-4 text-sm': size === 'sm',
            'h-14 px-6': size === 'md',
            'h-16 px-8 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {isPrimary ? (
          <>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-out pointer-events-none" />
          </>
        ) : children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button