import React from 'react'
import ServiceItem from './ServiceItem'
import "../styles/ServicesSection.css"
import monitorImage from '../assets/Моник.png'
import siteScreenshot from '../assets/craxy.png'
import businessIcon from '../assets/бизнес-иконка.png'
import visitIcon from '../assets/визитка копия.png'
import individIcon from '../assets/индивид.png'
import corpoIcon from '../assets/корпо.png'
import moneyIcon from '../assets/монетка.png'
import ruporIcon from '../assets/корпо.png'

interface Service {
    title: string
    color: 'blue' | 'orange'
    icon: string
}

const ServicesSection: React.FC = () => {
    const services: Service[] = [
        { title: 'Бизнес-сайт', color: 'blue', icon: businessIcon },
        { title: 'Сайт-визитка', color: 'blue', icon: visitIcon },
        { title: 'Рекламный сайт', color: 'blue', icon: individIcon },
        { title: 'Интернет-магазин', color: 'orange', icon: corpoIcon },
        { title: 'Корпоративный сайт', color: 'orange', icon: moneyIcon },
        { title: 'Индивидуальный проект', color: 'orange', icon: ruporIcon },
    ];

return (
    <div className="services-section">
    <div className="services-content">
    <div className="left-column">
        <div className="services-text">
        <p>
            Группа компаний «Russian IT Group», проработав более 10 лет в
            области дизайна, представляет разработку и продвижение как простых,
            так и сложных динамичных сайтов.
        </p>
        <p>
            Мы учтем все Ваши пожелания, примем во внимание все нюансы и мелочи
            и полностью реализуем задуманный Вами проект.
        </p>
        </div>

        
    <div className="services-image">
<div className="monitor-container">
    <img src={monitorImage} alt="Монитор с сайтом" className="monitor" />
    <img src={siteScreenshot} alt="Скриншот сайта" className="screen-content" />
</div>
</div>
</div>

<div className="right-column">
<div className="services-grid">
    {services.map((service, index) => (
        <ServiceItem
            key={index}
            title={service.title}
            color={service.color}
            icon={service.icon}
        />
    ))}
</div>

    
<div className="services-description">
    <h2>НАШИ УСЛУГИ</h2>
    <p>
    Мы предлагаем весь комплекс услуг по разработке сайтов и поддержке
    web-приложений. В зависимости от Ваших потребностей мы разрабатываем
    мобильные приложения, Landing Page, личные сайты, высоконагруженные
    web-приложения, уникальные проекты, системы электронных платежей и
    интернет-банкинга, а также корпоративные порталы, включающие в себя такие
    функции, как документооборот, онлайн-калькуляторы, почту, календари и множество других.
    </p>
    <button className="order-button">ЗАКАЗАТЬ</button>
            </div>
        </div>
    </div>
</div>
)
}

export default ServicesSection