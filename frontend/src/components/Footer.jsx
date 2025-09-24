import React from 'react';
import { Link } from 'react-router-dom';
import { CakeIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <Link to="/" className="flex items-center space-x-2">
              <CakeIcon className="h-8 w-8 text-blue-500"/>
              <span className="text-2xl font-bold text-white">FlavorFusion</span>
            </Link>
            <p className="text-gray-400 text-base">
              Your daily dose of delicious recipes.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Product</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/dashboard" className="text-base text-gray-400 hover:text-white">Recipes</Link></li>
                  <li><Link to="/register" className="text-base text-gray-400 hover:text-white">Sign Up</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="#" className="text-base text-gray-400 hover:text-white">About</Link></li>
                  <li><Link to="#" className="text-base text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
             <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="#" className="text-base text-gray-400 hover:text-white">Privacy</Link></li>
                  <li><Link to="#" className="text-base text-gray-400 hover:text-white">Terms</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2024 FlavorFusion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
