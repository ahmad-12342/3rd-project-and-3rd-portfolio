import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import CodingVibe from '../components/CodingVibe';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Experience from '../components/Experience';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col gap-0">
                <Hero />
                <About />
                <Services />
                <Experience />
                <Skills />
                <CodingVibe />
                <Projects />
                <Testimonials />
                <Pricing />
                <FAQ />
                <Contact />
            </div>
        </Layout>
    );
};

export default Home;
