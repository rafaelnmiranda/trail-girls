# 🚀 Guia de Deploy no Vercel - Trail Girls

## ✅ Pré-requisitos

1. Conta no GitHub (já conectada ✅)
2. Conta no Vercel (criar em [vercel.com](https://vercel.com))

---

## 📋 Passo a Passo para Deploy

### 1️⃣ Acessar o Vercel

1. Vá para [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** ou **"Log In"**
3. Escolha **"Continue with GitHub"** (recomendado para facilitar a integração)

### 2️⃣ Criar Novo Projeto

1. No dashboard do Vercel, clique em **"Add New..."** → **"Project"**
2. Você verá uma lista dos seus repositórios GitHub
3. Procure por **"trail-girls"** ou **"rafaelnmiranda/trail-girls"**
4. Clique em **"Import"** no repositório

### 3️⃣ Configurar o Projeto

O Vercel detecta automaticamente que é um projeto Next.js, mas verifique estas configurações:

#### **Project Settings:**
- **Project Name**: `trail-girls` (ou o nome que preferir)
- **Framework Preset**: `Next.js` (detectado automaticamente)
- **Root Directory**: `./` (raiz do projeto)

#### **Build and Output Settings:**
- **Build Command**: `npm run build` ✅ (já configurado)
- **Output Directory**: `.next` ✅ (já configurado)
- **Install Command**: `npm install` ✅ (já configurado)

#### **Environment Variables:**
- Por enquanto, **não precisa** adicionar variáveis de ambiente
- Se no futuro precisar de APIs ou keys, adicione aqui

### 4️⃣ Fazer o Deploy

1. Clique em **"Deploy"**
2. Aguarde o build completar (normalmente 1-3 minutos)
3. Quando finalizar, você receberá uma URL como: `trail-girls.vercel.app`

### 5️⃣ Verificar o Deploy

1. Acesse a URL fornecida
2. Teste todas as páginas do site
3. Verifique se as imagens carregam corretamente

---

## 🔄 Deploy Automático

O Vercel está configurado para fazer **deploy automático** sempre que você:

- Fizer `git push` para a branch `main`
- Criar um Pull Request (cria uma preview)

### Deploys de Preview

- Cada PR cria uma URL única de preview
- Perfeito para testar antes de fazer merge
- Exemplo: `trail-girls-git-feature-branch-rafael.vercel.app`

---

## 🌐 Domínio Customizado (Opcional)

Se quiser usar um domínio próprio (ex: `trailgirls.com.br`):

1. No projeto no Vercel, vá em **Settings** → **Domains**
2. Clique em **"Add"**
3. Digite seu domínio (ex: `trailgirls.com.br`)
4. Siga as instruções para configurar os DNS:
   - Adicione um registro CNAME apontando para `cname.vercel-dns.com`
   - Ou um registro A conforme instruções específicas

---

## 🛠️ Configurações Avançadas

### Node.js Version

Por padrão, o Vercel usa Node.js 18.x. Se precisar mudar:

1. Vá em **Settings** → **General** → **Node.js Version**
2. Selecione a versão (recomendado: 18.x ou 20.x)

### Variáveis de Ambiente

Se precisar adicionar variáveis no futuro:

1. Vá em **Settings** → **Environment Variables**
2. Adicione chave/valor
3. Escolha os ambientes (Production, Preview, Development)

---

## ✅ Checklist Pós-Deploy

- [ ] Site está acessível na URL fornecida
- [ ] Todas as páginas carregam corretamente
- [ ] Imagens estão sendo exibidas
- [ ] Links de navegação funcionam
- [ ] Responsividade está OK (mobile/desktop)
- [ ] Performance está adequada

---

## 🔍 Monitoramento

O Vercel fornece:

- **Analytics**: Estatísticas de visitantes (requer upgrade)
- **Logs**: Visualizar logs do servidor em tempo real
- **Speed Insights**: Métricas de performance (gratuito)

---

## 🐛 Troubleshooting

### Build Fails

1. Verifique os logs no Vercel (clicando no deploy)
2. Erro comum: dependências faltando → verifique `package.json`
3. Erro de TypeScript → rode `npm run build` localmente primeiro

### Imagens Não Carregam

1. Verifique se as imagens estão no diretório `public/`
2. Use caminhos relativos: `/images/logo/logo.png`
3. Não use `./images/` ou caminhos absolutos do sistema

### Erro 404

1. Verifique se todas as rotas estão em `app/`
2. Certifique-se de que os arquivos estão nomeados corretamente
3. Next.js App Router requer `page.tsx` em cada pasta

---

## 📞 Suporte

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Next.js](https://nextjs.org/docs)
- [Status Vercel](https://www.vercel-status.com/)

---

**✨ Pronto! Seu site Trail Girls está no ar!**
