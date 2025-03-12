
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto animate-fade-down">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Transform Your Vision Into Reality
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Experience the perfect blend of design and functionality. Create something extraordinary today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group" size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
