# 🎖️ GOAF Web Platform

<div align="center">

![GOAF](https://img.shields.io/badge/GOAF-Groupe%20d'Opérations%20de%20l'Armée%20Française-1a365d?style=for-the-badge)

**Plateforme Web unifiée pour le serveur Arma Reforger GOAF**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![tRPC](https://img.shields.io/badge/tRPC-2596BE?style=flat-square&logo=trpc&logoColor=white)](https://trpc.io/)
[![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?style=flat-square&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=flat-square&logo=turborepo&logoColor=white)](https://turborepo.com/)
[![Biome](https://img.shields.io/badge/Biome-60A5FA?style=flat-square&logo=biome&logoColor=white)](https://biomejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)

</div>

---

## 📋 À propos du projet

**GOAF** (Groupe d'Opérations de l'Armée Française) est un serveur communautaire de simulation militaire sur **Arma Reforger**. Cette plateforme web a été conçue pour accompagner et améliorer l'expérience des joueurs et administrateurs du serveur.

La plateforme regroupe trois applications distinctes au sein d'un **monorepo Next.js** :

| Application | Description |
|-------------|-------------|
| 🌐 **Site Vitrine** | Site statique de présentation du projet GOAF, de la communauté et des actualités |
| 👤 **Espace Utilisateur** | Gestion du profil joueur, suivi des opérations, historique des logs et interactions in-game |
| ⚙️ **Panel Administrateur** | Gestion du serveur, des joueurs, des modules et des opérations militaires |

---

## 🏗️ Architecture technique

```
┌─────────────────────────────────────────────────────────────────┐
│                        GOAF Web Platform                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │  Site Web    │  │  App User    │  │  App Admin   │           │
│  │  (Static)    │  │  (Dashboard) │  │  (Panel)     │           │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘           │
│         │                 │                 │                    │
│         └─────────────────┼─────────────────┘                    │
│                           │                                      │
│                    ┌──────▼───────┐                              │
│                    │    tRPC      │                              │
│                    │  (Type-safe  │                              │
│                    │    API)      │                              │
│                    └──────┬───────┘                              │
│                           │                                      │
│                    ┌──────▼───────┐                              │
│                    │   Drizzle    │                              │
│                    │    (ORM)     │                              │
│                    └──────┬───────┘                              │
│                           │                                      │
│                    ┌──────▼───────┐                              │
│                    │   Supabase   │                              │
│                    │ (PostgreSQL) │                              │
│                    └──────────────┘                              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Stack technique

### Core
| Technologie | Rôle |
|-------------|------|
| **Next.js** | Framework React full-stack (Client + BFF) |
| **TypeScript** | Typage statique |
| **Turborepo** | Orchestration du monorepo |

### Backend
| Technologie | Rôle |
|-------------|------|
| **tRPC** | API type-safe end-to-end |
| **Drizzle ORM** | ORM TypeScript-first |
| **Supabase** | Base de données PostgreSQL + Auth |
| **Resend** | Service d'envoi d'emails transactionnels |

### Qualité & DX
| Technologie | Rôle |
|-------------|------|
| **BiomeJS** | Linting & formatting ultra-rapide |
| **Vitest** | Tests unitaires et d'intégration |
| **Husky** | Git hooks |
| **lint-staged** | Validation pre-commit |

---

## 📁 Structure du projet

```
goaf-web-platform/
├── apps/
│   ├── web/                    # 🌐 Site vitrine statique
│   ├── docs/                   # 📖 Documentation (à configurer)
│   └── api/                    # 🔌 API tRPC (à développer)
│
├── packages/
│   ├── ui/                     # 🎨 Composants UI partagés
│   ├── eslint-config/          # 📏 Configuration ESLint
│   └── typescript-config/      # ⚙️ Configuration TypeScript
│
├── turbo.json                  # 🚀 Configuration Turborepo
├── pnpm-workspace.yaml         # 📦 Workspace pnpm
└── package.json                # 📋 Scripts & dépendances root
```

---

## 🚀 Démarrage rapide

### Prérequis

- **Node.js** >= 18.x
- **pnpm** >= 9.x
- Un compte **Supabase** (pour la base de données)
- Un compte **Resend** (pour l'envoi d'emails)

### Installation

```bash
# Cloner le repository
git clone https://github.com/GOAF/goaf-web-platform.git
cd goaf-web-platform

# Installer les dépendances
pnpm install

# Copier les variables d'environnement
cp .env.example .env.local
```

### Configuration des variables d'environnement

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Resend
RESEND_API_KEY=your_resend_api_key

# Database
DATABASE_URL=your_database_connection_string
```

### Lancer le développement

```bash
# Lancer toutes les applications
pnpm dev

# Lancer une application spécifique
pnpm dev --filter=web
pnpm dev --filter=docs
```

---

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Lance le serveur de développement |
| `pnpm build` | Build de production de toutes les apps |
| `pnpm lint` | Analyse statique du code |
| `pnpm format` | Formatage du code |
| `pnpm check-types` | Vérification des types TypeScript |

### Avec filtres Turborepo

```bash
# Build d'une app spécifique
pnpm build --filter=web

# Dev d'une app spécifique
pnpm dev --filter=web

# Lint d'un package spécifique
pnpm lint --filter=@repo/ui
```

---

## 🎯 Roadmap

- [ ] **Phase 1** : Site vitrine statique
  - [ ] Page d'accueil
  - [ ] Présentation du projet GOAF
  - [ ] Page de recrutement
  - [ ] Actualités et événements

- [ ] **Phase 2** : Espace utilisateur
  - [ ] Authentification (Supabase Auth)
  - [ ] Profil joueur
  - [ ] Historique des opérations
  - [ ] Logs et statistiques in-game

- [ ] **Phase 3** : Panel administrateur
  - [ ] Dashboard de gestion
  - [ ] Gestion des joueurs
  - [ ] Gestion des modules
  - [ ] Planification des opérations

- [ ] **Phase 4** : Intégrations avancées
  - [ ] Webhooks Discord
  - [ ] Synchronisation serveur Arma Reforger
  - [ ] Notifications en temps réel

---

## 🤝 Contribution

Ce projet est développé par l'équipe de développement GOAF. Pour contribuer :

1. **Fork** le repository
2. Créez une **branche** pour votre feature (`git checkout -b feature/ma-feature`)
3. **Commit** vos changements (`git commit -m 'feat: ajout de ma feature'`)
4. **Push** sur la branche (`git push origin feature/ma-feature`)
5. Ouvrez une **Pull Request**

### Convention de commits

Nous utilisons les [Conventional Commits](https://www.conventionalcommits.org/) :

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage
- `refactor:` Refactoring
- `test:` Tests
- `chore:` Maintenance

---

## 📄 Licence

Ce projet est propriétaire et réservé à l'équipe GOAF.

---

<div align="center">

**Développé avec ❤️ par l'équipe GOAF**

*Groupe d'Opérations de l'Armée Française - Arma Reforger*

</div>
