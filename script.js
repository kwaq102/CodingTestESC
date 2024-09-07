const industriesList = [
	{
		industry: "Salon fryzjerski, salon kosmetyczny",
		href: "#",
	},
	{
		industry: "Fitness i siłownie",
		href: "#",
	},
	{
		industry: "Branża budowlana",
		href: "#",
	},
	{
		industry: "Lekarze",
		href: "#",
	},
	{
		industry: "Prawnicy",
		href: "#",
	},
	{
		industry: "Mała gastronomia",
		href: "#",
	},
	{
		industry: "Warsztat samochodowy, wulkanizacja",
		href: "#",
	},
	{
		industry: "Apteka",
		href: "#",
	},
	{
		industry: "Taxi",
		href: "#",
	},
	{
		industry: "Piekarnia i cukiernia",
		href: "#",
	},
	{
		industry: "Mały punkt handlowo usługowy",
		href: "#",
	},
	{
		industry: "Sklep internetowy",
		href: "#",
	},
];

const guidesList = [
	{
		industry: "Jak wybrać urządzenie fiskalne",
		href: "#",
	},
	{
		industry: "Oprogramowanie do zarządzania firmą",
		href: "#",
	},
	{
		industry: "Sklep (systemy sprzedaży)",
		href: "#",
	},
	{
		industry: "Restauracja",
		href: "#",
	},
];

const infoList = [
	{
		industry: "Zmiana VAT. Programowanie kasy",
		href: "#",
	},
	{
		industry: "Przeglądy okresowe",
		href: "#",
	},
	{
		industry: "Porady prawne",
		href: "#",
	},
	{
		industry: "Często zadawne pytania",
		href: "#",
	},
];

const produtsList = [
	{
		name: "Kasy fiskalne",
		imgSrc: "./img/products/agf.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Drukarki fiskalne",
		imgSrc: "./img/products/agq.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Kasy fiskalne",
		imgSrc: "./img/products/afw.png",
		href: "#",
		price: 1299,
		iconSrc: "./img/products/aky.png",
	},
	{
		name: "Drukarki fiskalne",
		imgSrc: "./img/products/agr.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Czytniki kodów kreskowych",
		imgSrc: "./img/products/aga.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Wagi elektroniczne",
		imgSrc: "./img/products/ags.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Systemy POS",
		imgSrc: "./img/products/afr.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Terminale fiskalne",
		imgSrc: "./img/products/agb.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Akcesoria do urządzeń fiskalnych",
		imgSrc: "./img/products/avf.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Oprogramowanie",
		imgSrc: "./img/products/agt.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Kolektory",
		imgSrc: "./img/products/agx.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Metkownice",
		imgSrc: "./img/products/agv.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Drukarki paragonowe",
		imgSrc: "./img/products/agu.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Drukarki etykiet",
		imgSrc: "./img/products/agy.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Drukarki kart",
		imgSrc: "./img/products/agw.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Szuflady",
		imgSrc: "./img/products/ahf.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Weryfikatory cen",
		imgSrc: "./img/products/ahh.png",
		href: "#",
		price: 1299,
	},
	{
		name: "Terminale płatnicze",
		imgSrc: "./img/products/ahg.png",
		href: "#",
		price: 1299,
	},
];

const produtsPromotionsList = [
	{
		name: "DATRES WP-50 Wi-Fi Online",
		imgSrc: "./img/products/agf.png",
		href: "#",
		price: 1429,
		iconSrc: "./img/products/aky.png",
		className: "slider-item",
	},
	{
		name: "Posnet Thermal HD Online",
		imgSrc: "./img/products/ako.png",
		href: "#",
		price: 1429,
		iconSrc: "/img/products/aky.png",
		className: "slider-item",
	},
	{
		name: "Kasoterminal POSPAY2 Online",
		imgSrc: "./img/products/akh.png",
		href: "#",
		price: 1429,
		iconSrc: "/img/products/aky.png",
		className: "slider-item",
	},
];

// SELECTING ELEMENTS FROM DOM

const asideIndustiesList = document.querySelector(
	".main__aside__list--industries"
);
const asideGuidesList = document.querySelector(".main__aside__list--guide");
const asideInfoListList = document.querySelector(".main__aside__list--info");
const boxCardsInPromotions = document.querySelector(
	".main__content__promotions-box"
);
const boxCardsInProducts = document.querySelector(
	".main__content__products-box"
);

// BUTTONS SLIDER
const btnSliderLeft = document.querySelector(".btn-slider-left");
const btnSliderRight = document.querySelector(".btn-slider-right");

// CREATING LISTS IN ASIDE

const createListInAside = (list, asideListFromDom) => {
	list.forEach(el => {
		const asideElement = document.createElement("li");
		asideElement.setAttribute("class", "main__aside__list__element");

		const asideLink = document.createElement("a");
		asideLink.setAttribute("class", "main__aside__list__link");
		asideLink.setAttribute("href", el.href);
		asideLink.textContent = el.industry;
		asideElement.appendChild(asideLink);

		asideListFromDom.appendChild(asideElement);
	});
};

createListInAside(industriesList, asideIndustiesList);
createListInAside(guidesList, asideGuidesList);
createListInAside(infoList, asideInfoListList);

// CREATING CARDS

const createCards = (cardList, boxForCardsFromDom) => {
	cardList.forEach(el => {
		const aEl = document.createElement("a");
		aEl.setAttribute("class", el.className ? "card slider-item" : "card");

		aEl.setAttribute("href", el.href);

		const h4El = document.createElement("h4");
		h4El.setAttribute("class", "card__heading");
		h4El.textContent = el.name;

		const imgEl = document.createElement("img");
		imgEl.setAttribute("class", "card__img absoluteCenter");
		imgEl.setAttribute("src", el.imgSrc);
		imgEl.setAttribute("alt", el.name);

		const pEl = document.createElement("p");
		pEl.setAttribute("class", "card__price flexCenter");
		pEl.textContent = `OD ${el.price} zł`;

		aEl.appendChild(h4El);
		aEl.appendChild(imgEl);
		aEl.appendChild(pEl);

		if (el.iconSrc) {
			const imgIconEl = document.createElement("img");
			imgIconEl.setAttribute("class", "card__icon");
			imgIconEl.setAttribute("src", el.iconSrc);
			imgIconEl.setAttribute("alt", "Ikona procentów");
			aEl.appendChild(imgIconEl);
		}

		boxForCardsFromDom.appendChild(aEl);
	});
};

createCards(produtsPromotionsList, boxCardsInPromotions);

createCards(produtsList, boxCardsInProducts);
