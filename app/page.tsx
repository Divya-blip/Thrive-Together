"use client"

import { useState, useEffect } from "react"

interface Event {
  id: number
  title: string
  date: string
  time: string
  category: string
  type: string
  description: string
  spots: number
  enrolled: number
  age: string
}

interface Article {
  id: number
  title: string
  author: string
  date: string
  category: string
  excerpt: string
  readTime: string
}

export default function ThriveTogether() {
  const [activeSection, setActiveSection] = useState("events")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [events, setEvents] = useState<Event[]>([])
  const [articles, setArticles] = useState<Article[]>([])
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([])
  const [activeFilter, setActiveFilter] = useState("all")

  // Sample data
  const sampleEvents: Event[] = [
    {
      id: 1,
      title: "Sensory-Friendly Art Workshop",
      date: "2024-01-15",
      time: "2:00 PM - 4:00 PM",
      category: "sensory",
      type: "Creative Arts",
      description: "A calm, structured art session with dimmed lights and quiet music.",
      spots: 8,
      enrolled: 5,
      age: "6-12 years",
    },
    {
      id: 2,
      title: "Social Skills Playground",
      date: "2024-01-18",
      time: "10:00 AM - 12:00 PM",
      category: "social",
      type: "Social Skills",
      description: "Structured play activities to practice social interaction in a supportive environment.",
      spots: 10,
      enrolled: 7,
      age: "5-10 years",
    },
    {
      id: 3,
      title: "Music Therapy Session",
      date: "2024-01-20",
      time: "3:00 PM - 4:30 PM",
      category: "sensory",
      type: "Music & Movement",
      description: "Therapeutic music activities designed to support emotional regulation.",
      spots: 6,
      enrolled: 4,
      age: "4-8 years",
    },
    {
      id: 4,
      title: "Adaptive Swimming",
      date: "2024-01-22",
      time: "11:00 AM - 12:30 PM",
      category: "physical",
      type: "Physical Activity",
      description: "Swimming lessons adapted for children with autism in a quiet pool environment.",
      spots: 4,
      enrolled: 2,
      age: "6-14 years",
    },
    {
      id: 5,
      title: "Cooking Skills Workshop",
      date: "2024-01-25",
      time: "1:00 PM - 3:00 PM",
      category: "creative",
      type: "Life Skills",
      description: "Learn basic cooking skills in a structured, supportive environment.",
      spots: 8,
      enrolled: 6,
      age: "8-16 years",
    },
    {
      id: 6,
      title: "Nature Walk & Discovery",
      date: "2024-01-28",
      time: "9:00 AM - 11:00 AM",
      category: "physical",
      type: "Outdoor Activity",
      description: "Guided nature walk with sensory exploration activities.",
      spots: 12,
      enrolled: 8,
      age: "5-12 years",
    },
  ]

  const sampleArticles: Article[] = [
    {
      id: 1,
      title: "Understanding Sensory Processing in Autism",
      author: "Dr. Sarah Mitchell",
      date: "2024-01-10",
      category: "Sensory",
      excerpt:
        "Learn how sensory processing differences affect daily life and practical strategies to help your child.",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Building Social Skills Through Play",
      author: "Dr. Michael Chen",
      date: "2024-01-08",
      category: "Social Development",
      excerpt: "Discover how structured play activities can naturally develop social skills in children with autism.",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Creating Calm Spaces at Home",
      author: "Lisa Rodriguez, OT",
      date: "2024-01-05",
      category: "Environment",
      excerpt: "Practical tips for designing sensory-friendly spaces that promote regulation and comfort.",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "Communication Strategies That Work",
      author: "Dr. Amanda Foster",
      date: "2024-01-03",
      category: "Communication",
      excerpt: "Evidence-based approaches to support communication development in children with autism.",
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "Preparing for School Transitions",
      author: "Jennifer Walsh, M.Ed",
      date: "2024-01-01",
      category: "Education",
      excerpt: "Help your child navigate school transitions with confidence using these proven strategies.",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "The Power of Routine and Structure",
      author: "Dr. Robert Kim",
      date: "2023-12-28",
      category: "Daily Living",
      excerpt: "How predictable routines can reduce anxiety and increase independence for children with autism.",
      readTime: "6 min read",
    },
  ]

  useEffect(() => {
    setEvents(sampleEvents)
    setArticles(sampleArticles)
    setFilteredEvents(sampleEvents)
  }, [])

  const filterEvents = (category: string) => {
    setActiveFilter(category)
    if (category === "all") {
      setFilteredEvents(events)
    } else {
      setFilteredEvents(events.filter((event) => event.category === category))
    }
  }

  const enrollInEvent = (eventId: number) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId && event.enrolled < event.spots) {
        return { ...event, enrolled: event.enrolled + 1 }
      }
      return event
    })

    setEvents(updatedEvents)
    setFilteredEvents(
      activeFilter === "all" ? updatedEvents : updatedEvents.filter((event) => event.category === activeFilter),
    )

    const event = events.find((e) => e.id === eventId)
    if (event && event.enrolled < event.spots) {
      alert(`Successfully enrolled in "${event.title}"! You'll receive a confirmation email shortly.`)
    } else {
      alert("Sorry, this event is full or unavailable.")
    }
  }

  const readArticle = (articleId: number) => {
    const article = articles.find((a) => a.id === articleId)
    if (article) {
      alert(`Opening article: "${article.title}" by ${article.author}`)
    }
  }

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">ThriveTogether</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                className={`font-medium px-3 py-2 border-b-3 ${activeSection === "events" ? "text-blue-500 border-blue-500" : "text-gray-600 hover:text-blue-500 border-transparent"}`}
                onClick={() => setActiveSection("events")}
              >
                Events
              </button>
              <button
                className={`font-medium px-3 py-2 border-b-3 ${activeSection === "dashboard" ? "text-blue-500 border-blue-500" : "text-gray-600 hover:text-blue-500 border-transparent"}`}
                onClick={() => setActiveSection("dashboard")}
              >
                Dashboard
              </button>
              <button
                className={`font-medium px-3 py-2 border-b-3 ${activeSection === "articles" ? "text-blue-500 border-blue-500" : "text-gray-600 hover:text-blue-500 border-transparent"}`}
                onClick={() => setActiveSection("articles")}
              >
                Articles
              </button>
              <button
                className={`font-medium px-3 py-2 border-b-3 ${activeSection === "profile" ? "text-blue-500 border-blue-500" : "text-gray-600 hover:text-blue-500 border-transparent"}`}
                onClick={() => setActiveSection("profile")}
              >
                Profile
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Gold Member</span>
              </div>
              <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-4 py-2 space-y-2">
            <button
              className="block py-2 text-blue-500 font-medium w-full text-left"
              onClick={() => {
                setActiveSection("events")
                setMobileMenuOpen(false)
              }}
            >
              Events
            </button>
            <button
              className="block py-2 text-gray-600 w-full text-left"
              onClick={() => {
                setActiveSection("dashboard")
                setMobileMenuOpen(false)
              }}
            >
              Dashboard
            </button>
            <button
              className="block py-2 text-gray-600 w-full text-left"
              onClick={() => {
                setActiveSection("articles")
                setMobileMenuOpen(false)
              }}
            >
              Articles
            </button>
            <button
              className="block py-2 text-gray-600 w-full text-left"
              onClick={() => {
                setActiveSection("profile")
                setMobileMenuOpen(false)
              }}
            >
              Profile
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Events Section */}
        {activeSection === "events" && (
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Autism-Friendly Events</h2>
              <p className="text-gray-600 text-lg">
                Discover events designed specifically for children with autism and their families
              </p>
            </div>

            {/* Event Filters */}
            <div className="mb-6 flex flex-wrap gap-3">
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => filterEvents("all")}
              >
                All Events
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "sensory" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => filterEvents("sensory")}
              >
                Sensory Friendly
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "social" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => filterEvents("social")}
              >
                Social Skills
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "creative" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => filterEvents("creative")}
              >
                Creative Arts
              </button>
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === "physical" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => filterEvents("physical")}
              >
                Physical Activity
              </button>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow hover:-translate-y-1"
                >
                  <img
                    src={`/placeholder_image.png?height=200&width=300&text=${encodeURIComponent(event.title)}`}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{event.type}</span>
                      <span className="text-xs text-gray-500">{event.age}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">
                        {event.enrolled}/{event.spots} enrolled
                      </span>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(event.enrolled / event.spots) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <button
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                      onClick={() => enrollInEvent(event.id)}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Dashboard Section */}
        {activeSection === "dashboard" && (
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Parent Dashboard</h2>
              <p className="text-gray-600 text-lg">Track your child's progress and upcoming events</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Child Progress Card */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emma's Progress</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Events Attended</span>
                    <span className="text-2xl font-bold text-blue-500">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Current Badge Level</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">★</span>
                      </div>
                      <span className="font-medium">Gold Explorer</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Next Badge Progress</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                      <span className="text-sm text-gray-500">3/4</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Events Card */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-3">
                    <p className="font-medium text-gray-900">Art Therapy Session</p>
                    <p className="text-sm text-gray-600">Tomorrow, 2:00 PM</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-3">
                    <p className="font-medium text-gray-900">Social Skills Workshop</p>
                    <p className="text-sm text-gray-600">Friday, 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge Collection */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Badge Collection</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xl">★</span>
                  </div>
                  <p className="font-medium text-gray-900">First Steps</p>
                  <p className="text-xs text-gray-600">Attended first event</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xl">★</span>
                  </div>
                  <p className="font-medium text-gray-900">Social Butterfly</p>
                  <p className="text-xs text-gray-600">5 social events</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xl">★</span>
                  </div>
                  <p className="font-medium text-gray-900">Creative Artist</p>
                  <p className="text-xs text-gray-600">10 art sessions</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg opacity-50">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xl">★</span>
                  </div>
                  <p className="font-medium text-gray-900">Champion</p>
                  <p className="text-xs text-gray-600">20 events total</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Articles Section */}
        {activeSection === "articles" && (
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Expert Articles</h2>
              <p className="text-gray-600 text-lg">Educational resources from autism specialists and experts</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <img
                    src={`/placeholder_image.png?height=200&width=300&text=${encodeURIComponent(article.title)}`}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-blue-500 uppercase tracking-wide">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>By {article.author}</span>
                      <span>{article.date}</span>
                    </div>
                    <button
                      className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                      onClick={() => readArticle(article.id)}
                    >
                      Read Article
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Profile Section */}
        {activeSection === "profile" && (
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Child Profiles</h2>
              <p className="text-gray-600 text-lg">Manage your children's profiles and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">E</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Emma Johnson</h3>
                    <p className="text-gray-600">Age 8 • Diagnosed 2019</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sensory Preferences</label>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        Quiet environments
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Soft lighting</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                        Tactile activities
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Interests</label>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        Art & Drawing
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Music</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Animals</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Communication Style</label>
                    <p className="text-gray-600">Verbal with visual supports</p>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                  Edit Profile
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6 flex items-center justify-center border-dashed border-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gray-400 text-2xl">+</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Add Another Child</h3>
                  <p className="text-gray-600 mb-4">Create a profile for another child</p>
                  <button className="bg-blue-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    Add Child
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
