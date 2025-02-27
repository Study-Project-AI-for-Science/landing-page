import Dashboard from './assets/Dashboard.png';
import UniLogo from './assets/Uni_Logo.png';
import DFKILogo from './assets/dfki_Logo.png';

function App() {
    return (
        <div className={'w-screen max-w-screen-xl'}>
            {/* Erster Abschnitt */}
            <div className="w-screen flex flex-col lg:flex-row items-stretch">
                {/* Linke Seite */}
                <div className="flex w-full bg-white justify-center items-center flex-col pr-[15px] pl-[15px] lg:pr-[150px] py-24 lg:pl-[120px] lg:max-w-1/2 flex-1 min-h-full">
                    <p className="text-[40px] leading-tight font-extrabold text-[#B1B1A1] mb-12 text-center">
                        Revolutionizing Research with AI <br />
                        Smarter, Faster, Better
                    </p>
                    <p className={'text-xl mb-12 text-center'}>
                        Our AI-driven system enhances the research and academic writing process by
                        automating source validation and literature discovery. It verifies the accuracy
                        of citations by comparing references with their original sources and assists in
                        identifying relevant scientific papers for a given topic. This streamlines the review
                        process, improves citation accuracy, and facilitates high-quality academic work.
                    </p>
                    <button className="bg-[#F1F1F1] text-black px-[20px] py-[10px] rounded-lg">
                        Contact Us to Learn More
                    </button>
                </div>

                {/* Rechte Seite */}
                <div className="flex w-full bg-gray-100 justify-center items-center pr-[15px] pl-[15px] px-24 py-24 flex-col lg:max-w-1/2 flex-1 min-h-full">
                    <img src={Dashboard} alt="Beschreibung" className="w-full h-auto drop-shadow-lg mb-8" />
                    <div className={'flex w-full justify-center items-center px-18 lg:space-x-20 space-x-10'}>
                        <img src={UniLogo} alt="Beschreibung" className="w-auto h-18" />
                        <img src={DFKILogo} alt="Beschreibung" className="w-auto h-18" />
                    </div>
                </div>
            </div>

            {/* Functionality Abschnitt */}
            <div className="w-screen flex flex-col items-center bg-gray-50 py-24">
                <p className={'w-full text-[40px] text-[#B1B1A1] mb-12 font-bold text-center'}>Functionality</p>

                {/* Zwei gleich große Divs für die Boxen */}
                <div className="w-full flex flex-col lg:flex-row items-stretch">

                    {/* Linke Seite (Box 1) */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center px-8 mb-10 lg:mb-0">
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
        </div>
    );
}

export default App;