import { bannerImgOne, bannerImgThree, bannerImgTwo } from "../assets/images";

export const headerNavigation = [
    {
       title: "Home",
       link: "/",
    },
    {
       title: "Shop",
       link: "/shop",
    },
    {
       title: "About",
       link: "/about",
    },
    {
       title: "Contact",
       link: "/contact",
    },
    {
       title: "Orders",
       link: "/orders",
    },
];

export const bannerData = [
   {
      title: "Top selling smartphone and accessories",
      discount: "discount of up to 40%",
      from: 599.99,
      sale: "Flash sale",
      image: bannerImgOne,
   },
   {
      title: "The best deals on MacBooks",
      discount: "about $250 off",
      from: 2349.99,
      sale: "Big sale",
      image: bannerImgTwo,
   },
   {
      title: "Discounts 50% on all headphone",
      discount: "Free shipping over $100",
      from: 499.99,
      sale: "weekend deal",
      image: bannerImgThree,
   },
];



export default headerNavigation;