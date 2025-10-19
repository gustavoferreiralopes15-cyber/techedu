// Você precisaria instalar o Express: npm install express
const express = require('express');
const app = express();
app.use(express.json());

// Exemplo de como você chamaria a API do Google ou OpenAI
// (Este é um código de exemplo, você precisaria instalar o SDK da IA)
async function callGenerativeAI(topic) {
    
    // --- INÍCIO DA SIMULAÇÃO ---
    // Aqui você faria a chamada real para a API de IA com sua chave secreta.
    // Ex: const response = await googleApi.generateContent(prompt);
    // Para este exemplo, vamos apenas simular uma resposta.okok
    
    console.log(`Chamando API de IA para o tópico: ${topic}`);
    const prompt = `Gere um plano de estudos em HTML para um iniciante em ${topic}.`;

    // Resposta simulada da IA:
    let simulatedResponse;
    if (topic === 'Hardware') {
        simulatedResponse = `
            <h2>Seu Plano de Hardware</h2>
            <ul>
                <li>Módulo 1: O que é um Computador?</li>
                <li>Módulo 2: Conhecendo a Placa-Mãe e o Processador (CPU).</li>
                <li>Módulo 3: Memória RAM e Armazenamento (SSD/HD).</li>
                <li>Módulo 4: Montagem e Teste.</li>
            </ul>
        `;
    } else {
        simulatedResponse = `
            <h2>Seu Plano de ${topic}</h2>
            <ul>
                <li>Módulo 1: Introdução ao Tópico.</li>
                <li>Módulo 2: Conceitos Principais.</li>
                <li>Módulo 3: Ferramentas Essenciais.</li>
                <li>Módulo 4: Projeto Prático.</li>
            </ul>
        `;
    }
    // --- FIM DA SIMULAÇÃO ---
    
    return simulatedResponse;
}


// 2. O backend cria um endpoint chamado '/api/generate-plan'
app.post('/api/generate-plan', async (req, res) => {
    try {
        const { topic } = req.body; // Pega o tópico (ex: "Hardware")

        // 3. O backend chama a API de IA de forma segura
        const generatedPlan = await callGenerativeAI(topic);

        // 4. O backend envia o resultado de volta para o frontend
        res.json({ planHtml: generatedPlan });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Falha ao gerar o plano' });
    }
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});