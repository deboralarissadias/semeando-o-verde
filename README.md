# Semeando o Verde 🌱

**Semeando o Verde** é um projeto digital em Python com HTML, CSS e JavaScript que facilita a gestão de doações de mudas de árvores, promovendo a sustentabilidade na comunidade. O website oferece uma interface amigável para incentivar o contato por email para doações e criar uma experiência mais eficiente e agradável para os usuários.

## Funcionalidades

- Sistema de gerenciamento de doações de mudas de árvores.
- Design responsivo utilizando **Bootstrap**.
- Suporte para múltiplas páginas HTML.
- Integração com um backend simples em **Flask** (Python).
- Contato facilitado por email para interessados em doações.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Python 3.6+** (versão mais recente recomendada)
- **Pip** (gerenciador de pacotes do Python)
- **Git** (opcional, para clonar o projeto)
- **Um navegador moderno** (para testar a aplicação)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório do projeto:**

   Se você tiver o Git instalado, use o comando abaixo para clonar o repositório:

   ```bash
   git clone https://github.com/deboralarissadias/semeando-o-verde.git
   ```

   Ou baixe diretamente como um arquivo zip da página do GitHub.

2. **Acesse o diretório do projeto:**

   ```bash
   cd semeando-o-verde
   ```

3. **Crie e ative um ambiente virtual:**

   - No Linux ou macOS:

     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

   - No Windows:

     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```

4. **Instale as dependências:**

   Com o ambiente virtual ativo, rode o seguinte comando para instalar as dependências necessárias (como o Flask):

   ```bash
   pip install -r requirements.txt
   ```

   Caso o arquivo `requirements.txt` não exista, adicione manualmente o Flask:

   ```bash
   pip install flask
   ```

## Executando o Projeto

Depois de concluir a instalação, execute o seguinte comando para iniciar o servidor local:

```bash
python3 app.py
```

Ou, se estiver usando Windows:

```bash
python app.py
```

Agora, você pode acessar a aplicação no seu navegador em:

```
http://127.0.0.1:5000/
```

## Desenvolvido por

- [Débora Larissa](https://github.com/deboralarissadias)

## Licença

Este projeto é distribuído sob a licença [MIT License](https://github.com/deboralarissadias/semeando-o-verde/blob/main/LICENSE).
