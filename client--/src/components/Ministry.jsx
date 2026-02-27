import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiPlay, FiX } from 'react-icons/fi'
import { FaFacebook, FaYoutube } from 'react-icons/fa'

const Ministry = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState(null)

  const photos = Array.from({ length: 10 }, (_, i) => ({
    src: `/ministry/photo${i + 1}.jpg`,
    alt: `Ministry Photo ${i + 1}`,
  }))

  const videos = [
    {
      title: 'A sample of my drone shot',
      thumbnail: '/ministry/fb-reel-2.jpg',
      url: 'https://www.facebook.com/reel/2162281860977503',
      type: 'Facebook Reel',
    },
    {
      title: "Priests' Greetings",
      thumbnail: '/ministry/fb-reel-1.jpg',
      url: 'https://www.facebook.com/reel/639184687641083',
      type: 'Facebook Reel',
    },
    {
      title: 'Ningas ng Pag-asa Music Video',
      thumbnail: '/ministry/fb-video-1.jpg',
      url: 'https://www.facebook.com/SaintJosephGagalangin/videos/619308961029343',
      type: 'Facebook Video',
    },
    {
      title: 'iKMSJnaYan Podcast',
      thumbnail: 'https://img.youtube.com/vi/DD-v5jYUgkM/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=DD-v5jYUgkM',
      type: 'YouTube',
    },
  ]

  return (
    <section id="ministry" className="section bg-primary">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Ministry & <span className="gradient-text">Creative Work</span>
          </h2>

          {/* About Ministry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="text-center mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I have been serving at <span className="text-accent font-semibold">St. Joseph Church, Gagalangin</span> since 2012, 
                starting with the Ministry of Altar Servers (2012-2020) and continuing with the Social Communications Ministry 
                (2022-present).
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                As the <span className="text-accent font-semibold">IT Specialist Officer</span>, I am responsible for maintaining 
                equipment and ensuring proper operations, serving as a Live Operator, Pubmat Designer, Photographer, and Videographer.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                With our team, I currently manage the church's social media presence on <span className="text-accent font-semibold">Facebook</span> and{' '}
                <span className="text-accent font-semibold">YouTube</span>, creating engaging content and building our online community.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Since October 2025, I have been directing the monthly <span className="text-accent font-semibold">#iKMSJnaYan Podcast</span>, 
                creating engaging content for our community.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <a
                href="https://www.facebook.com/SaintJosephGagalangin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#1877F2] hover:bg-[#1668DC] text-white rounded-lg transition-colors duration-300 shadow-lg"
              >
                <FaFacebook className="text-2xl" />
                <span className="font-semibold">Follow on Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@SanJoseGagalangin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-lg transition-colors duration-300 shadow-lg"
              >
                <FaYoutube className="text-2xl" />
                <span className="font-semibold">Subscribe on YouTube</span>
              </a>
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="text-accent">Photography</span> Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {photos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect width="200" height="200" fill="%231a1a1a"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23666" font-family="sans-serif"%3EPhoto %23' + (idx + 1) + '%3C/text%3E%3C/svg%3E'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="text-accent">Video</span> Productions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video, idx) => (
                <motion.a
                  key={idx}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * idx, duration: 0.5 }}
                  className="card group cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="360"%3E%3Crect width="640" height="360" fill="%231a1a1a"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23666" font-family="sans-serif"%3EVideo Thumbnail%3C/text%3E%3C/svg%3E'
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <FiPlay className="text-white text-6xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <span className="absolute top-2 right-2 px-2 py-1 bg-accent text-white text-xs rounded">
                      {video.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {video.title}
                  </h4>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl hover:text-accent transition-colors duration-300"
          >
            <FiX />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  )
}

export default Ministry