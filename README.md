# WhatsappClone
Devleoped a Whatsapp clone MERN stack web Application 
## Key Features
### SignUp OR Login :
- SignUp or Login via Google OAuth
  ![image](https://github.com/Sumitkb21/WhatsappClone/assets/101947627/3c8ccc6e-cec9-41c8-bad0-0876b86754cf)

### ChatPage:
![image](https://github.com/Sumitkb21/WhatsappClone/assets/101947627/2a364981-d9b2-4945-8ed2-7d2d4fdfaa30)
![image](https://github.com/Sumitkb21/WhatsappClone/assets/101947627/702d458d-2b3d-4a9f-97a8-44dd01845580)

### ProfilePage:
![image](https://github.com/Sumitkb21/WhatsappClone/assets/101947627/0b52ed09-f942-4a19-a102-24bcbedfa89d)
### Search Functionality:
![image](https://github.com/Sumitkb21/WhatsappClone/assets/101947627/44c846cb-dad1-4242-a703-60fd4f8444af)

## Setup Instructions

To run the application successfully, please follow the steps below.

### 1. Add Google OAuth Client ID
- Open `/frontend/app.js`.
- Locate the section where the Google OAuth Client ID is required.
- Insert your Google OAuth Client ID.

### 2. Create a Configuration File
- In the /backend/data directory, create a file named `config.env`.
- Add the following environment variables to the file:

  ```plaintext
  PORT=        # Add your port number here, e.g., 4000
  MONGO_URI="" # Add your MongoDB URI here
  FRONTEND_URL="" # Add your frontend URL here, e.g., http://localhost:3000

  
