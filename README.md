# LobeHub - Your Chief Agent Operator

<div align="center">

**English** | [中文](#中文)

An open-source, comprehensive AI Agent framework that organizes AI agents into 24/7 operations — hiring, scheduling, and reporting on your entire AI team.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-green.svg)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-12.4.1+-orange.svg)](https://pnpm.io)

</div>

---

## Features

### Operator: Agents as the Unit of Work
- Consolidate all AI agents under one roof
- IM Gateway for agent deployment across Discord, Slack, Telegram, WeChat, Feishu, QQ, iMessage, and Line
- 24/7 agent operation with scheduling and reporting

### Create: Build Your AI Team
- **Agent Builder** with auto-configuration for rapid agent creation
- **Unified Intelligence** supporting any LLM model and modality
- **10,000+ Skills** via tools and MCP-compatible plugins
- 30+ built-in tools including browser, calculator, image/video generation, knowledge base, memory, and more

### Collaborate: Team AI Workflows
- **Agent Groups** for parallel teamwork and multi-agent collaboration
- **Pages** for multi-agent content writing and document generation
- **Schedule** for timed agent runs and automated workflows
- **Projects** for structured work management
- **Workspaces** for team collaboration and shared resources

### Evolve: Continuous Learning
- **Personal Memory** that learns and adapts to user preferences
- **White-Box Memory** — structured, editable, and transparent
- **Continual Learning** where agents evolve behavior over time

### Multi-Platform Support
- **Web Application** — Full-featured web interface
- **Desktop App** — Electron-based native application
- **Mobile Support** — Responsive design for mobile devices
- **Self-Hosting** — Deploy on Vercel, Zeabur, Sealos, Alibaba Cloud, or Docker

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 + React 19 + TypeScript |
| **SPA** | Vite + React Router |
| **UI** | @lobehub/ui, Ant Design, Framer Motion |
| **State Management** | Zustand, Immer |
| **Data Fetching** | SWR, TanStack React Query, tRPC |
| **Database** | PostgreSQL + Drizzle ORM |
| **Authentication** | better-auth |
| **LLM Providers** | OpenAI, Anthropic, Google, AWS Bedrock, Azure, Ollama, Hugging Face |
| **Testing** | Vitest, Playwright |
| **Desktop** | Electron |

---

## Installation

### Prerequisites

- **Node.js** >= 18
- **pnpm** >= 12.4.1
- **bun** (for running scripts)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/lobehub/lobehub.git
cd lobehub

# Install dependencies
pnpm install

# Start development server (Next.js + Vite SPA)
bun run dev

# Or run SPA dev mode only (frontend with API proxy)
bun run dev:spa

# Or run Next.js server only
bun run dev:next
```

### Docker Deployment

```bash
# Start infrastructure (PostgreSQL, Redis, etc.)
bun run dev:docker

# Or use docker-compose directly
docker compose up -d
```

### Production Build

```bash
# Build for production
bun run build

# Start production server
bun run start
```

---

## Usage

### Development Commands

```bash
bun run dev          # Full-stack development (Next.js + Vite)
bun run dev:spa      # SPA development mode only
bun run dev:next     # Next.js server only
bun run dev:docker   # Start Docker infrastructure
bun run build        # Production build
bun run start        # Start production server
bun run test         # Run tests
bun run check        # Quality checks (lint, type-check)
```

### Self-Hosting Options

1. **Vercel** — One-click deployment
2. **Zeabur** — Cloud deployment platform
3. **Sealos** — Cloud application platform
4. **Alibaba Cloud** — One-click deployment
5. **Docker** — Self-hosted deployment

### Environment Configuration

Copy `.env.example` to `.env` and configure:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/lobehub

# Authentication
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3010

# LLM Providers (at least one required)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

---

## Project Structure

```
lobehub/
── src/                    # Main application source
│   ├── app/               # Next.js app router
│   ├── spa/               # SPA entry points
│   ├── features/          # Feature modules (180+)
│   ├── store/             # Zustand state stores
│   ├── services/          # Client API services
│   ── components/        # Shared UI components
├── packages/              # Workspace packages (90+)
│   ├── agent-runtime/     # Agent execution runtime
│   ├── builtin-tools/     # Built-in tool collection
│   ├── database/          # Database schemas & migrations
│   ├── model-runtime/     # LLM model runtime
│   └── chat-adapter-*/    # IM platform adapters
── apps/                  # Additional applications
│   ├── server/            # Standalone backend service
│   ├── desktop/           # Electron desktop app
│   ── cli/               # Command-line interface
── e2e/                   # End-to-end tests
├── docs/                  # Documentation
── locales/               # Internationalization files
```

---

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Community

- [GitHub Issues](https://github.com/lobehub/lobehub/issues) - Bug reports and feature requests
- [Discussions](https://github.com/lobehub/lobehub/discussions) - Questions and discussions
- [Discord](https://discord.gg/lobehub) - Community chat

---

## Acknowledgments

LobeHub is built with love by the community. Special thanks to all contributors and the open-source ecosystem.

---

# 中文

<div align="center">

[English](#lobehub---your-chief-agent-operator) | **中文**

开源、全面的 AI Agent 框架，将 AI Agent 组织成 7×24 小时运营 — 招聘、调度和报告您的整个 AI 团队。

</div>

---

## 功能特性

### 运营：以 Agent 为工作单元
- 将所有 AI Agent 整合到一个平台
- IM 网关支持在 Discord、Slack、Telegram、微信、飞书、QQ、iMessage 和 Line 上部署 Agent
- 7×24 小时 Agent 运营，支持调度和报告

### 创建：构建您的 AI 团队
- **Agent 构建器** 支持自动配置，快速创建 Agent
- **统一智能** 支持任何 LLM 模型和模态
- **10,000+ 技能** 通过工具和 MCP 兼容插件
- 30+ 内置工具，包括浏览器、计算器、图像/视频生成、知识库、记忆等

### 协作：团队 AI 工作流
- **Agent 群组** 支持并行团队协作和多 Agent 协作
- **页面** 用于多 Agent 内容写作和文档生成
- **日程** 用于定时 Agent 运行和自动化工作流
- **项目** 用于结构化工作管理
- **工作空间** 用于团队协作和共享资源

### 进化：持续学习
- **个人记忆** 学习并适应用户偏好
- **白盒记忆** — 结构化、可编辑、透明
- **持续学习** Agent 随时间进化行为

### 多平台支持
- **Web 应用** — 功能完整的 Web 界面
- **桌面应用** — 基于 Electron 的原生应用
- **移动支持** — 响应式设计，支持移动设备
- **自托管** — 部署在 Vercel、Zeabur、Sealos、阿里云或 Docker

---

## 技术栈

| 层级 | 技术 |
|-------|-----------|
| **框架** | Next.js 16 + React 19 + TypeScript |
| **SPA** | Vite + React Router |
| **UI** | @lobehub/ui, Ant Design, Framer Motion |
| **状态管理** | Zustand, Immer |
| **数据获取** | SWR, TanStack React Query, tRPC |
| **数据库** | PostgreSQL + Drizzle ORM |
| **认证** | better-auth |
| **LLM 提供商** | OpenAI, Anthropic, Google, AWS Bedrock, Azure, Ollama, Hugging Face |
| **测试** | Vitest, Playwright |
| **桌面** | Electron |

---

## 安装

### 前置要求

- **Node.js** >= 18
- **pnpm** >= 12.4.1
- **bun**（用于运行脚本）

### 快速开始

```bash
# 克隆仓库
git clone https://github.com/lobehub/lobehub.git
cd lobehub

# 安装依赖
pnpm install

# 启动开发服务器（Next.js + Vite SPA）
bun run dev

# 或仅运行 SPA 开发模式（前端 + API 代理）
bun run dev:spa

# 或仅运行 Next.js 服务器
bun run dev:next
```

### Docker 部署

```bash
# 启动基础设施（PostgreSQL、Redis 等）
bun run dev:docker

# 或直接使用 docker-compose
docker compose up -d
```

### 生产构建

```bash
# 生产环境构建
bun run build

# 启动生产服务器
bun run start
```

---

## 使用说明

### 开发命令

```bash
bun run dev          # 全栈开发（Next.js + Vite）
bun run dev:spa      # 仅 SPA 开发模式
bun run dev:next     # 仅 Next.js 服务器
bun run dev:docker   # 启动 Docker 基础设施
bun run build        # 生产环境构建
bun run start        # 启动生产服务器
bun run test         # 运行测试
bun run check        # 质量检查（lint、类型检查）
```

### 自托管选项

1. **Vercel** — 一键部署
2. **Zeabur** — 云部署平台
3. **Sealos** — 云应用平台
4. **阿里云** — 一键部署
5. **Docker** — 自托管部署

### 环境配置

复制 `.env.example` 为 `.env` 并配置：

```env
# 数据库
DATABASE_URL=postgresql://user:password@localhost:5432/lobehub

# 认证
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=http://localhost:3010

# LLM 提供商（至少需要一个）
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

---

## 项目结构

```
lobehub/
├── src/                    # 主应用源码
│   ├── app/               # Next.js app router
│   ├── spa/               # SPA 入口点
│   ├── features/          # 功能模块（180+）
│   ├── store/             # Zustand 状态存储
│   ├── services/          # 客户端 API 服务
│   └── components/        # 共享 UI 组件
├── packages/              # 工作区包（90+）
│   ├── agent-runtime/     # Agent 执行运行时
│   ├── builtin-tools/     # 内置工具集合
│   ├── database/          # 数据库 schema 和迁移
│   ├── model-runtime/     # LLM 模型运行时
│   └── chat-adapter-*/    # IM 平台适配器
├── apps/                  # 附加应用
│   ├── server/            # 独立后端服务
│   ├── desktop/           # Electron 桌面应用
│   └── cli/               # 命令行界面
├── e2e/                   # 端到端测试
├── docs/                  # 文档
└── locales/               # 国际化文件
```

---

## 贡献

欢迎贡献！详情请参阅 [贡献指南](CONTRIBUTING.md)。

1. Fork 仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

---

## 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。

---

## 社区

- [GitHub Issues](https://github.com/lobehub/lobehub/issues) - Bug 报告和功能请求
- [Discussions](https://github.com/lobehub/lobehub/discussions) - 问题和讨论
- [Discord](https://discord.gg/lobehub) - 社区聊天

---

## 致谢

LobeHub 由社区用爱构建。特别感谢所有贡献者和开源生态系统。
