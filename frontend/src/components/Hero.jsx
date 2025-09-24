import React from 'react';
import Button from './Button';

const Hero = ({ title, subtitle, primaryAction, secondaryAction }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">{title}</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            {subtitle}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            {primaryAction && (
                <Button href={primaryAction.href} size="lg">
                  {primaryAction.text}
                </Button>
            )}
            {secondaryAction && (
                <a href={secondaryAction.href} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-semibold rounded-lg text-blue-600 bg-blue-100 hover:bg-blue-200 transition-all duration-200">
                    {secondaryAction.text}
                </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
