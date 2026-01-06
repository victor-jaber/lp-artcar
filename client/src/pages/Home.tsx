import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { 
  Wrench, 
  PaintBucket, 
  Car, 
  Sparkles, 
  CheckCircle2, 
  Star,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash image: Mechanic working on car in modern shop */}
          <img 
            src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2080&auto=format&fit=crop" 
            alt="Oficina Mecânica" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/50 text-secondary font-bold text-sm mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-current" />
              Excelência em Funilaria e Pintura
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-6">
              Sua oficina de <span className="text-secondary">confiança</span>.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-light">
              Especialistas em transformar seu carro. Tecnologia de ponta, profissionais qualificados e acabamento impecável.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold px-8 h-14 rounded-full shadow-lg shadow-yellow-500/25 transition-transform hover:-translate-y-1"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg font-semibold px-8 h-14 rounded-full backdrop-blur-sm transition-transform hover:-translate-y-1"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conhecer Serviços
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Nossos Serviços</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Soluções Completas para seu Veículo</h3>
            <p className="text-slate-600 text-lg">
              Utilizamos equipamentos modernos e materiais de alta qualidade para garantir o melhor resultado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Wrench className="w-10 h-10" />} 
              title="Funilaria" 
              description="Reparos estruturais com precisão milimétrica para recuperar a forma original do seu veículo."
              delay={0}
            />
            <ServiceCard 
              icon={<PaintBucket className="w-10 h-10" />} 
              title="Pintura" 
              description="Cabine de pintura profissional, colorimetria computadorizada e vernizes de alto brilho."
              delay={0.1}
            />
            <ServiceCard 
              icon={<Car className="w-10 h-10" />} 
              title="Mecânica" 
              description="Manutenção preventiva e corretiva, suspensão, freios e diagnósticos eletrônicos."
              delay={0.2}
            />
            <ServiceCard 
              icon={<Sparkles className="w-10 h-10" />} 
              title="Polimento" 
              description="Cristalização, vitrificação e polimento técnico para proteção e brilho intenso."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20"
              >
                {/* Unsplash image: Professional auto detailer polishing car */}
                <img 
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" 
                  alt="Profissional trabalhando" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              {/* Decorative square */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-secondary rounded-3xl z-0 hidden md:block" />
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Sobre a ArtCar</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Paixão por carros, compromisso com a qualidade</h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  Na ArtCar, não apenas consertamos carros; restauramos sonhos. Com anos de experiência no mercado automotivo, nossa equipe combina técnica artesanal com tecnologia de ponta.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <FeatureItem text="Garantia em todos os serviços" />
                  <FeatureItem text="Equipe altamente qualificada" />
                  <FeatureItem text="Tecnologia de ponta" />
                  <FeatureItem text="Atendimento personalizado" />
                </div>

                <Button 
                  className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 h-12 shadow-lg shadow-blue-900/20"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Fale Conosco
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Depoimentos</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">O que nossos clientes dizem</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Carlos Silva" 
              role="Empresário"
              text="Serviço impecável! Meu carro ficou como novo após a pintura. O atendimento foi excelente do início ao fim."
              delay={0}
            />
            <TestimonialCard 
              name="Fernanda Oliveira" 
              role="Arquiteta"
              text="Confiança é tudo. Deixo meu carro na ArtCar de olhos fechados. A equipe é muito transparente e honesta."
              delay={0.1}
            />
            <TestimonialCard 
              name="Ricardo Santos" 
              role="Engenheiro"
              text="Fiz o polimento técnico e vitrificação. O brilho é impressionante! Recomendo a todos que gostam de cuidar do carro."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Contato</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Vamos conversar?</h3>
              <p className="text-slate-600 text-lg mb-12">
                Estamos prontos para atender você. Entre em contato por telefone, email ou venha nos visitar.
              </p>

              <div className="space-y-8">
                <ContactInfoItem 
                  icon={<MapPin className="w-6 h-6 text-secondary" />}
                  title="Endereço"
                  content="Rua das Oficinas, 123 - Bairro Industrial, São Paulo - SP"
                />
                <ContactInfoItem 
                  icon={<Phone className="w-6 h-6 text-secondary" />}
                  title="Telefone / WhatsApp"
                  content="(11) 99999-9999"
                />
                <ContactInfoItem 
                  icon={<Clock className="w-6 h-6 text-secondary" />}
                  title="Horário de Funcionamento"
                  content="Segunda a Sexta: 08:00 - 18:00 | Sábado: 08:00 - 12:00"
                />
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 w-full h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative group">
                {/* Static map image or placeholder */}
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 font-medium">Mapa de Localização</span>
                </div>
                {/* Interactive Overlay */}
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                >
                  <Button variant="secondary" size="sm">Ver no Google Maps</Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-display font-bold text-white mb-2">ArtCar</span>
              <p className="text-sm">© {new Date().getFullYear()} ArtCar Funilaria e Pintura. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUBCOMPONENTS ---

function ServiceCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
    >
      <div className="w-16 h-16 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle2 className="w-4 h-4 text-green-600" />
      </div>
      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
}

function TestimonialCard({ name, role, text, delay }: { name: string, role: string, text: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
    >
      <div className="flex gap-1 text-secondary mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <p className="text-lg text-white/90 mb-6 italic">"{text}"</p>
      <div>
        <h5 className="font-bold text-white">{name}</h5>
        <span className="text-sm text-blue-200">{role}</span>
      </div>
    </motion.div>
  );
}

function ContactInfoItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
        <p className="text-slate-600">{content}</p>
      </div>
    </div>
  );
}
