
import React from "react";
import "./HomePage.scss";

const HomePage = () => {
    return (
       <div className="wrapper">
         <header className="header">
           <div className="container">
            <h1>Hello World</h1>
           </div>
        </header>
        <nav>
           <div className="container">
           <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
           </div>
        </nav>
        <main className="main">
           <div className="container">
           <section className="section">1</section>
            <section className="section">2</section>
            <section className="section">3</section>
            <section className="section">4</section>
           </div>
        </main>
        <footer className="footer">
        <div className="container"><p>&copy; 2024.All rights reserved.</p>
        <nav></nav>
        </div>
        </footer>
       </div>
    );
}
export default HomePage;