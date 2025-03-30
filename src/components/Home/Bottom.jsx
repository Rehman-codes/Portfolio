import { Home, FolderOpen, Palette, User, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import Tooltip from '../../utilities/Tooltip';

export default function Bottom() {
    const navIcons = [
        { Icon: Home, title: "Home" },
        { Icon: FolderOpen, title: "Projects" },
        { Icon: Palette, title: "Skills" },
        { Icon: User, title: "Experience" },
    ];
    const socialIcons = [
        { Icon: Github, title: "GitHub" },
        { Icon: Linkedin, title: "LinkedIn" },
        { Icon: Instagram, title: "Instagram" },
        { Icon: Mail, title: "Email" },
    ];

    return (
        <div className="flex justify-center items-center absolute bottom-0 left-0 w-full h-[10%]">
            <nav className="h-[60%] rounded-3xl bg-white inline-flex justify-around items-center px-4">
                {/* Navigation Icons */}
                {navIcons.map(({ Icon, title }, index) => (
                    <Tooltip key={index} title={title}>
                        <div className="cursor-pointer p-2">
                            <Icon size={24} />
                        </div>
                    </Tooltip>
                ))}

                {/* Divider */}
                <div className="h-[60%] w-[1px] bg-gray-300 mx-4"></div>

                {/* Social Icons */}
                {socialIcons.map(({ Icon, title }, index) => (
                    <Tooltip key={index} title={title}>
                        <div className="cursor-pointer p-2">
                            <Icon size={24} />
                        </div>
                    </Tooltip>
                ))}
            </nav>
        </div>
    );
}