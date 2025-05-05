import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Определение типа данных для карт
interface GiftCard {
  id: number;
  amount: number;
  imageSrc: string;
  description: string;
}

const Products = () => {
  // Данные о картах
  const giftCards: GiftCard[] = [
    {
      id: 1,
      amount: 1000,
      imageSrc: "https://images.unsplash.com/photo-1539683255143-73a6b838b106?q=80&w=600&auto=format&fit=crop",
      description: "Идеально для приобретения приложений и подписок."
    },
    {
      id: 2,
      amount: 2500,
      imageSrc: "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?q=80&w=600&auto=format&fit=crop",
      description: "Достаточно для подписки на несколько месяцев Apple Music или Apple TV+."
    },
    {
      id: 3,
      amount: 5000,
      imageSrc: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=600&auto=format&fit=crop",
      description: "Премиальная карта для серьезных покупок в App Store или iTunes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold">Apple Gift</Link>
          <div className="flex space-x-6">
            <Link to="/products" className="text-black border-b-2 border-black pb-0.5">Карты</Link>
            <Link to="/instructions" className="text-gray-700 hover:text-black transition-colors">Как использовать</Link>
          </div>
        </div>
      </nav>

      {/* Products Header */}
      <section className="py-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Apple Gift Cards
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Выберите подходящий номинал и получите код активации мгновенно
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <Card key={card.id} className="overflow-hidden border-0 shadow-lg rounded-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={card.imageSrc} 
                    alt={`Apple Gift Card ${card.amount} руб.`}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{card.amount} ₽</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{card.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full">Купить</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-6 bg-gray-50 mt-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6 text-center">Информация о картах</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-2">Способы оплаты</h3>
                <p className="text-gray-600">Принимаем банковские карты всех основных платежных систем, электронные кошельки и Apple Pay.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-2">Активация</h3>
                <p className="text-gray-600">После оплаты вы мгновенно получите код активации на указанную электронную почту.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-medium mb-2">Поддержка</h3>
                <p className="text-gray-600">Если у вас возникли вопросы, обратитесь в нашу службу поддержки по электронной почте support@applegift.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="container mx-auto text-center text-gray-600">
          <p className="mb-2"> {new Date().getFullYear()} Apple Gift Cards.</p>
          <p className="text-sm">Apple и логотип Apple являются товарными знаками Apple Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Products;