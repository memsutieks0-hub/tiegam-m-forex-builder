import React, { useState } from 'react';
import { ArrowRight, Heart, AlertCircle, TrendingUp, BookOpen, Brain } from 'lucide-react';

const GetStarted = () => {
  const [selectedTab, setSelectedTab] = useState('basics');
  const [expandedMistake, setExpandedMistake] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">Memsu Forex</span>
          </a>
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Back Home
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-semibold">For Beginners & Those Who Lost Hope</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Trading <span className="text-primary">Fresh Start</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're completely new to forex or you've lost money and lost hope, this guide will teach you the fundamentals and show you that recovery is possible.
          </p>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-destructive/10 to-accent/10 border border-destructive/20 rounded-2xl p-8 mb-12">
            <div className="flex gap-4">
              <Heart className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">If You've Lost Hope...</h2>
                <p className="text-muted-foreground mb-4">
                  You're not alone. 90% of retail traders lose money in their first year. But here's what separates the winners from those who quit:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Winners treat losses as tuition.</strong> Every loss teaches you something valuable.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>They have a system, not emotions.</strong> A proven strategy removes guesswork.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>They manage risk first, profits second.</strong> Protecting capital is the foundation.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>They have a community.</strong> Support and accountability accelerate success.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🚀", title: "Recovery is Real", description: "Traders have recovered from 50%+ losses and gone on to make millions. Your story isn't over." },
              { icon: "📈", title: "Time is Your Friend", description: "With proper education and discipline, 6 months of consistent trading can change everything." },
              { icon: "💪", title: "You're Stronger Now", description: "Having lost money, you understand the stakes better than 95% of traders. That's an advantage." }
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Beginner Trading Fundamentals</h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 bg-secondary/30 p-2 rounded-lg">
            {[
              { id: 'basics', label: '📚 The Basics' },
              { id: 'mistakes', label: '⚠️ Common Mistakes' },
              { id: 'recovery', label: '💚 Recovery Path' },
              { id: 'mindset', label: '🧠 Mindset' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                  selectedTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-card border border-border rounded-2xl p-8">
            {selectedTab === 'basics' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    What is Forex Trading?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Forex (Foreign Exchange) is trading currencies. You buy one currency and sell another, profiting from the price difference.
                  </p>
                  <div className="bg-secondary/30 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-foreground mb-2">Example:</p>
                    <p className="text-muted-foreground">
                      You buy EUR/USD at 1.0800 (meaning 1 Euro = 1.0800 USD)<br/>
                      Price rises to 1.0850<br/>
                      You sell and make a profit of 0.0050 per unit
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary/30 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-4">Key Terms</h4>
                    <ul className="space-y-3">
                      <li>
                        <p className="font-semibold text-foreground text-sm">Pip (Percentage in Point)</p>
                        <p className="text-xs text-muted-foreground">Smallest price movement. Usually 0.0001</p>
                      </li>
                      <li>
                        <p className="font-semibold text-foreground text-sm">Lot Size</p>
                        <p className="text-xs text-muted-foreground">Amount of currency you're trading (Standard: 100,000 units)</p>
                      </li>
                      <li>
                        <p className="font-semibold text-foreground text-sm">Leverage</p>
                        <p className="text-xs text-muted-foreground">Borrowed money to increase trade size (1:100 means $1 controls $100)</p>
                      </li>
                      <li>
                        <p className="font-semibold text-foreground text-sm">Spread</p>
                        <p className="text-xs text-muted-foreground">Difference between buy and sell price (your cost)</p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-4">Why Forex?</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2"><span className="text-accent">✓</span><span className="text-sm text-muted-foreground">Trades 24/5 globally</span></li>
                      <li className="flex gap-2"><span className="text-accent">✓</span><span className="text-sm text-muted-foreground">Highest liquidity</span></li>
                      <li className="flex gap-2"><span className="text-accent">✓</span><span className="text-sm text-muted-foreground">Low spreads = lower costs</span></li>
                      <li className="flex gap-2"><span className="text-accent">✓</span><span className="text-sm text-muted-foreground">Can profit in up AND down markets</span></li>
                      <li className="flex gap-2"><span className="text-accent">✓</span><span className="text-sm text-muted-foreground">Start with small capital</span></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-4">The 3 Trading Styles</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: "Scalping", time: "Seconds to minutes", profit: "Small profits per trade", best: "For: Active traders" },
                      { title: "Day Trading", time: "Minutes to hours", profit: "Medium profits per trade", best: "For: Part-time traders" },
                      { title: "Swing Trading", time: "Hours to days", profit: "Larger profits per trade", best: "For: Beginners" }
                    ].map((style, i) => (
                      <div key={i} className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4">
                        <h5 className="font-semibold text-foreground mb-2">{style.title}</h5>
                        <p className="text-xs text-muted-foreground mb-2"><strong>Duration:</strong> {style.time}</p>
                        <p className="text-xs text-muted-foreground mb-2"><strong>Profit:</strong> {style.profit}</p>
                        <p className="text-xs text-accent">{style.best}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'mistakes' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                  Why Most Traders Lose (And How to Avoid It)
                </h3>

                {[
                  { title: "❌ Trading Without a Plan", problem: "Jumping into trades based on gut feeling", consequence: "Emotional decisions lead to losses", solution: "Create a trading plan BEFORE opening a position. Know your entry, exit, and stop loss." },
                  { title: "❌ Over-leveraging", problem: "Using too much leverage to make quick money", consequence: "One bad trade wipes out your account", solution: "Start with 1:10 or 1:20 leverage. Risk only 1-2% of your account per trade." },
                  { title: "❌ Ignoring Stop Losses", problem: "Hoping a losing trade will recover", consequence: "Small losses become catastrophic", solution: "ALWAYS place a stop loss. Accept small losses to protect your capital." },
                  { title: "❌ Trading Too Much", problem: "Opening 10+ trades per day", consequence: "Spreads eat profits, mistakes multiply", solution: "Quality over quantity. 1-2 high-probability trades per day is enough." },
                  { title: "❌ No Risk Management", problem: "Risking $500 per trade on $1,000 account", consequence: "One loss = game over", solution: "Risk 1-2% max per trade. Account × 1% = max loss per trade" },
                  { title: "❌ Chasing Losses", problem: "Opening bigger trade after a loss", consequence: "Emotional trading leads to more losses", solution: "If you have a losing day, STOP trading. Take a break and come back tomorrow." }
                ].map((mistake, i) => (
                  <div key={i} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <button
                      onClick={() => setExpandedMistake(expandedMistake === i ? -1 : i)}
                      className="w-full p-4 bg-secondary/30 hover:bg-secondary/50 transition-colors text-left flex items-center justify-between"
                    >
                      <span className="font-semibold text-foreground">{mistake.title}</span>
                      <span className={`transition-transform ${expandedMistake === i ? 'rotate-180' : ''}`}>▼</span>
                    </button>
                    {expandedMistake === i && (
                      <div className="p-4 space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-1">The Problem:</p>
                          <p className="text-sm text-muted-foreground">{mistake.problem}</p>
                        </div>
                        <div className="bg-destructive/10 border border-destructive/20 rounded p-3">
                          <p className="text-sm font-semibold text-destructive mb-1">Why It Fails:</p>
                          <p className="text-sm text-muted-foreground">{mistake.consequence}</p>
                        </div>
                        <div className="bg-accent/10 border border-accent/20 rounded p-3">
                          <p className="text-sm font-semibold text-accent mb-1">✓ The Solution:</p>
                          <p className="text-sm text-muted-foreground">{mistake.solution}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'recovery' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-accent" />
                    The Recovery Roadmap
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    If you've lost money, here's exactly how to recover and build a profitable trading career:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { phase: "Week 1: Acceptance & Learning", icon: "🧠", steps: ["Accept your losses as tuition", "Identify what went wrong", "Study the fundamentals", "Join our community"], timeline: "1 week" },
                    { phase: "Week 2-3: Strategy Development", icon: "📊", steps: ["Learn 1 proven strategy", "Backtest on historical data", "Create your trading plan", "Set up demo account"], timeline: "2 weeks" },
                    { phase: "Week 4-8: Demo Trading", icon: "🎮", steps: ["Trade on demo with real data", "Execute 50+ trades", "Track every trade", "Achieve 60%+ win rate"], timeline: "4-5 weeks" },
                    { phase: "Month 3: Micro Live Trading", icon: "🚀", steps: ["Start with micro lots", "Risk only 1% per trade", "Execute 20-30 trades", "Build confidence"], timeline: "4 weeks" },
                    { phase: "Month 4-6: Scale & Profit", icon: "📈", steps: ["Gradually increase size", "Maintain discipline", "Reinvest profits", "Achieve profitability"], timeline: "12 weeks" }
                  ].map((phase, i) => (
                    <div key={i} className="border-l-4 border-primary pl-6 py-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-3xl mb-2">{phase.icon}</div>
                          <h4 className="text-lg font-bold text-foreground">{phase.phase}</h4>
                        </div>
                        <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">{phase.timeline}</span>
                      </div>
                      <ul className="space-y-2">
                        {phase.steps.map((step, j) => (
                          <li key={j} className="flex gap-2 text-muted-foreground">
                            <span className="text-accent font-bold">✓</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-lg p-6">
                  <p className="text-foreground font-semibold mb-2">💡 The Key to Recovery:</p>
                  <p className="text-muted-foreground">
                    Most traders fail because they rush. They lose money, feel desperate, and jump back in with bigger bets. Instead, successful traders take time to learn properly, practice on demo, then scale slowly. This is boring but it works. Follow this path and you WILL become profitable.
                  </p>
                </div>
              </div>
            )}

            {selectedTab === 'mindset' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Brain className="w-6 h-6 text-primary" />
                    The Mindset Shift
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Trading success is 90% mindset and 10% strategy. Here's how to think like a profitable trader:
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-foreground text-lg mb-3">Losses</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">❌ This is a disaster, I'm ruined</p>
                      </div>
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">✓ This is valuable data. What can I learn?</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground text-lg mb-3">Risk</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">❌ I need to make it back quickly</p>
                      </div>
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">✓ I'll protect capital and rebuild slowly</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground text-lg mb-3">Discipline</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">❌ I'll break my rules if I see a sure thing</p>
                      </div>
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">✓ My rules protect me. I follow them always</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground text-lg mb-3">Profits</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">❌ Every trade must make money</p>
                      </div>
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">✓ I'm building a system with positive edge</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-lg p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Daily Mindset Practices</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><span className="text-accent font-bold">1.</span><span className="text-muted-foreground"><strong>Morning:</strong> Review your trading plan</span></li>
                    <li className="flex gap-3"><span className="text-accent font-bold">2.</span><span className="text-muted-foreground"><strong>Before Each Trade:</strong> Ask "Is this my setup?"</span></li>
                    <li className="flex gap-3"><span className="text-accent font-bold">3.</span><span className="text-muted-foreground"><strong>After Each Trade:</strong> Write down what happened</span></li>
                    <li className="flex gap-3"><span className="text-accent font-bold">4.</span><span className="text-muted-foreground"><strong>Evening:</strong> Review your journal</span></li>
                    <li className="flex gap-3"><span className="text-accent font-bold">5.</span><span className="text-muted-foreground"><strong>Weekly:</strong> Analyze your performance</span></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Reference Card */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Beginner's Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "✓ DO This", items: ["Risk 1-2% per trade", "Use a stop loss on every trade", "Trade with a plan", "Keep a trading journal", "Practice on demo first", "Follow your system", "Learn continuously"], color: "accent" },
              { title: "✗ DON'T Do This", items: ["Risk more than 2% per trade", "Trade without a stop loss", "Trade on emotion", "Chase losses", "Jump to live trading", "Break your rules", "Trade without a plan"], color: "destructive" }
            ].map((section, i) => (
              <div key={i} className={`border-l-4 ${section.color === 'accent' ? 'border-accent' : 'border-destructive'} bg-card rounded-lg p-6`}>
                <h3 className={`text-xl font-bold mb-4 ${section.color === 'accent' ? 'text-accent' : 'text-destructive'}`}>{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-muted-foreground text-sm">
                      <span className={section.color === 'accent' ? 'text-accent' : 'text-destructive'}>{section.color === 'accent' ? '✓' : '✗'}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Start Your Recovery?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            You now have the knowledge. The next step is taking action with a supportive community behind you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Join Our Community <ArrowRight className="w-5 h-5" />
            </button>
            <a href="/" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Back to Home
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            ✓ Free assessment • ✓ No credit card required • ✓ Start today
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 Memsu Forex. All rights reserved. | <a href="#" className="hover:text-foreground">Privacy</a> | <a href="#" className="hover:text-foreground">Terms</a></p>
        </div>
      </footer>
    </div>
  );
};

export default GetStarted;