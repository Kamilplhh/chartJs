let data = [
    { product: "Prince Polo", rating: 2, height: 60, id: "i1" },
    { product: "Grzesiek", rating: 4, height: 120, id: "i2" },
    { product: "Knoopers", rating: 0, height: 180, id: "i3" }
];

let width = 1200;
let height = 400;
let array = ["NIENAWIDZE", "NIE LUBIE", "NATURALNIE", "LUBIE", "KOCHAM"]

let xScale = d3.scaleLinear()
    .domain([0, 5])
    .range([0, (width-400)]);

let svg = d3.select("#likertChart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("text.category")
    .data(array)
    .enter()
    .append("text")
    .text(function (d) { return d; })
    .attr("x", function (d, i) { return i * ((width - 400) / 5) + 200; })
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .attr("class", "category");

svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return xScale(d.rating) + 200; })
    .attr("cy", function (d) { return d.height; })
    .attr("r", 5)
    .attr("id", function (d) { return d.id; } )
    .attr("fill", function() { return "#" + Math.floor(Math.random()*16777215).toString(16); });

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
    .attr("x", width - 200)
    .attr("y", function (d) { return d.height; })
    .attr("dy", "0.35em")
    .attr("text-anchor", "end")
    .attr("class", "product-label-right");



    $(document).ready(function(){
        $("button").click(function(){
            let id = $(this).attr('id');
            $('#' + id).toggle();
        });
      });