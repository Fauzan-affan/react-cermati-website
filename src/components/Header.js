import React, {Fragment} from 'react';

const Header = ({BgHeader, Logo}) => {

    return (
        <Fragment>
            <div id="header" className="h-screen w-full bg-cover bg-center flex justify-center items-center z-0" style={{backgroundImage: `url(${BgHeader})`}}>
                <div className="color-overlay absolute h-full w-full bg-header opacity-75"></div>
                <div className="max-width z-0">
                    <div className="absolute -mt-48 md:-mt-64 left-0 ml-6 z-10">
                        <a href="#Logo"><img src={Logo} alt="" className="w-20 h-20"/></a>
                    </div>
                    <div className="flex justify-center text-white z-10">
                        <div>
                            <div className="md:flex md:justify-center text-3xl md:text-4xl">
                                <p className="mr-3 text-center">
                                    Hello! 
                                </p>
                                <p className="text-center">
                                    I'm Fauzan Affan Zaki
                                </p>
                            </div>
                            <p className="font-bold text-3xl text-center">
                                Consult, Design, and Develop Websites
                            </p>
                            <div className="flex justify-center items-center">
                                <p className="text-xl text-center px-2 md:w-2/3">
                                    Have something great in mind? Feel free to contact me.
                                    I'll help you to make it happen.
                                </p>
                            </div>
                            <div className="flex justify-center items-center mt-5">
                                <button className="font-bold rounded bg-primary border-2 border-white uppercase py-3 px-10 focus:outline-none hover:bg-white hover:text-blue-600 transition duration-500 ease-in-out">Let's make contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
