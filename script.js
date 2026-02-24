// Traduções das perguntas
const translations = {
    pt: {
        heroTitle: 'Gallupi<br>S&C',
        heroSubtitle: 'Sua jornada para a máxima performance começa aqui. Preencha sua anamnese com atenção para desenharmos o plano perfeito para você.',
        'Anamnese Física': 'Anamnese Física',
        'Objetivos e Perfil': 'Objetivos e Perfil',
        'Idade:': 'Idade:', 'Peso (kg):': 'Peso (kg):', 'Altura (cm):': 'Altura (cm):', 'Endereço:': 'Endereço:',
        'Medida do Tórax:': 'Medida do Tórax:', 'Quando começou a treinar?': 'Quando começou a treinar?',
        'Pratica exercícios? Há quanto tempo?': 'Pratica exercícios? Há quanto tempo?',
        'Se não, há quanto tempo está parado?': 'Se não, há quanto tempo está parado?',
        'Qual seu objetivo principal (Foco)?': 'Qual seu objetivo principal (Foco)?',
        'Atividades físicas ou esportes favoritos?': 'Atividades físicas ou esportes favoritos?',
        'Saúde e Fatores de Risco': 'Saúde e Fatores de Risco',
        'Fatores de risco:': 'Fatores de risco:', 'Você fuma?': 'Você fuma?', 'Condição respiratória?': 'Condição respiratória?',
        'Alergias?': 'Alergias?', 'Hipertensão? (Histórico familiar):': 'Hipertensão? (Histórico familiar):', 'Diabetes? Qual tipo?': 'Diabetes? Qual tipo?',
        'Condições Ósseas/Articulares/Musculares:': 'Condições Ósseas/Articulares/Musculares:', 'Posso ver o relatório médico? (Se houver):': 'Posso ver o relatório médico? (Se houver):',
        'Possui alguma lesão?': 'Possui alguma lesão?', 'Faz uso de alguma medicação?': 'Faz uso de alguma medicação?',
        'Algo mais que eu precise saber?': 'Algo mais que eu precise saber?', 'Já passou por alguma cirurgia?': 'Já passou por alguma cirurgia?',
        'Estilo de Vida e Nutrição': 'Estilo de Vida e Nutrição',
        'Horário de dormir / acordar:': 'Horário de dormir / acordar:', 'Usa algum suplemento?': 'Usa algum suplemento?', 'Quantas refeições faz por dia?': 'Quantas refeições faz por dia?',
        'Quais refeições você costuma fazer?': 'Quais refeições você costuma fazer?',
        'Café da Manhã': 'Café da Manhã', 'Lanche 1': 'Lanche 1', 'Almoço': 'Almoço', 'Lanche 2': 'Lanche 2', 'Jantar': 'Jantar', 'Ceia': 'Ceia',
        'Descrição de um dia típico:': 'Descrição de um dia típico:', 'Detalhes (Café da Manhã):': 'Detalhes (Café da Manhã):', 'Detalhes (Almoço):': 'Detalhes (Almoço):', 'Detalhes (Lanche 2):': 'Detalhes (Lanche 2):', 'Detalhes (Jantar):': 'Detalhes (Jantar):', 'Características da rotina regular:': 'Características da rotina regular:'
    },
    en: {
        heroTitle: 'Gallupi<br>S&C',
        heroSubtitle: 'Your journey to maximum performance starts here. Fill out your anamnesis carefully so we can design the perfect plan for you.',
        'Anamnese Física': 'Physical Anamnesis',
        'Objetivos e Perfil': 'Objectives and Profile',
        'Idade:': 'Age:', 'Peso (kg):': 'Weight (kg):', 'Altura (cm):': 'Height (cm):', 'Endereço:': 'Address:',
        'Medida do Tórax:': 'Chest Measure:', 'Quando começou a treinar?': 'When did you start training?',
        'Pratica exercícios? Há quanto tempo?': 'Do you usually exercise? For how long?',
        'Se não, há quanto tempo está parado?': 'If not, how long ago without exercising?',
        'Qual seu objetivo principal (Foco)?': "What's your objective (focus)?",
        'Atividades físicas ou esportes favoritos?': 'Physical activities / favorite sports?',
        'Saúde e Fatores de Risco': 'Health and Risk Factors',
        'Fatores de risco:': 'Risk factors:', 'Você fuma?': 'Do you smoke?', 'Condição respiratória?': 'Respiratory condition?',
        'Alergias?': 'Allergy?', 'Hipertensão? (Histórico familiar):': 'Hypertension? (Family history):', 'Diabetes? Qual tipo?': 'Diabetes? What type?',
        'Condições Ósseas/Articulares/Musculares:': 'Bone/Joint/Muscle conditions:', 'Posso ver o relatório médico? (Se houver):': "Can I see the doctor's report?",
        'Possui alguma lesão?': 'Do you have any injury?', 'Faz uso de alguma medicação?': 'Do you make use of any medication?',
        'Algo mais que eu precise saber?': 'Is there anything I need to know?', 'Já passou por alguma cirurgia?': 'Have you ever undergone any surgery?',
        'Estilo de Vida e Nutrição': 'Lifestyle and Nutrition',
        'Horário de dormir / acordar:': 'Sleep/Wake time:', 'Usa algum suplemento?': 'Do you use any supplement?', 'Quantas refeições faz por dia?': 'How many meals do you have?',
        'Quais refeições você costuma fazer?': 'Which meals do you usually have?',
        'Café da Manhã': 'Breakfast', 'Lanche 1': 'Snack 1', 'Almoço': 'Lunch', 'Lanche 2': 'Snack 2', 'Jantar': 'Dinner', 'Ceia': 'Supper',
        'Descrição de um dia típico:': 'Typical Day Description:', 'Detalhes (Café da Manhã):': 'Details (Breakfast):', 'Detalhes (Almoço):': 'Details (Lunch):', 'Detalhes (Lanche 2):': 'Details (Snack 2):', 'Detalhes (Jantar):': 'Details (Dinner):', 'Características da rotina regular:': 'Regular routine characteristics:'
    },
    es: {
        heroTitle: 'Gallupi<br>S&C',
        heroSubtitle: 'Tu viaje hacia el máximo rendimiento comienza aquí. Completa tu anamnesis con cuidado para que podamos diseñar el plan perfecto para ti.',
        'Anamnese Física': 'Anamnesis Física',
        'Objetivos e Perfil': 'Objetivos y Perfil',
        'Idade:': 'Edad:', 'Peso (kg):': 'Peso (kg):', 'Altura (cm):': 'Altura (cm):', 'Endereço:': 'Dirección:',
        'Medida do Tórax:': 'Medida del Pecho:', 'Quando começou a treinar?': '¿Cuándo empezaste a entrenar?',
        'Pratica exercícios? Há quanto tempo?': '¿Sueles hacer ejercicio? ¿Por cuánto tiempo?',
        'Se não, há quanto tempo está parado?': 'Si no, ¿cuánto tiempo sin ejercitar?',
        'Qual seu objetivo principal (Foco)?': '¿Cuál es tu objetivo (enfoque)?',
        'Atividades físicas ou esportes favoritos?': 'Actividades físicas / deportes favoritos?',
        'Saúde e Fatores de Risco': 'Salud y Factores de Riesgo',
        'Fatores de risco:': 'Factores de riesgo:', 'Você fuma?': '¿Fumas?', 'Condição respiratória?': '¿Condición respiratoria?',
        'Alergias?': '¿Alergia?', 'Hipertensão? (Histórico familiar):': '¿Hipertensión? (Antecedentes familiares):', 'Diabetes? Qual tipo?': '¿Diabetes? ¿Qué tipo?',
        'Condições Ósseas/Articulares/Musculares:': 'Condiciones óseas/articulares/musculares:', 'Posso ver o relatório médico? (Se houver):': '¿Puedo ver el informe médico?',
        'Possui alguma lesão?': '¿Tienes alguna lesión?', 'Faz uso de alguma medicação?': '¿Usas algún medicamento?',
        'Algo mais que eu precise saber?': '¿Hay algo que deba saber?', 'Já passou por alguma cirurgia?': '¿Has tenido alguna cirugía?',
        'Estilo de Vida e Nutrição': 'Estilo de Vida y Nutrición',
        'Horário de dormir / acordar:': 'Hora de dormir/despertar:', 'Usa algum suplemento?': '¿Usas algún suplemento?', 'Quantas refeições faz por dia?': '¿Cuántas comidas haces?',
        'Quais refeições você costuma fazer?': '¿Qué comidas sueles hacer?',
        'Café da Manhã': 'Desayuno', 'Lanche 1': 'Merienda 1', 'Almoço': 'Almuerzo', 'Lanche 2': 'Merienda 2', 'Jantar': 'Cena', 'Ceia': 'Supper',
        'Descrição de um dia típico:': 'Descripción del día típico:', 'Detalhes (Café da Manhã):': 'Detalles (Desayuno):', 'Detalhes (Almoço):': 'Detalles (Almuerzo):', 'Detalhes (Lanche 2):': 'Detalles (Merienda 2):', 'Detalhes (Jantar):': 'Detalles (Cena):', 'Características da rotina regular:': 'Características de la rutina regular:'
    }
};

