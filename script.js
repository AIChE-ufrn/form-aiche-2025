// URLs dos formulários Google Forms
// IMPORTANTE: Substitua essas URLs pelos links reais dos seus formulários
const formURLs = {
    projetos: {
        diretor: 'https://forms.gle/bJjVnVdGEtuHNYJd9',
        membro: 'https://forms.gle/c3wUKAhvfCvAHGAcA'
    },
    marketing: {
        diretor: 'https://forms.gle/7MA6Y3hnB1bFY1fY6',
        membro: 'https://forms.gle/wT734JqnU5FsxJd47'
    },
    financas: {
        diretor: 'https://forms.gle/6oumEqQQEHi41QKdA',
        membro: 'https://forms.gle/VAeWiX3Kkxa29AG99'
    },
    presidencia: {
        diretor: 'https://forms.gle/kJbUiy1NN75qvCbA7',
        membro: 'URL_DO_FORMULARIO_MEMBRO_PRESIDENCIA'
    },
    tutor: {
        geral: 'URL_DO_FORMULARIO_TUTOR'
    }
};

function openForm(diretoria, tipo) {
    const url = formURLs[diretoria][tipo];
    
    if (url && url !== 'URL_DO_FORMULARIO_' + diretoria.toUpperCase() + '_' + tipo.toUpperCase()) {
        window.open(url, '_blank');
    } else {
        alert('Formulário em breve! Por favor, aguarde a configuração dos links.');
        console.log(`Formulário solicitado: ${diretoria} - ${tipo}`);
    }
}

// Adiciona efeito de carregamento suave
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});