# Indoor Plants Front

Aplicativo mobile desenvolvido em [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/), focado em recomendar plantas de interior com base em preferências do usuário e características do ambiente.

## 📱 Funcionalidades

- Cadastro do nome do usuário
- Formulário para mapear as caracteristicas
- Recomendação de plantas de acordo com as escolhas

## 🚀 Tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 🧑‍💻 Como rodar o projeto

Para executar este projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**. Você pode verificar com o comando:

   ```bash
   node -v
   ```

   Se não estiver instalado, baixe em: [https://nodejs.org/](https://nodejs.org/)

2. **Instale o Expo CLI globalmente**, caso ainda não tenha:

   ```bash
   npm install -g expo-cli
   ```

3. **Clone este repositório ou navegue até a pasta do projeto.**

4. **Instale as dependências do projeto** com o comando:

   ```bash
   npm install
   ```

5. ** modifique o ip da URL do axios para seu ip** :

   **5.1 Em qualquer terminal encontre o ip da sua máquina** com o comando:
   no linux:

   ```bash
   hostname -I
   ```

   **5.1 Na pasta do projeto, procure o arquivo src/app/resultados.tsx substitua o ip pelo da sua maquina**

   ```bash
   const response = await axios.post('http://199.156.1.15:8000/match', data);
   ```

6. **Inicie o projeto** com o comando:

   ```bash
   expo start
   ```

   Isso abrirá um QR Code no terminal. Recomendamos escaneá-lo usando o app **Expo Go** no seu celular (disponível na Play Store e App Store) para visualizar o app em tempo real. Na versão web não será possível realizar as requests.
