"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const categories = ['All', 'Residential', 'Commercial', 'Before/After', 'Specialized'];

const galleryItems = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    title: 'Modern Living Room Cleaning',
    category: 'Residential',
    description: 'Complete deep cleaning of a modern living space'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    title: 'Kitchen Deep Clean',
    category: 'Residential',
    description: 'Professional kitchen cleaning with appliance care'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    title: 'Office Space Maintenance',
    category: 'Commercial',
    description: 'Regular office cleaning and maintenance'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/4107256/pexels-photo-4107256.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    title: 'Bathroom Renovation Cleanup',
    category: 'Before/After',
    description: 'Post-renovation bathroom cleaning service'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    title: 'Construction Site Cleanup',
    category: 'Specialized',
    description: 'Post-construction deep cleaning service'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    title: 'Retail Store Cleaning',
    category: 'Commercial',
    description: 'Daily retail space maintenance'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    title: 'Bedroom Deep Clean',
    category: 'Residential',
    description: 'Thorough bedroom cleaning service'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/4107142/pexels-photo-4107142.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    title: 'Window Cleaning Service',
    category: 'Specialized',
    description: 'Professional window cleaning inside and out'
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    title: 'Move-out Deep Clean',
    category: 'Before/After',
    description: 'Complete move-out cleaning service'
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
    setCurrentImageIndex(filteredItems.findIndex(i => i.id === item.id));
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Work Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the results of our professional cleaning services. From residential homes 
            to commercial spaces, we deliver exceptional quality every time.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="mb-2 rounded-xl"
            >
              <Filter className="h-4 w-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid mb-6"
              >
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <ZoomIn className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-black rounded-lg">
                      {item.category}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-black/95 rounded-xl">
            {selectedImage && (
              <div className="relative">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-xl"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation Buttons */}
                {filteredItems.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-xl"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20 rounded-xl"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-8 w-8" />
                    </Button>
                  </>
                )}

                {/* Image */}
                <div className="flex items-center justify-center min-h-[60vh]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="rounded-lg">{selectedImage.category}</Badge>
                    <span className="text-sm">
                      {currentImageIndex + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
                  <p className="text-sm opacity-90">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}