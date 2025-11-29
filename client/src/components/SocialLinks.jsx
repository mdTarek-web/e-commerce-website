import React from 'react'

import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa";

const linkData = [
    { icon: <FaGithub/>, href: "github.com/mdTarek-web"},
    { icon: <FaYoutube/>, href: ""},
    { icon: <FaLinkedin/>, href: "https://www.linkedin.com/help/linkedin/?trk=p_settings_helpcenter_globalnav_android"},
    { icon: <FaFacebook/>, href: "https://www.facebook.com/share/16sjp34CcY/"},
    { icon: <FaEnvelope/>, href: ""},
]

const SocialLinks = () => {
  return (
    <div className='text-xl text-white/50 flex items-center gap-x-2'>
        {linkData?.map((item, index) => ( 
            <a key={index} href={item?.href} target='blank' className='border border-white/20 inline-flex p-2 rounded-full
            hover:text-white hover:border-white duration-300 cursor-pointer'>
                {item?.icon}
            </a>
        ))}
    </div>
  )
}

export default SocialLinks
