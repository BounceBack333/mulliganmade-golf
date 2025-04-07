import React from 'react';

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1505842465776-3d90f6167583?auto=format&fit=crop&w=1600&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-[#1E3D2F]/60 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            Welcome to Mulligan Made Golf
          </h1>
          <h2 className="text-lg md:text-xl font-sans font-light mb-6">
            The golf experience that makes every shot worth it.
          </h2>
          <button className="bg-[#D4AF37] text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-700 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Branding Section */}
      <section className="bg-[#FAF9F6] py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-3xl mb-4">⛳️</div>
          <h3 className="text-2xl font-serif mb-2">Who We Are</h3>
          <p className="text-gray-700">
            Mulligan Made Golf provides a unique golf experience focused on fun, growth, and personalized swing feedback.
          </p>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-12 px-6 bg-white">
        <h3 className="text-2xl font-serif text-center mb-10">What We Offer</h3>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          <div>
            <div className="text-3xl mb-2">🧠</div>
            <h4 className="font-bold mb-1">Instant Swing Feedback</h4>
            <p className="text-sm text-gray-600">Real-time insight on every swing.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🎥</div>
            <h4 className="font-bold mb-1">Replay Analysis</h4>
            <p className="text-sm text-gray-600">See your swing like never before.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">😄</div>
            <h4 className="font-bold mb-1">Golfing with Humor</h4>
            <p className="text-sm text-gray-600">Because good laughs = good swings.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#EDEDED] py-12 px-6 text-center">
        <h3 className="text-2xl font-serif mb-8">Testimonials</h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          <blockquote className="italic text-lg">
            “This app made me fall in love with golf again.” – [Name Here]
          </blockquote>
          <blockquote className="italic text-lg">
            “Finally, feedback that feels fun.” – [Name Here]
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3D2F] text-white py-8 px-6 text-center text-sm">
        <div className="mb-2 font-semibold text-lg">Mulligan Made Golf</div>
        <p className="mb-1">© 2025 Mulligan Made Golf. All rights reserved.</p>
        <p className="space-x-4">
          <a href="/privacy-policy" className="underline">Privacy Policy</a>
          <a href="/terms-of-service" className="underline">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
