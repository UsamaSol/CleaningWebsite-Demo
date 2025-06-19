"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Award, Clock, Sparkles, Shield, Leaf } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const services = [
  {
    title: 'Residential Cleaning',
    description: 'Professional home cleaning services tailored to your needs',
    icon: '🏠',
    features: ['Regular cleaning', 'Deep cleaning', 'Move-in/out cleaning']
  },
  {
    title: 'Commercial Cleaning',
    description: 'Keep your business premises spotless and professional',
    icon: '🏢',
    features: ['Office cleaning', 'Retail spaces', 'Medical facilities']
  },
  {
    title: 'Specialized Services',
    description: 'Expert cleaning for unique situations and requirements',
    icon: '✨',
    features: ['Post-construction', 'Carpet cleaning', 'Window cleaning']
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'SparklePro transformed my home! Their attention to detail is unmatched, and the team is always professional and reliable.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'We\'ve been using SparklePro for our office cleaning for over a year. Consistently excellent service and competitive pricing.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    content: 'Professional, thorough, and trustworthy. SparklePro handles all our move-out cleanings with exceptional results.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

const stats = [
  { label: 'Happy Clients', value: '500+', icon: Users },
  { label: 'Years Experience', value: '10+', icon: Award },
  { label: 'Projects Completed', value: '2000+', icon: CheckCircle },
  { label: 'Response Time', value: '24h', icon: Clock }
];

const features = [
  {
    icon: Shield,
    title: 'Fully Insured & Bonded',
    description: 'Complete peace of mind with comprehensive insurance coverage'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description: 'Safe, green cleaning solutions that protect your family and environment'
  },
  {
    icon: Sparkles,
    title: 'Quality Guarantee',
    description: '100% satisfaction guarantee on every cleaning service'
  }
];

const heroFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Home() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const heroForm = useForm<z.infer<typeof heroFormSchema>>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onHeroSubmit = async (values: z.infer<typeof heroFormSchema>) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Request sent! We will contact you soon.');
      heroForm.reset();
    } catch (error) {
      toast.error('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Testimonial slideshow state
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-8">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950 dark:via-background dark:to-blue-950" />
          <motion.div
            className="absolute inset-0 opacity-5"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280")',
              backgroundSize: '120% 120%',
            }}
          />
          
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-left">
            <div className="flex-1 min-w-[300px] md:pr-8">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Transform Your Space
                <motion.span 
                  className="block text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Into Perfection
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg text-muted-foreground mb-10 max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience the ultimate in professional cleaning services. We deliver spotless results 
                with eco-friendly solutions, trusted by over 500 satisfied customers.
              </motion.p>
            </div>
            {/* Quick Quote Form */}
            <motion.div
              className="flex-1 min-w-[320px] max-w-lg w-full mx-auto mb-12 bg-white/80 dark:bg-black/40 rounded-xl p-6 shadow-2xl shadow-black/40 dark:shadow-black/70 backdrop-blur-md"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Contact Us</h3>
              <Form {...heroForm}>
                <form onSubmit={heroForm.handleSubmit(onHeroSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={heroForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" className="rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={heroForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" type="email" className="rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={heroForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" className="rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={heroForm.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-xl">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-xl">
                              {services.map((service) => (
                                <SelectItem key={service.title} value={service.title}>
                                  {service.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={heroForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your cleaning needs, preferred schedule, and any special requirements..."
                            className="min-h-[80px] rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>Request a Quote</>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>

          {/* Features Row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary/10 rounded-lg p-2">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-sm">{feature.title}</div>
                  <div className="text-xs text-muted-foreground">{feature.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary/10 rounded-xl p-3 w-fit mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-[#101828] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4 opacity-90">
              Our Services
            </h2>
            <p className="text-xl text-muted-background max-w-2xl mx-auto opacity-90">
              From regular maintenance to specialized cleaning, we have the expertise 
              to handle all your cleaning needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl hover:shadow-black/40 dark:hover:shadow-black/70 transition-all duration-300 group cursor-pointer rounded-xl">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="rounded-xl">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers 
              have to say about our services.
            </p>
          </motion.div>

          {/* Slideshow */}
          <div className="relative max-w-2xl mx-auto">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full rounded-xl shadow-2xl shadow-black/40 dark:shadow-black/70">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonials[testimonialIndex].content}"
                  </p>
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 mr-3">
                      <Image
                        src={testimonials[testimonialIndex].image}
                        alt={testimonials[testimonialIndex].name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonials[testimonialIndex].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[testimonialIndex].role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            {/* Dots navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === testimonialIndex ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                  onClick={() => setTestimonialIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-[#101828] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-90">
              Ready to Experience the SparklePro Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied customers who trust us with their cleaning needs. 
              Get your free quote today and see why we're the preferred choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild className="text-lg px-8 py-6 rounded-xl">
                <Link href="/contact">
                  Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="default" asChild className="text-lg px-8 py-6 rounded-xl">
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}