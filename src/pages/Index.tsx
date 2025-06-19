
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Trophy, Award, Star, Calendar, Building } from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <div className="max-w-6xl mx-auto p-4 space-y-12">
        
        {/* Enhanced Header Section */}
        <section id="home" className="pt-20">
          <div className="pixel-border-enhanced cream-bg p-8 flex flex-col lg:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full border-4 border-black overflow-hidden flex-shrink-0 glow-effect">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Yogeshwaran V Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="pixel-font text-4xl lg:text-5xl font-bold text-black mb-2 typing-animation">YOGESHWARAN V</h1>
              <p className="pixel-font text-xl font-medium text-black mb-2">Computer Science & Engineering Student</p>
              
              {/* AFK Status */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="pixel-font text-sm text-black font-semibold">AFK</span>
              </div>
              
              <p className="pixel-font text-base text-black mb-4 flex items-center justify-center lg:justify-start gap-2">
                <MapPin size={16} />
                Chennai, India
              </p>
              
              {/* Horizontal Divider */}
              <div className="w-full h-1 bg-black mb-4"></div>
              
              <p className="pixel-font text-sm text-black leading-relaxed mb-6">
                Final-year B.Tech student in Computer Science & Engineering with a passion for web development and AI, 
                aiming to bring innovative ideas and projects that merge technology with creative practical solutions for real-world problems.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button className="pixel-font bg-black text-orange-400 border-2 border-black hover:bg-gray-900 h-12 px-6 flex items-center gap-2">
                  <Github size={20} />
                  GitHub
                </Button>
                <Button className="pixel-font bg-blue-600 text-white border-2 border-black hover:bg-blue-700 h-12 px-6 flex items-center gap-2">
                  <Linkedin size={20} />
                  LinkedIn
                </Button>
                <Button className="pixel-font bg-orange-500 text-white border-2 border-black hover:bg-orange-600 h-12 px-6 flex items-center gap-2">
                  <Mail size={20} />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skills & Tools Section */}
        <section id="skills">
          <h2 className="pixel-font text-3xl font-bold text-black mb-8 underline-animation">SKILLS & TOOLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="pixel-border-enhanced cream-bg p-6 hover:scale-105 transition-transform">
              <h3 className="pixel-font text-lg font-semibold text-black mb-3">Web Development</h3>
              <div className="flex flex-wrap gap-1">
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">PHP</span>
              </div>
            </div>
            <div className="pixel-border-enhanced cream-bg p-6 hover:scale-105 transition-transform">
              <h3 className="pixel-font text-lg font-semibold text-black mb-3">AI / ML</h3>
              <div className="flex flex-wrap gap-1">
                <span className="tech-badge">TensorFlow</span>
                <span className="tech-badge">CNNs</span>
                <span className="tech-badge">Computer Vision</span>
                <span className="tech-badge">LSTM</span>
              </div>
            </div>
            <div className="pixel-border-enhanced cream-bg p-6 hover:scale-105 transition-transform">
              <h3 className="pixel-font text-lg font-semibold text-black mb-3">Mobile Development</h3>
              <div className="flex flex-wrap gap-1">
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Expo</span>
              </div>
            </div>
            <div className="pixel-border-enhanced cream-bg p-6 hover:scale-105 transition-transform">
              <h3 className="pixel-font text-lg font-semibold text-black mb-3">DevOps</h3>
              <div className="flex flex-wrap gap-1">
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">Kubernetes</span>
                <span className="tech-badge">Git</span>
                <span className="tech-badge">Apache</span>
              </div>
            </div>
            <div className="pixel-border-enhanced cream-bg p-6 hover:scale-105 transition-transform">
              <h3 className="pixel-font text-lg font-semibold text-black mb-3">Databases</h3>
              <div className="flex flex-wrap gap-1">
                <span className="tech-badge">MySQL</span>
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">MongoDB</span>
              </div>
            </div>
            <div className="pixel-border-enhanced cream-bg p-6 hover:scale-105 transition-transform">
              <h3 className="pixel-font text-lg font-semibold text-black mb-3">Languages</h3>
              <div className="flex flex-wrap gap-1">
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Java</span>
                <span className="tech-badge">HTML5</span>
                <span className="tech-badge">CSS3</span>
              </div>
            </div>
          </div>
          <div className="pixel-border-enhanced cream-bg p-6">
            <p className="pixel-font text-base font-medium text-black mb-4">Pro Typing Speed</p>
            <div className="progress-bar-enhanced mb-4"></div>
            <p className="pixel-font text-2xl font-bold text-black text-center">90 WPM</p>
          </div>
        </section>

        {/* Key Achievements Section */}
        <section id="achievements">
          <h2 className="pixel-font text-3xl font-bold text-black mb-8 underline-animation">KEY ACHIEVEMENTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="achievement-card">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="text-yellow-500" size={24} />
                <h3 className="pixel-font text-lg font-bold text-black">Top 5 Finalist</h3>
              </div>
              <p className="pixel-font text-sm text-black">Guidewire DEVTrails 2025 (739 teams, 3,002 participants)</p>
            </div>
            <div className="achievement-card">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-orange-500" size={24} />
                <h3 className="pixel-font text-lg font-bold text-black">3rd Place</h3>
              </div>
              <p className="pixel-font text-sm text-black">CodeFest 2025: Remote Patient Monitoring (24-hour hackathon)</p>
            </div>
            <div className="achievement-card">
              <div className="flex items-center gap-3 mb-3">
                <Star className="text-blue-500" size={24} />
                <h3 className="pixel-font text-lg font-bold text-black">Winner</h3>
              </div>
              <p className="pixel-font text-sm text-black">IDEATHON 2024: NFC Railway Solution (Southern Railways)</p>
            </div>
            <div className="achievement-card">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-green-500" size={24} />
                <h3 className="pixel-font text-lg font-bold text-black">Rajya Puraskar</h3>
              </div>
              <p className="pixel-font text-sm text-black">Governor's Award (Scouts & Guides, 2019)</p>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects">
          <h2 className="pixel-font text-3xl font-bold text-black mb-8 underline-animation">FEATURED PROJECTS</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="pixel-border-enhanced cream-bg p-6 flex flex-col">
              <h3 className="pixel-font text-xl font-bold text-black mb-4">K8S Anomaly Detection System</h3>
              <p className="pixel-font text-sm text-black mb-4 flex-grow leading-relaxed">
                Engineered multi-agent Kubernetes monitoring system achieving 94% LSTM-based anomaly detection accuracy 
                with automated remediation capabilities and real-time alerting dashboard.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Kubernetes</span>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">LSTM</span>
                <span className="tech-badge">DevOps</span>
              </div>
              <div className="flex gap-2">
                <Button className="pixel-font bg-black text-orange-400 border-2 border-black hover:bg-gray-900 h-10 px-4 flex-1">
                  View Details
                </Button>
                <Button className="pixel-font bg-gray-800 text-white border-2 border-black hover:bg-gray-700 h-10 px-4 flex items-center gap-2">
                  <Github size={16} />
                </Button>
              </div>
            </div>

            <div className="pixel-border-enhanced cream-bg p-6 flex flex-col">
              <h3 className="pixel-font text-xl font-bold text-black mb-4">RPM - Remote Patient Monitoring</h3>
              <p className="pixel-font text-sm text-black mb-4 flex-grow leading-relaxed">
                Developed cross-platform health monitoring dashboard with MQTT server integration for smartwatch data collection in 24 hours. 
                Built real-time data processing pipeline with Bluetooth connectivity and responsive web interface.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">MQTT</span>
                <span className="tech-badge">Bluetooth</span>
              </div>
              <div className="flex gap-2">
                <Button className="pixel-font bg-black text-orange-400 border-2 border-black hover:bg-gray-900 h-10 px-4 flex-1">
                  View Details
                </Button>
                <Button className="pixel-font bg-blue-600 text-white border-2 border-black hover:bg-blue-700 h-10 px-4 flex items-center gap-2">
                  <ExternalLink size={16} />
                </Button>
              </div>
            </div>

            <div className="pixel-border-enhanced cream-bg p-6 flex flex-col">
              <h3 className="pixel-font text-xl font-bold text-black mb-4">ICIOT 2025 Conference Website</h3>
              <p className="pixel-font text-sm text-black mb-4 flex-grow leading-relaxed">
                Built responsive international conference website using Next.js with headless CMS and Microsoft CMT integration. 
                Successfully served 2,500+ global attendees with optimized performance.
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">CMS</span>
                <span className="tech-badge">Microsoft CMT</span>
              </div>
              <div className="flex gap-2">
                <Button className="pixel-font bg-black text-orange-400 border-2 border-black hover:bg-gray-900 h-10 px-4 flex-1">
                  View Details
                </Button>
                <Button className="pixel-font bg-blue-600 text-white border-2 border-black hover:bg-blue-700 h-10 px-4 flex items-center gap-2">
                  <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="pixel-font text-3xl font-bold text-black mb-8 underline-animation">EXPERIENCE</h2>
          <div className="space-y-6">
            <div className="timeline-item">
              <div className="pixel-border-enhanced cream-bg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="pixel-font text-xl font-bold text-black">Own Venture</h3>
                  <span className="pixel-font text-sm text-gray-600 flex items-center gap-1">
                    <Calendar size={16} />
                    03/25 – Present
                  </span>
                </div>
                <p className="pixel-font text-base font-medium text-black mb-2">Founder & Team Lead</p>
                <p className="pixel-font text-sm text-black leading-relaxed">
                  Developing agentic CRM + ERP system for Sethu Bhaskara Matriculation (10,000 students) while building 
                  scalable SaaS product for educational technology market.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="pixel-border-enhanced cream-bg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="pixel-font text-xl font-bold text-black">SRMTech</h3>
                  <span className="pixel-font text-sm text-gray-600 flex items-center gap-1">
                    <Calendar size={16} />
                    06/25 – Present
                  </span>
                </div>
                <p className="pixel-font text-base font-medium text-black mb-2">Software Development Intern</p>
                <p className="pixel-font text-sm text-black leading-relaxed">
                  Developing Remote Patient Monitoring system with real-time health data processing and patient dashboard development.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="pixel-border-enhanced cream-bg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="pixel-font text-xl font-bold text-black">Udrive</h3>
                  <span className="pixel-font text-sm text-gray-600 flex items-center gap-1">
                    <Calendar size={16} />
                    12/24 – 05/25
                  </span>
                </div>
                <p className="pixel-font text-base font-medium text-black mb-2">Product Designer & Mobile Developer</p>
                <p className="pixel-font text-sm text-black leading-relaxed">
                  Designed complete UI/UX for car-rental platform using React Native, serving 150+ beta users with cross-platform functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Activities Section */}
        <section id="leadership">
          <h2 className="pixel-font text-3xl font-bold text-black mb-8 underline-animation">LEADERSHIP & ACTIVITIES</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="pixel-border-enhanced cream-bg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="text-blue-600" size={24} />
                <div>
                  <h3 className="pixel-font text-lg font-bold text-black">CENTINELS – SRMIST</h3>
                  <p className="pixel-font text-sm text-gray-600">Sept 2023 – Apr 2025</p>
                </div>
              </div>
              <p className="pixel-font text-base font-medium text-black mb-2">Web Development Head & Team Lead</p>
              <p className="pixel-font text-sm text-black leading-relaxed">
                Led team of 8 developers building secure web applications. Built comprehensive CRM system and mentored junior developers.
              </p>
            </div>

            <div className="pixel-border-enhanced cream-bg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="text-green-600" size={24} />
                <div>
                  <h3 className="pixel-font text-lg font-bold text-black">Cherry+ Network – SRMIST</h3>
                  <p className="pixel-font text-sm text-gray-600">Sept 2023 – Apr 2025</p>
                </div>
              </div>
              <p className="pixel-font text-base font-medium text-black mb-2">Technical Associate & Event Coordinator</p>
              <p className="pixel-font text-sm text-black leading-relaxed">
                Organized technical hackathon with 200+ participants and secured sponsorships for flagship events through strategic outreach.
              </p>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="pixel-border-enhanced bg-black p-8 text-center">
          <h2 className="pixel-font text-3xl font-bold text-white mb-4 underline-animation">RESUME</h2>
          <p className="pixel-font text-lg text-white mb-6">
            Want to see more about my qualifications and experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="pixel-font bg-orange-400 text-black border-2 border-orange-400 hover:bg-orange-500 h-12 px-8 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </Button>
            <Button className="pixel-font bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-12 px-8 flex items-center gap-2">
              <ExternalLink size={20} />
              View Online
            </Button>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="pixel-border-enhanced bg-black p-8">
          <h2 className="pixel-font text-3xl font-bold text-white mb-8 text-center underline-animation">LET'S CONNECT</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Button className="pixel-font bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-12 px-6 flex items-center gap-3">
              <Mail size={20} />
              <span className="hidden sm:inline">yogeshwaranvenkat05@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </Button>
            <Button className="pixel-font bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-12 px-6 flex items-center gap-3">
              <Phone size={20} />
              +91 8610694409
            </Button>
            <Button className="pixel-font bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-12 px-6 flex items-center gap-3">
              <Linkedin size={20} />
              LinkedIn
            </Button>
            <Button className="pixel-font bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-12 px-6 flex items-center gap-3">
              <Github size={20} />
              GitHub
            </Button>
            <Button className="pixel-font bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-12 px-6 flex items-center gap-3">
              <MapPin size={20} />
              Chennai, India
            </Button>
            <Button className="pixel-font bg-transparent text-white border-2 border-white hover:bg-white hover:text-black h-12 px-6 flex items-center gap-3">
              <ExternalLink size={20} />
              Website
            </Button>
          </div>
          <p className="pixel-font text-sm text-white text-center">
            YOGESHWARAN V | All rights reserved | Built with ❤️ in Chennai
          </p>
        </section>
      </div>
    </div>
  );
};

export default Index;
