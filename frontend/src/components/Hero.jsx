import React from 'react';
import Button from './Button';

const Hero = ({ title, subtitle, primaryAction, secondaryAction }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
          {subtitle}
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {primaryAction && <Button href={primaryAction.href} size="lg">{primaryAction.text}</Button>}
          {secondaryAction && <Button href={secondaryAction.href} variant="secondary" size="lg">{secondaryAction.text}</Button>}
        </div>
      </div>
    </div>
  );
};

export default Hero;
