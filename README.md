# Social Media Selector Menu

This is a simple project that creates a social media selector menu using HTML, CSS, and JavaScript. The menu is designed with a flexbox layout and features a button-like element with a chevron-down icon and a hidden list of social media platforms represented by their respective icons and names. When the menu is clicked, the list of social media platforms slides down, and when a platform is selected, its name replaces the default "Social Media" text on the button. 

The JavaScript code handles the menu toggle and platform selection events by toggling CSS classes to show/hide the platform list and update the button text. The Font Awesome library is used to provide the social media icons. The background gradient and other CSS properties give the menu a pleasing aesthetic.

## Demo

You can try out the application by visiting [this link](https://paribhandarkar.github.io/social-media-selector-menu/).

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get started with this project, clone the repository and open the `index.html` file in your preferred web browser.

## Challenges I Faced

To replace the default "Social Media" text on the button with the name of the selected platform, it was necessary to add an event listener to each social media list item. The event listener updated the button text with the inner HTML of the selected list item. Properly selecting and updating the correct HTML element with the selected platform name required careful attention to detail.

![image](https://github.com/paribhandarkar/social-media-selector-menu/assets/76446574/f7a95141-1d54-4de1-96f1-3e8a21821749)
