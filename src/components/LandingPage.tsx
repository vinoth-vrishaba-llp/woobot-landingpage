
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '@/components/ui/button'

gsap.registerPlugin(ScrollTrigger)

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const painPointsRef = useRef<HTMLDivElement>(null)
  const solutionRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)


  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo('.hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      )
      gsap.fromTo('.hero-btn',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, stagger: 0.2, ease: 'power3.out' }
      )
    }

    // Parallax effect on hero
    gsap.to('.hero-bg-element', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    // Pain points animations
    gsap.utils.toArray('.pain-item').forEach((item: any, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Solution animations
    gsap.fromTo('.solution-content',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: solutionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Features animations
    gsap.utils.toArray('.feature-card').forEach((card: any, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Trust/love animations
    gsap.utils.toArray('.trust-item').forEach((item: any, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Benefits parallax
    gsap.utils.toArray('.benefit-stat').forEach((stat: any, i) => {
      gsap.fromTo(stat,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })



    // Final CTA animations
    gsap.fromTo('.final-cta-content',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-50 via-white to-teal-50 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="WooPWA Logo"
                className="h-30 w-auto"
              />
            </div>
            <a href="https://woo-manager.hyperreach.site/">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden pt-20">
        <div className="hero-bg-element absolute top-20 right-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" aria-hidden="true" />
        <div className="hero-bg-element absolute bottom-20 left-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" aria-hidden="true" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-title inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold" role="text" aria-label="Badge: Built for busy store owners">
              BUILT FOR BUSY STORE OWNERS
            </div>
            <div className="hero-title mb-6">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight" role="heading" aria-level={1}>
                Turn Your WooCommerce Store into a
                <span className="text-emerald-600"> Powerful Mobile App</span>
              </div>
            </div>
            <div className="hero-subtitle mb-10">
              <div className="text-xl md:text-2xl text-gray-600 leading-relaxed" role="text">
                Manage orders, sales, customers, and analytics in real time with a fast, installable WooBot — no app store required.
              </div>
            </div>
            <div className="hero-btn flex justify-center items-center">
              <a href="https://woo-manager.hyperreach.site/">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  👉 Get Your Store App
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* PAIN POINTS SECTION */}
      <div ref={painPointsRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold" role="text" aria-label="Problem section">
                Managing WooCommerce from Desktop is Painful
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900" role="heading" aria-level={2}>
                We solve the daily headaches of online store management.
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="pain-item p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100">
                <div className="text-4xl mb-4" aria-hidden="true">💻</div>
                <div className="text-lg font-semibold text-gray-900 mb-2" role="heading" aria-level={3}>Need laptop to check orders 24/7</div>
                <div className="text-gray-600">Tied to your desk to monitor and manage orders around the clock.</div>
              </div>

              <div className="pain-item p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100">
                <div className="text-4xl mb-4" aria-hidden="true">🔔</div>
                <div className="text-lg font-semibold text-gray-900 mb-2" role="heading" aria-level={3}>Instant order & customer alerts missing</div>
                <div className="text-gray-600">No real-time notifications means missed opportunities and delayed responses.</div>
              </div>

              <div className="pain-item p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100">
                <div className="text-4xl mb-4" aria-hidden="true">📊</div>
                <div className="text-lg font-semibold text-gray-900 mb-2" role="heading" aria-level={3}>Analytics hard to track on mobile</div>
                <div className="text-gray-600">Complex dashboards make it impossible to monitor performance on the go.</div>
              </div>

              <div className="pain-item p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100">
                <div className="text-4xl mb-4" aria-hidden="true">⏰</div>
                <div className="text-lg font-semibold text-gray-900 mb-2" role="heading" aria-level={3}>Too much time wasted logging repeatedly</div>
                <div className="text-gray-600">Constant login cycles and navigation eat into your productive hours.</div>
              </div>

              <div className="pain-item p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100 md:col-span-2 lg:col-span-2">
                <div className="text-4xl mb-4" aria-hidden="true">💸</div>
                <div className="text-lg font-semibold text-gray-900 mb-2" role="heading" aria-level={3}>Native app development is too expensive</div>
                <div className="text-gray-600">Building separate iOS and Android apps costs thousands and takes months to develop.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SOLUTION SECTION */}
      <div ref={solutionRef} className="py-24 bg-gradient-to-br from-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="solution-content">
              <div className="inline-block mb-6 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold backdrop-blur-sm">
                One Smart WooBot to Control Your Entire Store
              </div>
              <div className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6" role="heading" aria-level={2}>
                Our WooCommerce Store Manager WooBot gives you full power to manage everything from your phone or desktop — fast, secure, and always connected.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl font-semibold"
                  onClick={() => document.getElementById('ready-to-upgrade')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div ref={featuresRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                Powerful Features
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900" role="heading" aria-level={2}>
                Everything You Need to Run Your Store
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <span className="text-3xl">📊</span>
                </div>
                <div className="text-xl font-bold text-gray-900 mb-3" role="heading" aria-level={3}>Smart Dashboard</div>
                <div className="text-gray-600 leading-relaxed">Live sales, orders, customers, revenue overview, and real-time abandoned cart alerts.</div>
              </div>

              <div className="feature-card p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <span className="text-3xl">📦</span>
                </div>
                <div className="text-xl font-bold text-gray-900 mb-3" role="heading" aria-level={3}>Order Management</div>
                <div className="text-gray-600 leading-relaxed">View all orders instantly. Filter by status, search by Order ID, and manage fulfillment easily.</div>
              </div>

              <div className="feature-card p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <span className="text-3xl">🛒</span>
                </div>
                <div className="text-xl font-bold text-gray-900 mb-3" role="heading" aria-level={3}>Abandoned Cart Tracking</div>
                <div className="text-gray-600 leading-relaxed">Track abandoned carts in real time and convert them into sales with faster follow-ups.</div>
              </div>

              <div className="feature-card p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <span className="text-3xl">📈</span>
                </div>
                <div className="text-xl font-bold text-gray-900 mb-3" role="heading" aria-level={3}>Advanced Analytics</div>
                <div className="text-gray-600 leading-relaxed">View sales trends, customer insights, and revenue reports with mobile-optimized charts.</div>
              </div>

              <div className="feature-card p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <span className="text-3xl">🏷️</span>
                </div>
                <div className="text-xl font-bold text-gray-900 mb-3" role="heading" aria-level={3}>Product Management</div>
                <div className="text-gray-600 leading-relaxed">Instantly update products, prices, and stock inventory in one place.</div>
              </div>

              <div className="feature-card p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                  <span className="text-3xl">⚙️</span>
                </div>
                <div className="text-xl font-bold text-gray-900 mb-3" role="heading" aria-level={3}>Store Settings</div>
                <div className="text-gray-600 leading-relaxed">Manage store connections, notifications, and feature toggles easily.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST / LOVE SECTION */}
      <div ref={trustRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                Why Clients Love This WooBot
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900" role="heading" aria-level={2}>
                Built for Growth & Performance
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="trust-item p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center" aria-hidden="true">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">No Play Store / App Store cost</div>
                </div>
                <div className="text-gray-600 ml-13">Install directly without paying store fees or waiting for approvals.</div>
              </div>

              <div className="trust-item p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center" aria-hidden="true">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">Install directly from browser</div>
                </div>
                <div className="text-gray-600 ml-13">One-click installation on any device without app store dependency.</div>
              </div>

              <div className="trust-item p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center" aria-hidden="true">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">Ultra-fast loading speeds</div>
                </div>
                <div className="text-gray-600 ml-13">Optimized PWA technology for instant page loads and smooth experience.</div>
              </div>

              <div className="trust-item p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center" aria-hidden="true">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">Lightweight & secure architecture</div>
                </div>
                <div className="text-gray-600 ml-13">Built with modern security standards and minimal resource usage.</div>
              </div>

              <div className="trust-item p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center" aria-hidden="true">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">Full cross-platform support</div>
                </div>
                <div className="text-gray-600 ml-13">Works seamlessly on iOS, Android, and all modern browsers.</div>
              </div>

              <div className="trust-item p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center" aria-hidden="true">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">Always up to date</div>
                </div>
                <div className="text-gray-600 ml-13">Automatic updates without user intervention or manual downloads.</div>
              </div>
            </div>

            <div className="trust-item bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12">
              <div className="text-white text-center">
                <div className="text-2xl md:text-3xl font-bold mb-6" role="heading" aria-level={3}>Perfect For</div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-4xl mb-3" aria-hidden="true">🏪</div>
                    <div className="text-lg font-semibold">WooCommerce Stores</div>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-4xl mb-3" aria-hidden="true">📚</div>
                    <div className="text-lg font-semibold">Online Course Sellers</div>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-4xl mb-3" aria-hidden="true">💎</div>
                    <div className="text-lg font-semibold">WooCommerce + Digital Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REAL BUSINESS BENEFITS */}
      <div ref={benefitsRef} className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold">
                Real Business Benefits
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white" role="heading" aria-level={2}>
                Proven Results That Matter
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="benefit-stat text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-6xl md:text-7xl font-bold text-emerald-400 mb-4">40%</div>
                <div className="text-xl text-white font-semibold mb-2">Faster Order Processing</div>
                <div className="text-gray-400">Process orders more efficiently with mobile management</div>
              </div>

              <div className="benefit-stat text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-6xl md:text-7xl font-bold text-emerald-400 mb-4">0</div>
                <div className="text-xl text-white font-semibold mb-2">Missed Order Alerts</div>
                <div className="text-gray-400">Real-time notifications ensure you never miss an order</div>
              </div>

              <div className="benefit-stat text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-6xl md:text-7xl font-bold text-emerald-400 mb-4">25%</div>
                <div className="text-xl text-white font-semibold mb-2">Higher Conversion Recovery</div>
                <div className="text-gray-400">Recover abandoned carts with instant follow-ups</div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* FINAL CTA SECTION */}
      <div ref={ctaRef} id="ready-to-upgrade" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="final-cta-content text-center p-8 md:p-12 bg-white rounded-3xl shadow-2xl">
              <div className="text-2xl font-bold text-emerald-600 mb-4"> Ready to Upgrade?</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" role="heading" aria-level={2}>
                Turn your store into a smart app today and manage everything on the go.
              </div>
              <div className="flex justify-center mt-8">
                <a href="https://woo-manager.hyperreach.site/">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Get Your WooBot Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">WooBot</div>
              <div className="text-gray-400">The future of WooCommerce store management.</div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <div className="text-gray-400">© 2025 WooBot Manager. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
