
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Check } from "lucide-react";
import Cart from "@/components/Cart";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface GiftCard {
  id: number;
  amount: number;
  price: number;
  imageSrc: string;
  description: string;
}

const Products = () => {
  const { addToCart, items } = useCart();
  const { toast } = useToast();
  
  const giftCards: GiftCard[] = [
    {
      id: 1,
      amount: 1000,
      price: 1000,
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      description: "Идеально для покупки приложений, игр или подписки на Apple Music на 1-2 месяца."
    },
    {
      id: 2,
      amount: 2500,
      price: 2500,
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      description: "Оптимально для нескольких месяцев Apple Music, Apple TV+ или приобретения игр."
    },
    {
      id: 3,
      amount: 5000,
      price: 5000,
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      description: "Премиальный вариант для крупных покупок в App Store или годовых подписок."
    }
  ];

  const handleAddToCart = (card: GiftCard) => {
    addToCart({
      id: card.id,
      amount: card.amount,
      price: card.price,
      name: `Apple Gift Card ${card.amount} ₽`
    });
    
    toast({
      title: "Товар добавлен в корзину",
      description: `Apple Gift Card ${card.amount} ₽ добавлена в корзину`,
    });
  };

  const isInCart = (id: number) => {
    return items.some(item => item.id === id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-medium">Apple Gift</Link>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-8 mr-4">
              <Link to="/products" className="text-black border-b border-black pb-1">Карты</Link>
              <Link to="/instructions" className="text-gray-800 hover:text-black transition-colors">Инструкция</Link>
            </div>
            <Cart />
          </div>
        </div>
      </nav>

      {/* Products Header */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-semibold mb-8">
            Apple Gift Cards
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий номинал и получите код активации на вашу почту
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-10">
            {giftCards.map((card) => (
              <Card key={card.id} className="border-0 shadow-lg rounded-2xl flex flex-col">
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-10 rounded-t-2xl">
                  <img 
                    src={card.imageSrc} 
                    alt={`Apple Gift Card ${card.amount} руб.`}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl font-medium text-center">{card.amount} ₽</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 text-center leading-relaxed">{card.description}</p>
                </CardContent>
                <CardFooter className="mt-auto pb-6">
                  {isInCart(card.id) ? (
                    <Button className="w-full rounded-full bg-green-600 hover:bg-green-700 h-12" disabled>
                      <Check className="mr-2 h-4 w-4" /> В корзине
                    </Button>
                  ) : (
                    <Button 
                      className="w-full rounded-full bg-black hover:bg-gray-800 h-12"
                      onClick={() => handleAddToCart(card)}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" /> Купить
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 px-6 bg-gray-50 mt-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold mb-12 text-center">Информация о картах</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-medium mb-4">Активация</h3>
              <p className="text-gray-600 leading-relaxed">
                После оплаты вы мгновенно получите код активации на указанную электронную почту. 
                Код можно ввести в App Store, iTunes Store или на apple.com/redeem.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Оплата и безопасность</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы принимаем все основные платежные карты, Apple Pay и электронные кошельки. 
                Ваши платежные данные надежно защищены.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Срок действия</h3>
              <p className="text-gray-600 leading-relaxed">
                Подарочные карты Apple не имеют срока действия и могут быть использованы в любое время 
                после активации.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Поддержка</h3>
              <p className="text-gray-600 leading-relaxed">
                Если у вас возникли вопросы или проблемы, обратитесь в нашу службу поддержки 
                по электронной почте support@applegift.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} Apple Gift Cards</p>
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

export default Products;
