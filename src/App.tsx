import Dashboard from './assets/Dashboard.png';
import UniLogo from './assets/Uni_Logo.png';
import AERLogo from './assets/AER_Logo.png';

function App() {
    return (
        <div className={'w-screen max-w-screen-xl'}>

            {/* Erster Abschnitt */}
            <div className="w-screen flex flex-col lg:flex-row items-stretch">
            {/* Linke Seite */}
            <div className="flex w-full bg-white justify-center items-center flex-col pr-[15px] pl-[15px] lg:pr-[150px] py-24 lg:pl-[120px] lg:max-w-1/2 flex-1 min-h-full">
                <h1 className="text-[60px] leading-tight font-extrabold text-[#B1B1A1] mb-12 text-center underline">
                    Study Project: LLMs for Science
                </h1>
                <p className="text-[40px] leading-tight font-extrabold text-[#B1B1A1] mb-12 text-center">
                Supporting the Review Process with AI
                </p>
                <p className={'text-xl mb-12 text-center'}>
                Our AI-driven system, developed as a study project by
                master’s students, is designed to assist with the academic
                reviewing process. It automates source validation by verifying
                the accuracy of citations against their original sources and
                facilitates literature discovery by identifying relevant scientific
                papers for a given topic. Additionally, the system aims to make
                the argument structure easier to digest and analyze by turning
                the contents of the paper into a graph database. This project
                aims to streamline the review process, enhance citation accuracy,
                and support high-quality academic work through practical AI
                applications.
                </p>
                <button
                className="bg-[#F1F1F1] text-black px-[20px] py-[10px] rounded-lg hover:cursor-pointer"
                onClick={() => window.location.href = 'mailto:mweiher@uni-osnabrueck.de'}
                >
                Contact Us to Learn More
                </button>
            </div>

            {/* Rechte Seite */}
            <div className="flex w-full bg-white justify-center items-center pr-[15px] pl-[15px] px-24 py-24 flex-col lg:max-w-1/2 flex-1 min-h-full">
                <img src={Dashboard} alt="Beschreibung" className="w-full h-auto drop-shadow-lg mb-8" />
                <div className={'flex w-full justify-center items-center px-18 lg:space-x-20 space-x-10'}>
                <img src={UniLogo} alt="Beschreibung" className="w-auto h-18" />
                </div>
            </div>
            </div>

            {/* Functionality Abschnitt */}
            <div className="w-screen flex flex-col items-center bg-gray-50 pb-24 pt-12">
                <p className={'w-full text-[40px] text-[#B1B1A1] mb-12 font-bold text-center'}>Functionality</p>

                {/* Zwei gleich große Divs für die Boxen */}
                <div className="w-full flex flex-col lg:flex-row items-stretch">

                    {/* Linke Seite (Box 1) */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center px-8">
                        <div className="w-full max-w-md bg-gray-100 shadow-lg rounded-xl p-8 flex flex-col justify-between h-full">
                            <span className="text-5xl">🔍</span>
                            <h3 className="text-2xl font-bold mt-4">Citation Verification & Source Analysis</h3>
                            <p className="text-gray-700 mt-4 flex-1">
                                The system extracts references from uploaded research papers and automatically retrieves
                                the original sources. Using AI-based text analysis, it evaluates how accurately and contextually
                                correct the sources are cited. This ensures citation integrity, reduces the risk of
                                misrepresentation, and provides structured feedback to enhance academic precision.
                            </p>
                        </div>
                    </div>

                    {/* Rechte Seite (Box 2) */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center px-8">
                        <div className="w-full max-w-md bg-gray-100 shadow-lg rounded-xl p-8 flex flex-col justify-between h-full">
                            <span className="text-5xl">📚</span>
                            <h3 className="text-2xl font-bold mt-4">AI-driven Literature Discovery</h3>
                            <p className="text-gray-700 mt-4 flex-1">
                                Given a scientific topic, the system searches across multiple academic databases to
                                identify high-quality and relevant research papers. The AI ranks sources based on
                                credibility, relevance, and recent advancements, helping researchers efficiently
                                find the most suitable literature for their work.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Partner Abschnitt */}
            <div className="w-screen flex flex-col items-center bg-gray-[F1F1F1] pb-24 pt-12">
                <p className="text-[40px] font-bold text-center text-black mb-12">Partner</p>

                {/* Zwei gleich große Divs für die Boxen */}
                <div className="w-full flex flex-col lg:flex-row items-stretch">

                    {/* Institute of Information Management and Information Systems (IMWI) */}
                    <div className="w-full flex flex-col items-center text-center mb-10 lg:mb-0">
                        <img src={UniLogo} alt="IMWI - Universität Osnabrück" className="w-auto h-18 mr-6 mb-10" />
                        <p className="text-gray-800 text-lg mx-[15px] lg:mx-[100px]">
                            The <a href="https://www.wiwi.uni-osnabrueck.de/en/departments_and_institutes/information_management_and_information_systems_prof_thomas.html" className="text-blue-500 underline">
                                <strong>Institute of Information Management and Information Systems (IMWI)</strong>
                            </a> at the University of Osnabrück, 
                            led by Professor Dr. Oliver Thomas, specializes in the analysis and development of modern information technologies 
                            for future enterprises. The institute is organized into four research groups: Business Process Management & Analysis, 
                            Product-Service Systems Engineering, IT Governance, Risk & Compliance Management, and Mobile & Wearable Information Systems. 
                            Its projects are application-oriented, collaborating closely with both large international corporations and small to 
                            medium-sized enterprises in the Osnabrück economic region.
                        </p>
                    </div>

                    {/* Attention, Effort, and Reasoning (AER) Lab */}
                    <div className="w-full flex flex-col items-center text-center">
                        <img src={AERLogo} alt="AER Lab" className="w-auto h-18 mr-6 mb-10" />
                        <p className="text-gray-800 text-lg mx-[15px] lg:mx-[100px]">
                            The <strong>Autonomous Empirical Research Group (AER)</strong>, led by <a href="https://musslick.github.io/AER_website/About.html" className="text-blue-500 underline">Sebastian Musslick</a>, 
                            aims to enhance and accelerate scientific discovery by automating various stages of the empirical research process. 
                            This includes model discovery, experimental design, data collection, and documentation for open science. The group 
                            has developed tools like the Automated Research Assistant (AutoRA), which features Bayesian Symbolic Regression for 
                            generating equations that explain empirical data, and strategies for identifying novel experiments.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default App;