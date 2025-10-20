import { useState } from "react";
import { Search, ShoppingCart, Shield, Truck, Award, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gapLogo from "@/assets/gap-logo.png";
import bmwHero from "@/assets/bmw-m4-hero.jpg";
import brakeDisc from "@/assets/brake-disc.jpg";
import oilFilter from "@/assets/oil-filter.jpg";
import sparkPlugs from "@/assets/spark-plugs.jpg";
import shockAbsorber from "@/assets/shock-absorber.jpg";

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const categories = [
    { name: "Silnik", icon: "⚙️", count: 1250 },
    { name: "Hamulce", icon: "🛑", count: 890 },
    { name: "Zawieszenie", icon: "🔧", count: 670 },
    { name: "Układ wydechowy", icon: "💨", count: 450 },
    { name: "Elektryka", icon: "⚡", count: 1120 },
    { name: "Skrzynia biegów", icon: "⚙️", count: 340 },
    { name: "Chłodzenie", icon: "❄️", count: 520 },
    { name: "Akcesoria", icon: "✨", count: 980 },
  ];

  const featuredParts = [
    { id: 1, name: "Tarcze hamulcowe BMW M4", producer: "Brembo", price: "1299 PLN", image: brakeDisc },
    { id: 2, name: "Filtr oleju Mann-Filter", producer: "Mann", price: "89 PLN", image: oilFilter },
    { id: 3, name: "Świece zapłonowe NGK", producer: "NGK", price: "159 PLN", image: sparkPlugs },
    { id: 4, name: "Amortyzatory Bilstein B6", producer: "Bilstein", price: "1899 PLN", image: shockAbsorber },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <img src={gapLogo} alt="GAP - German Auto Parts" className="h-16 w-auto" />
              <nav className="hidden md:flex gap-6">
                <a href="#" className="text-foreground hover:text-primary transition-colors">Części</a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">Kategorie</a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">Promocje</a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">Kontakt</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Zaloguj się
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bmwHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Części do Twojego
              <span className="block text-primary mt-2">Samochodu</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Gwarancja dopasowania. Dostawa tego samego dnia. Montaż na życzenie.
            </p>

            {/* Vehicle Selector */}
            <Card className="p-6 bg-card/95 backdrop-blur-sm border-border shadow-2xl">
              <h3 className="text-lg font-semibold mb-4">Znajdź części do swojego pojazdu</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Rok</label>
                  <select 
                    className="w-full bg-secondary border border-input rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="">Wybierz rok</option>
                    {[2024, 2023, 2022, 2021, 2020, 2019, 2018].map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Marka</label>
                  <select 
                    className="w-full bg-secondary border border-input rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                  >
                    <option value="">Wybierz markę</option>
                    <option value="bmw">BMW</option>
                    <option value="mercedes">Mercedes-Benz</option>
                    <option value="audi">Audi</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="porsche">Porsche</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Model</label>
                  <select 
                    className="w-full bg-secondary border border-input rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                  >
                    <option value="">Wybierz model</option>
                    <option value="m4">M4</option>
                    <option value="m3">M3</option>
                    <option value="x5">X5</option>
                    <option value="320d">320d</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input 
                    placeholder="Lub wpisz VIN / numer rejestracyjny"
                    className="bg-secondary border-input h-11"
                  />
                </div>
                <Button className="bg-primary hover:bg-primary/90 h-11 px-8">
                  <Search className="mr-2 h-4 w-4" />
                  Szukaj części
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Gwarancja dopasowania</h4>
                <p className="text-sm text-muted-foreground">100% kompatybilność</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Dostawa tego samego dnia</h4>
                <p className="text-sm text-muted-foreground">Dla wybranych produktów</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Gwarancja producenta</h4>
                <p className="text-sm text-muted-foreground">Na wszystkie części</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Wsparcie techniczne</h4>
                <p className="text-sm text-muted-foreground">Pomoc ekspertów</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Kategorie części</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-card hover:bg-card/80 border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} produktów</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parts */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Polecane części</h2>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Zobacz wszystkie
            </Button>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {featuredParts.map((part) => (
              <Card key={part.id} className="overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-square bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={part.image} 
                    alt={part.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
                    {part.producer}
                  </Badge>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{part.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-primary">{part.price}</span>
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => setCartCount(cartCount + 1)}
                    >
                      Do koszyka
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src={gapLogo} alt="GAP" className="h-12 mb-4" />
              <p className="text-sm text-muted-foreground">
                Profesjonalne części samochodowe z gwarancją dopasowania i najwyższą jakością obsługi.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sklep</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Wszystkie części</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Kategorie</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Promocje</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Nowości</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pomoc</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Gwarancja i zwroty</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dostawa</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Płatności</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+48 123 456 789</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>kontakt@gap-parts.pl</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>ul. Motoryzacyjna 1, Warszawa</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            © 2024 GAP - German Auto Parts. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
