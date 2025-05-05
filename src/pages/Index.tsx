
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold">Apple Gift</Link>
          <div className="flex space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-black transition-colors">Карты</Link>
            <Link to="/instructions" className="text-gray-700 hover:text-black transition-colors">Как использовать</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Apple Gift Cards
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Идеальный подарок для любителей Apple. Пополняйте Apple ID и
            покупайте любимые приложения, игры, музыку и многое другое.
          </p>
          <Link to="/products">
            <Button size="lg" className="rounded-full px-8 py-6 text-base">
              Выбрать карту <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Почему Apple Gift Cards?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path fill="black" d="M7 13.5l2.5 2.5 7.5-7.5" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Универсальность</h3>
              <p className="text-gray-600">Используйте для любых покупок в экосистеме Apple</p>
            </div>
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Моментальная активация</h3>
              <p className="text-gray-600">Мгновенная доставка кода на вашу электронную почту</p>
            </div>
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Идеальный подарок</h3>
              <p className="text-gray-600">Позвольте близким выбрать то, что они действительно хотят</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы приобрести карту?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Выберите номинал и получите код активации мгновенно на вашу почту.
          </p>
          <Link to="/products">
            <Button size="lg" className="rounded-full px-8 py-6 text-base">
              Выбрать карту
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="container mx-auto text-center text-gray-600">
          <p className="mb-2">© {new Date().getFullYear()} Apple Gift Cards.</p>
          <p className="text-sm">Apple и логотип Apple являются товарными знаками Apple Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
