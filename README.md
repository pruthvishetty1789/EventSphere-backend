# 🖥️ EventSphere Backend

Backend API for the EventSphere Event Registration System.

Built with **Node.js + Express**, containerized using **Docker**, and deployed on **AWS EC2**.  
Connects securely to **MongoDB Atlas**.

---

## 🚀 Features

- Create events (Admin)
- View all events
- View single event details
- Register users for events
- MongoDB data storage

---

## 🏗 Deployment Architecture

### 📌 System Flow
User → EC2 (Port 80) → Nginx → Backend (Internal Port 5000) → MongoDB Atlas

- Backend runs on internal port **5000**
- Not publicly accessible
- Connected via Docker internal network

---

## 🔌 API Endpoints

### Events

- `GET /api/events` → Get all events  
- `GET /api/events/:id` → Get single event  
- `POST /api/events` → Create event  

### Registration

- `POST /api/register` → Register for event  

---

## 🌍 Port Configuration

- Port 5000 → Internal (Docker network only)
- Not exposed publicly
- Accessed via Nginx reverse proxy

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory.

## 🐳 Docker Deployment
### Build Image
```bash
docker build -t eventsphere-backend .
```
### Run Container
```bash
docker run -d \
  --name backend \
  --network eventsphere-network \
  --restart unless-stopped \
  -e MONGO_URI="your_connection_string" \
  -e PORT=5000 \
  eventsphere-backend
```
---

## 🌐 Live Deployment

🔗 **Live URL:** [http://3.235.106.175](http://3.235.106.175)

---
