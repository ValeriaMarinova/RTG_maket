import React from 'react'
import "../styles/Development.css"

const DevelopmentProcess: React.FC = () => {
    return (
    <div className="development-process">
        <h2>РАЗРАБОТКА САЙТОВ</h2>
        <div className="process-container">

        {/* добавить картинки для блока*/}
        <div className="process-item">
            <span>Разработка сайта с нуля</span>
        </div>
        <div className="process-item">
            <span>Индивидуальный подход к решению каждой задачи</span>
        </div>
        <div className="process-item">
            <span>Поддержка сайта на любой стадии проекта</span>
        </div>
        <div className="process-item">
            <span>Создание уникального сайта</span>
        </div>
        <div className="process-item">
            <span>Постоянное отслеживание тенденций на рынке</span>
        </div>
        <div className="process-item">
            <span>Разработка сайта на платформе «1С-Битрикс»</span>
        </div>
        </div>
    </div>
    )
}

export default DevelopmentProcess