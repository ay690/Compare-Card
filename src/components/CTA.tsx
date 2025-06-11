import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 trust-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Find Your Perfect Credit Card?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join thousands of users who found their ideal credit card with our
          AI-powered platform
        </p>

        <Button
          onClick={() => navigate("/compare")}
          className="
            bg-yellow-400 hover:bg-yellow-500 text-black font-semibold cursor-pointer px-8 py-4 
            rounded-xl shadow-lg
            transform-gpu hover:scale-105 
            transition-transform duration-300 ease-in-out
          "
        >
          Start Comparing Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
