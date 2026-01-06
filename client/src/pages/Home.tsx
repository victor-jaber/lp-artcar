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
  Facebook,
  ClipboardCheck,
  Settings,
  ThumbsUp,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5511947396500";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar um orçamento para meu veículo.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-bold px-8 h-14 rounded-full shadow-lg shadow-green-500/25 transition-transform hover:-translate-y-1"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                data-testid="button-whatsapp-hero"
              >
                <SiWhatsapp className="w-6 h-6 mr-2" />
                Falar no WhatsApp
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

      {/* --- STATS SECTION --- */}
      <section className="py-20 bg-gradient-to-r from-primary via-blue-800 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <StatCard number="15+" label="Anos de Experiência" delay={0} />
            <StatCard number="5000+" label="Clientes Satisfeitos" delay={0.1} />
            <StatCard number="8000+" label="Veículos Restaurados" delay={0.2} />
            <StatCard number="100%" label="Garantia de Qualidade" delay={0.3} />
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

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">Como Funciona</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Nosso Processo</h3>
            <p className="text-slate-600 text-lg">
              Transparência e qualidade em cada etapa do serviço.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-20 left-[12%] right-[12%] h-1 bg-gradient-to-r from-secondary via-primary to-secondary rounded-full" />
            
            <ProcessStep 
              step={1}
              icon={<ClipboardCheck className="w-8 h-8" />}
              title="Avaliação"
              description="Realizamos uma análise completa do veículo e elaboramos um orçamento detalhado."
              delay={0}
            />
            <ProcessStep 
              step={2}
              icon={<Settings className="w-8 h-8" />}
              title="Execução"
              description="Nossa equipe especializada executa o serviço com precisão e materiais premium."
              delay={0.15}
            />
            <ProcessStep 
              step={3}
              icon={<CheckCircle2 className="w-8 h-8" />}
              title="Controle de Qualidade"
              description="Inspeção rigorosa para garantir que tudo esteja perfeito antes da entrega."
              delay={0.3}
            />
            <ProcessStep 
              step={4}
              icon={<ThumbsUp className="w-8 h-8" />}
              title="Entrega"
              description="Seu veículo pronto, com garantia e a satisfação de um trabalho bem feito."
              delay={0.45}
            />
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
                  content="R. Tabor, 363 / 367 - Ipiranga, São Paulo - SP, 04202-020"
                />
                <ContactInfoItem 
                  icon={<Phone className="w-6 h-6 text-secondary" />}
                  title="Telefone / WhatsApp"
                  content="(11) 94739-6500"
                />
                <ContactInfoItem 
                  icon={<Clock className="w-6 h-6 text-secondary" />}
                  title="Horário de Funcionamento"
                  content="Segunda a Sexta: 08:00 - 18:00 | Sábado: 08:00 - 12:00"
                />
              </div>

              {/* Map */}
              <div className="mt-12 w-full h-64 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6774899999997!2d-46.6033!3d-23.5836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a7%3A0x8f0b0b0b0b0b0b0b!2sR.%20Tabor%2C%20363%20-%20Ipiranga%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização ArtCar"
                  className="absolute inset-0"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center justify-center bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-3xl p-10 text-white text-center"
            >
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <SiWhatsapp className="w-14 h-14" />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Fale Conosco pelo WhatsApp</h3>
              <p className="text-white/90 text-lg mb-8 max-w-md">
                Atendimento rápido e personalizado. Solicite seu orçamento agora mesmo!
              </p>
              <Button 
                size="lg"
                className="bg-white text-[#25D366] hover:bg-white/90 text-lg font-bold px-10 h-14 rounded-full shadow-xl transition-transform hover:-translate-y-1"
                onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                data-testid="button-whatsapp-contact"
              >
                <SiWhatsapp className="w-6 h-6 mr-2" />
                (11) 94739-6500
              </Button>
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

function StatCard({ number, label, delay }: { number: string, label: string, delay: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="p-6"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
        className="text-5xl md:text-6xl font-display font-bold text-secondary mb-2"
      >
        {number}
      </motion.div>
      <p className="text-white/80 text-sm md:text-base font-medium uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

function ProcessStep({ step, icon, title, description, delay }: { step: number, icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.2, type: "spring", stiffness: 200 }}
        className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-700 text-white flex items-center justify-center shadow-lg shadow-primary/30 mb-6"
      >
        {icon}
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center shadow-md">
          {step}
        </div>
      </motion.div>
      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
