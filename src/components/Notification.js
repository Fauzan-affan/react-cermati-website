import React, {Fragment} from 'react';

const Notivication = ({buttonNotiv, handleButtonNotiv}) => {
    
    // window.addEventListener("scroll",);

    return (
        <Fragment>
        {
            buttonNotiv ? null :
            <div className="bg-notivication w-full fixed z-10">
                <div className="container mx-auto max-width">
                    <div className="flex justify-center items-center">
                        <div className="max-cermati py-2 md:py-4 px-4">
                            <div className="md:flex md:justify-center md:items-center">
                                <nav className="md:w-3/4 text-sm">
                                    By accessing and using this website, you acknowledge that you have read and understand our <a href="#CookiePolicy" className="no-underline hover:underline text-blue-600">Cookie Policy</a>, <a href="#PrivacyPolicy" className="no-underline hover:underline text-blue-600">Privacy Policy</a>, and our <a href="#TermsOfService" className="no-underline hover:underline text-blue-600">Terms of Service</a>.
                                </nav>
                                <button className="md:ml-6 my-2 bg-blue-600 rounded py-2 px-6 text-white hover:bg-blue-500 focus:outline-none transition duration-500 ease-in-out" onClick={handleButtonNotiv}>Got It</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </Fragment>
    );
}

export default Notivication;
