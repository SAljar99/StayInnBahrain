import React from 'react'

const About = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '0.5rem' }}>About StayInnBahrain</h2>
      <hr
        style={{
          height: '4px',
          backgroundColor: 'purple',
          border: 'none',
          margin: '1rem 0'
        }}
      />
      <p style={{ lineHeight: '1.6', fontSize: '1rem', marginBottom: '1rem' }}>
        StayInnBahrain was founded with a mission to simplify and modernize the experience of booking rental flats in Bahrain. 
        With roots going back over two decades, our company has grown from a traditional real estate business into a digital-first platform serving the entire Kingdom.
        With multiple branches across Manama and Muharraq, our goal is to provide a reliable solution for both locals and expats to explore, view, and book their ideal living space.
      </p>
      <p style={{ lineHeight: '1.6', fontSize: '1rem' }}>
        Our team is dedicated to ensuring trust, transparency, and ease of access — from CPR verification to rent reminders. 
        We're proud to be Bahrain's go-to rental app for hassle-free housing solutions.
      </p>
    </div>
  )
}

export default About
