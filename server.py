import os
import subprocess

# Configuração do diretório do banco de dados
CHROMA_DB_PATH = "./newchroma-db"

# Definir variáveis de ambiente para persistência
os.environ["CHROMA_DB_IMPL"] = "duckdb"
os.environ["CHROMA_PERSIST_DIRECTORY"] = CHROMA_DB_PATH

# Comando para rodar o servidor ChromaDB
command = [
    "uvicorn", "chromadb.app:app",
    "--host", "localhost",
    "--port", "8000",
    "--reload"
]

print(f"Iniciando o ChromaDB em {CHROMA_DB_PATH}...")
try:
    subprocess.run(command, check=True)
except KeyboardInterrupt:
    print("\nServidor encerrado manualmente.")
except Exception as e:
    print(f"\nErro ao iniciar o servidor: {e}")
