import Footer from '@/components/footer';
import Header from '@/components/header';
import './globals.css'
import 'swiper/css';


export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

    const paths = [
        {
            name: "Услуги",
            link: "/pricing",
        },
        {
            name: "Клиника",
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
    return (
        <html lang="en">
            <body>
                <Header paths={paths} />
                {children}
                <Footer paths={paths} />
            </body>

        </html>
    )
}
