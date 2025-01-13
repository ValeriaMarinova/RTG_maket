import React from 'react'
import "../styles//BitrixDevelopment.css"
import mainImage from '../assets/Слой 29.png'
import icon1 from '../assets/Композитка блоки.png'
import icon2 from '../assets/1-с.png'
import icon3 from '../assets/битрикс.png'
import icon4 from '../assets/кубок.png'

const BitrixDevelopment: React.FC = () => {
return (
    <div className="bitrix-development">
        <div className='col-item'>
    <div className="content-section">
        <h2>ПРОФЕССИОНАЛЬНАЯ РАЗРАБОТКА САЙТОВ НА ПЛАТФОРМЕ «1С-БИТРИКС»</h2>
        <p>
        В нашей компании можно создать сайт на базе CMS-системы «1С-Битрикс».
        Интеграция 1С-Битрикс поможет решить Вам следующие технологические задачи:
        </p>
        <ul>
        <li>Передача заказов на сайте в 1С для обработки</li>
        <li>Выгрузка результатов обработки заказов на сайт для уведомления клиентов</li>
        </ul>
        <p>
        «Russian IT Group» — Золотой сертифицированный партнер «1С-Битрикс». Наши сотрудники имеют
        многолетний опыт работы с данной CMS, который позволяет качественно выполнить интеграцию CMS и
        CRM с Вашими интернет-проектами. Мы гарантируем Вам обеспечение технической поддержки созданных проектов на самом высоком уровне.
        </p>
    </div>

    <div className="image-section">
        <img src={mainImage} alt="Bitrix Development" />
    </div>
    </div>

    <div className="icon-section">
        <div className="icon-item">
        <img src={icon1} alt="Композитный сайт" />
        <p>КОМПОЗИТНЫЙ САЙТ</p>
        </div>
        <div className="icon-item">
        <img src={icon2} alt="Интеграция с 1С" />
        <p>ИНТЕГРАЦИЯ С 1С</p>
        </div>
        <div className="icon-item">
        <img src={icon3} alt="Золотой партнер Битрикс" />
        <p>ЗОЛОТОЙ СЕРТИФИЦИРОВАННЫЙ ПАРТНЕР БИТРИКС</p>
        </div>
        <div className="icon-item">
        <img src={icon4} alt="Качество внедрения" />
        <p>УЧАСТНИК ПРОГРАММЫ КАЧЕСТВА ВНЕДРЕНИЙ</p>
        </div>
    </div>
    </div>
)
}

export default BitrixDevelopment
