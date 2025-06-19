// Dados simulados dos imóveis - Expandidos para cobrir todos os filtros
const mockProperties = [
    // Apartamentos para Aluguel
    {
        id: 1,
        title: "Apartamento moderno no Copacabana",
        price: 3500,
        location: "Copacabana, Rio de Janeiro",
        type: "apartamento",
        transaction: "aluguel",
        bedrooms: 2,
        bathrooms: 2,
        area: 85,
        source: "olx",
        tags: ["Mobiliado", "Praia", "Segurança 24h"],
        image: "🏖️"
    },
    {
        id: 2,
        title: "Apartamento econômico em Madureira",
        price: 1200,
        location: "Madureira, Rio de Janeiro",
        type: "apartamento",
        transaction: "aluguel",
        bedrooms: 1,
        bathrooms: 1,
        area: 45,
        source: "quinto",
        tags: ["Transporte público", "Comércio", "Primeiro andar"],
        image: "🚌"
    },
    {
        id: 3,
        title: "Apartamento familiar em Botafogo",
        price: 4200,
        location: "Botafogo, Rio de Janeiro",
        type: "apartamento",
        transaction: "aluguel",
        bedrooms: 3,
        bathrooms: 2,
        area: 110,
        source: "zap",
        tags: ["Metrô próximo", "Shopping", "Escola"],
        image: "🚇"
    },
    {
        id: 4,
        title: "Apartamento de luxo em Ipanema",
        price: 8500,
        location: "Ipanema, Rio de Janeiro",
        type: "apartamento",
        transaction: "aluguel",
        bedrooms: 4,
        bathrooms: 3,
        area: 180,
        source: "olx",
        tags: ["Vista mar", "Portaria", "Varanda"],
        image: "🌊"
    },

    // Casas para Aluguel
    {
        id: 5,
        title: "Casa aconchegante em Tijuca",
        price: 2800,
        location: "Tijuca, Rio de Janeiro",
        type: "casa",
        transaction: "aluguel",
        bedrooms: 2,
        bathrooms: 2,
        area: 90,
        source: "zap",
        tags: ["Quintal", "Pet friendly", "Garagem"],
        image: "🏡"
    },
    {
        id: 6,
        title: "Casa familiar em Campo Grande",
        price: 1800,
        location: "Campo Grande, Rio de Janeiro",
        type: "casa",
        transaction: "aluguel",
        bedrooms: 3,
        bathrooms: 2,
        area: 120,
        source: "quinto",
        tags: ["Espaçosa", "Área de serviço", "Próximo escolas"],
        image: "🏠"
    },
    {
        id: 7,
        title: "Casa de alto padrão na Barra",
        price: 6200,
        location: "Barra da Tijuca, Rio de Janeiro",
        type: "casa",
        transaction: "aluguel",
        bedrooms: 4,
        bathrooms: 4,
        area: 250,
        source: "olx",
        tags: ["Condomínio fechado", "Piscina", "Churrasqueira"],
        image: "🏊"
    },

    // Studios para Aluguel
    {
        id: 8,
        title: "Studio compacto na Barra",
        price: 2200,
        location: "Barra da Tijuca, Rio de Janeiro",
        type: "studio",
        transaction: "aluguel",
        bedrooms: 1,
        bathrooms: 1,
        area: 35,
        source: "quinto",
        tags: ["Novo", "Academia", "Piscina"],
        image: "🏢"
    },
    {
        id: 9,
        title: "Studio moderno em Botafogo",
        price: 2800,
        location: "Botafogo, Rio de Janeiro",
        type: "studio",
        transaction: "aluguel",
        bedrooms: 1,
        bathrooms: 1,
        area: 40,
        source: "zap",
        tags: ["Mobiliado", "Vista cidade", "Metrô"],
        image: "🌆"
    },

    // Coberturas para Aluguel
    {
        id: 10,
        title: "Cobertura duplex em Copacabana",
        price: 12000,
        location: "Copacabana, Rio de Janeiro",
        type: "cobertura",
        transaction: "aluguel",
        bedrooms: 3,
        bathrooms: 3,
        area: 180,
        source: "olx",
        tags: ["Terraço", "Vista panorâmica", "Churrasqueira"],
        image: "🌅"
    },

    // Apartamentos para Venda
    {
        id: 11,
        title: "Apartamento novo em Jacarepaguá",
        price: 450000,
        location: "Jacarepaguá, Rio de Janeiro",
        type: "apartamento",
        transaction: "venda",
        bedrooms: 2,
        bathrooms: 2,
        area: 70,
        source: "zap",
        tags: ["Lançamento", "Financiamento", "Área de lazer"],
        image: "🏗️"
    },
    {
        id: 12,
        title: "Apartamento reformado em Flamengo",
        price: 850000,
        location: "Flamengo, Rio de Janeiro",
        type: "apartamento",
        transaction: "venda",
        bedrooms: 3,
        bathrooms: 2,
        area: 95,
        source: "quinto",
        tags: ["Reformado", "Praia próxima", "Transporte"],
        image: "🏖️"
    },
    {
        id: 13,
        title: "Apartamento de luxo em Leblon",
        price: 1800000,
        location: "Leblon, Rio de Janeiro",
        type: "apartamento",
        transaction: "venda",
        bedrooms: 4,
        bathrooms: 3,
        area: 150,
        source: "olx",
        tags: ["Luxo", "Vista mar", "Portaria 24h"],
        image: "💎"
    },

    // Casas para Venda
    {
        id: 14,
        title: "Casa espaçosa em Ipanema",
        price: 1200000,
        location: "Ipanema, Rio de Janeiro",
        type: "casa",
        transaction: "venda",
        bedrooms: 3,
        bathrooms: 3,
        area: 150,
        source: "zap",
        tags: ["Quintal", "Garagem", "Churrasqueira"],
        image: "🏡"
    },
    {
        id: 15,
        title: "Casa de vila em Santa Teresa",
        price: 680000,
        location: "Santa Teresa, Rio de Janeiro",
        type: "casa",
        transaction: "venda",
        bedrooms: 2,
        bathrooms: 2,
        area: 90,
        source: "quinto",
        tags: ["Histórico", "Charme", "Arte"],
        image: "🎨"
    },
    {
        id: 16,
        title: "Casa térrea em Bangu",
        price: 320000,
        location: "Bangu, Rio de Janeiro",
        type: "casa",
        transaction: "venda",
        bedrooms: 2,
        bathrooms: 1,
        area: 80,
        source: "olx",
        tags: ["Primeira casa", "Quintal amplo", "Garagem"],
        image: "🏠"
    },
    {
        id: 17,
        title: "Casa de alto padrão em São Conrado",
        price: 3200000,
        location: "São Conrado, Rio de Janeiro",
        type: "casa",
        transaction: "venda",
        bedrooms: 4,
        bathrooms: 4,
        area: 300,
        source: "zap",
        tags: ["Condomínio", "Vista montanha", "Piscina"],
        image: "🏔️"
    },

    // Studios para Venda
    {
        id: 18,
        title: "Studio investimento em Centro",
        price: 280000,
        location: "Centro, Rio de Janeiro",
        type: "studio",
        transaction: "venda",
        bedrooms: 1,
        bathrooms: 1,
        area: 30,
        source: "quinto",
        tags: ["Investimento", "Aluguel garantido", "Transporte"],
        image: "💼"
    },
    {
        id: 19,
        title: "Studio moderno em Recreio",
        price: 380000,
        location: "Recreio dos Bandeirantes, Rio de Janeiro",
        type: "studio",
        transaction: "venda",
        bedrooms: 1,
        bathrooms: 1,
        area: 42,
        source: "olx",
        tags: ["Novo", "Praia", "Academia"],
        image: "🏄"
    },

    // Coberturas para Venda
    {
        id: 20,
        title: "Cobertura com vista para o mar",
        price: 2800000,
        location: "Leblon, Rio de Janeiro",
        type: "cobertura",
        transaction: "venda",
        bedrooms: 4,
        bathrooms: 4,
        area: 200,
        source: "olx",
        tags: ["Vista mar", "Terraço", "Luxo"],
        image: "🌊"
    },
    {
        id: 21,
        title: "Cobertura duplex na Tijuca",
        price: 980000,
        location: "Tijuca, Rio de Janeiro",
        type: "cobertura",
        transaction: "venda",
        bedrooms: 3,
        bathrooms: 3,
        area: 140,
        source: "zap",
        tags: ["Duplex", "Terraço gourmet", "Elevador"],
        image: "🏠"
    },

    // Imóveis com 1 quarto
    {
        id: 22,
        title: "Apartamento compacto em Laranjeiras",
        price: 1900,
        location: "Laranjeiras, Rio de Janeiro",
        type: "apartamento",
        transaction: "aluguel",
        bedrooms: 1,
        bathrooms: 1,
        area: 50,
        source: "quinto",
        tags: ["Metrô próximo", "Supermercado", "Farmácia"],
        image: "🚇"
    },

    // Mais opções para diferentes faixas de preço
    {
        id: 23,
        title: "Apartamento econômico em Realengo",
        price: 900,
        location: "Realengo, Rio de Janeiro",
        type: "apartamento",
        transaction: "aluguel",
        bedrooms: 2,
        bathrooms: 1,
        area: 55,
        source: "olx",
        tags: ["Primeiro andar", "Sem condomínio", "Transporte"],
        image: "🚌"
    },
    {
        id: 24,
        title: "Casa de luxo em Joá",
        price: 15000,
        location: "Joá, Rio de Janeiro",
        type: "casa",
        transaction: "aluguel",
        bedrooms: 4,
        bathrooms: 5,
        area: 400,
        source: "zap",
        tags: ["Luxo", "Piscina", "Vista mar", "Churrasqueira"],
        image: "🏖️"
    }
];

