import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { RocketLaunchIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  const features = [
    {
      icon: <RocketLaunchIcon className="h-10 w-10 text-blue-600" />,
      title: 'Launch Faster',
      description: 'Go from idea to production in record time with our streamlined and robust platform.'
    },
    {
      icon: <ShieldCheckIcon className="h-10 w-10 text-blue-600" />,
      title: 'Enterprise-Grade Security',
      description: 'Your data is protected with industry-leading security standards and best practices.'
    },
    {
      icon: <ChartBarIcon className="h-10 w-10 text-blue-600" />,
      title: 'Scalable Infrastructure',
      description: 'Our platform grows with you, from your first user to millions, without breaking a sweat.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero
          title="Build Your Next Big Thing"
          subtitle="The ultimate platform to launch, manage, and scale your web applications with ease. Focus on your product, we'll handle the rest."
          primaryAction={{ text: 'Get Started for Free', href: '/register' }}
          secondaryAction={{ text: 'Learn More', href: '#features' }}
        />

        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Everything You Need to Succeed</p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">A complete toolkit designed for modern application development.</p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600">
          <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block">Start your free trial today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100">
              No credit card required. Instant access to all features.
            </p>
            <Button href="/register" variant="secondary" size="lg" className="mt-8">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
