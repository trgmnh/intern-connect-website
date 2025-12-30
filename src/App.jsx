import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import * as All from "./components/layouts/Heading";
import { LogoHotel } from "./components/layouts/LogoHotel";
import { HeroHome, HeroAbout, HeroServices, HeroNews, HeroContact } from "./components/layouts/Hero";
import { BannerService, BannerContact, BannerNumbers, BlogBanner } from "./components/layouts/Banner";
import { Destinations, Internships } from "./components/layouts/FourCardsLayout";
import { Activities, CollaborationFormats } from "./components/ThreeCardLayout";
import { BoardOfDirectors, AboutImage, VisionMission, AboutHome, WhyChooseUs, Process, Commitment } from "./components/About";
import { Testimonials, FrequentAskedQuestions, ContactUsPage } from "./components/Customer";
import { CoreValues, ServiceInclude } from "./components/Services";

const HomePage = () => (
  <>
    <HeroHome />
    <All.HeadingPartner />
    <LogoHotel />

    <All.HeadingDestinations />
    <Destinations />
    <All.HeadingInternships />
    <Internships />
    <BlogBanner />


    <AboutHome />
    <All.HeadingChooseUs />
    <WhyChooseUs />
    <BannerService />

    <ContactUsPage />
    {/* Add more sections if needed */}
  </>
);

const AboutPage = () => (
  <>
    <HeroAbout />
    <All.HeadingAboutUs />
    <AboutImage />
    <VisionMission />
    <All.HeadingCoreValues />

    <CoreValues />
    {/* Add more sections if needed */}
    <BannerNumbers />


    <All.HeadingBOD />
    <BoardOfDirectors />

    <All.HeadingActivities />
    <Activities />
    <BannerService />

  </>
);

const ServicesPage = () => (
  <>
    <HeroServices />
    <All.HeadingOurServices />
    <ServiceInclude />
    <All.HeadingFeatures />
    <CollaborationFormats />
    <BlogBanner />
    <All.HeadingDestinations />
    <Destinations />
    <All.HeadingInternships />
    <Internships />
    <BannerContact />
    <All.HeadingOurProcess />
    <Process />
    <All.HeadingCommitments />
    <Commitment />
    <All.HeadingTestimonials />
    <Testimonials />
    <All.HeadingFAQ />
    <FrequentAskedQuestions />
    {/* Add more sections if needed */}
  </>
);

const NewsPage = () => (
  <>
    <HeroNews />
    {/* Add more sections if needed */}
  </>
);

const ContactPage = () => (
  <>
    <HeroContact />
    <ContactUsPage />
    {/* Add more sections if needed */}
  </>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
