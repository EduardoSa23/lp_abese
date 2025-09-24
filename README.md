# Congresso ABESE 2025 - Landing Page

Este projeto é uma landing page para o Congresso ABESE 2025, desenvolvida com HTML, CSS, Tailwind CSS e jQuery.

## Estrutura do Projeto

```
congresso_abese/
├── index.html          # Página principal
├── css/
│   ├── custom.css      # Estilos customizados
│   └── input.css       # Arquivo de entrada do Tailwind
├── js/
│   └── main.js         # JavaScript principal com jQuery
├── img/                # Pasta para imagens (vazia por enquanto)
├── package.json        # Configurações do npm
├── tailwind.config.js  # Configuração do Tailwind CSS
├── postcss.config.js   # Configuração do PostCSS
└── README.md           # Este arquivo
```

## Funcionalidades

### ✅ Implementadas
- **Layout responsivo** com Tailwind CSS
- **Countdown timer** em tempo real até a data do evento
- **Menu mobile** com animações suaves
- **Efeitos hover** nos elementos interativos
- **Gradiente de fundo** com elementos decorativos
- **Cards informativos** com dados do evento
- **Botões de call-to-action** funcionais

### 🎨 Design
- **Cores principais**: Azul (#1e3a8a, #1e40af, #3b82f6) e Laranja (#f97316)
- **Tipografia**: Sans-serif padrão do sistema
- **Layout**: Centralizado com elementos flutuantes
- **Responsividade**: Mobile-first approach

### 🔧 Tecnologias
- **HTML5** semântico
- **Tailwind CSS** via CDN para estilização
- **CSS customizado** para efeitos especiais
- **jQuery 3.7.1** para interatividade
- **JavaScript ES6+** para funcionalidades modernas

## Como usar

1. **Abrir o projeto**: Simplesmente abra o arquivo `index.html` em qualquer navegador moderno
2. **Desenvolvimento**: Para modificar estilos, edite os arquivos CSS na pasta `css/`
3. **JavaScript**: Funcionalidades interativas estão no arquivo `js/main.js`

## Funcionalidades JavaScript

### Countdown Timer
- Conta regressiva automática até 27 de Novembro de 2025, 14:00
- Atualização em tempo real a cada segundo
- Formatação com zeros à esquerda

### Menu Mobile
- Toggle do menu em dispositivos móveis
- Animações suaves de entrada/saída
- Fechamento ao clicar fora do menu

### Interatividade
- Efeitos hover nos cards informativos
- Scroll suave para âncoras
- Alertas nos botões de inscrição (prontos para integração)

## Personalização

### Cores
Para alterar as cores, modifique as classes do Tailwind no HTML ou adicione estilos customizados no `custom.css`.

### Conteúdo
- **Título**: Edite as tags `<h1>` no HTML
- **Descrições**: Modifique os parágrafos e subtítulos
- **Data do evento**: Altere a variável `countDownDate` no JavaScript
- **Informações do evento**: Edite os cards na seção "Event Info Cards"

### Integração
- **Formulário de inscrição**: Substitua os `alert()` nos botões por redirecionamentos reais
- **Analytics**: Adicione códigos de tracking conforme necessário
- **Backend**: Integre com APIs para inscrições e dados dinâmicos

## Próximos Passos

1. **Imagens**: Adicionar imagens de fundo e logos na pasta `img/`
2. **Formulário**: Implementar formulário de inscrição real
3. **Animações**: Adicionar mais animações com CSS/JS
4. **SEO**: Implementar meta tags e structured data
5. **Performance**: Otimizar carregamento e compressão

## Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Dispositivos móveis (iOS/Android)

## Notas de Desenvolvimento

- O projeto usa Tailwind CSS via CDN para facilitar o desenvolvimento
- jQuery é carregado via CDN do Google
- Todos os estilos customizados estão no arquivo `custom.css`
- O JavaScript é modular e bem comentado para fácil manutenção

