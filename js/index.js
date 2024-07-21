const latestNews = document.querySelector(".latest-news__left-item")

latestNews.innerHTML = `<h2 class="latest-news__left-item__title">Последние новости</h2>`

const getNewsCard = ({date, title, desc, img, }) => {
    return `
    <div class="latest-news__card" >
        <img
        class="latest-news__card__img"
        src="${img}"
        alt="${title}"
        />
        <div>
        <h3 class="latest-news__card__title">
           ${title}
        </h3>
        <p class="latest-news__card__desc">
            ${desc}
        </p>
        <span class="latest-news__card__date">
            <img src="/assets/images/date-icon.png" alt="date" />${date}
        </span>
        </div>
    </div>
    `
}


const getNews = () =>{
    newsData.map(el =>{
        latestNews.innerHTML += getNewsCard(el)
    })
}
getNews()