import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';
import { SparklesIcon, UserGroupIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: <BookOpenIcon className="h-8 w-8 text-blue-600" />,
      title: 'Find Your Next Meal',
      description: 'Explore thousands of recipes from around the world, curated by a community of food lovers.'
    },
    {
      icon: <SparklesIcon className="h-8 w-8 text-orange-500" />,
      title: 'Share Your Creations',
      description: 'Easily upload your own recipes with photos and instructions to inspire other home cooks.'
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-green-500" />,
      title: 'Join a Vibrant Community',
      description: 'Rate and review recipes, save your favorites, and connect with fellow food enthusiasts.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero
          title="Discover & Share Amazing Recipes"
          subtitle="Welcome to FlavorFusion, the ultimate platform for home cooks and food lovers. Find inspiration for your next meal or share your own culinary masterpieces."
          primaryAction={user ? { text: 'Go to Dashboard', href: '/dashboard' } : { text: 'Get Started', href: '/register' }}
          secondaryAction={{ text: 'Browse Recipes', href: '/dashboard' }}
        />

        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Everything You Need to Cook with Confidence
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                FlavorFusion provides all the tools you need to explore, create, and share.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
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

        <section className="bg-white py-20">
           <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to start your culinary journey?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Join thousands of home cooks today. It's free to get started!
            </p>
            <div className="mt-8">
                <Button href="/register" size="lg">Create Your Free Account</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
