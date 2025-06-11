# 🧮 Grunt Calculadora  

Um projeto de calculadora simples utilizando **Grunt** para automatização de tarefas (minificação, concatenação, pré-processamento CSS, etc.).  

---

## 🚀 Como Iniciar o Site  

### 📋 Pré-requisitos  
- Node.js (v14+)  
- npm (v6+)  
- Grunt CLI instalado globalmente:  
  ```bash
  npm install -g grunt-cli
  ```

### 🔧 Instalação  
1. **Clone o repositório**:  
   ```bash
   git clone https://github.com/Katsuhkay/Grunt-Calculadora.git
   cd Grunt-Calculadora
   ```  

2. **Instale as dependências**:  
   ```bash
   npm install
   ```  

3. **Execute o Grunt** (para processar arquivos):  
   ```bash
   grunt
   ```  
   *Isso irá:*  
   - Minificar JavaScript (`uglify`).  
   - Compilar LESS para CSS (`less`).  
   - Otimizar imagens (`imagemin`).  

4. **Abra o site**:  
   - Acesse `index.html` no navegador ou use um servidor local (ex: `live-server`).  

---

## 🛠 Tarefas do Grunt  
| Comando          | Ação                                |  
|------------------|-------------------------------------|  
| `grunt`          | Executa todas as tarefas padrão.    |  
| `grunt watch`    | Monitora alterações nos arquivos.   |  
| `grunt uglify`   | Minifica JavaScript.                |  
| `grunt less`     | Compila LESS para CSS.              |  

---

## 📂 Estrutura do Projeto  
```  
├── src/  
│   ├── js/          # Código-fonte JS  
│   ├── less/        # Estilos LESS  
│   └── img/         # Imagens originais  
├── dist/            # Arquivos processados (gerados automaticamente)  
│   ├── css/  
│   ├── js/  
│   └── img/  
└── index.html       # Página principal  
```  

---

## 🔄 Desenvolvimento Contínuo  
- **Modo watch**: Execute `grunt watch` para recompilar automaticamente ao editar arquivos.  

---

## 📄 Licença  
MIT © [Katsuhkay](https://github.com/Katsuhkay).  

--- 

Feito com ❤️ e Grunt! 🚀
