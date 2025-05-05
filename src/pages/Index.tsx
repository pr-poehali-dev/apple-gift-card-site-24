import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Cart from "@/components/Cart";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-medium">Apple Gift</Link>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-8 mr-4">
              <Link to="/products" className="text-gray-800 hover:text-black transition-colors">Карты</Link>
              <Link to="/instructions" className="text-gray-800 hover:text-black transition-colors">Инструкция</Link>
            </div>
            <Cart />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8 text-center">
            Apple Gift Cards
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 text-center leading-relaxed">
            Универсальный способ порадовать себя и близких приложениями, играми, музыкой 
            и другими сервисами Apple.
          </p>
          <div className="flex justify-center">
            <Link to="/products">
              <Button size="lg" className="rounded-full px-8 text-base h-14 bg-black hover:bg-gray-800">
                Выбрать карту <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-xl font-medium mb-4">Универсальность</h3>
              <p className="text-gray-600 leading-relaxed">
                Одна карта для всех сервисов Apple — от App Store и iTunes до Apple Music, 
                Apple TV+ и iCloud.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Моментальная доставка</h3>
              <p className="text-gray-600 leading-relaxed">
                Получите код активации на вашу электронную почту сразу после оплаты.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Идеальный подарок</h3>
              <p className="text-gray-600 leading-relaxed">
                Подарите близким возможность выбрать именно то, что им нужно.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Showcase */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-4xl font-semibold mb-16">Выберите номинал</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                  alt="Apple Logo" 
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">1 000 ₽</h3>
              <Link to="/products">
                <Button variant="outline" className="mt-4 rounded-full px-6">Выбрать</Button>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                  alt="Apple Logo" 
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">2 500 ₽</h3>
              <Link to="/products">
                <Button variant="outline" className="mt-4 rounded-full px-6">Выбрать</Button>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                  alt="Apple Logo" 
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-2xl font-medium mb-2">5 000 ₽</h3>
              <Link to="/products">
                <Button variant="outline" className="mt-4 rounded-full px-6">Выбрать</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0"> {new Date().getFullYear()} Apple Gift Cards</p>
            <div className="flex space-x-8">
              <Link to="/products" className="text-gray-500 hover:text-black transition-colors">Карты</Link>
              <Link to="/instructions" className="text-gray-500 hover:text-black transition-colors">Инструкция</Link>
            </div>
          </div>
          <p className="text-sm text-gray-400 text-center md:text-left mt-6">
            Apple и логотип Apple являются товарными знаками Apple Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;