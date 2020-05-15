import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaintBrush, faCubes, faBullhorn, faTasks, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer.js';
import Newsletter from './Newsletter.js';

const Highlights = ({buttonNews, handleButtonNews}) => {
    return (
        <Fragment>
            <div className="relative">
                <div className="min-h-screen bg-highlights">
                    <div className="flex justify-center items-center">
                        <div className="header py-12 text-center text-gray-700 max-width">
                            <nav className="leading-paragraf-title text-3xl md:text-4xl py-3">
                                How Can I Help You?
                            </nav>
                            <div className="flex justify-center">
                                <nav className="leading-paragraf-description md:w-1/2 text-lg px-2 md:text-xl">
                                    Our work then targeted, best practices outcomes social innovation synergy.
                                    Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                                    program areas scale.
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="tiles-of-content flex justify-center items-center pb-12 bg-biru">
                        <div className="flex flex-wrap justify-center items-center w-full max-width">
                            <div className="w-full md:w-3/7 my-4 mx-6 md:mx-4">
                                <div className="p-4 border border-gray-700 text-gray-700">
                                    <div className="flex justify-between py-2">
                                        <p className="text-xl font-bold">Consult</p>
                                        <FontAwesomeIcon icon={faComments} size="2x" className="fill-current text-gray-700"/>
                                    </div>
                                    <div className="text-sm md:text-lg pb-3">
                                        Co-create, design thinking; strengthen infrastructure resist granular.
                                        Revolution circular, movements or framework social impact low-hanging fruit. 
                                        Save the world compelling revolutionary progress.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-3/7 my-4 mx-6 md:mx-4">
                                <div className="p-4 border border-gray-700 text-gray-700">
                                    <div className="flex justify-between py-2">
                                        <p className="text-xl font-bold">Design</p>
                                        <FontAwesomeIcon icon={faPaintBrush} size="2x" className="fill-current text-gray-700"/>
                                    </div>
                                    <div className="text-sm md:text-lg pb-3">
                                        Policymaker collaborates collective impact humanitarian shared value
                                        vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
                                        issue outcomes vibrant boots on the ground sustainable.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-3/7 my-4 mx-6 md:mx-4">
                                <div className="p-4 border border-gray-700 text-gray-700">
                                    <div className="flex justify-between py-2">
                                        <p className="text-xl font-bold">Develop</p>
                                        <FontAwesomeIcon icon={faCubes} size="2x" className="fill-current text-gray-700"/>
                                    </div>
                                    <div className="text-sm md:text-lg pb-3">
                                        Revolutionary circular, movements a or impact framework social impact low-
                                        hanging. Save the compelling revolutionary inspire progress. Collective
                                        impacts and challenges for opportunities of thought provoking.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-3/7 my-4 mx-6 md:mx-4">
                                <div className="p-4 border border-gray-700 text-gray-700">
                                    <div className="flex justify-between py-2">
                                        <p className="text-xl font-bold">Marketing</p>
                                        <FontAwesomeIcon icon={faBullhorn} size="2x" className="fill-current text-gray-700"/>
                                    </div>
                                    <div className="text-sm md:text-lg pb-3">
                                        Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                                        replicable, effective altruism youth. Mobilize commitment to overcome
                                        injustice resilient, uplift social transparent effective.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-3/7 my-4 mx-6 md:mx-4">
                                <div className="p-4 border border-gray-700 text-gray-700">
                                    <div className="flex justify-between py-2">
                                        <p className="text-xl font-bold">Manage</p>
                                        <FontAwesomeIcon icon={faTasks} size="2x" className="fill-current text-gray-700"/>
                                    </div>
                                    <div className="text-sm md:text-lg pb-3">
                                        Change-makers innovation or shared unit of analysis. Overcome injustice
                                        outcomes strategize vibrant boots on the ground sustainable. Optimism,
                                        effective altruism invest optimism corporate social.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-3/7 my-4 mx-6 md:mx-4">
                                <div className="p-4 border border-gray-700 text-gray-700">
                                    <div className="flex justify-between py-2">
                                        <p className="text-xl font-bold">Evolve</p>
                                        <FontAwesomeIcon icon={faChartLine} size="2x" className="fill-current text-gray-700"/>
                                    </div>
                                    <div className="text-sm md:text-lg pb-3">
                                        Activate catalyze and impact contextualize humanitarian. Unit of analysis
                                        overcome injustice storytelling altruism. Thought leadership mass 
                                        incarceration. Outcomes big data, fairness, social game-changer.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
                <Newsletter buttonNews={buttonNews} handleButtonNews={handleButtonNews}/>
            </div>
        </Fragment>
    );
}

export default Highlights;
