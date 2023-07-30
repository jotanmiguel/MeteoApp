function updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const currentTime = `${hours}:${minutes}`;

            // Update the content of the "time-container" div with the current time
            document.getElementById('time-container').textContent = currentTime;
        }

        updateTime();

        // Update the time every second
        setInterval(updateTime, 1000);