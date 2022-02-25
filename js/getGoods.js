getGoods = () => {
    const links = document.querySelectorAll('.navigation-link'),
            viewAll = document.querySelectorAll('.more');
// функция рендер товаров
    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector('.long-goods-list');
        goodsContainer.innerHTML = '';
        goods.forEach((good) => {
            const goodBlock = document.createElement('div');
            goodBlock.classList.add('col-lg-3');
            goodBlock.classList.add('col-sm-6');
            goodBlock.innerHTML = `
                <div class="goods-card">
                    <span class="label ${good.label ? null : 'd-none' }">${good.label}</span>
                    <img src="db/${good.img}" alt="${good.name}" class="goods-image">
                    <h3 class="goods-title">${good.name}</h3>
                    <p class="goods-description">${good.description}</p>
                    <button class="button goods-card-btn add-to-cart" data-id="${good.id}">
                        <span class="button-price">$${good.price}</span>
                    </button>
                </div>           
            `
            goodsContainer.append(goodBlock);
        })
    }
    // функция получения данных о товаре из базы и запись в localStorage
    const getData = (value, category) => {
        fetch('db/db.json')
            .then((res) => res.json())
            .then((data) => {
                // localStorage.removeItem('goods'); очистка localStorage не требуется
                const array = category ? data.filter((item) => item[category] === value) : data;

                localStorage.setItem('goods', JSON.stringify(array));
                console.log(window.location.href);
                if (window.location.pathname !== '/goods.html') {
                    window.location.href = '/goods.html';
                } else {
                    renderGoods(array);
                }
            })
    }
// передаем в getData значения по кликнутой ссылке
    links.forEach((link) => {
        link.addEventListener('click', (event) =>{
            event.preventDefault(); //отключаем стандартное поведение ссылок
            const linkValue = link.textContent; // получаем текстовое значение ссылки
            const category = link.dataset.field; // получаем дата атрибут ссылки
            // console.log(linkValue, category);
            getData(linkValue, category);
        })
    });

// передаем в getData путсое значения при клике View All
    viewAll.forEach(elem => {
        elem.addEventListener('click',(event)=>{
            event.preventDefault();
            getData();
        })
    })

// если в localStorage  есть goods и находимся на страниеце goods.html, то орисовывем все из localStorage
    if(localStorage.getItem('goods') && window.location.pathname === '/goods.html'){
        renderGoods(JSON.parse(localStorage.getItem('goods')));
    }
}
getGoods(); 