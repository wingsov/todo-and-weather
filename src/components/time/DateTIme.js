import React, { useState} from 'react';

const DateTime = () => {


    const [dateTime, setDateTime] = useState(new Date());

    const updateDate = () => {
        setDateTime(new Date())
    };

    setInterval(updateDate,1000);

    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const dayOfWeek = daysOfWeek[dateTime.getDay()];


    return (

        <div className="Date">
            <h2>{dayOfWeek}</h2>
            <h2>{dateTime.toLocaleDateString()}</h2>
            <h2>{dateTime.toLocaleTimeString()}</h2>
        </div>
    );
};

export default DateTime;