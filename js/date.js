function updateDate() {
    var date = new Date();
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear().toString().padStart(4, '0');
    var currentDate = `${day}/${month}/${year}`;

    document.getElementById('date-container').textContent = currentDate;
    console.log(currentDate);
}

updateDate();

// Function to check if it's midnight and update the date
function checkAndUpdateDate() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Check if it's midnight (00:00:00)
    if (hours === 0 && minutes === 0 && seconds === 0) {
        updateDate(); // Update the date if it's midnight
    }
}

checkAndUpdateDate();

// Update the date every second (1000 milliseconds)
setInterval(checkAndUpdateDate, 1000);