import { Link as NavLink } from 'react-router-dom';
import Tooltip from '../../utilities/Tooltip';
import { NAV_ITEMS, SOCIAL_LINKS } from '../../lib/constants';

export default function Bottom() {
    return (
        <div className="flex justify-center items-center fixed bottom-0 left-0 w-full h-14 md:h-[10%] z-50 mb-2 md:mb-0">
            <nav className="border-[0.5px] border-black h-full rounded-3xl bg-white inline-flex justify-around items-center px-2 md:px-4 overflow-x-auto w-[98vw] max-w-xl md:max-w-none">
                {/* Navigation Icons */}
                {NAV_ITEMS.map((item, index) => (
                    <Tooltip key={index} title={item.label}>
                        <div className="cursor-pointer p-1 lg:p-2">
                            <NavLink to={item.path}>
                                <item.icon size={20} className="inline lg:hidden" />
                                <item.icon size={22} className="hidden lg:inline" />
                            </NavLink>
                        </div>
                    </Tooltip>
                ))}

                {/* Divider */}
                <div className="h-[60%] w-[1px] bg-gray-300 mx-1 md:mx-4"></div>

                {/* Social Icons */}
                {SOCIAL_LINKS.map((item, index) => (
                    <Tooltip key={index} title={item.label}>
                        <div className="cursor-pointer p-1 lg:p-2">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <item.icon size={20} className="inline lg:hidden" />
                                <item.icon size={22} className="hidden lg:inline" />
                            </a>
                        </div>
                    </Tooltip>
                ))}
            </nav>
        </div>
    );
}