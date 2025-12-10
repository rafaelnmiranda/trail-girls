# Trail Girls - Site Institucional

Site institucional do coletivo feminino de trail run **Trail Girls**, desenvolvido com Next.js, React, TypeScript e TailwindCSS.

## 📋 Sobre o Projeto

O Trail Girls é um movimento de mulheres do trail run criado por Tamiris Monteiro e Ana Pagiossi. O site apresenta o coletivo, sua missão, agenda de encontros, produtos, pesquisa e muito mais.

**Frase-chave**: "Uma experiência esportiva de conexão com a natureza feita especialmente para mulheres."

## 🚀 Stack Tecnológica

- **Next.js 14+** (App Router)
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animações)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd trail-girls
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Estrutura do Projeto

```
trail-girls/
├── app/                    # Páginas e rotas (App Router)
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Home
│   ├── sobre/              # Página Sobre
│   ├── missao/             # Página Missão
│   ├── agenda/             # Página Agenda
│   ├── produtos/           # Página Produtos
│   ├── pesquisa/           # Página Pesquisa
│   ├── midia/              # Página Mídia
│   ├── provas-parceiras/   # Página Provas Parceiras
│   ├── marcas-parceiras/   # Página Marcas Parceiras
│   └── contato/            # Página Contato
├── components/             # Componentes reutilizáveis
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SectionTitle.tsx
│   ├── CardEvento.tsx
│   ├── CardProduto.tsx
│   ├── CardMidia.tsx
│   ├── CardParceiro.tsx
│   ├── TimelineAno.tsx
│   └── Gallery.tsx
├── data/                   # Dados mock
│   ├── events.ts
│   ├── products.ts
│   ├── media.ts
│   ├── races.ts
│   ├── brands.ts
│   └── stats.ts
└── public/
    └── images/
        ├── logo/
        │   └── logo.png
        └── trailgirls/
            ├── hero/
            ├── encontros/
            ├── fundadoras/
            ├── produtos/
            ├── galeria/
            └── pesquisa/
```

## 🎨 Personalização

### Imagens

Todas as imagens devem ser colocadas nas pastas corretas conforme o arquivo `MAPEAMENTO_IMAGENS.md`:

- **Logo**: `public/images/logo/logo.png`
- **Fotos do site**: `public/images/trailgirls/` (com subpastas organizadas)

### Dados

Os dados mock estão em arquivos TypeScript na pasta `data/`:

- **Eventos**: `data/events.ts`
- **Produtos**: `data/products.ts`
- **Mídia**: `data/media.ts`
- **Provas Parceiras**: `data/races.ts`
- **Marcas Parceiras**: `data/brands.ts`
- **Estatísticas**: `data/stats.ts`

### Cores

As cores da marca estão configuradas no `tailwind.config.ts`:

- Rosa/Magenta: `trail-pink-*` (50 a 900)
- Branco: `white`
- Preto: `black`

### Links

Atualize os links de contato e redes sociais:

- **WhatsApp**: Edite os links nos componentes e páginas
- **Instagram**: `@trailgirlsoficial` (já configurado)

## 📱 Deploy na Vercel

### Passo a Passo

1. **Conecte o repositório**:
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub/GitLab/Bitbucket
   - Clique em "New Project"
   - Importe o repositório do Trail Girls

2. **Configuração do Build**:
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Build Command**: `npm run build` (padrão)
   - **Output Directory**: `.next` (padrão)
   - **Install Command**: `npm install` (padrão)

3. **Variáveis de Ambiente** (se necessário):
   - Adicione variáveis de ambiente na seção "Environment Variables" se o projeto precisar

4. **Deploy**:
   - Clique em "Deploy"
   - Aguarde o build e deploy completarem
   - Seu site estará disponível em uma URL da Vercel

### Configurações Recomendadas

- **Node.js Version**: 18.x ou superior
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### Domínio Customizado

1. Vá em "Settings" > "Domains"
2. Adicione seu domínio customizado
3. Configure os registros DNS conforme instruções da Vercel

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📝 Próximos Passos

1. **Adicionar Imagens**:
   - Coloque o logo em `public/images/logo/logo.png`
   - Adicione todas as fotos conforme `MAPEAMENTO_IMAGENS.md`

2. **Atualizar Dados**:
   - Edite os arquivos em `data/` com informações reais
   - Atualize links de WhatsApp, Instagram e outros

3. **Personalizar Conteúdo**:
   - Revise todos os textos nas páginas
   - Ajuste cores e estilos conforme necessário

4. **SEO**:
   - Adicione metadados específicos por página (usando `generateMetadata` no App Router)
   - Configure Open Graph e Twitter Cards

5. **Analytics** (opcional):
   - Adicione Google Analytics ou Vercel Analytics
   - Configure tracking de eventos

## 🤝 Contribuindo

Este é um projeto privado do coletivo Trail Girls. Para sugestões ou melhorias, entre em contato através do site.

## 📄 Licença

Todos os direitos reservados - Trail Girls © 2024

## 📞 Suporte

Para dúvidas sobre o projeto, consulte a documentação do Next.js ou entre em contato através do site.

---

**Desenvolvido com ❤️ para o Trail Girls**
