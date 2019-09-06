const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


let navLink = document.querySelectorAll("nav a");
navLink.forEach((link, index) => {
  const num = 1;
  link.style.color = '#1c9730';
  link = siteContent.nav[`nav-item-${index + num}`];
  document.getElementsByTagName("a")[index].append(link)
});
  
let cta = document.getElementsByClassName("cta");
let ctaText = Array.from(document.getElementsByClassName("cta-text"));
ctaText.forEach((t, b) => {
	t = siteContent.cta.h1;
	b = siteContent.cta.button;
	document.getElementsByTagName("h1")[0].append(t);
  document.getElementsByTagName("button")[0].append(b);});
  
let mainTop = document.querySelectorAll(".top-content");
let c = 'content';
let h = 'h4';
const h4 = document.getElementsByTagName("h4");
const p = document.getElementsByTagName("p");
mainTop.forEach((t1, t2, p1, p2) => {
	t1 = siteContent["main-content"][`services-${h}`];
	t2 = siteContent["main-content"][`product-${h}`];
	p1 = siteContent["main-content"][`services-${c}`];
	p2 = siteContent["main-content"][`product-${c}`];
	h4[0].append(t1);
	h4[1].append(t2);
	p[0].append(p1);
	p[1].append(p2);
});

let mainBottom = document.querySelectorAll(".bottom-content")
mainBottom.forEach((t1, t2, p1, p2) => {
	t1 = siteContent["main-content"][`features-${h}`];
	t2 = siteContent["main-content"][`about-${h}`];
	p1 = siteContent["main-content"][`features-${c}`];
	p2 = siteContent["main-content"][`about-${c}`];
	h4[2].append(t1);
	h4[3].append(t2);
	p[2].append(p1);
	p[3].append(p2);
});

mainBottom.forEach((t1, p1) => {
	t1 = siteContent["main-content"][`vision-${h}`];
	p1 = siteContent["main-content"][`vision-${c}`];
	h4[4].append(t1);
	p[4].append(p1);
});

let contact = document.querySelectorAll(".main-content");
contact.forEach((el1, el2, el3, el4)=>{
	el1 = siteContent.contact[`contact-${h}`];
	el2 = siteContent.contact.address;
	el3 = siteContent.contact.phone;
	el4 = siteContent.contact.email;
	h4[5].append(el1);
	p[5].append(el2);
	p[6].append(el3);
	p[7].append(el4);
			
});

let footer = document.getElementsByTagName("footer");
let fContent = siteContent.footer.copyright;
p[8].append(fContent);