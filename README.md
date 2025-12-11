<div align="center">
  <h2>A Vue Hooks Collection built with Shadcn Vue</h2>
  <p>Type-safe, reusable Vue composables for the shadcn-vue ecosystem</p>
</div>

## ✨ Features

- 📦 **Easy Installation**: Install individual hooks via `shadcn-vue add` command
- 🎯 **Type-Safe**: Full TypeScript support with comprehensive type definitions
- 🚀 **Modern Architecture**: Built on Vue 3 Composition API and Nuxt 4
- 📚 **Comprehensive Documentation**: Detailed examples and API references
- 🎨 **shadcn-vue Integration**: Seamlessly works with shadcn-vue components

## 🚀 Quick Start

### Prerequisites

- Vue 3.3+ with Composition API
- A project with shadcn-vue installed

### Installation

1. **Add Registry to `components.json`**:

```json
{
    "registries": {
        "@shadcn-vue-hooks": "https://shadcn-vue-hooks.vercel.app/r/{name}.json"
    }
}
```

2. **Install Hooks**:

```bash
npx shadcn-vue@latest add @shadcn-vue-hooks/createContext
```

3. **Use in Your Components**:

```vue

<script setup lang="ts">
    import {injectConfigContext} from '@/composables/createContext'

    const config = injectConfigContext()
</script>
```

For detailed installation instructions, see
our [Installation Guide](https://shadcn-vue-hooks.vercel.app/docs/getting-started/installation).

## 📋 Available Hooks

| Hook Name                | Status            | Description                                                                            |
|--------------------------|-------------------|----------------------------------------------------------------------------------------|
| **createContext**        | ✅ Available       | Type-safe context management for Vue applications. Solves prop drilling issues.        |
| **useForwardPropsEmits** | 🚧 In Development | Efficiently forward props and emits to child components while maintaining type safety. |
| **useForwardProps**      | 🚧 In Development | Smart props forwarding with automatic filtering and optimization.                      |
| **useEmitAsProps**       | 🚧 In Development | Convert event handlers into props for seamless component composition.                  |
| **useForwardExpose**     | 🚧 In Development | Forward component exposes for better composition patterns.                             |

### Legend

- ✅ **Available**: Ready for production use with full documentation
- 🚧 **In Development**: Planned hooks under active development
- 🛠️ **Internal**: Used internally, may be exported in future releases

## 📚 Documentation

- [**Introduction**](https://shadcn-vue-hooks.vercel.app/docs/getting-started/introduction) - Learn about
  shadcn-vue-hooks
- [**Installation**](https://shadcn-vue-hooks.vercel.app/docs/getting-started/installation) - Setup and installation
  guide
- [**Contributing**](https://shadcn-vue-hooks.vercel.app/docs/getting-started/contributing) - How to contribute to the
  project
- [**Hook Documentation**](https://shadcn-vue-hooks.vercel.app/docs/composables/createcontext) - Individual hook
  documentation and examples

## 🤝 Contributing

We welcome contributions! Whether you're:

- 🐛 **Reporting bugs**
- ✨ **Adding new hooks**
- 📝 **Improving documentation**
- 💡 **Suggesting features**

See our [Contributing Guide](https://shadcn-vue-hooks.vercel.app/docs/getting-started/contributing) for detailed
information.

## 🔧 Development

```bash
# Clone the repository
git clone https://github.com/lonewolfyx/shadcn-vue-hooks.git
cd shadcn-vue-hooks

# Install dependencies
pnpm install

# Start development server
pnpm dev

```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
