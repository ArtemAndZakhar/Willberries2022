getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('db/db.json')
            .then((res) => res.json())
            .then((data) => {
                localStorage.removeItem('goods');
                localStorage.setItem('goods', JSON.stringify(data));
                // console.log(data);
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) =>{
            event.preventDefault(); //отключаем стандартное поведение ссылок
            getData();
        })
    });

    // localStorage.setItem('goods', JSON.stringify([1,2,3,4,5]))
    // const goods = JSON.parse(localStorage.getItem('goods'));
    // console.log(goods);

    // localStorage.removeItem('goods');
    // console.log(goods);
}
getGoods();