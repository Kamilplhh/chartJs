const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let categoryL = [
    { category: "AUTENTYCZNA" },
    { category: "DROGA" },
    { category: "PROSTA" },
    { category: "PROFESJONALNA" },
    { category: "AUTENTYCZNA" }
];

let categoryR = [
    { category: "FAŁSZYWA" },
    { category: "TANIA" },
    { category: "SKOMPLIKOWANA" },
    { category: "AMATORSKA" },
    { category: "FAŁSZYWA" }
];

let data = [
    {
        id: "i1",
        color: "red",
        ratings: [0, 2, 5, 2, 0]
    },
    {
        id: "i2",
        color: "blue",
        ratings: [1, 1.5, 1, 1, 5]
    },
    {
        id: "i3",
        color: "green",
        ratings: [1, 2, 4, 5, 0]
    }
];

let width = $(window).width();
if(width > 2000){
    width = 2000;
}
let range = width * 1 / 3;
let height = 400;
let array = ["ZDECYDOWANIE", "BARDZO", "RACZEJ", "ANI, ANI", "RACZEJ", "BARDZO", "ZDECYDOWANIE"]
let font = ".9em";
let shiftFont = ".85em";
let shift = range - 10;

if (width <= 1000 && width >= 750) {
    font = ".8em";
    shift = range - 3;
    shiftFont = ".7em";
} else if (width < 750) {
    font = ".5em";
    shiftFont = ".48em"
    shift = range - 1;
}

let xScale = d3.scaleLinear()
    .domain([0, 6])
    .range([0, (width * 2 / 3)]);

let svg = d3.select("#likertChart")
    .append("svg")
    .attr("width", width + (range))
    .attr("height", height);

svg.selectAll("text.category")
    .data(array)
    .enter()
    .append("text")
    .text(function (a) { return a; })
    .attr("x", function (a, i) { return xScale(i) + shift })
    .attr("y", 20)
    .attr("text-anchor", "end")
    .attr("font-size", shiftFont)
    .attr("fill", "grey");

$.each(data, function (i) {
    let id = data[i].id;
    let object = data[i].ratings;
    let color = data[i].color;
    $.each(object, function (i) {
        let number = i;
        svg.append("circle")
            .attr("cx", function () { return xScale(object[i]) + range; })
            .attr("cy", function () { return (number * 60) + 60; })
            .attr("r", 6)
            .attr("class", function () { return id; })
            .attr("stroke", function () { return color; })
            .attr("stroke-width", 4)
            .attr("fill", "none");
    })
})

svg.selectAll("text.category-label-left")
    .data(categoryL)
    .enter()
    .append("text")
    .text(function (c) { return c.category; })
    .attr("x", range - 20)
    .attr("y", function (c, i) { return (i * 60) + 45; })
    .attr("dy", "0.35em")
    .attr("font-size", font)
    .attr("text-anchor", "end")
    .attr("class", "category-label-left");

svg.selectAll("text.category-label-right")
    .data(categoryR)
    .enter()
    .append("text")
    .text(function (c) { return c.category; })
    .attr("x", width + 20)
    .attr("y", function (c, i) { return (i * 60) + 45; })
    .attr("dy", "0.35em")
    .attr("font-size", font)
    .attr("text-anchor", "start")
    .attr("class", "category-label-right");


let canvasHeight = 0;
$.each(categoryL, function () {
    canvasHeight = canvasHeight + 60;
    ctx.beginPath();
    ctx.setLineDash([5, 1]);
    ctx.moveTo(0, canvasHeight);
    ctx.lineTo(canvas.width, canvasHeight);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
    ctx.stroke();
})

let diff = (width - range) / (array.length - 1);
let place = (canvas.width / 2) - range;
for (let z = 1; z <= array.length; z++) {
    ctx.beginPath();
    ctx.setLineDash([5, 1]);
    ctx.moveTo(place, 0);
    ctx.lineTo(place, canvasHeight + 50);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
    ctx.stroke();
    place = place + diff;
}

$(document).ready(function () {
    $(".toggle-btn").click(function () {
        let id = $(this).attr('id');
        $('.' + id).each(function () {
            $(this).toggle();
        })
    });
    $(".toggle-chart").click(function () {
        let id = $(this).attr('id');
        if (!$(this).hasClass('done')) {
            let x1 = 0;
            let x2 = 0;
            let y1 = 0;
            let y2 = 0;
            $('.' + id).each(function (i) {
                let color = $(this).attr('stroke');
                if (i > 0) {
                    x2 = $(this).attr('cx');
                    y2 = $(this).attr('cy');

                    svg.append('line')
                        .style("stroke", color)
                        .attr("x1", x1)
                        .attr("y1", y1)
                        .attr("x2", x2)
                        .attr("y2", y2)
                        .attr("class", "line" + id);
                }
                x1 = $(this).attr('cx');
                y1 = $(this).attr('cy');
            })
            $(this).addClass('done');
        }
        else {
            $('.line' + id).each(function (i) {
                $(this).remove();
            })
            $(this).removeClass('done');
        };
    });
    $('#expand').click(function () {
        $('#collapseDiv').css('width', '25%');
    })

    $('#closeBtn').click(function () {
        $('#collapseDiv').css('width', '0px');
    })
});



