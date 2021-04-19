import React from 'react';

function SocialProfile({socials}) {
    return (
        <>
            <ul className="social-profile padding-top-30px padding-bottom-30px">
                {socials.map((item, i) => {
                    return (
                        <li key={i}><a href={item.url}><i className="fa">{item.icon}</i></a></li>
                    )
                })}
            </ul>
        </>
    );
}

export default SocialProfile;
