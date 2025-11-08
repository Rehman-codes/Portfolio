import { Home, FolderOpen, Palette, User, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import Tooltip from '../../utilities/Tooltip';
import { Link as NavLink } from 'react-router-dom';

// { Icon: User, title: "Experience", link: "/experience" },

export default function Bottom() {
    const navIcons = [
        { Icon: Home, title: "Home", link: "/" },
        { Icon: FolderOpen, title: "Projects", link: "/projects" },
        { Icon: Palette, title: "Skills", link: "/skills" },
    ];
    const socialIcons = [
        { Icon: Github, title: "GitHub", link: "https://github.com/Rehman-codes" },
        { Icon: Linkedin, title: "LinkedIn", link: "https://www.linkedin.com/in/abdurrehman-swe" },
        { Icon: Instagram, title: "Instagram", link: "https://www.instagram.com/svelto.co/" },
        { Icon: Mail, title: "Email", link: "https://mail.google.com/mail/?view=cm&to=abdurrehman.swe@gmail.com" },
    ];

    return (
        <div className="flex justify-center items-center fixed bottom-0 left-0 w-full h-14 md:h-[10%] z-50 mb-2 md:mb-0">
            <nav className="border-[0.5px] border-black h-full rounded-3xl bg-white inline-flex justify-around items-center px-2 md:px-4 overflow-x-auto w-[98vw] max-w-xl md:max-w-none">
                {/* Navigation Icons */}
                {navIcons.map(({ Icon, title, link }, index) => (
                    <Tooltip key={index} title={title}>
                        <div className="cursor-pointer p-1 lg:p-2">
                            <NavLink to={link}>
                                <Icon size={20} className="inline lg:hidden" />
                                <Icon size={22} className="hidden lg:inline" />
                            </NavLink>
                        </div>
                    </Tooltip>
                ))}

                {/* Divider */}
                <div className="h-[60%] w-[1px] bg-gray-300 mx-1 md:mx-4"></div>

                {/* Social Icons */}
                {socialIcons.map(({ Icon, title, link }, index) => (
                    <Tooltip key={index} title={title}>
                        <div className="cursor-pointer p-1 lg:p-2">
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <Icon size={20} className="inline lg:hidden" />
                                <Icon size={22} className="hidden lg:inline" />
                            </a>
                        </div>
                    </Tooltip>
                ))}
            </nav>
        </div>
    );
}