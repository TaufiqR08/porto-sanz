import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Video, 
  PenTool, 
  Mail, 
  Share2, 
  Aperture, 
  Instagram,
  ExternalLink, 
  Play, 
  Menu, 
  X,
  ChevronDown,
  Monitor,
  Film,
  Phone,
  FolderOpen
} from 'lucide-react';

const PortfolioApp = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek untuk navbar transparan ke solid saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- DATA SAMPEL (GANTI BAGIAN INI DENGAN DATA ASLI ANDA) ---
  const personalInfo = {
    name: "Sanz",
    role: "Visual Designer & Video Editor",
    bio: "Saya membantu brand menceritakan kisah mereka melalui desain visual yang memukau dan editing video yang dinamis. Berpengalaman lebih dari 5 tahun menggunakan Adobe Creative Suite.",
    email: "Fariswan1140@gmia.com",
    phone: "0813-7362-6429",
    photo: "https://placehold.co/400x400/4f46e5/ffffff?text=Fariswan",
    socials: {
      instagram: "zenithsanz",
      linkedin: "#",
      dribbble: "#"
    }
  };

  const skills = [
    { name: "Adobe Photos", level: 95 },
    { name: "Adobe Premiere Pro", level: 90 },
    { name: "After Effects", level: 85 },
    { name: "Figma / UI Design", level: 80 },
    { name: "DaVinci Resolve", level: 75 },
    { name: "Illustrator", level: 90 },
  ];

  const projects = [
    {
      id: 1,
      title: "Koleksi Karya Desain",
      category: "design",
      image: "https://placehold.co/600x400/3b82f6/ffffff?text=Karya+Desain",
      desc: "Kumpulan karya desain grafis, visual, dan branding.",
      link: "https://drive.google.com/drive/folders/1ibNTE_afChPTLMe1s4scIcw1ud_-gJcU?usp=drive_link"
    },
    {
      id: 2,
      title: "Koleksi Karya Video",
      category: "video",
      image: "https://placehold.co/600x400/ef4444/ffffff?text=Karya+Video",
      desc: "Portofolio video editing, motion graphics, dan sinematografi.",
      link: "https://drive.google.com/drive/folders/1GxHMfv10oYZkrAl93_gPQhIL68kzCex6?usp=drive_link"
    },
    {
      id: 3,
      title: "Projects UMKM",
      category: "umkm",
      image: "https://placehold.co/600x400/10b981/ffffff?text=Project+UMKM",
      desc: "Kolaborasi dan hasil karya desain serta video untuk berbagai UMKM.",
      link: "https://drive.google.com/drive/folders/1-Z8aGhLHsQAwZEqPYs1rIEHVkTMu9SA7?usp=drive_link"
    }
  ];

  // Filter logika
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const NavLink = ({ href, children }) => (
    <a 
      href={href} 
      className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name.split(' ')[0]}.
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Beranda</NavLink>
            <NavLink href="#about">Tentang</NavLink>
            <NavLink href="#portfolio">Portofolio</NavLink>
            <NavLink href="#contact">Kontak</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-xl border-t border-slate-800">
            <div className="flex flex-col items-center py-8 space-y-6">
              <NavLink href="#home">Beranda</NavLink>
              <NavLink href="#about">Tentang</NavLink>
              <NavLink href="#portfolio">Portofolio</NavLink>
              <NavLink href="#contact">Kontak</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Gradients & Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse-slow delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-indigo-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-cyan-500/10 rounded-lg animate-float delay-300 rotate-12"></div>

        <div className="container mx-auto px-6 text-center z-10">
          <div className="inline-block px-4 py-1.5 mb-6 border border-slate-700 rounded-full bg-slate-800/50 backdrop-blur-sm text-sm text-indigo-300 opacity-0 animate-fadeInUp">
            👋 Selamat datang di portofolio saya
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fadeInUp delay-100">
            Menciptakan <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Visual</span> <br/>
            Yang Bercerita
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 text-left opacity-0 animate-fadeInUp delay-200">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img src={personalInfo.photo} alt="Foto Profil" className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-800 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105" />
            </div>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl text-center md:text-left leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 opacity-0 animate-fadeInUp delay-300">
            <a href="#portfolio" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 group">
              <Monitor size={20} className="group-hover:rotate-12 transition-transform" /> Lihat Karya
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent border border-slate-600 hover:border-white hover:bg-white/5 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group">
              <Mail size={20} className="group-hover:-translate-y-1 transition-transform" /> Hubungi Saya
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Skills & About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tools & Keahlian</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Sebagai seorang kreatif, saya percaya bahwa alat hanyalah perpanjangan dari imajinasi. 
                Namun, penguasaan teknis memungkinkan eksekusi yang sempurna. Berikut adalah 'senjata' pilihan saya sehari-hari.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 flex items-center gap-3">
                  <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><PenTool size={24} /></div>
                  <div>
                    <h4 className="font-semibold">Graphic Design</h4>
                    <span className="text-xs text-slate-400">Branding, UI, Print</span>
                  </div>
                </div>
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400"><Video size={24} /></div>
                  <div>
                    <h4 className="font-semibold">Video Editing</h4>
                    <span className="text-xs text-slate-400">Motion, Grading, Cut</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2.5 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Karya Pilihan</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-8"></div>
            
            {/* Filter Buttons */}
            <div className="inline-flex bg-slate-800 p-1 rounded-full flex-wrap justify-center">
              {['all', 'design', 'video', 'umkm'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === 'all' ? 'Semua' : tab === 'design' ? 'Desain Grafis' : tab === 'video' ? 'Video Editing' : 'Project UMKM'}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                {/* Image/Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900 animate-pulse"></div> {/* Loader placeholder */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     {project.category === 'video' ? (
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30">
                          <Play fill="currentColor" size={24} className="ml-1" />
                        </div>
                     ) : project.category === 'umkm' ? (
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30">
                          <FolderOpen size={24} />
                        </div>
                     ) : (
                        <div className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-medium">
                          Lihat Detail
                        </div>
                     )}
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ${
                      project.category === 'video' 
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                        : project.category === 'umkm'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    }`}>
                      {project.category === 'video' ? 'Video' : project.category === 'umkm' ? 'UMKM' : 'Design'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300">
                    Buka Folder Drive <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Mari Berkolaborasi!</h2>
                <p className="text-slate-400 mb-8">
                  Punya proyek menarik atau sekadar ingin menyapa? Saya selalu terbuka untuk peluang baru. 
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Phone size={20} />
                    </div>
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Mail size={20} />
                    </div>
                    <span>{personalInfo.email}</span>
                  </div>
                  {/* <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Share2 size={20} />
                    </div>
                    <span>/in/alexkreatif</span>
                  </div> */}
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <Instagram size={20} />
                    </div>
                    <span>@{personalInfo.socials.instagram}</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Nama</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white" placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white" placeholder="email@contoh.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Pesan</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-white" placeholder="Ceritakan tentang proyek Anda..."></textarea>
                </div>
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/20">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>© 2024 {personalInfo.name}. Dibuat dengan ☕ dan Kreativitas.</p>
      </footer>
    </div>
  );
};

export default PortfolioApp;
