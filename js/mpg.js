const url = "data/GasBookRabbitcleancsv@1.csv"

Plotly.d3.csv(url, function(err, rows){

    function seriesNum(rows, colName) {
        return rows.map( r => +r[colName] )
    }
    
    // function seriesDate(rows, colName) {
    //     return rows.map( r => new Date(r[colName]) )
    // }

    // function zip(x, y) {
    //     var out = []
    //     for (var i=0; i<x.length; i++) {
    //         out.push([x[i], y[i]])
    //     }
    //     return out
    // }

    // function divide(x, y) {
    //     var zipped = zip(x, y)
    //     var out = []
    //     for (var i=0; i<zipped.length; i++) {
    //         out.push(zipped[i][0] / zipped[i][1])
    //     }
    //     return out
    // }

    const mi = seriesNum(rows, "MilesDiff")
    const price = seriesNum(rows, "Price")
    // const gal = seriesNum(rows, "Gallons")
    // const mpg =  divide(mi, gal)
    // const date = seriesDate(rows, "Date")
    // console.log(mi)
    // console.log(gal)
    // console.log(mpg)
    // console.log(date)

    const trace = {
        type: "scatter", 
        mode: "markers", 
        x: price,
        y: mi,
        line: { color: "#91150f" }
    }

    var layout = { 
        title: "Miles Driven vs Gas Price",
        xaxis: { title: "Price Per Gallon" },
        yaxis: { title: "Miles Driven" },
        width: 800,
        height: 600
    }
    Plotly.newPlot("miles-vs-price", [trace], layout)
})