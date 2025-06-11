import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <HeroSection onGetStarted={() => navigate("/compare")} />
    </div>
  );
};

export default Index;