function translateForm(lang) {
    const t = translations[lang] || translations.pt;
    const pt = translations.pt;

    // Hero Translation
    const hTitle = document.getElementById('heroTitle');
    const hSubtitle = document.getElementById('heroSubtitle');
    if (hTitle && t.heroTitle) hTitle.innerHTML = t.heroTitle;
    if (hSubtitle && t.heroSubtitle) hSubtitle.textContent = t.heroSubtitle;

    // Sessões
    document.querySelectorAll('.section-title').forEach(h => {
        const key = h.dataset.key || h.textContent.trim();
        if (!h.dataset.key) h.dataset.key = key;
        h.textContent = t[key] || key;
    });
    // Labels
    document.querySelectorAll('label').forEach(l => {
        const text = l.textContent.trim();
        if (text && !l.querySelector('input')) {
            const key = l.dataset.key || text;
            if (!l.dataset.key) l.dataset.key = key;
            l.textContent = t[key] || key;
        }
    });
    // Título principal
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const key = 'Anamnese Física';
        mainTitle.textContent = t[key] || key;
    }
    // Botão WhatsApp
    const btn = document.getElementById('whatsappBtn');
    if (btn) {
        btn.textContent = {
            pt: 'Enviar via WhatsApp',
            en: 'Send via WhatsApp',
            es: 'Enviar por WhatsApp'
        }[lang] || btn.textContent;
    }
}

