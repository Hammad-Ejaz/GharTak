'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

export function Catalog() {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const catalogItems = [
    {
      name: 'Pet Bottle (720g)',
      originalPrice: 1200,
      discountedPrice: 1000,
      images: ['/pet-bottle.png', '/pet-bottle-2.png', '/pet-bottle-3.png'],
      description: 'A durable and lightweight 720g pet bottle, perfect for storing and dispensing water while maintaining freshness.',
    },
    {
      name: 'Water Dispenser',
      originalPrice: 1000,
      discountedPrice: 800,
      images: ['/dispenser.png', '/dispenser-2.png', '/dispenser-3.png'],
      description: 'A stylish and efficient water dispenser designed for easy and hassle-free access to clean drinking water.',
    },
    {
      name: 'Water Pump',
      originalPrice: 850,
      discountedPrice: 700,
      images: ['/pump.png', '/pump-2.png', '/pump-3.png'],
      description: 'A powerful manual water pump for quick and effortless water dispensing from large bottles.',
    },
    {
      name: 'Bottle Stand',
      originalPrice: 300,
      discountedPrice: 240,
      images: ['/stand.png', '/stand-2.png'],
      description: 'A sturdy and reliable stand designed to securely hold your water bottles, ensuring stability and convenience.',
    },
    {
      name: 'Tap',
      originalPrice: 200,
      discountedPrice: 150,
      images: ['/tap.png', '/tap-2.png', '/tap-3.png'],
      description: 'A durable and easy-to-use tap, ideal for controlling water flow from your dispenser or bottle.',
    },
    {
      name: 'Grip Handle',
      originalPrice: 240,
      discountedPrice: 180,
      images: ['/grip-handle.png', '/grip-handle-2.png'],
      description: 'An ergonomic grip handle that provides a secure hold, making it easy to carry water bottles.',
    },
    {
      name: 'Bottle Handle',
      originalPrice: 200,
      discountedPrice: 150,
      images: ['/bottle-handle.png', '/bottle-handle-2.png', '/bottle-handle-3.png'],
      description: 'A sturdy bottle handle designed for convenient and safe handling of large water bottles.',
    },
    
  ];

  const sendWhatsAppOrder = (item: { name: string; originalPrice?: number; discountedPrice: number; images?: string[]; description?: string; }) => {
    const phoneNumber = '+923292182180';
    const message = encodeURIComponent(
      `I would like to order:\n\nProduct: ${item.name}\nPrice: ${item.discountedPrice} PKR\n\nPlease confirm my order. Thank you!`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
        <div className="relative overflow-hidden mb-12 mt-10 sm:mt-20 mx-4 sm:mx-8 bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-12 text-center text-blue-600">
          Product Catalog
        </h2>
        <div className="relative h-[600px] sm:h-[500px] md:h-[600px] lg:h-[700px]">         
           <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            className="mySwiper"
          >
            {catalogItems.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-4">
                    <Swiper
                      modules={[Pagination, Autoplay]}
                      spaceBetween={10}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      autoplay={{ delay: 1500, disableOnInteraction: false }}
                      className="mb-4 rounded-lg overflow-hidden"
                    >
                      {item.images && item.images.map((image, imgIndex) => (
                        <SwiperSlide key={imgIndex}>
                          <div className="relative w-full pt-[75%]">
                            <Image
                              src={image}
                              alt={`${item.name} - Image ${imgIndex + 1}`}
                              layout="fill"
                              objectFit="contain"
                              className="rounded-lg"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    <div className="flex items-center mb-2">
                      <p className="text-gray-400 line-through mr-2 text-sm">{item.originalPrice} PKR</p>
                      <p className="text-red-600 font-bold">{item.discountedPrice} PKR</p>
                    </div>
                    <Button
                      onClick={() => sendWhatsAppOrder(item)}
                      className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white text-sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10">
            &lt;
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10">
            &gt;
          </button>
        </div>
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
          .swiper-pagination-bullet-active {
            background-color: #2563eb;
          }
          @media (min-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              color: #2563eb;
              font-size: 20px;
              font-weight: bold;
            }
          }
        `}</style>
        </div>
  );
}
