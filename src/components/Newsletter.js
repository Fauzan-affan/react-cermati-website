import React, { Fragment } from 'react';

const Newsletter = ({ buttonNews, handleButtonNews }) => {

    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            const el = document.querySelector(".newsletter");
            el.setAttribute("data-aos", "slide-down");
        }
    });

    return (
        <Fragment>
            {
                buttonNews ? <div className="newsletter hidden"></div> :
                    <div className="newsletter fixed bottom-0 left-0 z-10 -mb-23 md:-mb-64">
                        <nav className="flex justify-end items-end w-full">
                            <button type="button" className="text-white pr-2" onClick={handleButtonNews}>x</button>
                        </nav>
                        <div className="pb-6 pt-2 px-5">
                            <p className="Headline text-2xl text-white font-bold">Get latest updates in web technologies.</p>
                            <nav className="pragraph text-white">
                                I write articles related to web technologies, such as design trends, development
                                tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
                                them all.
                            </nav>
                            <form className="w-full md:flex pt-5">
                                <input type="text" className="w-full md:w-4/5 p-2 focus:outline-none mb-4" placeholder="Email Address" />
                                <button type="submit" className="bg-secondary w-full h-10 md:w-1/5 text-white font-bold py-0 md:ml-4 bg-submit hover:bg-orange-600 transition duration-500 ease-in-out">Count me in!</button>
                            </form>
                        </div>
                    </div>
            }
        </Fragment>
    );
}

export default Newsletter;
