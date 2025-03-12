
import { Check } from "lucide-react";

const features = [
  {
    title: "Intuitive Design",
    description: "Clean and modern interface that puts user experience first",
  },
  {
    title: "Powerful Tools",
    description: "Advanced features to help you achieve your goals faster",
  },
  {
    title: "Smart Integration",
    description: "Seamlessly connects with your favorite tools and services",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the tools and features that will help you succeed
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
