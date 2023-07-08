import Footer from '@/components/footer';
import Header from '@/components/header';
import './globals.css'
import 'swiper/css';
import "animate.css/animate.min.css";
import Head from 'next/head';
import NextTopLoader from 'nextjs-toploader';
import getContactsData from '@/lib/queries/getContactsData';
import CookieConsentWrapper from '@/components/CookieConsentWrapper';
import ButtonUp from '@/components/ButtonUp';
import AnimationObserver from '@/lib/AnimationObserver';
import ModalEnroll from '@/components/ModalEnroll';

export const revalidate = 120;

export const metadata = {
    title: 'Стоматология «Стома Престиж»',
    description: "Качественное и безболезненное лечение зубов в Якутске.\nВесь спектр услуг: лечение, протезирование, хирургия.",
}

export default async function RootLayout({ children }) {

    const paths = [
        {
            name: "Услуги",
            link: "/pricing",
        },
        {
            name: "О нас",
            link: "/clinic",
        },
        {
            name: "Врачи",
            link: "/doctors",
        },
        {
            name: "Отзывы",
            link: "/reviews",
        },
        {
            name: "Работы",
            link: "/works",
        },
        {
            name: "Вопрос-ответ",
            link: "/faq",
        },
        {
            name: "Контакты",
            link: "/#contacts",
        },
    ]
    const contacts = await getContactsData();
    return (
        <html lang="en">
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <body className='relative'>
                <AnimationObserver />
                <NextTopLoader
                    color="#D72642"
                    shadow="0 0 5px #BB132E"
                    showSpinner={false}
                />
                <ModalEnroll />
                <Header paths={paths} />
                <ButtonUp />
                <CookieConsentWrapper />
                {children}
                <Footer contacts={contacts} paths={paths} />
            </body>

        </html>
    )
}
