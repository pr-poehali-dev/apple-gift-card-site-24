
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Instructions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold">Apple Gift</Link>
          <div className="flex space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-black transition-colors">Карты</Link>
            <Link to="/instructions" className="text-black border-b-2 border-black pb-0.5">Как использовать</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Как использовать Apple Gift Card
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Простая инструкция по активации и использованию подарочной карты
          </p>
        </div>
      </section>

      {/* Step-by-step Instructions */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <Card className="overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-50 p-6 flex items-center justify-center">
                  <div className="text-5xl font-bold text-black">01</div>
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-semibold mb-4">Приобретите карту</h2>
                  <p className="text-gray-600 mb-4">
                    Выберите номинал карты (1000, 2500 или 5000 рублей) и оплатите покупку. 
                    После успешной оплаты вы получите код активации на указанную электронную почту.
                  </p>
                  <Link to="/products">
                    <Button variant="outline" className="rounded-full">Выбрать карту</Button>
                  </Link>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-50 p-6 flex items-center justify-center">
                  <div className="text-5xl font-bold text-black">02</div>
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-semibold mb-4">Откройте App Store</h2>
                  <p className="text-gray-600 mb-4">
                    На вашем устройстве Apple (iPhone, iPad, Mac) откройте App Store. 
                    Нажмите на свою учетную запись в правом верхнем углу (или внизу в iOS) и выберите "Пополнить счет".
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-50 p-6 flex items-center justify-center">
                  <div className="text-5xl font-bold text-black">03</div>
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-semibold mb-4">Введите код активации</h2>
                  <p className="text-gray-600 mb-4">
                    Выберите "Использовать код" или "Погасить подарочную карту или код" и введите полученный код активации.
                    Будьте внимательны при вводе, код чувствителен к регистру.
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-50 p-6 flex items-center justify-center">
                  <div className="text-5xl font-bold text-black">04</div>
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <h2 className="text-2xl font-semibold mb-4">Подтвердите активацию</h2>
                  <p className="text-gray-600 mb-4">
                    Нажмите "Погасить" или "Далее" для подтверждения. После успешной активации 
                    сумма будет зачислена на ваш счет Apple ID и может быть использована для любых покупок в App Store, 
                    iTunes Store, Apple Music, Apple TV+, iCloud и других сервисах Apple.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50 mt-12">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold mb-10 text-center">Часто задаваемые вопросы</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-2">Как долго действует карта?</h3>
              <p className="text-gray-600">Подарочные карты Apple не имеют срока действия. Вы можете активировать их в любое время.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-2">Можно ли использовать карту частично?</h3>
              <p className="text-gray-600">Да, после активации сумма зачисляется на ваш счет Apple ID и может быть использована частями.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-2">Что делать, если код не работает?</h3>
              <p className="text-gray-600">Проверьте правильность ввода. Если проблема не устранена, обратитесь в нашу службу поддержки по адресу support@applegift.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-2">Можно ли подарить карту другому человеку?</h3>
              <p className="text-gray-600">Да, просто перешлите полученный код активации человеку, которому хотите сделать подарок.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Готовы приобрести Apple Gift Card?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Выберите номинал карты и пополните баланс своего Apple ID или порадуйте близких идеальным подарком.
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

export default Instructions;
