# 🚀 Microservice `cards-expiration-service`

## 📌 Description
This microservice **automatically checks and updates the status of expired cards** in a task management system.
It runs periodic checks to mark expired cards using a scheduled job.

## 🛠️ Technologies
- Node.js
- Express.js
- PostgreSQL (AWS RDS)
- Sequelize (ORM)
- node-cron (Task Scheduling)
- Docker

## 📂 Project Structure
```
cards-expiration-service/
│── src/
│   ├── jobs/
│   │   ├── cardExpirationJob.js ✅ (Cron job for updating expired cards)
│   ├── controllers/
│   │   ├── expirationController.js
│   ├── models/
│   │   ├── Card.js
│   ├── routes/
│   │   ├── expirationRoutes.js
│   ├── config/
│   │   ├── database.js
│   ├── utils/
│   │   ├── validators.js ✅ (Reusable validation functions)
│   ├── app.js
│── server.js
│── Dockerfile
│── docker-compose.yml
│── .env
│── README.md
```

## 🔧 Installation
```sh
npm install
```

## 🚀 Running the Microservice
```sh
npm start
```
Or using Docker:
```sh
docker-compose up --build
```

## 🔗 API Endpoints
### **1️⃣ Get Active Cards**
```sh
curl -X GET http://localhost:5011/expiration/active
```

### **2️⃣ Get Expired Cards**
```sh
curl -X GET http://localhost:5011/expiration/expired
```

