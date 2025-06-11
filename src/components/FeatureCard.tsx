import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="banking-card text-center transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2C3E50] to-[#34495E] flex items-center justify-center mx-auto mb-6">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-banking-text mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
