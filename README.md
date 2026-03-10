# 🚀 OpenRouter Clone

![AI Gateway](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGZ1cXRrb21yN2R4b2xwNHRhdjVvZmRrZmFnb3BmbmU4aWxtM2w1eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26tn33aiTi1jkl6H6/giphy.gif)

A **full-stack AI infrastructure project** inspired by **OpenRouter**, built to explore how modern **LLM gateway platforms** work internally.

This project implements a **unified API layer for interacting with multiple AI model providers**, along with:

- 🔐 Authentication
- 🔑 API Key Management
- 💳 Credit / Payment System
- 🤖 Model Discovery
- 📊 Usage Infrastructure

---

# 🌍 Overview

Modern AI applications often rely on **multiple model providers**:

- 🤖 OpenAI
- 🧠 Anthropic
- 🌐 Google
- 🧩 Mistral
- ⚡ TogetherAI

Instead of integrating every provider separately, platforms like **OpenRouter** provide a **unified API** that routes requests to different models.

```
Developer App
      │
      ▼
Unified AI Gateway
      │
      ├── OpenAI
      ├── Anthropic
      ├── Google
      └── Mistral
```

This project is a **simplified implementation of such an AI infrastructure layer**.

---

# 🏗 Architecture

The project uses a **Monorepo Architecture powered by Bun Workspaces**.

```
openRouter/
│
├── apps/
│   ├── primary-backend      → Core API server
│   └── dashboard-frontend   → Developer dashboard
│
├── packages/
│   └── db                   → Shared Prisma database package
│
└── bun.lockb
```

---

# ⚙️ Tech Stack

## Backend

- ⚡ **Bun Runtime**
- 🦊 **Elysia Framework**
- 🧬 **Prisma ORM**
- 🐘 **PostgreSQL**
- 🔐 **JWT Authentication**

## Frontend

- ⚡ **Bun**
- 🔗 **Elysia Eden (Treaty)**
- 🧠 **Type-safe API communication**

---

# 🧱 Backend Architecture

Each backend feature follows a **Modular Layered Architecture**.

```
module/
 ├── index.ts
 ├── models.ts
 └── service.ts
```

### 📡 `index.ts`

Handles:

- API routes
- middleware
- request handling

### 📦 `models.ts`

Defines:

- request schemas
- response schemas
- TypeScript types

### 🧠 `service.ts`

Contains:

- business logic
- database queries
- core functionality

This architecture ensures:

✔ separation of concerns  
✔ maintainable modules  
✔ scalable backend design

---

# 🧩 Implemented Modules

---

# 🔐 Authentication Module

Handles user authentication and identity.

### Features

- User Signup
- User Login
- JWT Token Generation
- Secure Password Hashing

### Routes

```
POST /auth/sign-up
POST /auth/sign-in
```

---

# 🔑 API Keys Module

Allows developers to manage API keys for accessing the AI gateway.

### Features

- Create API key
- List API keys
- Disable API key
- Soft delete API key

### Routes

```
POST /api-keys
GET /api-keys
PUT /api-keys/disable
DELETE /api-keys/:id
```

---

# 🤖 Models Module

Provides discovery APIs for available AI models.

### Features

- List available models
- List model providers
- Retrieve providers for a specific model

### Routes

```
GET /models
GET /models/providers
GET /models/:id/providers
```

---

# 💳 Payments Module

Implements a **credit-based billing system**.

Users can **onramp credits** to their account which can later be consumed by model usage.

### Features

- Add credits to user balance
- Track onramp transactions

### Route

```
POST /payments/onramp
```

---

# 🗄 Database Schema

Powered by **Prisma + PostgreSQL**.

### Core Tables

| Table | Purpose |
|-----|------|
User | Stores user accounts |
ApiKey | Developer API keys |
Company | Model creators |
Model | AI models |
Provider | Model hosting providers |
ModelProviderMapping | Model-provider relationship |
Conversation | Model interaction logs |
OnrampTransaction | Payment history |

These enable:

- authentication
- API key management
- model routing
- usage tracking
- billing infrastructure

---

# 🖥 Frontend Dashboard

A minimal **developer dashboard** built with **Elysia Eden Treaty**.

It provides **type-safe communication between frontend and backend APIs**.

### Current Features

- Login interface
- Backend integration
- API testing

### Example Usage

```ts
const client = treaty<App>("http://localhost:3000")

client.auth["sign-in"].post({
  email: "test@example.com",
  password: "password"
})
```

---

# 🧠 Concepts Practiced

This project focuses on **real-world backend engineering patterns**.

- 🏗 Monorepo architecture
- 📦 Modular backend design
- 🧱 Layered architecture
- 🚪 API gateway design
- 🔐 JWT authentication
- 🔑 API key infrastructure
- 💳 Credit-based billing systems
- 🔗 Type-safe API clients

---

# 🔮 Future Improvements

Planned system upgrades:

- 🤖 Model request routing
- 📊 Token usage tracking
- 💰 Cost calculation
- ⚡ Provider failover
- 🚦 Rate limiting
- 🧾 Request logging
- 📈 Model benchmarking
- 🖥 Full dashboard UI

---

#  Learning Goals

This project explores how **AI infrastructure platforms** operate internally.

Inspired by platforms like:

- OpenRouter
- Vercel AI Gateway
- Helicone
- LangSmith

The goal is to combine:

```
AI Engineering
+
Backend System Design
+
Infrastructure Thinking
```

---

# Author

**Fasi Owaiz Ahmed**

yes this readme was generated by gpt niqq
