
import React, { useState, useEffect } from "react"; // Importing React, useState, and useEffect hooks
import './Calender.css'; // Importing the CSS file for styling the calendar
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook for navigation

const Calendar = () => {
  const [currDate, setCurrDate] = useState(new Date()); // State to store the current date
  const [currMonth, setCurrMonth] = useState(currDate.getMonth()); // State for the current month
  const [currYear, setCurrYear] = useState(currDate.getFullYear()); // State for the current year
  const navigate = useNavigate(); // React Router hook for navigating to different routes

  const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility

  // Function to toggle the visibility of the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle between true and false
  };

  // Function to handle logout and redirect to the login page
  const handleLogout = () => {
    navigate('/'); // Redirect to the root (login) page
  };
  const handleMenuItemClick = () => {
    navigate('/'); // Redirect to the root (login) page
  };

  // Array of month names for display purposes
  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  // useEffect hook to render the calendar when the current month or year changes
  useEffect(() => {
    renderCalendar(); // Call renderCalendar when currMonth or currYear changes
  }, [currMonth, currYear]);

  // Function to generate and render the calendar days
  const renderCalendar = () => {
    const daysTag = document.querySelector(".days"); // Select the days element
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // Get the first day of the current month
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // Get the last date of the current month
    const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // Get the last day of the current month
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Get the last date of the previous month

    let liTag = ""; // String to store the HTML for the calendar days

    // Loop to add the last days of the previous month (inactive days)
    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`; // Add days as inactive
    }

    // Loop to add the current month's days
    for (let i = 1; i <= lastDateofMonth; i++) {
      const isToday =
        i === currDate.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "active"
          : ""; // Check if the day is today
      liTag += `<li class="${isToday}">${i}</li>`; // Add the day, mark it as active if today
    }

    // Loop to add the first days of the next month (inactive days)
    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`; // Add days as inactive
    }

    // Update the innerHTML of the days element with the generated HTML
    if (daysTag) {
      daysTag.innerHTML = liTag;
    }
  };

  // Function to handle the previous and next month navigation
  const handlePrevNext = (direction) => {
    let newMonth = currMonth; // Variable to store the updated month
    let newYear = currYear; // Variable to store the updated year

    // Update month and year based on direction (previous or next)
    if (direction === "prev") {
      newMonth = currMonth - 1;
    } else {
      newMonth = currMonth + 1;
    }

    // Handle year change if the new month is out of bounds
    if (newMonth < 0) {
      newMonth = 11; // Set month to December
      newYear--; // Decrease year by 1
    } else if (newMonth > 11) {
      newMonth = 0; // Set month to January
      newYear++; // Increase year by 1
    }

    // Update state with the new month and year
    setCurrMonth(newMonth);
    setCurrYear(newYear);
  };

  return (
    <div className="mainBox">
      {/* Calendar header with the current month and year */}
      <header>
        <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
        <div className="icons">
          {/* Button for navigating to the previous month */}
          <span id="prev" className="material-symbols-rounded" onClick={() => handlePrevNext("prev")}>
            L
          </span>
          {/* Button for navigating to the next month */}
          <span id="next" className="material-symbols-rounded" onClick={() => handlePrevNext("next")}>
            R
          </span>
          {/* Button for toggling the menu */}
          <span id="menu" className="material-symbols-rounded" onClick={toggleMenu}>
            =
          </span>
        </div>
      </header>

      {/* Calendar structure */}
      <div className="calendar">
        <ul className="weeks">
          {/* List for the days of the week */}
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>

        <ul className="days"></ul> {/* Empty list for the calendar days (dynamically populated) */}
      </div>
    
      {/* Logout button */}
      <button onClick={handleLogout} className="btn">Logout</button>
      
      {/* Menu for additional options, shown when showMenu is true */}
      {showMenu && (
        <div className="menu">
          <ul>
            <li onClick={() => handleMenuItemClick("Create event")}>Create event</li> {/* Menu item for creating an event */}
            <li>Update event</li> {/* Menu item for updating an event */}
            <li>Delete event</li> {/* Menu item for deleting an event */}
            <li onClick={() => handleMenuItemClick("item1")}>Menu Item 1</li> {/* Example menu item */}
            <li className="btn" onClick={handleLogout}>Logout</li> {/* Logout option in menu */}
          </ul>

        </div>
      )}
    </div>
  );
};

export default Calendar; // Export the Calendar component