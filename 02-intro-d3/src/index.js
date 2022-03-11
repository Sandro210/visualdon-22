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
                    

const circle1 = d3.select("#svg")
                .append("g")   
                .append("circle")
                .attr("cx", "100")
                .attr("cy", "50")
                .attr("r", "40")
                .attr("fill", "red")    

const circle2 = d3.select("#svg")
                .append("g")
                .append("circle")
                .attr("cx", "200")
                .attr("cy", "150")
                .attr("r", "40")
                .attr("fill", "blue")
                

const circle3 = d3.select("#svg")
                .append("g")
                .append("circle")
                .attr("id", "dernier")
                .attr("cx", "250")
                .attr("cy", "250")
                .attr("r", "40")
                .attr("fill", "red")
                circle3.on("click", event =>{
                    event.attr("fill", "blue");
                });

const cercleTab = [circle1, circle2, circle3];
circle3.on("click", ()=>{
    cercleTab.forEach(circle =>{
        circle.attr("cx", 100)
    })
})


const groups = d3.selectAll("g");
groups.each(function (){
    const circle = d3.select(this).select("circle");
    const x = parseInt(circle.attr("cx"));
    const y = parseInt(circle.attr("cy"));
    const r = parseInt(circle.attr("r"));
    const text = "Hello world";
    d3.select(this)
            .append("text")
            .attr("x", x)
            .attr("y", y + r + 15)
            .text(text)
})







            



