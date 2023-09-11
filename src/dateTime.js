import React, { useState, useEffect } from "react";

function formatDateAndTime(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = (hours % 12 || 12).toString(); // Ensure it's a string
    const formattedMinutes = minutes.toString().padStart(2, '0'); // Add leading zero if necessary

    return `${dayOfWeek} ${dayOfMonth} ${month}  | ${formattedHours}: ${formattedMinutes} ${ampm}`;
}

function DateTimeDisplay() {
    const [formattedDateAndTime, setFormattedDateAndTime] = useState("");

    useEffect(() => {
        const currentDate = new Date(); // Get the current date and time
        const formattedDateTime = formatDateAndTime(currentDate);
        setFormattedDateAndTime(formattedDateTime);
    }, []);

    return <div>{formattedDateAndTime}</div>;
}

export default DateTimeDisplay;
