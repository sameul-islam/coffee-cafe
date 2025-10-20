import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const AboutPage = () => {
  const TeamMembers = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      socials: [
        { id: 1, icon: <FaInstagram />, link: "#" },
        { id: 2, icon: <FaFacebookF />, link: "#" },
        { id: 3, icon: <FaTwitter />, link: "#" },
      ],
    },
    {
      id: 2,
      name: "Mark Wilson",
      position: "Head Barista",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      socials: [
        { id: 1, icon: <FaInstagram />, link: "#" },
        { id: 2, icon: <FaFacebookF />, link: "#" },
      ],
    },
    {
      id: 3,
      name: "Sophia Lee",
      position: "Marketing Lead",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      socials: [
        { id: 1, icon: <FaInstagram />, link: "#" },
        { id: 2, icon: <FaTwitter />, link: "#" },
      ],
    },
    {
      id: 4,
      name: "James Smith",
      position: "Quality Specialist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      socials: [
        { id: 1, icon: <FaInstagram />, link: "#" },
        { id: 2, icon: <FaFacebookF />, link: "#" },
      ],
    },
  ];

  return (
    <div className="min-h-screen mt-20 flex flex-col font-Titillium bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/80 to-secondary/80 text-white py-24 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Coffee Cafe
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Crafting exceptional coffee experiences, one cup at a time. Passionate, professional, and committed to quality.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              To deliver the finest coffee experiences through skill, passion, and sustainable practices. Every cup tells a story.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-700">
              To be the leading destination for coffee lovers, creating a community where quality, sustainability, and creativity meet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-600">
            Coffee Cafe was born from a simple idea: to share the love for high-quality coffee with everyone. What started as a small café has grown into a community of passionate coffee enthusiasts, always striving for excellence.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TeamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{member.position}</p>
              <div className="flex gap-3">
                {member.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors text-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-primary/80 text-white py-16 px-4 text-center rounded-t-xl">
        <h2 className="text-3xl font-bold mb-4">Join Our Coffee Journey</h2>
        <p className="mb-6 text-lg">
          Explore, taste, and connect with us. Become a part of our coffee community today.
        </p>
        <a
          href="/contact"
          className="bg-white text-primary font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