document.getElementById('langSelect').addEventListener('change', function () {
    translateForm(this.value);
});

window.onload = function () {
    translateForm(document.getElementById('langSelect').value);
};
// Exemplo de uso do Inputmask
// Função para montar mensagem WhatsApp com todos os campos do formulário
function montarWhatsapp() {
    const form = document.getElementById('anamneseForm');
    const data = new FormData(form);
    let mensagem = '';
    // Lista de campos e labels
    const campos = [
        ['age', 'Age'], ['weight', 'Weight'], ['height', 'Height'], ['address', 'Address'], ['chest', 'Chest'],
        ['startTraining', 'When did you start training?'], ['exerciseDuration', 'Do you usually exercise? For how long?'],
        ['noExerciseDuration', 'If not, how long ago without exercising?'], ['objective', "What's your objective (focus)?"],
        ['favoriteSports', 'Physical activities / favorite sports?'],
        ['riskFactors', 'Risk factors'], ['smoke', 'Do you smoke?'], ['respiratory', 'Respiratory condition?'],
        ['allergy', 'Allergy?'], ['hypertension', 'Hypertension? (Family history)'], ['diabetes', 'Diabetes? What type?'],
        ['boneJointMuscle', 'Bone/Joint/Muscle conditions'], ['doctorReport', "Can I see the doctor's report?"],
        ['injury', 'Do you have any injury?'], ['medication', 'Do you make use of any medication?'],
        ['needToKnow', 'Is there anything I need to know?'], ['surgery', 'Have you ever undergone any surgery?'],
        ['sleepWake', 'Sleep/Wake time'], ['supplement', 'Do you use any supplement?'], ['meals', 'How many meals do you have?'],
        ['breakfast', 'Breakfast'], ['snack1', 'Snack-1'], ['lunch', 'Lunch'], ['snack2', 'Snack-2'], ['dinner', 'Dinner'], ['supper', 'Supper'],
        ['typicalDay', 'Typical Day Description'], ['breakfastDesc', 'Breakfast'], ['lunchDesc', 'Lunch'], ['snack2Desc', 'Snack-2'], ['dinnerDesc', 'Dinner'], ['routine', 'Regular routine characteristics']
    ];
    campos.forEach(([name, label]) => {
        let value = '';
        const el = form.elements[name];
        if (el) {
            if (el.type === 'checkbox') {
                value = el.checked ? 'Yes' : 'No';
            } else {
                value = data.get(name) || '';
            }
        }
        mensagem += `${label}: ${value}\n`;
    });
    // Codifica mensagem para URL
    mensagem = encodeURIComponent(mensagem);
    // Número do instrutor
    const numero = '5527988834082';
    let url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, '_blank');
}

document.getElementById('whatsappBtn').onclick = function (e) {
    e.preventDefault();
    montarWhatsapp();
};
