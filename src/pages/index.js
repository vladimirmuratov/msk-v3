import Head from 'next/head';
import { Box } from '@mui/material';
import { Banner } from '@/components/Banner';
import { BaseStep } from '@/components/base/BaseStep';
import { TextBlock } from '@/components/TextBlock';
import { advantages, faq, services, text1, text2, text3, text4 } from '@/config';
import { ImageBlock1 } from '@/components/ImageBlock1';
import { BaseAccordion } from '@/components/base/Accordion/BaseAccordion';
import { ImageBlock2 } from '@/components/ImageBlock2';
import { ContactsBlock } from '@/components/ContactsBlock';
import { Suspense, useEffect } from 'react';
import { Metrika } from '@/Metrika';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

    useEffect(() => {
        AOS.init({
            disable: 'mobile'
        });
    }, [])

    return (
        <>
            <Head>
                <title>Госпитализация в Москве. Индивидуальный лечащий врач. +7 (499) 719 81 00, 24/7</title>
                <meta name="description"
                      content="Официальный координатор по госпитализации. Госпитализация больных из России и СНГ в больницы Москвы. 10 лет опыта. 20 клиник-партнеров. Минимум документов. Финансовая прозрачность." />
                <meta name="keywords"
                      content="платные больницы гинекологии, платная госпитализация в москве хирургия, платная травматология москва, платная госпитализация урология, платная госпитализация в москве кардиология, платная госпитализация неврология, платная гастроэнтерология в москве, платный стационар терапия, сомнолог москва лечение храпа" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="478e8b2a8af6979b" />
                <meta name="robots" content="index, follow"/>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Box component="main">
                <Banner />
                <BaseStep id="about" number={'01'} label="о нас" />
                <TextBlock text={text1} />
                <ImageBlock1 text={text2} img="/images/doctor-1.jpg" />
                <BaseStep id="services" number={'02'} label="услуги" />
                <BaseAccordion items={services} />
                <BaseStep id="advantages" number={'03'} label="преимущества" />
                <BaseAccordion items={advantages} />
                <ImageBlock2 text={text3} img="/images/doctor-2.jpg" />
                <BaseStep id="faq" number={'04'} label="вопросы" />
                <BaseAccordion items={faq} />
                <ImageBlock1 text={text4} img="/images/doctor-3.jpg" />
                <BaseStep id="contacts" number={'05'} label="контакты" />
                <ContactsBlock />
            </Box>
            <Suspense>
                <Metrika />
            </Suspense>
        </>
    );
}
