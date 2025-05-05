
import React from 'react';
import { ShoppingCart, X, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';

const Cart: React.FC = () => {
  const { items, removeFromCart, getCartTotal, getItemCount, clearCart } = useCart();

  return (
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
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>
        
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
              <SheetClose asChild>
                <Button>Оформить заказ</Button>
              </SheetClose>
            </div>
          </>
        )}
        
        <SheetFooter className="mt-8">
          <SheetClose asChild>
            <Button variant="outline" className="w-full">Продолжить покупки</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
