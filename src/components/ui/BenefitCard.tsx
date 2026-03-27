import { type LucideIcon } from 'lucide-react'

interface BenefitCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function BenefitCard({ title, description, icon: Icon }: BenefitCardProps) {
  return (
    <div className="group p-6 bg-gradient-to-br from-[#0057B8] to-[#003865] rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-200">
      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-200">
        <Icon className="text-white" size={22} />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