let filteredProperties = [];
let currentSort = 'relevance';

function searchProperties() {
    // Mostrar loading
    document.getElementById('loadingState').style.display = 'block';
    document.getElementById('propertyGrid').innerHTML = '';

    // Simular delay de busca
    setTimeout(() => {
        const formData = new FormData(document.getElementById('searchForm'));
        const filters = {
            location: formData.get('location')?.toLowerCase() || '',
            type: formData.get('type') || '',
            transaction: formData.get('transaction') || '',
            minPrice: parseInt(formData.get('minPrice')) || 0,
            maxPrice: parseInt(formData.get('maxPrice')) || Infinity,
            bedrooms: parseInt(formData.get('bedrooms')) || 0
        };

        // Filtrar propriedades
        filteredProperties = mockProperties.filter(property => {
            return (
                (filters.location === '' || property.location.toLowerCase().includes(filters.location)) &&
                (filters.type === '' || property.type === filters.type) &&
                (filters.transaction === '' || property.transaction === filters.transaction) &&
                (property.price >= filters.minPrice && property.price <= filters.maxPrice) &&
                (filters.bedrooms === 0 || property.bedrooms >= filters.bedrooms)
            );
        });

        displayResults();
        document.getElementById('loadingState').style.display = 'none';
    }, 1500);
}

