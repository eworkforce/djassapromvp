# MVP feetures Specs Decription:

### Software Specification Document: MVP for Ad Message Generator Web Application

### **1. Overview**

This MVP web application enables users to create ad text messages to promote their businesses or services. The application provides an intuitive and user-friendly experience where users can input descriptions through voice, validate and edit the transcriptions, and generate ad messages that reflect their intentions. The generated messages can be accompanied by images or videos and shared via WhatsApp.

---

### **2. Functional Requirements**

**Core Features:**

1. **Voice Input:**
    - User clicks a button to record their voice description of the product/service.
    - Recorded audio is processed and converted into text.
2. **Text Validation:**
    - The transcription is displayed for user validation.
    - Users can listen to the transcription and submit corrections if necessary.
3. **Ad Message Generation:**
    - Based on the transcription and user-provided intention, the app generates an ad message with:
        - Appropriate emojis.
        - A tone that aligns with the user’s input (e.g., formal, friendly, or enthusiastic).
4. **Message Approval:**
    - Users can listen to the generated message and:
        - Approve it.
        - Request regeneration for a better fit.
5. **Media Attachment:**
    - Users can upload images or videos to accompany the ad message.
6. **WhatsApp Sharing:**
    - Once satisfied, users can send the ad directly to WhatsApp.

**UI/UX Design:**

- Clean, intuitive interface inspired by WhatsApp's layout.
- Modern design with clear icons and smooth transitions.

---

### **3. Non-Functional Requirements**

- **Performance:** The app should process voice-to-text and text generation within 3–5 seconds.
- **Scalability:** Hosted on Google Cloud Run for auto-scaling capabilities.
- **Security:** Use HTTPS for secure data transmission and OAuth for user authentication.
- **Accessibility:** Designed to be mobile-friendly, with responsive design and minimal load times.

---

### **4. Technical Specifications**

**4.1 Frontend:**

- **Framework:** React.js or Vue.js for intuitive UI/UX.
- **Audio Handling:** Web Audio API for recording.
- **Styling:** TailwindCSS for modern styling.
- **State Management:** Redux or Vuex for managing app state.

**4.2 Backend:**

- **Framework:** FastAPI (Python) or Node.js (Express) for API handling.
- **Voice-to-Text API:** Google Cloud Speech-to-Text for high accuracy in French transcription.
- **LLM for Ad Message Generation:** OpenAI GPT-4 for natural language generation.
- **Media Storage:** Google Cloud Storage for handling uploaded images and videos.

**4.3 Database:**

- **Type:** Firestore (NoSQL) for seamless integration with Google Cloud.
- **Purpose:** Store user-generated content, preferences, and ad metadata.

**4.4 Deployment:**

- **Platform:** Google Cloud Run for containerized application deployment.
- **Containerization:** Docker to ensure smooth deployment and scalability.

---

### **5. Implementation Steps**

**Step 1: Initial Setup**

- Set up Google Cloud Project.
- Configure Google Cloud Speech-to-Text API for French language.
- Set up a Firestore database and Google Cloud Storage buckets.

**Step 2: Frontend Development**

- Implement audio recording functionality.
- Create UI components for transcription validation and message editing.
- Develop media upload functionality.

**Step 3: Backend Development**

- Build APIs for voice-to-text conversion, ad message generation, and media management.
- Implement integration with Google Cloud Speech-to-Text and GPT-4.
- Develop WhatsApp integration via Twilio API for message sending.

**Step 4: Testing**

- Perform unit testing for frontend and backend components.
- Conduct integration testing for end-to-end functionality.
- Test for usability and performance on mobile and desktop.

**Step 5: Deployment**

- Containerize the application using Docker.
- Deploy to Google Cloud Run.
- Set up CI/CD pipeline for updates.

---

### **6. Logical Workflow**

1. User clicks the "Record" button to provide a voice description.
2. The audio is processed and transcribed via Google Cloud Speech-to-Text.
3. The transcription is displayed for user validation.
4. Once validated, the transcription and user intention are sent to GPT-4 to generate the ad message.
5. User reviews the generated message, listens to it if needed, and requests edits or confirms.
6. User uploads an image or video to attach to the message.
7. When finalized, the message is sent to WhatsApp via Twilio.

---

### **7. Considerations for MVP Scope**

- **Voice-to-Text Accuracy:**
    - **Primary Language Focus:** French, as the first instance will be showcased in Côte d'Ivoire.
    - **Local Dialect Adaptation:** Incorporate adaptation for commonly used Ivorian French expressions to ensure accurate transcriptions.
    - **Fallback Option:** Provide manual text editing for cases where transcription may not fully capture local nuances.
- **Ad Message Templates:** Leverage GPT-4 with prompt tuning to align ad messages with culturally relevant and engaging expressions commonly used in Côte d'Ivoire.
- **Simplified Media Handling:** Limit file size for uploaded images and videos to ensure fast processing and avoid additional storage costs.

---

### **8. Long-Term Vision (Beyond MVP)**

- Multilingual support for voice-to-text and ad generation.
- Advanced user customization of ad tone, style, and format.
- Integration with other social media platforms for broader reach.
- AI-generated image or video suggestions based on ad text.
