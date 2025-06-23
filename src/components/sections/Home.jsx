import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
            <div className="flex flex-col items-center justify-center text-center z-10 px-4 space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                    Hi I am Santhosh Palem
                </h1>

                <p className="text-gray-400 text-lg max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
                    asperiores. Vero, numquam dolor labore natus magnam autem. Error odit
                    numquam maiores quam nesciunt, ab ullam minus veniam, impedit,
                    voluptatem quia.
                </p>

                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded font transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                    >
                        Contact Me
                    </a>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};

export default Home;
