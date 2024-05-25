import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { useState } from "react";
import Karte from "@components/Card/Karte";
import { Contact } from "@components/Contact/Contact";

const cards = [
    {
        title: "Umzugservice",
        description:
            "Inter Transporte Leipzig bietet umfassende Umzugsdienstleistungen für Wohn- und Geschäftsgebäude an. Ob Sie Ihren Wohnsitz, Ihr Büro oder Ihr Lagerhaus umziehen möchten, das Unternehmen stellt ein professionelles Team zur Verfügung, das den Umzugsprozess effizient abwickelt. Dies umfasst das Verpacken und Einpacken von Möbeln, das Laden und Entladen sowie den sicheren Transport der Güter an ihren neuen Bestimmungsort.",
        icon: "mdi-light:home",
        image: "/karte1.jpg"
    },
    {
        title: "Garten und Landschaftsbau",
        description:
            "Das Unternehmen bietet Dienstleistungen im Bereich Garten- und Landschaftsgestaltung an. Ob Sie einen neuen Garten anlegen oder Ihren bestehenden Garten renovieren möchten, das Team aus Facharbeitern arbeitet daran, Ihre Vision umzusetzen und den Raum in eine schöne und komfortable grüne Zone zu verwandeln.",
        icon: "twemoji:seedling",
        image: "/karte1.jpg"
    },
    {
        title: "Haushaltmontage",
        description:
            "Inter Transporte Leipzig bietet Montagedienstleistungen für Haushaltsmöbel an. Ob es sich um neu gelieferte Möbel handelt oder um das Abbauen und Zusammenbauen von vorhandenen Möbeln in Ihrem Zuhause, das Expertenteam montiert die Möbel präzise und professionell, um einen sicheren und komfortablen Gebrauch für die Kunden zu gewährleisten.",
        icon: "mdi:toolbox-outline",
        image: "/karte1.jpg"
    },
    {
        title: "Haushaltsauflösung",
        description:
            "Das Unternehmen bietet Dienstleistungen zur Auflösung von Haushalten an, wenn eine vollständige Räumung erforderlich ist. Ob aufgrund eines Umzugs, einer Renovierung oder aus anderen Gründen, das Team von Inter Transporte Leipzig kümmert sich professionell um das Abbauen und Reinigen der Wohnungen. Der Umgang mit Eigentum und Möbeln erfolgt sorgfältig, und überschüssige Materialien werden ordnungsgemäß gemäß den Umweltstandards entsorgt.",
        icon: "ic:outline-delete-sweep",
        image: "/karte1.jpg"
    }
    // Add more cards as needed
];

export default function Home() {
    const [activeCard, setActiveCard] = useState(0);

    return (
        <Layout className="">
            <SEO
                title="Inter Transporte Leipzig"
                description="Discover NutriTrack, the effortless way to plan your meals with the power of Notion. Streamline your nutrition journey and achieve your health goals with ease."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px  gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                {/* الخدمات */}
                                <BadgeMessage>Dienste</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                {/* Simplify Your Nutrition Journey with NutriTrack */}
                                Inter Transporte Leipzig
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    {/* Hey there! Welcome to NutriTrack, the
                                    ultimate nutrition meal planner powered by
                                    Notion. We&apos;ve got some awesome features
                                    lined up to make your nutrition journey a
                                    piece of cake (pun intended). Check them
                                    out: */}
                                    Inter Transporte Leipzig ist ein
                                    Unternehmen,
                                    <br /> das eine Vielzahl von
                                    Dienstleistungen im Bereich Umzug,
                                    <br /> Garten- und Landschaftsbau,
                                    Möbelmontage und Haushaltsauflösung
                                    anbietet.
                                    <br /> Hier ist eine Beschreibung der
                                    angebotenen Dienstleistungen:
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* CARD SELECTOR */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs mt-7">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>
                                    Weitere Dienstleistungen
                                </BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Inter Transporte Leipzig
                            </PageTitle>
                            <Content
                                className="text-center mb-5"
                                alignment="center"
                            >
                                <p>
                                    Inter Transporte Leipzig ist ein
                                    Unternehmen,
                                    <br /> das eine Vielzahl von
                                    Dienstleistungen im Bereich Umzug,
                                    <br /> Garten- und Landschaftsbau,
                                    Möbelmontage und Haushaltsauflösung
                                    anbietet.
                                    <br /> Hier ist eine Beschreibung der
                                    angebotenen Dienstleistungen:
                                </p>
                            </Content>
                            <div className="flex flex-col items-center space-y-4 mt-5">
                                <div className="flex flex-wrap mt-5 mb-5 bg-gray-100 p-2 rounded-xl ">
                                    {cards.map((card, index) => (
                                        <button
                                            key={index}
                                            className={`m-1 w-full md:w-auto flex items-center justify-center px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium leading-5 rounded-lg shadow-md transition-colors duration-150 ${
                                                index === activeCard
                                                    ? "text-white shadow-lg transform -translate-y-1 btn--secondary"
                                                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                            }`}
                                            onClick={() => setActiveCard(index)}
                                        >
                                            <BadgeIcon icon={card.icon} />
                                            {card.title}
                                        </button>
                                    ))}
                                </div>
                                {/* <div className="flex space-x-4 mt-5 mb-5 bg-gray-100 p-2 rounded-xl">
                                    {cards.map((card, index) => (
                                        <button
                                            key={index}
                                            className={`flex items-center px-6 py-3 font-medium text-sm leading-5 rounded-lg shadow-md transition-colors duration-150 ${
                                                index === activeCard
                                                    ? " text-white shadow-lg transform -translate-y-1 btn--secondary"
                                                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                                            }`}
                                            onClick={() => setActiveCard(index)}
                                        >
                                            <BadgeIcon icon={card.icon} />
                                            {card.title}
                                        </button>
                                    ))}
                                </div> */}
                                <Karte {...cards[activeCard]} />
                            </div>
                        </SectionContainer>
                    </MotionBTTContainer>

                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="contact" className="faq mt-7">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Kontakt</BadgeMessage>
                            </BadgeGroup>
                            <Contact />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
