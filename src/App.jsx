import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
// import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import {
  Phone,
  Mail,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Home,
  Building,
  Palette,
  Shield,
  Award,
  Users,
  Zap,
  Target,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import SliderSection from "./components/Slider";
import heroImg from "./assets/images/home-hero.png";
import Logo from "./assets/logo.png";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    let formattedValue = "";
    if (value.length > 0) {
      formattedValue = `(${value.substring(0, 2)}`;
    }
    if (value.length >= 3) {
      formattedValue += `) ${value.substring(2, 7)}`;
    }
    if (value.length >= 8) {
      formattedValue += `-${value.substring(7, 11)}`;
    }
    setFormData({ ...formData, telefone: formattedValue });
  };

  // serviços declarados
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Forros Drywall",
      description:
        "Acabamento impecável e isolamento térmico superior. Transforme seu teto com rapidez e limpeza.",
      features: ["Isolamento Térmico", "Rápida Instalação", "Acabamento Liso"],
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Divisórias",
      description:
        "Crie novos ambientes com praticidade. Ideal para escritórios e residências que precisam de otimização.",
      features: ["Versatilidade", "Isolamento Acústico", "Otimização de Espaço"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Gesso 3D",
      description:
        "Dê vida às suas paredes com texturas modernas e sofisticadas. Um toque artístico para sua sala ou quarto.",
      features: ["Design Exclusivo", "Valorização do Imóvel", "Diversos Modelos"],
    },
  ];

  // depoimentos visuais
  const testimonials = [
    {
      name: "Ana Carolina Santos",
      rating: 5,
      text: "Fiquei impressionada com a atenção aos detalhes. Minha sala ficou luxuosa com o teto rebaixado!",
      date: "26 Jun 2024",
    },
    {
      name: "Marcos Oliveira",
      rating: 5,
      text: "Profissionais pontuais e muito organizados. As divisórias do meu escritório ficaram perfeitas.",
      date: "27 Jun 2024",
    },
    {
      name: "Maria França",
      rating: 5,
      text: "Fiquei impressionada com a disposição e entrega de serviço começou no sabado entregou no domingo, dentro do meu tempo.",
      date: "20 Nov 2025",
    },
  ];

  // menu toogle
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen font-sans bg-background text-foreground antialiased selection:bg-primary/20">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
      >
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#000000] rounded-lg flex items-center justify-center text-white font-bold text-xl font-heading shadow-primary/30 shadow-lg">
              <img src={Logo} alt="Logo" width={25} height={25} />
            </div>
            <span className="text-2xl font-bold font-heading text-foreground tracking-tight">
              M&M <span className="text-primary">Construção</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Início
            </a>
            <a href="#servicos" className="hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors">
              Sobre Nós
            </a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">
              Depoimentos
            </a>
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#orcamento"
              className="hidden lg:inline-flex"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 shadow-lg shadow-primary/20">
                Orçamento Grátis
              </Button>
            </a>
            <button onClick={toggleMenu} className="lg:hidden p-2 text-foreground">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="lg:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4 font-medium text-center">
              <a href="#" onClick={toggleMenu} className="py-2 hover:text-primary">Início</a>
              <a href="#servicos" onClick={toggleMenu} className="py-2 hover:text-primary">Serviços</a>
              <a href="#sobre" onClick={toggleMenu} className="py-2 hover:text-primary">Sobre Nós</a>
              <a href="#depoimentos" onClick={toggleMenu} className="py-2 hover:text-primary">Depoimentos</a>
              <a href="#orcamento" onClick={toggleMenu}>
                <Button className="w-full bg-primary text-white">Solicitar Orçamento</Button>
              </a>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10 rounded-l-[100px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full filter blur-[100px] -z-10 opacity-60" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1 text-sm rounded-full">
                ✨ Especialistas em Acabamentos
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-foreground mb-6 leading-[1.1]">
                Transforme seu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                  Espaço
                </span> com Elegância
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Soluções premium em gesso, drywall e iluminação. Design moderno e execução impecável para sua obra.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg shadow-xl shadow-primary/20"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-14 text-lg border-2 hover:bg-secondary"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (62) 9 8250-7005
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-8 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Garantia Certificada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Orçamento em 24h</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Placeholder for Hero Image - utilizing a gradient for now if image fails, or the original image */}
                <div
                  className="aspect-[4/5] bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${heroImg})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="font-bold text-2xl">Acabamento Premium</p>
                      <p className="text-white/80">Qualidade que valoriza seu imóvel</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-primary/20 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <SliderSection />

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gradient-to-b from-white to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Nossos Serviços</h2>
            <h3 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
              Soluções completas para <br /> seu ambiente
            </h3>
            <p className="text-lg text-muted-foreground">
              Da fundação ao acabamento, entregamos excelência em cada detalhe do seu projeto em gesso e drywall.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-border/50 bg-white hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <CardHeader>
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="sobre" className="py-24 bg-foreground text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620612663953-ad7d4bd8149e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Por que nós?</h2>
              <h3 className="text-4xl lg:text-5xl font-bold font-heading mb-6">
                Excelência que constrói <br /> confiança
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Mais do que obras, entregamos sonhos. Nossa equipe é treinada para executar projetos com precisão milimétrica, respeitando prazos e mantendo a limpeza do local.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Precisão", desc: "Acabamento detalhado" },
                  { icon: Shield, title: "Garantia", desc: "Serviço assegurado" },
                  { icon: Clock, title: "Pontualidade", desc: "Entrega no prazo" },
                  { icon: Users, title: "Equipe", desc: "Profissionais qualificados" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "15+", label: "Anos de Mercado" },
                { number: "500+", label: "Projetos Entregues" },
                { number: "4.9", label: "Nota Média" },
                { number: "100%", label: "Clientes Felizes" },
              ].map((stat, idx) => (
                <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors text-center py-8">
                  <div className="text-4xl font-bold font-heading text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="orcamento" className="py-24 bg-gradient-to-br from-secondary to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <Badge className="mb-4 bg-primary text-white hover:bg-primary">Orçamento Online</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
                Comece seu projeto hoje mesmo
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                preencha o formulário ao lado e receba uma estimativa personalizada para sua reforma ou construção. É rápido e sem compromisso.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Prefere ligar?</p>
                    <p className="font-bold text-lg text-foreground">(62) 9 8250-7005</p>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="h-2 bg-primary w-full" />
                <CardContent className="p-8 lg:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input
                          id="nome"
                          placeholder="Digite seu nome"
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                        <Input
                          id="telefone"
                          placeholder="(00) 00000-0000"
                          value={formData.telefone}
                          onChange={handlePhoneChange}
                          className="h-12"
                          maxLength={15}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="servico">Tipo de Serviço</Label>
                      <Select
                        value={formData.servico}
                        onValueChange={(value) => setFormData({ ...formData, servico: value })}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Selecione o serviço desejado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="forros">Forros e Acabamentos</SelectItem>
                          <SelectItem value="divisorias">Divisórias de Ambientes</SelectItem>
                          <SelectItem value="gesso3d">Decoração em Gesso 3D</SelectItem>
                          <SelectItem value="pintura">Pintura e Reformas</SelectItem>
                          <SelectItem value="molduras">Molduras e Sancas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem (Opcional)</Label>
                      {/* Using Input as textarea replacement for simplicity or add Textarea component if available. 
                           Since I don't see Textarea imported, I'll use a large Input or standard textarea */}
                      <textarea
                        id="mensagem"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Conte um pouco mais sobre seu projeto..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90">
                      Enviar Solicitação
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Depoimentos</h2>
            <h3 className="text-4xl lg:text-5xl font-bold font-heading text-foreground">
              O que dizem sobre nós
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-secondary/20 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4 text-orange-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="fill-current w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-lg text-foreground/80 italic mb-6">"{t.text}"</p>
                  <div>
                    <div className="font-bold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#161616] text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#000000] rounded flex items-center justify-center font-bold text-white">
                  <img src={Logo} alt="Logo" width={25} height={25} />
                </div>
                <span className="text-xl font-bold">M&M Construção</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Referência em drywall e gesso. Transformando ambientes com qualidade, segurança e design inovador.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Nossos Serviços</a></li>
                <li><a href="#projetos" className="hover:text-primary transition-colors">Galeria de Projetos</a></li>
                <li><a href="#orcamento" className="hover:text-primary transition-colors">Solicitar Orçamento</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <span>(62) 9 8250-7005</span>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p>Segunda a Sexta: 07h às 18h</p>
                    <p>Sábado: 08h às 12h</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} M&M Construção. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5562982507005"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;
