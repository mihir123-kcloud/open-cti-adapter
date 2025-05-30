(function() {
    // Wait until the CTI system is ready
    sforce.opencti.onReady(function() {
        console.log("Open CTI Adapter is ready");
    });

    // Handle click-to-dial
    sforce.opencti.onClickToDial(function(payload) {
        let phoneNumber = payload.number;

        // Example: Log number and make API call
        console.log("Dialing: " + phoneNumber);

        // Make API call to your Vonage Middleware server
        fetch("https://your-middleware-server.com/api/initiateCall", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phoneNumber: phoneNumber
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Call initiated:", data);
        })
        .catch(error => {
            console.error("Error initiating call:", error);
        });
    });
})();
