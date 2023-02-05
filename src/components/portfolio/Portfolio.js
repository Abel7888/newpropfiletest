import React from "react";
import { web1, web2, web3, web4, web5, web6 } from "@/assets/icons";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <h3 className="text-3xl py-1 dark:text-gray-400">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          This is where I showcase the work that I have done as a self-taught
          developer. These projects are a testament to my skills, creativity,
          and determination to continuously learn and improve.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl dark:text-gray-100">
          Take a look at my projects and feel free to reach out to me with any
          questions.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <PortfolioCard
          title="Weather app"
          des="This is a Frontend appilcation using a weather API. Built with HTML, CSS and JavaScript"
          src={web1}
          
        />
        <PortfolioCard
          title="Full Stack IOT Ecommerce Website"
          des="This Ecommerence website I built for my final project at a coding boothcamp with some inspiration. The e-commerce website is divided in 6 pages, home, store, about, cart, order login(login not currently working) Built with react
          Home: Present the project and show 3 random items from the store (from firebase)."
          src={web2}
        />
         <PortfolioCard
          title="IoT Ecommerece Store section"
          des="About Page: It is only filler and does not contribute anything.
Store: Is where the items are shown and can be filter by price, name, company and category.
Cart: Is where the items that the user are going to buy are shown (works with localStorage), there the user can add and remove items, and see the price in real time. - Also is where the user acces to the checkout.
Order: After the user generates a purchase, he gets a code that can be used to see the details of that order."
          src={web3}
        />
        <PortfolioCard
          title="Basic Todo App"
          des="A basic Todo app. You can tasks and delete them as you finish the task"
          src={web4}
        />
        <PortfolioCard
          title="Full stack Property Management App"
          des="Coming Soon"
          src={web6}
        />
      </div>
    </section>
  );
};

export default Portfolio;
