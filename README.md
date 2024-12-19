# CaptionCraft - Video Captioning Tool

A simple web app to add captions to a video, with features for inputting captions and timestamps.

## **Features**

- Enter a URL to a hosted video.
- Add captions with specific timestamps.
- Display video with captions and control playback (pause/play).
- Simple, intuitive interface designed for ease of use.

## **Technical Decisions**

### Frontend: React

The app is built using **React** for its component-based architecture, enabling modular and maintainable code. **React hooks** (`useState`) are used to handle dynamic parts of the app, such as managing video URLs and captions.

### Styling

**CSS-in-JS** was used for styling, keeping styles within component files. The layout uses **Flexbox** to create a responsive, centered design.

## **User Experience (UX) Considerations**

### Simple Interface

The UI is minimal and easy to navigate, with clear labels for different sections (e.g., **Video Player**, **Caption Editor**) to ensure that users can quickly understand how to use the app.

### Real-Time Feedback

Captions are updated immediately after the user adds them, providing real-time feedback and enhancing interactivity.

### Accessibility

Text sizes and color contrasts are chosen to ensure readability, and simple placeholders and labels guide users through the app.

## **Trade-Offs**

### In-Memory Data Storage

Captions are stored in memory using `useState`. While this simplifies development, data is lost if the page is refreshed. Future versions would implement persistent storage.

### Basic URL Validation

URL validation is minimal, and edge cases (unsupported video formats or inaccessible URLs) might not be covered. Future improvements would focus on more robust validation.

## **Future Improvements**

### Persistent Storage

Integrating a backend with a **database** (e.g., MongoDB or SQLite) would allow for saving captions, improving usability and ensuring data persistence.

### Advanced Features

- Drag-and-drop video uploads.
- A **timeline view** for captions.
- Caption export options (e.g., as `.srt` files).

### Responsive Design

Enhancing mobile responsiveness for a smoother experience on all device types.

### Additional Features

- Playback speed control.
- Caption preview while editing.
- Multi-language support for captions.

## **How to Run**

1. Clone the repository.
2. Install dependencies:  
   `npm install`
3. Run the app:  
   `npm start`

---
