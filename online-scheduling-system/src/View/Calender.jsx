import React, { useState, useEffect } from "react";
import './Calender.css'; // Make sure to include your external CSS for styling
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const [currDate, setCurrDate] = useState(new Date());
  const [currMonth, setCurrMonth] = useState(currDate.getMonth());
  const [currYear, setCurrYear] = useState(currDate.getFullYear());
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirect back to login page on logout
  };
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    renderCalendar();
  }, [currMonth, currYear]);

  const renderCalendar = () => {
    const daysTag = document.querySelector(".days");
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // First day of the month
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // Last date of the month
    const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // Last day of the month
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Last date of the previous month

    let liTag = "";

    // Previous month's last days
    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Current month days
    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === currDate.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }

    // Next month's first days
    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    if (daysTag) {
      daysTag.innerHTML = liTag;
    }
  };

  const handlePrevNext = (direction) => {
    let newMonth = currMonth;
    let newYear = currYear;

    if (direction === "prev") {
      newMonth = currMonth - 1;
    } else {
      newMonth = currMonth + 1;
    }

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setCurrMonth(newMonth);
    setCurrYear(newYear);
  };

  return (
    <div className="mainBox">
      <header>
        <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
        <div className="icons">
          <span id="prev" className="material-symbols-rounded" onClick={() => handlePrevNext("prev")}>
            L
          </span>
          <span id="next" className="material-symbols-rounded" onClick={() => handlePrevNext("next")}>
            R
          </span>
        </div>
      </header>

      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>

        <ul className="days"></ul>
      </div>
    <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Calendar;
