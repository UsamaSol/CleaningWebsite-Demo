"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Clock, Heart, Shield, Leaf, Star } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'With over 15 years in the cleaning industry, Sarah founded SparklePro with a vision to revolutionize professional cleaning services.',
    specialties: ['Business Development', 'Quality Assurance', 'Team Leadership']
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Michael ensures our operations run smoothly and efficiently, coordinating our teams to deliver exceptional service every time.',
    specialties: ['Operations', 'Logistics', 'Team Coordination']
  },
  {
    name: 'Emily Rodriguez',
    role: 'Quality Control Supervisor',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Emily maintains our high standards by conducting thorough quality inspections and training our cleaning professionals.',
    specialties: ['Quality Control', 'Training', 'Customer Satisfaction']
  },
  {
    name: 'David Kim',
    role: 'Customer Relations Manager',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'David is dedicated to ensuring every customer has an outstanding experience with our services from start to finish.',
    specialties: ['Customer Service', 'Communication', 'Problem Resolution']
  }
];

const values = [
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'We build lasting relationships through consistent, dependable service that you can count on.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We use environmentally safe products and practices to protect your family and our planet.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for perfection in every detail, ensuring exceptional results with every cleaning.'
  },
  {
    icon: Heart,
    title: 'Care & Compassion',
    description: 'We treat your home and business with the same care and respect we would give our own.'
  }
];

const milestones = [
  { year: '2014', event: 'SparklePro founded with a team of 3' },
  { year: '2016', event: 'Expanded to commercial cleaning services' },
  { year: '2018', event: 'Reached 100+ satisfied customers' },
  { year: '2020', event: 'Launched eco-friendly cleaning program' },
  { year: '2022', event: 'Achieved 500+ completed projects' },
  { year: '2024', event: 'Celebrating 10 years of excellence' }
];

const stats = [
  { label: 'Years of Experience', value: '10+', icon: Clock },
  { label: 'Happy Customers', value: '500+', icon: Users },
  { label: 'Projects Completed', value: '2000+', icon: CheckCircle },
  { label: 'Team Members', value: '25+', icon: Award }
];

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Our Story Section (moved up) */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SparklePro was founded in 2014 with a simple mission: to provide exceptional 
                  cleaning services that exceed our customers' expectations. What started as a 
                  small team of three dedicated professionals has grown into a trusted cleaning 
                  company serving hundreds of satisfied customers.
                </p>
                <p>
                  Our founder, Sarah Johnson, recognized the need for reliable, professional 
                  cleaning services in our community. With her background in hospitality and 
                  passion for excellence, she built SparklePro on the foundation of trust, 
                  quality, and customer satisfaction.
                </p>
                <p>
                  Today, we're proud to be the go-to cleaning service for both residential and 
                  commercial clients. Our commitment to using eco-friendly products, training 
                  our staff to the highest standards, and treating every space with care has 
                  earned us a reputation for excellence.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
                  alt="SparklePro team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-[#101828] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape how we serve our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full rounded-xl">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-[#101828] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The dedicated professionals who make SparklePro the trusted choice for 
              cleaning services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center overflow-hidden rounded-xl">
                  <div className="relative h-48">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="space-y-1">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="secondary" className="text-xs rounded-lg">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our journey to becoming the trusted cleaning service we are today.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 bg-card p-4 rounded-xl shadow-sm flex-1">
                    <div className="font-bold text-primary text-lg">{milestone.year}</div>
                    <div className="text-muted-foreground">{milestone.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}