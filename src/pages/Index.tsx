import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Target, Zap, BarChart3, Users, CheckCircle2, Play, X } from 'lucide-react';

const Index = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">TIEGAM M.</span>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
                Reclaim Your <span className="text-primary">Trading Hope</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Most forex traders lose hope after early losses. We teach you how to rebuild confidence, develop winning strategies, and actually profit from currency markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Start Learning <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setVideoOpen(true)}
                className="relative w-full group cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
                  alt="Trading demo"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 rounded-2xl transition-colors flex items-center justify-center">
                  <div className="bg-primary text-primary-foreground p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
              </button>
              <p className="text-center text-sm text-muted-foreground mt-3">Click to watch trading demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Problem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Forex trading sounds promising, but the reality for most traders is harsh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Losses Kill Motivation",
                description: "Most traders lose their first trades and lose confidence before they ever learn what actually works.",
                icon: "💔"
              },
              {
                title: "No Clear Strategy",
                description: "Without proper guidance, traders jump between strategies, chase losses, and make emotional decisions.",
                icon: "🔄"
              },
              {
                title: "Isolation & Frustration",
                description: "Struggling alone with no community support or mentorship makes it easy to give up.",
                icon: "😔"
              }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">The Better Way</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Memsu Forex transforms your trading journey with proven methods and community support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Master Proven Strategies",
                  description: "Learn battle-tested trading systems from experienced professionals who've turned losses into profits."
                },
                {
                  title: "Build Real Confidence",
                  description: "Start with micro trades, track your progress, and celebrate wins. Confidence grows through consistent small victories."
                },
                {
                  title: "Join a Winning Community",
                  description: "Trade alongside thousands of successful traders. Share insights, learn from others' experiences, and never feel alone."
                },
                {
                  title: "Risk Management First",
                  description: "Protect your capital with professional risk management techniques that separate successful traders from the rest."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 border border-border">
                <div className="bg-gradient-to-br from-accent to-primary/80 rounded-lg p-8 text-foreground">
                  <Zap className="w-16 h-16 mb-4 opacity-80" />
                  <p className="text-sm font-semibold mb-2">Transformation Timeline</p>
                  <div className="space-y-3 text-sm">
                    <p><span className="font-bold">Week 1-2:</span> Learn fundamentals</p>
                    <p><span className="font-bold">Week 3-4:</span> Execute first trades</p>
                    <p><span className="font-bold">Month 2-3:</span> Build consistency</p>
                    <p><span className="font-bold">Month 4-6:</span> Achieve profitability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How Memsu Forex Works</h2>
            <p className="text-xl text-muted-foreground">Your step-by-step path to trading success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Assess Your Level",
                description: "Complete a quick assessment to understand your current trading knowledge and goals."
              },
              {
                step: "2",
                title: "Learn Core Strategies",
                description: "Access comprehensive video courses on technical analysis, risk management, and trading psychology."
              },
              {
                step: "3",
                title: "Practice Risk-Free",
                description: "Trade on demo accounts with real market data to build skills without risking real money."
              },
              {
                step: "4",
                title: "Trade & Grow",
                description: "Start with small real trades, track performance, and scale up as your confidence grows."
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-card border border-border rounded-xl p-8 text-center h-full">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What You'll Achieve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of traders who've transformed their financial futures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                metric: "92%",
                label: "Traders Achieve Profitability",
                description: "Within 6 months of consistent trading with our system"
              },
              {
                metric: "3.5x",
                label: "Average Return on Investment",
                description: "Compared to S&P 500 average annual returns"
              },
              {
                metric: "15k+",
                label: "Active Community Members",
                description: "Learning, sharing, and growing together"
              },
              {
                metric: "24/7",
                label: "Market Access",
                description: "Trade forex any time, from anywhere in the world"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-8">
                <p className="text-4xl font-bold text-primary mb-2">{item.metric}</p>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Trader Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Chen",
                role: "Software Engineer",
                quote: "I lost $3,000 in my first month. Memsu taught me that losses are part of learning. Now I'm profitable and loving it.",
                avatar: "👨‍💼"
              },
              {
                name: "Sarah Williams",
                role: "Freelance Designer",
                quote: "The community support was game-changing. Having people who understood my struggles made all the difference.",
                avatar: "👩‍💼"
              },
              {
                name: "Ahmed Hassan",
                role: "Business Owner",
                quote: "From hopeless to making consistent profits. This isn't just about trading—it's about mindset and discipline."
              }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{item.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Reclaim Your Trading Hope?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of traders who've transformed their relationship with forex and built real wealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-colors text-lg">
              Schedule a Call
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            ✓ Free assessment • ✓ No credit card required • ✓ Start trading in minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">Memsu Forex</span>
              </div>
              <p className="text-sm text-muted-foreground">Transforming traders, one strategy at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Tools</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Memsu Forex. All rights reserved. | Disclaimer: Trading carries risk. Past performance doesn't guarantee future results.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
