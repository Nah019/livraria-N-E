// Função de "Voltar ao Topo"
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Função de pesquisa (simulada)
document.getElementById('search-bar').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const books = document.querySelectorAll('.book');
    let found = false;

    books.forEach(book => {
        const bookTitle = book.querySelector('img').alt.toLowerCase();
        if (bookTitle.includes(searchValue)) {
            book.style.display = 'flex';
            found = true;
        } else {
            book.style.display = 'none';
        }
    });

    if (!found) {
        document.getElementById('search-result').classList.remove('hidden');
    } else {
        document.getElementById('search-result').classList.add('hidden');
    }
});