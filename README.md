Requerimentos:
- Ter chromaDB instalado;
      No terminal:
  
      1. python -m venv venv
      2. source venv/bin/activate  # Linux/Mac
      3. venv\Scripts\activate     # Windows
      4. pip install chromadb # ChromaDB

- Ter Typescript e TS-NODE (npm install --save-dev ts-node typescript)

1 - Iniciar server2.py ou server.py (python server.py) - Para iniciar o servidor do chroma DB.
2 - Iniciar o arquivo dbVetorial.ts - (npx tsnode dbVetorial.ts)
3 - Uma menu será inicializado com as funções:

    //1- Criar collection
    //2- Add embeddings(video,imagem,texto) a collection
    //3- Visualizar a tabela com todas inserções
    //4- Fazer buscas
