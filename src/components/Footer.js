import React, {Fragment} from 'react';

const Footer = () => {
    const d = new Date();

    return (
        <Fragment>
            <div className="relative flex justify-center items-center bg-footer py-10">
                <p className="text-white text-center text-lg px-12">&copy; {d.getFullYear()} Fauzan Affan Zaki. All rights reserved.</p>
            </div>
        </Fragment>
    );
}

export default Footer;
