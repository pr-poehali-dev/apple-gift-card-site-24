
import React, { useState } from 'react';
import { ShoppingCart, X, Trash2, CreditCard, Mail } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

enum CheckoutStep {
  CART,
  PAYMENT,
  SUCCESS
}

const Cart: React.FC = () => {
  const { items, removeFromCart, getCartTotal, getItemCount, clearCart } = useCart();
  const { toast } = useToast();
  const [step, setStep] = useState<CheckoutStep>(CheckoutStep.CART);
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [purchasedCodes, setPurchasedCodes] = useState<{name: string, code: string}[]>([]);

  const resetForm = () => {
    setEmail('');
    setCardNumber('');
    setCardHolder('');
    setExpiryDate('');
    setCvv('');
    setStep(CheckoutStep.CART);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Имитация процесса оплаты
    setTimeout(() => {
      setIsLoading(false);
      
      // Генерация кодов для купленных товаров
      const codes = items.map(item => ({
        name: item.name,
        code: generateGiftCode()
      }));
      
      setPurchasedCodes(codes);
      setShowSuccessDialog(true);
      clearCart();
      resetForm();
      
      toast({
        title: "Оплата успешно выполнена",
        description: "Ваши коды активации готовы",
      });
    }, 1500);
  };

  // Генерация случайного кода подарочной карты
  const generateGiftCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const segments = [4, 4, 4, 4]; // Формат XXXX-XXXX-XXXX-XXXX
    
    return segments.map(length => {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    }).join('-');
  };

  const renderCartContent = () => (
    <>
      <div className="mt-8 flex flex-col gap-6">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Ваша корзина пуста</p>
          </div>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">{item.price} ₽</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Удалить из корзины"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </>
        )}
      </div>

      {items.length > 0 && (
        <>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-lg font-medium">Итого:</p>
            <p className="text-lg font-semibold">{getCartTotal()} ₽</p>
          </div>
          
          <div className="flex justify-between mt-6">
            <Button variant="outline" size="sm" onClick={clearCart} className="gap-1">
              <Trash2 className="h-4 w-4" /> Очистить
            </Button>
            <Button onClick={() => setStep(CheckoutStep.PAYMENT)}>
              Перейти к оплате
            </Button>
          </div>
        </>
      )}
      
      <SheetFooter className="mt-8">
        <SheetClose asChild>
          <Button variant="outline" className="w-full">Продолжить покупки</Button>
        </SheetClose>
      </SheetFooter>
    </>
  );

  const renderPaymentForm = () => (
    <form onSubmit={handlePaymentSubmit} className="space-y-6 mt-4">
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            id="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com" 
            className="pl-10"
            required
          />
        </div>
        <p className="text-xs text-gray-500">На этот адрес будут отправлены коды активации</p>
      </div>
      
      <div className="pt-4 border-t">
        <p className="font-medium mb-4">Данные карты</p>
        
        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="cardNumber">Номер карты</Label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                id="cardNumber" 
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
                placeholder="0000 0000 0000 0000" 
                className="pl-10"
                required
                maxLength={16}
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="cardHolder">Имя держателя карты</Label>
            <Input 
              id="cardHolder" 
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              placeholder="IVAN IVANOV" 
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="expiryDate">Срок действия</Label>
              <Input 
                id="expiryDate" 
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value.replace(/\D/g, '').slice(0, 4))}
                placeholder="ММ/ГГ" 
                required
                maxLength={4}
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="cvv">CVV</Label>
              <Input 
                id="cvv" 
                type="password" 
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                placeholder="•••" 
                required
                maxLength={3}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 space-y-4">
        <div className="flex justify-between items-center text-lg">
          <p className="font-medium">Итого к оплате:</p>
          <p className="font-semibold">{getCartTotal()} ₽</p>
        </div>
        
        <Button type="submit" className="w-full h-12 rounded-full" disabled={isLoading}>
          {isLoading ? "Обработка..." : "Оплатить"}
        </Button>
        
        <Button 
          type="button" 
          variant="outline" 
          className="w-full" 
          onClick={() => setStep(CheckoutStep.CART)}
          disabled={isLoading}
        >
          Назад
        </Button>
      </div>
    </form>
  );

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {getItemCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {getItemCount()}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>
              {step === CheckoutStep.CART ? "Корзина" : "Оформление заказа"}
            </SheetTitle>
          </SheetHeader>
          
          {step === CheckoutStep.CART ? renderCartContent() : renderPaymentForm()}
        </SheetContent>
      </Sheet>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ваша покупка успешно выполнена!</DialogTitle>
            <DialogDescription>
              Ниже представлены коды активации ваших подарочных карт. Используйте их в App Store или iTunes.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            {purchasedCodes.map((item, index) => (
              <div key={index} className="border rounded-xl p-4 bg-gray-50">
                <p className="font-medium mb-1">{item.name}</p>
                <div className="font-mono text-lg text-center py-2 border rounded bg-white select-all">
                  {item.code}
                </div>
              </div>
            ))}
          </div>
          
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)} className="w-full">
              Закрыть
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Cart;
