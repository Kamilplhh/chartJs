// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// let categoryL = [
//     { category: "AUTENTYCZNA" },
//     { category: "DROGA" },
//     { category: "PROSTA" },
//     { category: "PROFESJONALNA" },
//     { category: "AUTENTYCZNA" }
// ];

// let categoryR = [
//     { category: "FAŁSZYWA" },
//     { category: "TANIA" },
//     { category: "SKOMPLIKOWANA" },
//     { category: "AMATORSKA" },
//     { category: "FAŁSZYWA" }
// ];

// let data = [
//     {
//         id: "i1",
//         color: "red",
//         ratings: [0, 2, 5, 2, 0]
//     },
//     {
//         id: "i2",
//         color: "blue",
//         ratings: [1, 1.5, 1, 1, 5]
//     },
//     {
//         id: "i3",
//         color: "green",
//         ratings: [1, 2, 4, 5, 0]
//     }
// ];

// let width = 1500;
// let height = 400;
// let array = ["ZDECYDOWANIE", "BARDZO", "RACZEJ", "ANI, ANI", "RACZEJ", "BARDZO", "ZDECYDOWANIE"]

// let xScale = d3.scaleLinear()
//     .domain([0, 6])
//     .range([0, (width - 500)]);

// let svg = d3.select("#likertChart")
//     .append("svg")
//     .attr("width", width + 300)
//     .attr("height", height);

// svg.selectAll("text.category")
//     .data(array)
//     .enter()
//     .append("text")
//     .text(function (a) { return a; })
//     .attr("x", function (a, i) { return xScale(i) + 390 })
//     .attr("y", 20)
//     .attr("text-anchor", "end")
//     .attr("font-size", ".9em")
//     .attr("fill", "grey");

// $.each(data, function (i) {
//     let id = data[i].id;
//     let object = data[i].ratings;
//     let color = data[i].color;
//     $.each(object, function (i) {
//         let number = i;
//         svg.append("circle")
//             .attr("cx", function () { return xScale(object[i]) + 400; })
//             .attr("cy", function () { return (number * 60) + 60; })
//             .attr("r", 6)
//             .attr("class", function () { return id; })
//             .attr("stroke", function () { return color; })
//             .attr("stroke-width", 4)
//             .attr("fill", "none");
//     })
// })

// svg.selectAll("text.category-label-left")
//     .data(categoryL)
//     .enter()
//     .append("text")
//     .text(function (c) { return c.category; })
//     .attr("x", 350)
//     .attr("y", function (c, i) { return (i * 60) + 45; })
//     .attr("dy", "0.35em")
//     .attr("text-anchor", "end")
//     .attr("class", "category-label-left");

// svg.selectAll("text.category-label-right")
//     .data(categoryR)
//     .enter()
//     .append("text")
//     .text(function (c) { return c.category; })
//     .attr("x", width - 50)
//     .attr("y", function (c, i) { return (i * 60) + 45; })
//     .attr("dy", "0.35em")
//     .attr("text-anchor", "start")
//     .attr("class", "category-label-right");



$(document).ready(function () {
    // test();
    // $("button").click(function () {
    //     let id = $(this).attr('id');
    //     $('.' + id).each(function () {
    //         $(this).toggle();
    //     })
    // });
    // $("a").click(function () {
    //     if (!$(this).hasClass('done')) {
    //         let x1 = 0;
    //         let x2 = 0;
    //         let y1 = 0;
    //         let y2 = 0;
    //         $('.i3').each(function (i) {
    //             let color = $(this).attr('stroke');
    //             if (i > 0) {
    //                 x2 = $(this).attr('cx');
    //                 y2 = $(this).attr('cy');

    //                 svg.append('line')
    //                     .style("stroke", color)
    //                     .attr("x1", x1)
    //                     .attr("y1", y1)
    //                     .attr("x2", x2)
    //                     .attr("y2", y2)
    //                     .attr("class", "line");
    //             }
    //             x1 = $(this).attr('cx');
    //             y1 = $(this).attr('cy');
    //         })
    //         $(this).addClass('done');
    //     }
    //     else {
    //         $('.line').each(function (i) {
    //             $(this).remove();
    //         })
    //         $(this).removeClass('done');
    //     };
    // });
    $('#expand').click(function () {
        $('#collapseDiv').css('width','250px');
    })

    $('#closeBtn').click(function () {
        $('#collapseDiv').css('width','0px');
    })
});

// function test() {
//     let height = 0;
//     $.each(categoryL, function () {
//         height = height + 60;
//         ctx.beginPath();
//         ctx.setLineDash([5, 1]);
//         ctx.moveTo(0, height);
//         ctx.lineTo(canvas.width, height);
//         ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
//         ctx.stroke();
//     })

//     let diff = (width - 500) / (array.length - 1);
//     let place = 400;
//     for (let z = 1; z <= array.length; z++) {
//         ctx.beginPath();
//         ctx.setLineDash([5, 1]);
//         ctx.moveTo(place, 0);
//         ctx.lineTo(place, height + 50);
//         ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
//         ctx.stroke();
//         place = place + diff;
//     }
// }
