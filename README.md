# Fiverr Message Notifier

Fiverr Message Notifier is a Chrome extension that alerts you whenever you have unread messages on Fiverr. It uses popup notifications to ensure you never miss important communications.

## Installation

1. Download or clone the repository:
    * Run the following command in your terminal:
      ```bash
      git clone <repository-url>
      ```
2. Open the Chrome extensions page:
    * Navigate to `chrome://extensions/` in your browser.
3. Enable Developer Mode:
    * Toggle the Developer Mode switch in the top-right corner.
4. Load the extension:
    * Click "Load unpacked" and select the folder containing this extension.

## Usage

Once installed, the extension will monitor Fiverr for unread messages. When a message arrives:

1. Open Fiverr in a browser tab.
2. The extension will detect any unread messages and display a popup notification.

## Folder Structure

fiverr-message-notifier/
├── manifest.json          # Main configuration file for the extension
├── background.js          # Background script to monitor Fiverr for unread messages
├── popup.html             # HTML for the extension popup (optional)
├── icon16.png             # 16x16 icon for the extension
├── icon48.png             # 48x48 icon for the extension
├── icon128.png            # 128x128 icon for the extension
├── README.md              # Documentation for the project


# Documentation for the project


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
