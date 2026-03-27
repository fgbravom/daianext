import { CheckCircle2 } from 'lucide-react'

interface FeatureCardProps {
  text: string
}

export default function FeatureCard({ text }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#0057B8] to-[#003865] rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex-shrink-0 w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center mt-0.5">
        <CheckCircle2 className="text-white" size={14} />
      </div>
      <span className="text-white font-medium text-sm leading-relaxed">{text}</span>
    </div>
  )
}
