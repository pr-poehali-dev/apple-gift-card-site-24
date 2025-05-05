
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Instructions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-medium">Apple Gift</Link>
          <div className="flex space-x-8">
            <Link to="/products" className="text-gray-800 hover:text-black transition-colors">Карты</Link>
            <Link to="/instructions" className="text-black border-b border-black pb-1">Инструкция</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-semibold mb-8">
            Как использовать Apple Gift Card
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простая инструкция для активации подарочной карты
          </p>
        </div>
      </section>

      {/* Step-by-step Instructions */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-20 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-3xl font-medium">1</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Выберите и оплатите карту</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Перейдите в раздел «Карты», выберите подходящий номинал (1 000, 2 500 или 5 000 рублей) и оплатите покупку.
                  После успешной оплаты вы получите код активации на указанную электронную почту.
                </p>
                <Link to="/products">
                  <Button variant="outline" className="rounded-full">Выбрать карту</Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-20 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-3xl font-medium">2</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Откройте App Store</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  На вашем устройстве Apple (iPhone, iPad, Mac) откройте App Store. 
                  Нажмите на свою учетную запись в правом верхнем углу и выберите «Пополнить счет» или «Погасить код».
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-20 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-3xl font-medium">3</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Введите код активации</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Введите полученный код активации. Будьте внимательны при вводе — код чувствителен к регистру 
                  и должен быть введен точно так, как указано в письме.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-20 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-3xl font-medium">4</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Готово! Используйте средства</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  После успешной активации сумма будет зачислена на ваш счет Apple ID. Теперь вы можете использовать 
                  эти средства для любых покупок в App Store, iTunes Store, оплаты подписок Apple Music, 
                  Apple TV+, iCloud и других сервисов Apple.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50 mt-12">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold mb-12 text-center">Вопросы и ответы</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Как долго действует подарочная карта?</h3>
              <p className="text-gray-600 leading-relaxed">
                Подарочные карты Apple не имеют срока действия. Вы можете активировать их в любое время.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Можно ли использовать карту частично?</h3>
              <p className="text-gray-600 leading-relaxed">
                Да, после активации сумма зачисляется на ваш счет Apple ID и может быть использована частями 
                для разных покупок.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Что делать, если код не работает?</h3>
              <p className="text-gray-600 leading-relaxed">
                Проверьте правильность ввода, включая регистр символов. Если проблема не устранена, 
                обратитесь в нашу службу поддержки по адресу support@applegift.com
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Можно ли подарить карту другому человеку?</h3>
              <p className="text-gray-600 leading-relaxed">
                Да, просто перешлите полученный код активации человеку, которому хотите сделать подарок. 
                Он сможет активировать его на своём устройстве Apple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Готовы приобрести карту?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Выберите номинал карты и пополните баланс своего Apple ID или порадуйте близких идеальным подарком
          </p>
          <Link to="/products">
            <Button size="lg" className="rounded-full px-8 bg-black hover:bg-gray-800 h-12">
              Выбрать карту
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50">
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

export default Instructions;
