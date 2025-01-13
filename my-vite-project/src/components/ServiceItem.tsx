import React from 'react'

interface ServiceItemProps {
title: string;
color: 'blue' | 'orange';
icon: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, color, icon }) => (
<div className={`service-item ${color}`}>
    <img src={icon} alt={title} />
    <p>{title}</p>
</div>
);

export default ServiceItem;