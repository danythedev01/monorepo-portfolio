# 📘 Portfolio Distributed Architecture — Roadmap v0.4

# ✅ Phase 0 — Repo & Shared Foundations (Learn once, reuse everywhere)

### Monorepo Setup

- [ ] Create monorepo using Nx or PNPM workspaces
- [ ] Create folder structure:
  - `/apps/api-gateway-nest`
  - `/apps/user-service-nest`
  - `/apps/media-service-nest`
  - `/apps/notification-service-nest`
  - `/apps/graphql-service-tsed`
  - `/apps/audit-service-tsed`
  - `/apps/feature-flags-tsed`
  - `/apps/frontend-react`
  - `/apps/dashboard-vue`
  - `/libs/shared-config`
  - `/libs/shared-types`
  - `/libs/shared-kafka`

### Shared Libraries

- [ ] `/libs/shared-config` → typed env loader (Zod recommended)
- [ ] `/libs/shared-types` → DTOs, event types, shared interfaces
- [ ] Add global tsconfig paths

---

# 🧵 Phase 1 — Kafka Foundation (One time learning, multi-service reuse)

### Shared Kafka Client

- [ ] Create `/libs/shared-kafka`
- [ ] Export `createKafkaProducer(config)`
- [ ] Export `createKafkaConsumer(config, topics, handler)`
- [ ] Write README explaining usage for both NestJS and Ts.ED

### Integrate Kafka into NestJS (User Service)

- [ ] Publish `UserCreated` event
- [ ] Publish `UserUpdated` event

### Integrate Kafka into Ts.ED (Audit Service)

- [ ] Consume `UserCreated`, `UserUpdated`
- [ ] Store entries (start with in-memory storage, later DynamoDB)

---

# 🔐 Phase 2 — Auth + API Gateway

### Auth Service (NestJS)

- [ ] Implement `/auth/login` (JWT)
- [ ] Implement `/auth/refresh` (optional)
- [ ] Implement RBAC roles
- [ ] Add JWT Guard + Role Guard

### API Gateway (NestJS)

- [ ] Forward `/api/users/*` → User Service
- [ ] Forward `/api/media/*` → Media Service
- [ ] Forward `/api/graphql` → GraphQL Service
- [ ] Apply global JWT validation guard

---

# 👤 Phase 3 — User Profile & Settings Panel

### Backend Work

- [ ] Add `GET /users/me`
- [ ] Add `PUT /users/me`
- [ ] Add fields: name, email, language, dark mode
- [ ] Emit `UserUpdated` event on profile change

### Media Service & S3

- [ ] `POST /media/avatar/presign`
- [ ] Direct-upload avatar → S3
- [ ] Optional: CloudFront for delivery

### Frontend Work

- [ ] Create "Settings" page
- [ ] Change name/email/password
- [ ] Toggle dark mode / language
- [ ] Avatar upload using presigned URL
- [ ] Save avatar URL in user profile

---

# 🧾 Phase 4 — Audit Log Service (Ts.ED)

### Audit Service

- [ ] Create `/audit-service-tsed`
- [ ] Consume Kafka events
- [ ] Store `UserCreated`, `UserUpdated`, `LoginFailed`, `ProfileUpdated`
- [ ] Expose `GET /audit/logs`

### UI for Audit Logs

- [ ] Create "Audit Logs" admin page in React
- [ ] Table of events with filters

---

# 🔔 Phase 5 — Notification Templates (NestJS + SES)

### Notification Service Enhancements

- [ ] Add simple template engine (EJS/Handlebars)
- [ ] Create templates:
  - [ ] Welcome email
  - [ ] Profile updated email
  - [ ] Password reset email
- [ ] Consume events via Kafka and trigger SES send

---

# 🚩 Phase 6 — Feature Flags (Ts.ED)

### Backend

- [ ] `GET /flags` for current flags
- [ ] `POST /flags` to update flags
- [ ] Store flags in DynamoDB

### Frontend

- [ ] Load flags on app startup
- [ ] Show/hide MFE3 based on `enableMFE3` flag

---

# 📊 Phase 7 — Public API Dashboard + Observability

### Backend

- [ ] Add `/system/status` endpoint in API Gateway
- [ ] Basic health checks for services

### Frontend

- [ ] Create "API Dashboard" page
- [ ] Show:
  - Service status
  - Versions
  - Recent events

### Observability

- [ ] Add OTel tracing to:
  - API Gateway
  - User Service
  - GraphQL Service
- [ ] Simple logs + metrics forwarding to console or local collector

---

# 🧪 Phase 8 — CI/CD Basics

### GitHub Actions

- [ ] Monorepo pipeline
- [ ] Install deps
- [ ] Run tests
- [ ] Build for:
  - User Service
  - Auth Service
  - GraphQL Service
  - Frontend

### Docker

- [ ] Build Docker images in CI
- [ ] Optional: Push to GHCR

---

# 🏁 End of Roadmap v0.4

This file will evolve into **ROADMAP v1.0** once foundational services are built.
