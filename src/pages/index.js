import AOS from 'aos';
import 'aos/dist/aos.css';

import Head from 'next/head';
import { Box } from '@mui/material';
import { Banner } from '@/components/Banner';
import { BaseStep } from '@/components/base/BaseStep';
import { advantages, faq, services, text2, text3, text4 } from '@/config';
import { ImageBlock1 } from '@/components/ImageBlock1';
import { BaseAccordion } from '@/components/base/Accordion/BaseAccordion';
import { ImageBlock2 } from '@/components/ImageBlock2';
import { ContactsBlock } from '@/components/ContactsBlock';
import { Suspense, useEffect } from 'react';
import { Metrika } from '@/Metrika';
import { AboutBlock } from '@/components/AboutBlock';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Home() {

    useEffect(() => {
        AOS.init({
            disable: 'mobile'
        });
    }, []);

    return (
        <>
            <Head>
                <title>Медицинская Сервисная Компания. Платная госпитализация в Москве. Лечения в ведущих клиниках
                    Москвы. +7 (499) 719-81-00, 24/7</title>
                <meta name="description"
                      content="Нужна срочная госпитализация в ведущую клинику Москвы? Мы организуем размещение в течение 24 часов, без очередей и бумажной волокиты. Только проверенные врачи и топовые учреждения Москвы — федеральные и ведомственные клиники, включая НМИЦ, ЦКБ, Бурденко, Боткина, и другие. Персональный куратор 24/7: подбор клиники, трансфер, помощь с документами. Доступ к комфортным палатам и VIP-условиям лечения. Позвоните сейчас — получите бесплатную консультацию и план госпитализации за 15 минут." />
                <meta name="keywords"
                      content="платная госпитализация, госпитализация в Москву, лечение в Москве, лучшие клиники Москвы, платное лечение в Москве, организация госпитализации, медицинская эвакуация, транспортировка больных, реабилитация в Москве, ведущие врачи Москвы, запись в клинику, обследование в Москве, скорая медицинская помощь, частная госпитализация, медицинский туризм Россия" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="478e8b2a8af6979b" />
                <meta name="robots" content="index, follow" />
                {/*<link rel="canonical" href="https://msk-group-hospital.online/" />*/}
                <link rel="icon" href="/favicon.png" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Платная госпитализация в Москве. Лечения в ведущих клиниках Москвы. +7 (499) 719 81 00, 24/7" />
                <meta property="og:description"
                      content="Нужна срочная госпитализация в ведущую клинику Москвы? Мы организуем размещение в течение 24 часов, без очередей и бумажной волокиты. Только проверенные врачи и топовые учреждения Москвы — федеральные и ведомственные клиники, включая НМИЦ, ЦКБ, Бурденко, Боткина, и другие. Персональный куратор 24/7: подбор клиники, трансфер, помощь с документами. Доступ к комфортным палатам и VIP-условиям лечения. Позвоните сейчас — получите бесплатную консультацию и план госпитализации за 15 минут." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.online/" />
                <meta property="og:image" content="https://msk-group-hospital.online/images/banner.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация в Москву. Медицинский туризм. Организация лечения в ведущих клиниках. +7 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Платная госпитализация в Москву. Медицинский туризм. Организация лечения в ведущих клиниках. +7 (499) 719-81-00, 24/7" />
            </Head>
            <Box component="main">
                <Banner />
                <BaseStep id="about" number={'01'}
                          label="Платная госпитализация в Москве и регионах быстро, официально, без полиса ОМС" />
                <AboutBlock />
                <BaseCallBlock text='Мы заботимся о том, чтобы ваше лечение началось вовремя, с комфортом, безопасностью и полным доверием.'/>
                <ImageBlock1 text={text2} img="/images/doctor-1.jpg" />
                <BaseStep id="services" number={'02'} label="направления лечения" />
                <BaseAccordion items={services} />
                <BaseStep id="advantages" number={'03'} label="результаты лечения у нас" />
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
