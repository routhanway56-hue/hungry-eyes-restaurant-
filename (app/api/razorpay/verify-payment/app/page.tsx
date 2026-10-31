'use client';

import React, { useState, useMemo } from 'react';
import Script from 'next/script';
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ShoppingBag,
  Plus,
  Minus,
  Sparkles,
  Utensils,
  MessageCircle,
  ShieldCheck,
  Search,
  UserCheck,
} from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO, MenuItem } from '@/lib/menu-data';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const CATEGORIES: MenuItem['category'][] = [
  'Soups',
  'Veg Starters',
  'Non-Veg Starters',
  'Tandoor & Breads',
  'Indian Main Course (Veg)',
  'Indian Main Course (Non-Veg)',
  'Desserts & Beverages',
];

export default function HungryEyesStudioPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuItem['category'] | 'All'>('All');
  const [vegOnly, setVegOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [orderType, setOrderType] = useState<'dine-in-cottage' | 'pickup' | 'birthday-event'>('dine-in-cottage');
  const [customerNotes, setCustomerNotes] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesVeg = !vegOnly || item.isVeg;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesVeg && matchesSearch;
    });
  }, [selectedCategory, vegOnly, searchQuery]);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const nextQty = (prev[id] || 0) + delta;
      if (nextQty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: Math.min(nextQty, 20) };
    });
  };

  const cartDetails = useMemo(() => {
    const entries = Object.entries(cart)
      .map(([id, quantity]) => {
        const item = MENU_ITEMS.find((m) => m.id === id);
        return item ? { ...item, quantity } : null;
      })
      .filter(Boolean) as (MenuItem & { quantity: number })[];

    const totalAmount = entries.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalCount = entries.reduce((sum, item) => sum + item.quantity, 0);
    return { entries, totalAmount, totalCount };
  }, [cart]);

  const handleCheckout = async () => {
    if (cartDetails.entries.length === 0) return;
    setIsCheckingOut(true);

    try {
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartDetails.entries.map((i) => ({ id: i.id, quantity: i.quantity })),
          orderType,
          customerNotes,
        }),
      });

      if (res.status === 401) {
        window.location.href = '/auth/login';
        return;
      }

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not initiate order');

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: RESTAURANT_INFO.name,
        description: `Order (${orderType.replace(/-/g, ' ')})`,
        order_id: data.orderId,
        handler: async function (response: any) {
          const verifyRes = await fetch('/api/razorpay/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          });

          if (verifyRes.ok) {
            setCart({});
            alert('Payment verified! Your order at Hungry eyes Restaurant is confirmed.');
          } else {
            alert('Payment signature verification failed. Please contact the restaurant.');
          }
        },
        theme: { color: '#dc2626' },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error: any) {
      alert(error.message || 'Unable to process checkout at the moment.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-600/20">
              <Utensils className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">{RESTAURANT_INFO.name}</h1>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
                  <Star className="h-3.5 w-3.5 fill-amber-400" /> {RESTAURANT_INFO.rating} ({RESTAURANT_INFO.reviewsCount})
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">{RESTAURANT_INFO.hours}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/auth/login"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-sm font-medium transition"
            >
              <UserCheck className="h-4 w-4 text-amber-400" />
              Account (Auth0)
            </a>
            <a
              href="#cart-section"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold shadow-lg shadow-red-600/25 transition"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Cart ({cartDetails.totalCount})</span>
              {cartDetails.totalAmount > 0 && <span>• ₹{cartDetails.totalAmount}</span>}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-neutral-900 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              {RESTAURANT_INFO.highlights}
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Atmospheric Dining &{' '}
              <span className="bg-gradient-to-r from-amber-400
