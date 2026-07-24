# Privacy Policy for WishPing

Welcome to **WishPing** ("Application", "we", "us", or "our"). We are committed to protecting your privacy. This Privacy Policy explains how the Application collects, uses, stores, and protects your information when you use WishPing, which is built as a local-first mobile application.

---

## 1. Summary of Our Privacy Philosophy

WishPing is designed with a **privacy-first, local-first** architecture. 
* **No External Servers:** We do not own, operate, or maintain any backend servers that collect, store, or process your personal event data or API keys.
* **On-Device Storage:** All of your personal data, including contact names, birthdays, anniversaries, templates, and API credentials, remains strictly on your device.
* **Direct Integration:** Any third-party API integration (such as Google OAuth, Gmail API, or Gemini API) is handled directly from your device to the respective provider's endpoints.

---

## 2. Information We Collect and How We Use It

### A. Local Event and Contact Data
To help you track and remember special occasions, the Application allows you to add and manage:
* **Events:** Names, relationship status, dates (birthdays, anniversaries, custom events), and personal notes/reminders.
* **Storage:** This data is stored locally on your device using `AsyncStorage`. It is never uploaded to any servers of ours.

### B. Google OAuth and Gmail Integration
If you choose to connect your Google Account to send wishes via email directly from the Application:
* **Authentication:** The Application uses secure Google OAuth protocol (`expo-auth-session`) to request permission to send emails on your behalf.
* **Credentials Stored:** The retrieved access token, refresh token, token expiration timestamp, email address, profile name, and profile picture are stored solely on your device.
* **Gmail API:** When you trigger an email, the message is sent directly from your device using the Google Gmail API (`https://gmail.googleapis.com`). No email body or metadata is routed through or stored by any third party.
* **Revocation:** You can disconnect your Google Account at any time through the Settings screen, which immediately purges all Google OAuth tokens and profile data from your device.

### C. Gemini AI Integration
To generate personalized wishes, the Application allows you to use Google's Gemini AI model:
* **API Key:** You must provide your own Google Gemini API key. This key is saved locally on your device and is never shared with us.
* **Generation Prompts:** When generating a wish, the Application sends the recipient's name, relationship, event type, tone, and your custom notes directly to Google's Gemini API endpoints (`https://generativelanguage.googleapis.com`).
* **Google's Policy:** The data transmitted to the Gemini API is governed by [Google's Privacy Policy](https://policies.google.com/privacy) and Google AI's terms of service.

### D. Device Permissions
The Application may request the following permissions to function:
* **Notifications:** To schedule reminders for upcoming events. All notifications are scheduled and processed locally on your device. No external push notification servers are used.

---

## 3. Data Retention and Erasure

* **Self-Managed Retention:** Because your data is stored locally, it remains on your device for as long as the Application is installed.
* **Data Deletion:** You can erase all data stored by the Application at any time:
  1. Open the **Settings** screen in the Application.
  2. Navigate to the **Danger Zone**.
  3. Tap **Clear All App Data**.
  This will permanently delete all events, Google OAuth tokens, settings, and API keys from your device. Uninstalling the Application will also delete this data from your device's local storage.

---

## 4. Security of Your Data

We prioritize the security of your information. Since WishPing is a client-only application, the security of your stored data depends on:
* The physical security of your mobile device.
* The security features of your operating system (e.g., encryption, PINs, biometrics).
We recommend securing your device with a password or biometric lock to prevent unauthorized access to your local data.

---

## 5. Children's Privacy

The Application does not knowingly collect or solicit any personal data from children under the age of 13. Since all data is entered and stored locally by the device owner, we encourage parents and guardians to monitor their children's device use.

---

## 6. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. Since the Application is local-first and does not collect your contact details, we cannot notify you of updates individually. We recommend reviewing this document periodically on our source repository or within the application package. Changes to this Privacy Policy are effective when they are posted.

---

## 7. Contact Us

If you have any questions or suggestions about this Privacy Policy, please contact the developer:

* **Developer/Owner:** Tharnikaa
* **Email:** [Insert Support Email Here]
