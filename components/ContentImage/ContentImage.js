import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Umzugservice",
        content:
            "Inter Transporte Leipzig bietet umfassende Umzugsdienstleistungen für Wohn- und Geschäftsgebäude an. Ob Sie Ihren Wohnsitz, Ihr Büro oder Ihr Lagerhaus umziehen möchten, das Unternehmen stellt ein professionelles Team zur Verfügung, das den Umzugsprozess effizient abwickelt. Dies umfasst das Verpacken und Einpacken von Möbeln, das Laden und Entladen sowie den sicheren Transport der Güter an ihren neuen Bestimmungsort.",
        align: "right",
        image: "/panner1.jpg"
    },
    {
        id: uuid(),
        title: "Garten und Landschaftsbau",
        content:
            "Das Unternehmen bietet Dienstleistungen im Bereich Garten- und Landschaftsgestaltung an. Ob Sie einen neuen Garten anlegen oder Ihren bestehenden Garten renovieren möchten, das Team aus Facharbeitern arbeitet daran, Ihre Vision umzusetzen und den Raum in eine schöne und komfortable grüne Zone zu verwandeln.",
        align: "left",
        image: "/panner3.jpg"
    },
    {
        id: uuid(),
        title: "Haushaltmontage",
        content:
            "Inter Transporte Leipzig bietet Montagedienstleistungen für Haushaltsmöbel an. Ob es sich um neu gelieferte Möbel handelt oder um das Abbauen und Zusammenbauen von vorhandenen Möbeln in Ihrem Zuhause, das Expertenteam montiert die Möbel präzise und professionell, um einen sicheren und komfortablen Gebrauch für die Kunden zu gewährleisten.",
        align: "right",
        image: "/panner1.jpg"
    },
    {
        id: uuid(),
        title: "Haushaltsauflösung",
        content:
            "Das Unternehmen bietet Dienstleistungen zur Auflösung von Haushalten an, wenn eine vollständige Räumung erforderlich ist. Ob aufgrund eines Umzugs, einer Renovierung oder aus anderen Gründen, das Team von Inter Transporte Leipzig kümmert sich professionell um das Abbauen und Reinigen der Wohnungen. Der Umgang mit Eigentum und Möbeln erfolgt sorgfältig, und überschüssige Materialien werden ordnungsgemäß gemäß den Umweltstandards entsorgt.",
        align: "left",
        image: "/panner3.jpg"
    }
    // {
    //     id: uuid(),
    //     title: "Umzugservice",
    //     content:
    //         "Say goodbye to meal planning stress! With NutriTrack, planning your meals becomes a breeze. Our user-friendly Notion template lets you create customized daily or weekly meal plans effortlessly. Enjoy a balanced and nutritious diet without the hassle.",
    //     align: "right",
    //     image: "/features1.png"
    // },
    // {
    //     id: uuid(),
    //     title: "Garten und Landschaftsbau",
    //     content:
    //         "We've got your grocery shopping covered! NutriTrack includes a handy shopping list feature. As you plan your meals, the template automatically generates a comprehensive shopping list. No more forgotten items or aimless wandering in the supermarket. Shopping for healthy ingredients has never been easier!",
    //     align: "left",
    //     image: "/features2.png"
    // },
    // {
    //     id: uuid(),
    //     title: "Haushaltmontage",
    //     content:
    //         "Say goodbye to meal planning stress! With NutriTrack, planning your meals becomes a breeze. Our user-friendly Notion template lets you create customized daily or weekly meal plans effortlessly. Enjoy a balanced and nutritious diet without the hassle.",
    //     align: "right",
    //     image: "/features1.png"
    // },
    // {
    //     id: uuid(),
    //     title: "Haushaltsauflösung",
    //     content:
    //         "We've got your grocery shopping covered! NutriTrack includes a handy shopping list feature. As you plan your meals, the template automatically generates a comprehensive shopping list. No more forgotten items or aimless wandering in the supermarket. Shopping for healthy ingredients has never been easier!",
    //     align: "left",
    //     image: "/features2.png"
    // }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={` process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16 rounded-xl"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
