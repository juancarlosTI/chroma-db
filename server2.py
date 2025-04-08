import chromadb

# Inicia o servidor ChromaDB apontando para a pasta específica
chroma_client = chromadb.Server()
chroma_client.start()

print("Servidor ChromaDB rodando em http://localhost:8000")
