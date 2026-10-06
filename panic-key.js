// 1. Retrieve the saved key from localStorage
        const customKey = localStorage.getItem('userCloseKey');
        
        if (customKey) {
            document.getElementById('keyDisplay').innerText = `Press "${customKey.toUpperCase()}" to instantly close everything!`;
        }

        // 2. Listen for that specific keypress
        document.addEventListener('keydown', function(event) {
            if (event.key.toLowerCase() === customKey) {
                
                // 3. Close the original main website window
                if (window.opener && !window.opener.closed) {
                    window.opener.close();
                }
                
                // 4. Close this game window
                window.close();
            }
        });