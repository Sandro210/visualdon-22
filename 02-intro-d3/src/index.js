import * as d3 from 'd3';

// C'est ici que vous allez écrire les premières lignes en d3!

const WIDTH = "100vw";
const HEIGHT = "100vh";
const texte = "salut";
const svg = d3.select("body")
            .append("svg")
            .attr("id", "svg")
            .attr("width", WIDTH)
            .attr("height", HEIGHT)
            .append("circle")
                .attr("cx", "100")
                .attr("cy", "50")
                .attr("r", "40")
                .attr("fill", "red")
            .append("p")
                .attr("margin", "100")
                .attr("padding", "75")

                

const circle2 = d3.select("#svg")
                .append("circle")
                .attr("cx", "200")
                .attr("cy", "150")
                .attr("r", "40")
                .attr("fill", "blue")
                .append("p");

const circle3 = d3.select("#svg")
                .append("circle")
                .attr("id", "dernier")
                .attr("cx", "250")
                .attr("cy", "250")
                .attr("r", "40")
                .attr("fill", "red")
                circle3.on("click", () =>{
                    circle3.attr("fill", "blue");
                });



const cercle = document.querySelectorAll("p");
cercle.forEach(element => {
    element.append(texte);
})






            



