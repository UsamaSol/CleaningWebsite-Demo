"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const serviceCategories = ['All', 'Residential', 'Commercial', 'Specialized'];

const services = [
  {
    id: 1,
    title: 'Regular House Cleaning',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    description: 'Comprehensive weekly or bi-weekly cleaning service to keep your home spotless and comfortable.',
    features: [
      'Dusting all surfaces and furniture',
      'Vacuuming carpets and rugs thoroughly',
      'Mopping and sanitizing hard floors',
      'Complete bathroom cleaning and sanitizing',
      'Kitchen cleaning including appliances',
      'Trash removal and fresh liner placement'
    ],
    benefits: [
      'Consistent cleaning schedule',
      'Eco-friendly cleaning products',
      'Fully insured and bonded staff',
      '100% satisfaction guarantee'
    ]
  },
  {
    id: 2,
    title: 'Deep Cleaning Service',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    description: 'Intensive cleaning service that reaches every corner and detail of your home for a thorough refresh.',
    features: [
      'Inside appliances cleaning (oven, refrigerator)',
      'Detailed baseboards and trim cleaning',
      'Light fixtures and ceiling fans',
      'Inside cabinets and drawers',
      'Window sills and tracks cleaning',
      'Behind and under furniture cleaning'
    ],
    benefits: [
      'Perfect for seasonal cleaning',
      'Ideal before special events',
      'Removes built-up dirt and grime',
      'Extends life of home surfaces'
    ]
  },
  {
    id: 3,
    title: 'Office Cleaning',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    description: 'Professional office cleaning services to maintain a productive and healthy work environment.',
    features: [
      'Workstation and desk cleaning',
      'Conference room sanitizing',
      'Restroom maintenance and restocking',
      'Break room and kitchen cleaning',
      'Floor care (vacuuming, mopping)',
      'Trash and recycling management'
    ],
    benefits: [
      'Flexible scheduling options',
      'Emergency cleaning available',
      'Monthly cleaning reports',
      'Customized cleaning plans'
    ]
  },
  {
    id: 4,
    title: 'Move-in/Move-out Cleaning',
    category: 'Specialized',
    image: 'https://images.pexels.com/photos/4107256/pexels-photo-4107256.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    description: 'Complete cleaning service designed for moving transitions, ensuring spaces are pristine.',
    features: [
      'Interior of all appliances cleaned',
      'All cabinets cleaned inside and out',
      'Light fixtures and switch plates',
      'Baseboard and trim wiping',
      'Window cleaning (interior)',
      'Floor deep cleaning and treatment'
    ],
    benefits: [
      'Same-day availability',
      'Security deposit protection',
      'Photo documentation provided',
      'Move-in ready guarantee'
    ]
  },
  {
    id: 5,
    title: 'Post-Construction Cleanup',
    category: 'Specialized',
    image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    description: 'Specialized cleaning after construction or renovation projects to remove all debris and dust.',
    features: [
      'Complete dust removal from all surfaces',
      'Paint splatter and residue cleanup',
      'Construction debris removal',
      'Window and frame deep cleaning',
      'Floor preparation for finishing',
      'HVAC system cleaning and filter replacement'
    ],
    benefits: [
      'Safety equipment provided',
      'Proper waste disposal',
      'Multiple visits if needed',
      'Final walkthrough inspection'
    ]
  },
  {
    id: 6,
    title: 'Retail Space Cleaning',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
    description: 'Maintain your retail space to create the best possible customer experience and shopping environment.',
    features: [
      'Display area and product cleaning',
      'Floor maintenance and polishing',
      'Fitting room sanitizing',
      'Customer restroom maintenance',
      'Storefront and window cleaning',
      'Inventory area organization'
    ],
    benefits: [
      'After-hours service available',
      'Holiday scheduling flexibility',
      'Inventory protection protocols',
      'Customer-focused approach'
    ]
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

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
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning services tailored to meet your specific needs. 
            From regular maintenance to specialized deep cleaning.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {serviceCategories.map((category) => (
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

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group rounded-xl">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 rounded-lg" variant="secondary">
                      {service.category}
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-muted-foreground">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button 
                        className="flex-1 rounded-xl" 
                        onClick={() => setSelectedService(service)}
                      >
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-xl">
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Service Detail Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl">
            {selectedService && (
              <>
                <DialogHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <DialogTitle className="text-2xl mb-2">{selectedService.title}</DialogTitle>
                      <Badge variant="secondary" className="rounded-lg">{selectedService.category}</Badge>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-muted-foreground">{selectedService.description}</p>

                  <div>
                    <h3 className="font-semibold mb-3">What's Included:</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Additional Benefits:</h3>
                    <div className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 rounded-xl">Book This Service</Button>
                    <Button variant="outline" className="rounded-xl">Get Custom Quote</Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}