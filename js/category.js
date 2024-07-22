const categoryName = document.querySelector(".category__news")
const latestNews = document.querySelector(".latest-news__left-item");


categoryName.textContent = localStorage.getItem("category")


const getNewsCard = ({ date, title, desc, img }) => {
  return `
    <div class="latest-news__card" >
        <a href="/pages/news.html" class="latest-news__card__img">
            <img
            src="${img}"
            alt="${title}"
            />
        </a>
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
    `;
};

const getNews = () => {
    newsData.map((el) => {
      latestNews.innerHTML += getNewsCard(el);
    });
  };
  getNews();