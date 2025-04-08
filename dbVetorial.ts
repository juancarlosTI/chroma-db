// Imports
import path from "path"
import { ChromaClient } from "chromadb";
import * as readlineSync from "readline-sync";


// Inicializando o client
const client = new ChromaClient({
    path: "http://localhost:8000"
});

const storageVideos = "<path>"
console.log(`Cliente: ${client.api.getUserIdentity}`);

// Criar uma collection
async function main() {
    let workingStatus: number = 2;

    const collection = await client.getOrCreateCollection({
        name: readlineSync.question("Digite um nome para a collection: \n").toString()
    });

    console.log(`Iniciou o banco de dados Chroma - ${collection.name}`)

    do {
        console.log(`\n\n \n1- Add embeddings(video,imagem,texto) a collection \n2- Visualizar a tabela com todas inserções \n3- Fazer buscas\n4- Todos os registros"`);
        workingStatus = parseInt(readlineSync.question("Digite o comando (numero): "));
        switch (workingStatus) {
            case 1:
                console.log("\nConsegui fazer o input. workingStatus na memoria: ", workingStatus)
                break
            case 2:
                await collection.add({
                    ids: ["1", "2", "3", "4","5"],
                    embeddings: [[0.1, 0.2, 0.3], [0.2, 0.3, 0.4], [0.4, 0.5, 0.6], [0.3, 0.7, 0.9],[1.0, 1.7, 1.9]],
                    metadatas: [{ "desc": "Primeiro vetor0" }, { "desc": "Segundo vetor" }, { "desc": "Terceiro vetor" }, { "desc": "Quarto vetor" },{ "desc": "Quinto vetor" }]
                })
                break
            case 3:
                const resultados = await collection.query({
                    queryEmbeddings: [[0.3, 0.2, 1.35]],
                    nResults: 2,
                });
                console.log(resultados);
                break
            case 4:
                const allInserts = await collection.get({});
                console.log(allInserts);
                break
            default:
                console.log("Thank-you");
        }

        // Opções:

        //1- Criar collection
        //2- Add embeddings(video,imagem,texto) a collection
        //3- Visualizar a tabela com todas inserções
        //4- Fazer buscas

    } while (workingStatus !== 0)





    // console.log("Resultados encontrados:", resultados);
    // console.log("Meta-data: ", resultados.metadatas);

}

main().catch(console.error);

