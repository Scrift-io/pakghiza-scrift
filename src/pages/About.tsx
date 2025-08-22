import React from 'react';
import { Award, Users, Globe, Heart, Target, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { GradientText } from '@/components/ui/gradient-text';

const About = () => {
  const teamMembers = [
    {
      name: 'Ahmad Khan',
      title: 'CEO',
      description: 'Leads the strategic direction and growth initiatives of Pak Ghiza.',
      imageUrl: '/team/ahmad_khan.jpg'
    },
    {
      name: 'Fatima Ali',
      title: 'Head of R&D',
      description: 'Drives innovation and product development, ensuring top-quality ingredients.',
      imageUrl: '/team/fatima_ali.jpg'
    },
    {
      name: 'Omar Hassan',
      title: 'Sales Director',
      description: 'Manages sales operations and client relationships, focusing on customer satisfaction.',
      imageUrl: '/team/omar_hassan.jpg'
    }
  ];

  const coreValues = [
    {
      title: 'Quality',
      description: 'Uncompromising commitment to the highest standards in every product.',
      icon: Award
    },
    {
      title: 'Customer Focus',
      description: 'Dedicated to understanding and meeting the unique needs of our clients.',
      icon: Users
    },
    {
      title: 'Innovation',
      description: 'Continuously exploring new technologies and solutions for the food industry.',
      icon: Globe
    },
    {
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and ethical practices.',
      icon: Heart
    },
    {
      title: 'Sustainability',
      description: 'Promoting environmentally responsible and sustainable practices.',
      icon: Target
    },
    {
      title: 'Excellence',
      description: 'Striving for excellence in all aspects of our business.',
      icon: Eye
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <GradientText 
              colors={["#f59e0b", "#eab308", "#d97706", "#f59e0b"]}
              animationSpeed={6}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About Pak Ghiza
            </GradientText>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over two decades, Pak Ghiza has been at the forefront of Pakistan's food ingredient industry, 
              providing premium quality solutions that empower food manufacturers and bakers to create exceptional products.
            </p>
          </div>

          {/* Core Values Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreValues.map((value, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <div className="flex items-center mb-4">
                      <value.icon className="w-6 h-6 text-amber-500 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    </div>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-gray-500 mb-2">{member.title}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Our Commitment Section */}
          <section className="py-12 bg-gray-50 rounded-2xl shadow-lg">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  Our Commitment
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We are dedicated to providing our clients with the highest quality food ingredients, exceptional service, and innovative solutions that drive their success.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
