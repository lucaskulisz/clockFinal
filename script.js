 function updateClock() {
            const now = moment();
            const hour = now.hours() % 12;
            const minute = now.minutes();
            const second = now.seconds();

            const hourRotation = (hour + minute / 60) * 30; // 360 degrees / 12 hours = 30 degrees per hour
            const minuteRotation = (minute + second / 60) * 6; // 360 degrees / 60 minutes = 6 degrees per minute
            const secondRotation = second * 6; // 360 degrees / 60 seconds = 6 degrees per second

            const hourHand = document.getElementById('hour');
            const minuteHand = document.getElementById('minute');
            const secondHand = document.getElementById('second');

            hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
            minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
            secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
        }

        setInterval(updateClock, 1000);

        updateClock();
        function updateClock1() {
            const now = moment();
            const formattedTime = now.format('HH:mm:ss');
            document.getElementById('clock1').textContent = formattedTime;
        }

        // Update the clock every second
        setInterval(updateClock1, 1000);

        // Initial update
        updateClock1();