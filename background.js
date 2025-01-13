chrome.alarms.create("checkMessages", { periodInMinutes: 0.5 });

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "checkMessages") {
        chrome.tabs.query({ url: "*://www.fiverr.com/*" }, (tabs) => {
            if (tabs.length > 0) {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    function: checkForUnreadMessages
                });
            }
        });
    }
});

function checkForUnreadMessages() {
    const unreadMessage = document.querySelector(".unread-icon.notifications-drawer-letter-unread");
    if (unreadMessage) {
        chrome.runtime.sendMessage({ message: "unread" });
    }
}

chrome.runtime.onMessage.addListener((request) => {
    if (request.message === "unread") {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon48.png",
            title: "New Fiverr Message",
            message: "You have a new unread message on Fiverr!",
            priority: 1
        });
    }
});
