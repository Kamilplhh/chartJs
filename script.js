const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let data = [
    { product: "Prince Polo", rating: 1, height: 50, id: "i1" },
    { product: "Grzesiek", rating: 2, height: 110, id: "i2" },
    { product: "Knoopers", rating: 0, height: 170, id: "i3" },
    { product: "Chipsy", rating: 4, height: 230, id: "i4" },
    { product: "Gumisie", rating: 3, height: 290, id: "i5" }
];

let width = 1200;
let height = 400;
let array = ["NIENAWIDZE", "NIE LUBIE", "NATURALNIE", "LUBIE", "KOCHAM"]

let xScale = d3.scaleLinear()
    .domain([0, 4])
    .range([0, (width - 400)]);

let svg = d3.select("#likertChart")
    .append("svg")
    .attr("width", 1700)
    .attr("height", height);

svg.selectAll("text.category")
    .data(array)
    .enter()
    .append("text")
    .text(function (d) { return d; })
    .attr("x", function (d, i) { return i * ((width-400) / 4); })
    .attr("y", 20)
    .attr("text-anchor", "start")
    .attr("class", "category");

svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return xScale(d.rating) + 100; })
    .attr("cy", function (d) { return d.height + 10; })
    .attr("r", 5)
    .attr("id", function (d) { return d.id; })
    .attr("fill", function () { return "#" + Math.floor(Math.random() * 16777215).toString(16); });

svg.selectAll("text.product-label-left")
    .data(data)
    .enter()
    .append("text")
    .text(function (d) { return d.product; })
    .attr("x", 0)
    .attr("y", function (d) { return d.height; })
    .attr("dy", "0.35em")
    .attr("text-anchor", "start")
    .attr("class", "product-label-left");

svg.selectAll("text.product-label-right")
    .data(data)
    .enter()
    .append("text")
    .text(function (d) { return d.product; })
    .attr('position', 'absolute')
    .attr("x", width - 100)
    .attr("y", function (d) { return d.height; })
    .attr("dy", "0.35em")
    .attr("text-anchor", "end")
    .attr("class", "product-label-right");



$(document).ready(function () {
    test();
    $("button").click(function () {
        let id = $(this).attr('id');
        $('#' + id).toggle();
    });
});

function test() {
    let height = 0;
    $.each(data, function () {
        height = height +60;
        ctx.beginPath();
        ctx.setLineDash([5, 1]);
        ctx.moveTo(0, height);
        ctx.lineTo(1100, height);
        ctx.stroke();
    })
    
    let diff = (width - 400)/(array.length -1);
    let place = 100;
    for(let z = 1;z <= array.length; z++){
        ctx.beginPath();
        ctx.setLineDash([5, 1]);
        ctx.moveTo(place, 0);
        ctx.lineTo(place, height+50);
        ctx.stroke();
        place = place + diff;
        console.log(place);
    }
}