function displayResults() {
    const grid = document.getElementById('propertyGrid');
    const count = document.getElementById('resultsCount');

    count.textContent = `Encontrados ${filteredProperties.length} imóveis`;

    if (filteredProperties.length === 0) {
        grid.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: #666; grid-column: 1 / -1;">
                        <p>😔 Nenhum imóvel encontrado com os filtros selecionados</p>
                        <p>Tente ajustar os critérios de busca</p>
                    </div>
                `;
        return;
    }

    const sortedProperties = sortProperties(filteredProperties, currentSort);

    grid.innerHTML = sortedProperties.map(property => createPropertyCard(property)).join('');
}

function createPropertyCard(property) {
    const sourceClass = `source-${property.source}`;
    const sourceName = {
        'olx': 'OLX',
        'zap': 'Zap Imóveis',
        'quinto': 'Quinto Andar'
    }[property.source];

    const formattedPrice = property.transaction === 'venda'
        ? `R$ ${property.price.toLocaleString('pt-BR')}`
        : `R$ ${property.price.toLocaleString('pt-BR')}/mês`;

    return `
                <div class="property-card" onclick="viewProperty(${property.id})">
                    <div class="property-image">
                        ${property.image}
                        <div class="source-tag ${sourceClass}">${sourceName}</div>
                    </div>
                    <div class="property-content">
                        <div class="property-price">${formattedPrice}</div>
                        <div class="property-title">${property.title}</div>
                        <div class="property-location">📍 ${property.location}</div>
                        <div class="property-details">
                            <div class="detail-item">🛏️ ${property.bedrooms} quarto${property.bedrooms > 1 ? 's' : ''}</div>
                            <div class="detail-item">🚿 ${property.bathrooms} banheiro${property.bathrooms > 1 ? 's' : ''}</div>
                            <div class="detail-item">📐 ${property.area}m²</div>
                        </div>
                        <div class="property-tags">
                            ${property.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
}

function sortProperties(properties, sortType) {
    const sorted = [...properties];

    switch (sortType) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        default:
            return sorted;
    }
}

function sortResults() {
    currentSort = document.getElementById('sortSelect').value;
    if (filteredProperties.length > 0) {
        displayResults();
    }
}

function viewProperty(id) {
    const property = mockProperties.find(p => p.id === id);
    alert(`🏠 ${property.title}\n💰 ${property.transaction === 'venda' ? 'R$ ' + property.price.toLocaleString('pt-BR') : 'R$ ' + property.price.toLocaleString('pt-BR') + '/mês'}\n📍 ${property.location}\n\nEm um site real, isso abriria os detalhes do imóvel!`);
}

// Busca inicial para mostrar alguns resultados
setTimeout(() => {
    filteredProperties = mockProperties.slice(0, 24);
    displayResults();
}, 500);