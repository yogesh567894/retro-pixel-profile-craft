
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen orange-bg">
      <div className="max-w-[800px] mx-auto p-4 space-y-8">
        
        {/* Header Section */}
        <div className="pixel-border cream-bg p-6 flex items-center gap-6">
          <div className="w-24 h-24 rounded-full border-4 border-black overflow-hidden flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Aniketh Menon Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="pixel-font text-3xl font-bold text-black mb-2">ANIKETH MENON</h1>
            <p className="pixel-font text-lg font-medium text-black mb-3">Electronics and Communication</p>
            <p className="pixel-font text-sm text-black leading-relaxed">
              Final-year student in Electronics and Communication with a passion for web design and AI, 
              aiming to bring new ideas projects that merge technology with creative practical solutions for real-world problems.
            </p>
          </div>
        </div>

        {/* Skills & Tools Section */}
        <div>
          <h2 className="pixel-font text-2xl font-bold text-black mb-6">SKILLS & TOOLS</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="pixel-border cream-bg p-4">
              <h3 className="pixel-font text-lg font-semibold text-black">Web Design</h3>
            </div>
            <div className="pixel-border cream-bg p-4">
              <h3 className="pixel-font text-lg font-semibold text-black">AI / ML</h3>
            </div>
            <div className="pixel-border cream-bg p-4">
              <h3 className="pixel-font text-lg font-semibold text-black">Electronics</h3>
            </div>
            <div className="pixel-border cream-bg p-4">
              <h3 className="pixel-font text-lg font-semibold text-black">UI/UX</h3>
            </div>
          </div>
          <div className="pixel-border cream-bg p-4">
            <p className="pixel-font text-sm font-medium text-black mb-2">Typing Speed</p>
            <div className="progress-bar mb-2"></div>
            <p className="pixel-font text-lg font-bold text-black text-center">90 WPM</p>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="pixel-font text-2xl font-bold text-black mb-6">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="pixel-border cream-bg p-6">
              <h3 className="pixel-font text-xl font-bold text-black mb-3">Smart Pesticide Spreader</h3>
              <p className="pixel-font text-sm text-black mb-4 leading-relaxed">
                An automated pesticide spreader system designed to optimize agricultural efficiency 
                while minimizing environmental impact through precise application.
              </p>
              <Button className="pixel-font bg-black text-orange-400 border-2 border-black hover:bg-gray-900 h-12 px-6">
                View Details
              </Button>
            </div>
            <div className="pixel-border cream-bg p-6">
              <h3 className="pixel-font text-xl font-bold text-black mb-3">Chatting</h3>
              <p className="pixel-font text-sm text-black mb-4 leading-relaxed">
                Real-time chat application with modern UI/UX design and seamless communication features.
              </p>
              <Button className="pixel-font bg-black text-orange-400 border-2 border-black hover:bg-gray-900 h-12 px-6">
                View Details
              </Button>
            </div>
          </div>
        </div>

        {/* Design Vault Section */}
        <div>
          <h2 className="pixel-font text-2xl font-bold text-black mb-6">DESIGN VAULT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="pixel-border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
                alt="Design work showcase"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="pixel-border overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
                alt="Development setup"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="pixel-border bg-black p-8 text-center">
          <h2 className="pixel-font text-2xl font-bold text-white mb-4">RESUME</h2>
          <p className="pixel-font text-lg text-white mb-6">
            Want to see more about my qualifications and experience?
          </p>
          <Button className="pixel-font bg-orange-400 text-black border-2 border-orange-400 hover:bg-orange-500 h-12 px-8">
            Download Resume
          </Button>
        </div>

        {/* Contact Section */}
        <div className="pixel-border bg-black p-8">
          <h2 className="pixel-font text-2xl font-bold text-white mb-6 text-center">CONTACT</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button className="pixel-font bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-12 px-6 flex items-center gap-2">
              <Mail size={20} />
              anikethmenon@example.com
            </Button>
            <Button className="pixel-font bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-12 px-6 flex items-center gap-2">
              <Phone size={20} />
              +91 9876543210
            </Button>
          </div>
          <p className="pixel-font text-sm text-white text-center">
            ANIKETH MENON | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
