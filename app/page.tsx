"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { FloatingElements } from "@/components/floating-elements"
import { ModernCard } from "@/components/modern-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { JeepneyIcon } from "@/components/jeepney-icon"
import {
  MapPin,
  MessageCircle,
  Route,
  Bot,
  Star,
  ArrowRight,
  Menu,
  X,
  Download,
  Users,
  Building2,
  Code,
  Globe,
  Heart,
  Database,
  Compass,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Add PWA install functionality
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallButton, setShowInstallButton] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallButton(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handlePWAInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === "accepted") {
        setDeferredPrompt(null)
        setShowInstallButton(false)
      }
    } else {
      alert('To install this app, use your browser\'s "Add to Home Screen" option in the menu.')
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMapClick = () => {
    window.open("/map", "_blank")
  }

  const newLocal = "animate-slide-up"
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-effect animate-slide-up">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center glow-effect animate-glow">
                <JeepneyIcon className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse-slow"></div>
            </div>
            <span className="text-2xl font-bold">
              <AnimatedGradientText>GoBacolod</AnimatedGradientText>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 animate-slide-in-right">
            <a
              href="#solutions"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium hover:scale-105"
            >
              Solutions
            </a>
            <a
              href="#users"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium hover:scale-105"
            >
              For You
            </a>
            <a
              href="#features"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium hover:scale-105"
            >
              Features
            </a>
            <a
              href="#developers"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium hover:scale-105"
            >
              Developers
            </a>
            <ThemeToggle />
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow">
              Get Started
            </Button>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:scale-110 transition-transform"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/20 dark:border-white/10 animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#solutions"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Solutions
              </a>
              <a
                href="#users"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                For You
              </a>
              <a
                href="#features"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#developers"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Developers
              </a>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 pt-32 pb-20 text-center overflow-hidden">
        <FloatingElements />

        <div
          className={`relative z-10 transition-all duration-1000 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-800 dark:text-yellow-200 hover:from-yellow-200 hover:to-orange-200 dark:hover:from-yellow-800/40 dark:hover:to-orange-800/40 transition-all duration-300 text-xs px-3 py-1 animate-bounce-slow hover:scale-110">
            🚌 Commute & Travel Bacolod • Made for Bacolodnons
          </Badge>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-slide-up">
            Your Hyperlocal
            <br />
            <AnimatedGradientText className="text-4xl md:text-6xl lg:text-7xl text-shimmer">Bacolod Guide</AnimatedGradientText>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Finally, a travel app that truly understands Bacolod! Get real-time jeepney routes, chat with our local AI
            assistant, and discover the best of our city - all in one culturally-aware platform.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={handleMapClick}
              className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 glow-effect hover:scale-105 animate-glow"
            >
              <MapPin className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Explore Bacolod Now
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handlePWAInstall}
              className="group px-8 py-3 rounded-xl border hover:border-blue-500 dark:hover:border-blue-400 glass-card hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Download className="w-4 h-4 mr-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
              Install PWA
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-5xl mx-auto animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/50 glass-card hover:scale-105 transition-all duration-700">
              <img
                src="/placeholder.svg?height=600&width=900&text=GoBacolod+Map+Interface+with+Jeepney+Routes+and+Local+POIs"
                alt="GoBacolod Map Interface showing jeepney routes and local points of interest"
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
            </div>

            {/* Enhanced Floating badges */}
            <div className="absolute -top-8 -left-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl animate-float hover:scale-110 transition-transform cursor-pointer">
              <Heart className="w-4 h-4 inline mr-2" />
              Made for Bacolod
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl animate-float-delayed hover:scale-110 transition-transform cursor-pointer">
              <Bot className="w-4 h-4 inline mr-2" />
              Local AI Assistant
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Preview Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-800 dark:text-green-200 text-xs px-3 py-1">
                🤖 Meet Your Local AI Assistant
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Ask Anything About <AnimatedGradientText>Bacolod</AnimatedGradientText>
              </h2>
              <p className="text-base text-muted-foreground">
                Our AI knows Bacolod inside and out - from the best chicken inasal spots to the fastest jeepney routes.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="space-y-3">
                {/* Sample Chat Messages */}
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 max-w-md">
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Kumusta! I'm your Bacolod AI guide. Ask me about jeepney routes, local food, or anything about our
                      beautiful city! 🏙️
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-blue-500 rounded-lg px-3 py-2 max-w-md">
                    <p className="text-sm text-white">Where's the best chicken inasal near SM City Bacolod?</p>
                  </div>
                  <div className="w-7 h-7 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 max-w-md">
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      Perfect timing! Try <strong>Chicken House</strong> or <strong>Aida's Chicken</strong> - both are
                      walking distance from SM. Take the Bata-Mandalagan jeepney, it stops right there! 🍗
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Try the AI Assistant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section
        id="solutions"
        className="py-24 bg-gradient-to-br from-red-50/50 to-pink-50/50 dark:from-red-900/10 dark:to-pink-900/10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-xs px-3 py-1 hover:scale-105 transition-transform">
              🎯 Problems We Solve
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Finally, Solutions for
              <br />
              <AnimatedGradientText>Real Bacolod Problems</AnimatedGradientText>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We've identified the key challenges that Bacolodnons, tourists, and local government face every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModernCard gradient="from-red-50 to-pink-100" className="animate-slide-in-left">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <JeepneyIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Confusing Route Info</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No clear, accessible information about jeepney routes and schedules
              </p>
            </ModernCard>

            <ModernCard
              gradient="from-orange-50 to-yellow-100"
              className={`${newLocal} [animation-delay:0.1s]`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">No Local Assistant</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Missing hyperlocal guidance for Bacolod-specific questions and culture
              </p>
            </ModernCard>

            <ModernCard
              gradient="from-blue-50 to-cyan-100"
              className="animate-slide-in-right [animation-delay:0.2s]"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Limited Data Access</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Government and developers lack access to modern jeepney data
              </p>
            </ModernCard>

            <ModernCard
              gradient="from-purple-50 to-indigo-100"
              className="animate-slide-in-left [animation-delay:0.3s]"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Generic Apps</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No app truly personalized to Bacolod's unique culture and needs
              </p>
            </ModernCard>

            <ModernCard
              gradient="from-green-50 to-emerald-100"
              className="animate-slide-up [animation-delay:0.4s]"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Missed Business Opportunities</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Local businesses can't effectively reach commuters and travelers
              </p>
            </ModernCard>

            <ModernCard
              gradient="from-teal-50 to-blue-100"
              className="animate-slide-in-right [animation-delay:0.5s]"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Fragmented Discovery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Scattered POI information makes exploration difficult for everyone
              </p>
            </ModernCard>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section
        id="users"
        className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-slide-up">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-sm px-4 py-2 hover:scale-105 transition-all duration-300 shadow-md">
              👥 Built For Everyone in Bacolod
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              One Platform,
              <br />
              <AnimatedGradientText>Three Unique Experiences</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From daily commuters to curious tourists to innovative developers — we've crafted specialized features 
              that serve every member of our Bacolod community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group text-center animate-slide-in-left">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto text-white shadow-xl animate-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Users className="w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <Heart className="w-4 h-4 text-yellow-900" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">For Locals</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Your daily companion for navigating Bacolod. Get real-time updates, discover hidden gems, 
                  and connect with your community like never before.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800/30">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Smart commute optimization & live updates
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Local business discovery & support
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Cultural events & neighborhood insights
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Community-driven recommendations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 rounded-2xl flex items-center justify-center mx-auto text-white shadow-xl animate-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Globe className="w-10 h-10" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center animate-bounce shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                >
                  <MapPin className="w-4 h-4 text-emerald-900" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">For Tourists</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Experience Bacolod authentically. Get insider knowledge, cultural context, 
                  and seamless navigation to make your visit unforgettable.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-green-100 dark:border-green-800/30">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Tourist-friendly routes & transportation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Cultural attractions & local experiences
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Authentic food & dining recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      Safety tips & local etiquette guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group text-center animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto text-white shadow-xl animate-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Code className="w-10 h-10" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full flex items-center justify-center animate-bounce shadow-lg"
                  style={{ animationDelay: "1s" }}
                >
                  <Database className="w-4 h-4 text-violet-900" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">For Developers & Gov</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Build the future of smart cities. Access comprehensive APIs and contribute to 
                  Bacolod's digital transformation with our modern infrastructure.
                </p>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-4 border border-purple-100 dark:border-purple-800/30">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      Real-time transportation data APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      Developer tools & comprehensive docs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      Urban planning insights & analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      Open data initiatives & collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MVP Features Section */}
      <section id="features" className="py-24 glass-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs px-3 py-1 hover:scale-105 transition-transform">
              🚀 MVP Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Features That
              <br />
              <AnimatedGradientText>Make the Difference</AnimatedGradientText>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Our minimum viable product focuses on the essential features that solve real problems for Bacolodnons.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ModernCard gradient="from-blue-50 to-blue-100" className="animate-slide-in-left">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 group-hover:scale-105 transition-all duration-300 shadow-lg animate-glow">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Interactive Route Map</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Comprehensive map showing all jeepney routes with real-time information, stops, and schedules.
              </p>
              <ul className="text-left space-y-1 text-muted-foreground text-xs">
                <li>• Live jeepney tracking</li>
                <li>• Route optimization</li>
                <li>• Stop information</li>
                <li>• Fare calculations</li>
              </ul>
            </ModernCard>

            <ModernCard
              gradient="from-green-50 to-green-100"
              className="animate-slide-up [animation-delay:0.2s]"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 group-hover:scale-105 transition-all duration-300 shadow-lg animate-glow">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Custom Bacolod Chatbot</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                AI assistant trained specifically on Bacolod culture, locations, and local knowledge.
              </p>
              <ul className="text-left space-y-1 text-muted-foreground text-xs">
                <li>• Hyperlocal recommendations</li>
                <li>• Cultural context</li>
                <li>• Local language support</li>
                <li>• 24/7 assistance</li>
              </ul>
            </ModernCard>

            <ModernCard
              gradient="from-purple-50 to-purple-100"
              className="animate-slide-in-right [animation-delay:0.4s]"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 group-hover:scale-105 transition-all duration-300 shadow-lg animate-glow">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">MCP Server</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Modern data server providing structured access to transportation and city data.
              </p>
              <ul className="text-left space-y-1 text-muted-foreground text-xs">
                <li>• API endpoints</li>
                <li>• Real-time data feeds</li>
                <li>• Developer documentation</li>
                <li>• Government integration</li>
              </ul>
            </ModernCard>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section
        id="developers"
        className="py-24 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4 bg-blue-100/20 text-blue-200 text-sm px-4 py-2 hover:scale-105 transition-transform">
              👨‍💻 For Developers & Government
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build the Future of
              <br />
              <AnimatedGradientText>Bacolod Transportation</AnimatedGradientText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Access our comprehensive API and contribute to making Bacolod a smarter, more connected city.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 pl-28">
              <div className="animate-slide-in-left">
                <h3 className="text-2xl font-bold mb-4">API Access</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-md">
                  Get structured access to real-time jeepney data and routes through our modern MCP server.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">RESTful API endpoints</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">Real-time data streams</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">Comprehensive docs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">Rate limiting & auth</span>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <h3 className="text-2xl font-bold mb-4">Government Integration</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-md">
                  Partner with us to improve urban planning and transportation management.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">Transportation analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">Route optimization insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">Public data initiatives</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">Smart city integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Code className="w-5 h-5 mr-2" />
              Access Developer Portal
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 w-20 h-20 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s", animationDuration: "3s" }}></div>
          <div className="absolute top-16 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: "1s", animationDuration: "4s" }}></div>
          <div className="absolute bottom-8 left-1/4 w-12 h-12 bg-green-300 rounded-full animate-bounce" style={{ animationDelay: "2s", animationDuration: "3.5s" }}></div>
          <div className="absolute bottom-12 right-1/3 w-14 h-14 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: "0.5s", animationDuration: "2.8s" }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="group animate-slide-up transform hover:scale-110 transition-all duration-700 cursor-pointer">
              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-yellow-300 transition-all duration-500 transform group-hover:rotate-3">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping group-hover:bg-yellow-300"></div>
              </div>
              <div className="text-blue-100 text-sm font-medium group-hover:text-white transition-colors duration-300">Jeepney Routes</div>
              <div className="w-8 h-1 bg-yellow-400 mx-auto mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            <div className="group animate-slide-up transform hover:scale-110 transition-all duration-700 cursor-pointer" style={{ animationDelay: "0.1s" }}>
              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-green-300 transition-all duration-500 transform group-hover:rotate-3">
                  <AnimatedCounter end={15} suffix="K+" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping group-hover:bg-green-300" style={{ animationDelay: "0.2s" }}></div>
              </div>
              <div className="text-blue-100 text-sm font-medium group-hover:text-white transition-colors duration-300">Local Users</div>
              <div className="w-8 h-1 bg-green-400 mx-auto mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            <div className="group animate-slide-up transform hover:scale-110 transition-all duration-700 cursor-pointer" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-purple-300 transition-all duration-500 transform group-hover:rotate-3">
                  <AnimatedCounter end={200} suffix="+" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-ping group-hover:bg-purple-300" style={{ animationDelay: "0.4s" }}></div>
              </div>
              <div className="text-blue-100 text-sm font-medium group-hover:text-white transition-colors duration-300">Local Businesses</div>
              <div className="w-8 h-1 bg-purple-400 mx-auto mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            <div className="group animate-slide-up transform hover:scale-110 transition-all duration-700 cursor-pointer" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-yellow-300 transition-all duration-500 transform group-hover:rotate-3 flex items-center justify-center">
                  4.9
                  <Star className="w-4 h-4 ml-1 text-yellow-400 fill-current animate-pulse group-hover:animate-spin group-hover:text-yellow-300" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping group-hover:bg-yellow-300" style={{ animationDelay: "0.6s" }}></div>
              </div>
              <div className="text-blue-100 text-sm font-medium group-hover:text-white transition-colors duration-300">User Rating</div>
              <div className="w-8 h-1 bg-yellow-400 mx-auto mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/10 dark:to-green-900/10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-800 dark:text-yellow-200 text-sm px-4 py-2 animate-bounce-slow hover:scale-105 transition-transform">
            🏠 Ready to Experience Bacolod Differently?
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 animate-slide-up">
            Join the
            <br />
            <AnimatedGradientText className="text-shimmer">GoBacolod Community</AnimatedGradientText>
          </h2>
          <p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Be part of the movement to make Bacolod more accessible, connected, and culturally aware for everyone.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={handleMapClick}
              className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-lg px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 glow-effect hover:scale-105 animate-glow"
            >
              <MapPin className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Start Exploring Bacolod
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 glass-card hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Bot className="w-5 h-5 mr-3" />
              Chat with Local AI
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center animate-glow">
                  <JeepneyIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-3xl font-bold">
                  <AnimatedGradientText>GoBacolod</AnimatedGradientText>
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Your hyperlocal travel companion, made with ❤️ for Bacolod City. Connecting locals, tourists, and
                developers through smart transportation solutions.
              </p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-semibold mb-6 text-base">For Users</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Route Planning
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Local Discovery
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  AI Assistant
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Cultural Guide
                </li>
              </ul>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-semibold mb-6 text-base">For Developers</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  API Documentation
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  MCP Server
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Data Access
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Integration Guide
                </li>
              </ul>
            </div>
            <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <h4 className="font-semibold mb-6 text-base">Connect</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Community Forum
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Facebook Group
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Developer Discord
                </li>
                <li className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  Newsletter
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm animate-fade-in">
            <p>&copy; 2024 GoBacolod. All rights reserved. Proudly made for Bacolod City, Philippines. 🇵🇭</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
