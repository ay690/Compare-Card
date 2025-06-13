import { useNavigate } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Lazy-load major sections
const HeroSection = lazy(() => import("@/components/HeroSection"));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const TopCardsSection = lazy(() => import("@/components/TopCardSection"));
const CTASection = lazy(() => import("@/components/CTA"));

const SkeletonBlock = ({ className = "" }: { className?: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
        <Header />
        <div className="flex-1 p-4 space-y-6">
          <SkeletonBlock className="h-64 w-full" />
          <SkeletonBlock className="h-96 w-full" />
          <SkeletonBlock className="h-80 w-full" />
          <SkeletonBlock className="h-64 w-full" />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <Suspense fallback={<SkeletonBlock className="h-64 w-full mb-8" />}>
        <HeroSection onGetStarted={() => navigate("/compare")} />
      </Suspense>
      <Suspense fallback={<SkeletonBlock className="h-96 w-full mb-8" />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<SkeletonBlock className="h-80 w-full mb-8" />}>
        <TopCardsSection />
      </Suspense>
      <Suspense fallback={<SkeletonBlock className="h-64 w-full mb-8" />}>
        <CTASection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
