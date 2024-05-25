import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

const DATA = [
    {
        title: "Page",
        items: [
            {
                label: "Dienste",
                href: "#features"
            },

            {
                label: "Kontakt",
                href: "#contact"
            }
        ]
    },
    {
        title: "Company",
        items: [
           
            {
                label: "Twitter",
                href: "https://github.com/",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://github.com/",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://github.com/",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        // <footer id="footer" className="bg-white">
        //     {/* Footer Links */}
        //     <SectionContainer className="footer--container wrap wrap-px relative z-10">
        //         <div className="footer--content-container py-16">
        //             <div className="footer-links mb-4 grid grid-cols-2 gap-8 md:mb-4 md:grid-cols-8 lg:grid-cols-12">
        //                 <div className="col-span-4">
        //                     <div className="footer--logo grid gap-2">
        //                         <Link href="/" className="flex items-center">
        //                             <Image
        //                                 src="/logo3.png"
        //                                 alt="logo"
        //                                 className="h-10 w-auto"
        //                                 height="25"
        //                                 width="100"
        //                                 priority
        //                             />
        //                             <Image
        //                                 src="/logo4.png"
        //                                 alt="logo"
        //                                 className="h-10 w-auto"
        //                                 height="25"
        //                                 width="100"
        //                                 priority
        //                             />
        //                         </Link>

        //                         <div className="items-center flex w-48">
        //                             <Link
        //                                 href="/"
        //                                 className="flex items-center"
        //                             >
        //                                 <Image
        //                                     src="/barcode.jpg"
        //                                     alt="logo"
        //                                     className="h-full w-auto"
        //                                     height={256}
        //                                     width={256}
        //                                     priority
        //                                 />
        //                             </Link>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-span-8">
        //                     <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
        //                         {DATA.map((footerLinks) => (
        //                             <div
        //                                 key={footerLinks.title}
        //                                 className="footer-menu--container col-span-1 md:col-span-4"
        //                             >
        //                                 <h3 className="font-bold text-base mb-2">
        //                                     {footerLinks.title}
        //                                 </h3>
        //                                 <ul className="footer-menu--list">
        //                                     {footerLinks.items.map(
        //                                         (footerItem) => (
        //                                             <li
        //                                                 key={footerItem.label}
        //                                                 className="footer-menu--list-item gap-2"
        //                                             >
        //                                                 <a
        //                                                     className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
        //                                                     href={
        //                                                         footerItem.href
        //                                                     }
        //                                                     target={
        //                                                         footerItem.target
        //                                                     }
        //                                                 >
        //                                                     {footerItem.label}
        //                                                 </a>
        //                                             </li>
        //                                         )
        //                                     )}
        //                                 </ul>
        //                             </div>
        //                         ))}
        //                         <div className="footer-menu--container col-span-1 md:col-span-4">
        //                             <h3 className="font-bold text-base">
        //                                 Contact Us
        //                             </h3>
        //                             <p className="mb-3 block w-auto font-medium transition-colors duration-300 hover:underline">
        //                                 123 Main St, City
        //                             </p>
        //                             <p className="mb-3 block w-auto font-medium transition-colors duration-300 hover:underline">
        //                                 Email: Transportealjalal@gmail.com
        //                             </p>
        //                             <p className="mb-3 block w-auto font-medium transition-colors duration-300 hover:underline">
        //                                 Telefone: (0) 172-806-3133
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </SectionContainer>
        //     {/* Footer Credits */}
        //     <SectionContainer className="footer-credits relative z-10">
        //         <div className="wrap wrap-px py-6">
        //             <p className="my-0">
        //                 © {year}{" "}
        //                 <span className="font-normal">
        //                     <Link
        //                         className="transition-colors duration-300 hover:underline"
        //                         href="https://www.linkedin.com/in/mahmoud-barakat-3600b7168"
        //                         target="_blank"
        //                     >
        //                         MB.
        //                     </Link>
        //                 </span>
        //             </p>
        //         </div>
        //     </SectionContainer>
        //     <div className="footer--background"></div>
        // </footer>
        <footer id="footer" className="bg-white">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16">
                    <div className="footer-links mb-4 grid grid-cols-2 gap-8 md:mb-4 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-4">
                            <div className="footer--logo grid gap-2">
                                <Link href="/" className="flex items-center">
                                    <Image
                                        src="/logo3.png"
                                        alt="logo"
                                        className="h-10 w-auto"
                                        height="25"
                                        width="100"
                                        priority
                                    />
                                    <Image
                                        src="/logo4.png"
                                        alt="logo"
                                        className="h-10 w-auto"
                                        height="25"
                                        width="100"
                                        priority
                                    />
                                </Link>

                                <div className="items-center flex w-48">
                                    <Link
                                        href="/"
                                        className="flex items-center"
                                    >
                                        <Image
                                            src="/barcode.jpg"
                                            alt="logo"
                                            className="h-full w-auto"
                                            height={256}
                                            width={256}
                                            priority
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                                <div className="footer-menu--container col-span-1 md:col-span-4">
                                    <h3 className="font-bold text-base">
                                        Contact Us
                                    </h3>
                                    <p class="mb-3 block w-auto font-medium transition-colors duration-300 hover:underline">
                                        123 Main St, City
                                    </p>
                                    <p class="mb-3 block w-auto font-medium transition-colors duration-300 hover:underline">
                                        Email: Transportealjalal@gmail.com
                                    </p>
                                    <p class="mb-3 block w-auto font-medium transition-colors duration-300 hover:underline">
                                        Telefone: (0) 172-806-3133
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        © {year}{" "}
                        <span className="font-normal">
                            <Link
                                className="transition-colors duration-300 hover:underline"
                                href="https://www.linkedin.com/in/mahmoud-barakat-3600b7168"
                                target="_blank"
                            >
                                MB.
                            </Link>
                        </span>
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
