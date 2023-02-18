
function chartTwo(){

    /* Get values from form */
    var e = document.getElementById("TitleTwo").value;
    var d = document.getElementById("TypeTwo").value;
    var x = document.getElementById("Item1Two").value;
    var y = document.getElementById("Item2Two").value;
    var a = document.getElementById("Count1Two").value;
    var b = document.getElementById("Count2Two").value;

    
    /*Pie Chart*/
    if (d == "Pie") {
    var xValues = [x, y];
    var yValues = [a, b];
    var barColors = [
      "#b91d47",
      "#00aba9",
    ];
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: e
        }
      }
    });
    } else if (d == "Bar") {
    var xValues = [x, y];
    var yValues = [a, b];
    var barColors = [
      "#b91d47",
      "#00aba9",
    ];
    /*Bar Graph*/
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: e
        },
        scales: {
          yAxes: [{ticks: {min: 0}}]
        }
      }
    });
    } 
    document.getElementById("TitleTwo").value = "";
    document.getElementById("Item1Two").value = "";
    document.getElementById("Item2Two").value = "";
    document.getElementById("Count1Two").value = "";
    document.getElementById("Count2Two").value = "";
    }

        function chartThree(){
        /* Get values from form */
var e = document.getElementById("TitleThree").value;
var d = document.getElementById("TypeThree").value;
var x = document.getElementById("Item1Three").value;
var y = document.getElementById("Item2Three").value;
var z = document.getElementById("Item3Three").value;
var a = document.getElementById("Count1Three").value;
var b = document.getElementById("Count2Three").value;
var c = document.getElementById("Count3Three").value;


document.querySelector('#chart-container').innerHTML += `
    <div class="chart">
    <canvas id="myChart" style="width:100%;max-width:600px"></canvas>
    </div>
    `;
/*Pie Chart*/
if (d == "Pie") {
var xValues = [x, y, z];
var yValues = [a, b, c];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
];
new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: e
    }
  }
});
} else if (d == "Bar") {
var xValues = [x, y, z];
var yValues = [a, b, c];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
];
/*Bar Graph*/
new Chart("myChart", {
  type: "bar",
  data: {
	labels: xValues,
	datasets: [{
	  backgroundColor: barColors,
	  data: yValues
	}]
  },
  options: {
	legend: {display: false},
	title: {
	  display: true,
	  text: e
	},
	scales: {
      yAxes: [{ticks: {min: 0}}]
    }
  }
});

} 
document.getElementById("TitleThree").value = "";
document.getElementById("Item1Three").value = "";
document.getElementById("Item2Three").value = "";
document.getElementById("Item3Three").value = "";
document.getElementById("Count1Three").value = "";
document.getElementById("Count2Three").value = "";
document.getElementById("Count3Three").value = "";

}

    function chartFour(){
     /* Get values from form */
     var e = document.getElementById("TitleFour").value;
     var d = document.getElementById("TypeFour").value;
     var x = document.getElementById("Item1Four").value;
     var y = document.getElementById("Item2Four").value;
     var z = document.getElementById("Item3Four").value;
     var w = document.getElementById("Item4Four").value;
     var a = document.getElementById("Count1Four").value;
     var b = document.getElementById("Count2Four").value;
     var c = document.getElementById("Count3Four").value;
     var f = document.getElementById("Count4Four").value;
     
     /*Pie Chart*/
     if (d == "Pie") {
     var xValues = [x, y, z, w];
     var yValues = [a, b, c, f];
     var barColors = [
       "#b91d47",
       "#00aba9",
       "#2b5797",
       "#e8c3b9",
     ];
     new Chart("myChart", {
       type: "pie",
       data: {
         labels: xValues,
         datasets: [{
           backgroundColor: barColors,
           data: yValues
         }]
       },
       options: {
         title: {
           display: true,
           text: e
         }
       }
     });
     } else if (d == "Bar") {
     var xValues = [x, y, z, w];
     var yValues = [a, b, c, f];
     var barColors = [
       "#b91d47",
       "#00aba9",
       "#2b5797",
       "#e8c3b9",
     ];
     /*Bar Graph*/
     new Chart("myChart", {
       type: "bar",
       data: {
         labels: xValues,
         datasets: [{
           backgroundColor: barColors,
           data: yValues
         }]
       },
       options: {
         legend: {display: false},
         title: {
           display: true,
           text: e
         },
         scales: {
           yAxes: [{ticks: {min: 0}}]
         }
       }
     });
     } 
        document.getElementById("TitleFour").value = "";
        document.getElementById("Item1Four").value = "";
        document.getElementById("Item2Four").value = "";
        document.getElementById("Item3Four").value = "";
        document.getElementById("Item4Four").value = "";
        document.getElementById("Count1Four").value = "";
        document.getElementById("Count2Four").value = "";
        document.getElementById("Count3Four").value = "";
        document.getElementById("Count4Four").value = "";

     }
    
    function chartFive(){
    /* Get values from form */
    var e = document.getElementById("TitleFive").value;
    var d = document.getElementById("TypeFive").value;
    var x = document.getElementById("Item1Five").value;
    var y = document.getElementById("Item2Five").value;
    var z = document.getElementById("Item3Five").value;
    var w = document.getElementById("Item4Five").value;
    var v = document.getElementById("Item5Five").value;
    var a = document.getElementById("Count1Five").value;
    var b = document.getElementById("Count2Five").value;
    var c = document.getElementById("Count3Five").value;
    var f = document.getElementById("Count4Five").value;
    var g = document.getElementById("Count5Five").value;
    
    /*Pie Chart*/
    if (d == "Pie") {
    var xValues = [x, y, z, w, v];
    var yValues = [a, b, c, f, g];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#7FDBFF",
    ];
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: e
        }
      }
    });
    } else if (d == "Bar") {
    var xValues = [x, y, z, w, v];
    var yValues = [a, b, c, f, g];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#7FDBFF",
    ];
    /*Bar Graph*/
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: e
        },
        scales: {
          yAxes: [{ticks: {min: 0}}]
        }
      }
    });
    } 

    document.getElementById("TitleFive").value = "";
    document.getElementById("Item1Five").value = "";
    document.getElementById("Item2Five").value = "";
    document.getElementById("Item3Five").value = "";
    document.getElementById("Item4Five").value = "";
    document.getElementById("Item5Five").value = "";
    document.getElementById("Count1Five").value = "";
    document.getElementById("Count2Five").value = "";
    document.getElementById("Count3Five").value = "";
    document.getElementById("Count4Five").value = "";
    document.getElementById("Count5Five").value = "";
    }
    function chartSix(){    
    /* Get values from form */
    var e = document.getElementById("TitleSix").value;
    var d = document.getElementById("TypeSix").value;
    var x = document.getElementById("Item1Six").value;
    var y = document.getElementById("Item2Six").value;
    var z = document.getElementById("Item3Six").value;
    var w = document.getElementById("Item4Six").value;
    var v = document.getElementById("Item5Six").value;
    var u = document.getElementById("Item6Six").value;
    var a = document.getElementById("Count1Six").value;
    var b = document.getElementById("Count2Six").value;
    var c = document.getElementById("Count3Six").value;
    var f = document.getElementById("Count4Six").value;
    var g = document.getElementById("Count5Six").value;
    var h = document.getElementById("Count6Six").value;
    
    /*Pie Chart*/
    if (d == "Pie") {
    var xValues = [x, y, z, w, v, u];
    var yValues = [a, b, c, f, g, h];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#7FDBFF",
        "#FF851B",
    ];
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          text: e
        }
      }
    });
    } else if (d == "Bar") {
    var xValues = [x, y, z, w, v, u];
    var yValues = [a, b, c, f, g, h];
    var barColors = [
      "#b91d47",
      "#00aba9",
      "#2b5797",
      "#e8c3b9",
      "#7FDBFF",
      "#FF851B",
    ];
    /*Bar Graph*/
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: e
        },
        scales: {
          yAxes: [{ticks: {min: 0}}]
        }
      }
    });
    } 

    document.getElementById("TitleSix").value = "";
    document.getElementById("Item1Six").value = "";
    document.getElementById("Item2Six").value = "";
    document.getElementById("Item3Six").value = "";
    document.getElementById("Item4Six").value = "";
    document.getElementById("Item5Six").value = "";
    document.getElementById("Item6Six").value = "";
    document.getElementById("Count1Six").value = "";
    document.getElementById("Count2Six").value = "";
    document.getElementById("Count3Six").value = "";
    document.getElementById("Count4Six").value = "";
    document.getElementById("Count5Six").value = "";
    document.getElementById("Count6Six").value = "";

}
    function chartSeven(){
     /* Get values from form */
     var e = document.getElementById("TitleSeven").value;
     var d = document.getElementById("TypeSeven").value;
     var x = document.getElementById("Item1Seven").value;
     var y = document.getElementById("Item2Seven").value;
     var z = document.getElementById("Item3Seven").value;
     var w = document.getElementById("Item4Seven").value;
     var v = document.getElementById("Item5Seven").value;
     var u = document.getElementById("Item6Seven").value;
     var t = document.getElementById("Item7Seven").value;
     var a = document.getElementById("Count1Seven").value;
     var b = document.getElementById("Count2Seven").value;
     var c = document.getElementById("Count3Seven").value;
     var f = document.getElementById("Count4Seven").value;
     var g = document.getElementById("Count5Seven").value;
     var h = document.getElementById("Count6Seven").value;
     var i = document.getElementById("Count7Seven").value;
     
     /*Pie Chart*/
     if (d == "Pie") {
     var xValues = [x, y, z, w, v, u, t];
     var yValues = [a, b, c, f, g, h, i];
     var barColors = [
       "#b91d47",
       "#00aba9",
       "#2b5797",
       "#e8c3b9",
       "#7FDBFF",
         "#FF851B",
         "#FFDC00",
     ];
     new Chart("myChart", {
       type: "pie",
       data: {
         labels: xValues,
         datasets: [{
           backgroundColor: barColors,
           data: yValues
         }]
       },
       options: {
         title: {
           display: true,
           text: e
         }
       }
     });
     } else if (d == "Bar") {
     var xValues = [x, y, z, w, v, u, t];
     var yValues = [a, b, c, f, g, h, i];
     var barColors = [
       "#b91d47",
       "#00aba9",
       "#2b5797",
       "#e8c3b9",
       "#7FDBFF",
       "#FF851B",
         "#FFDC00",
     ];
     /*Bar Graph*/
     new Chart("myChart", {
       type: "bar",
       data: {
         labels: xValues,
         datasets: [{
           backgroundColor: barColors,
           data: yValues
         }]
       },
       options: {
         legend: {display: false},
         title: {
           display: true,
           text: e
         },
         scales: {
           yAxes: [{ticks: {min: 0}}]
         }
       }
     });
     } 
     
        document.getElementById("TitleSeven").value = "";
        document.getElementById("Item1Seven").value = "";
        document.getElementById("Item2Seven").value = "";
        document.getElementById("Item3Seven").value = "";
        document.getElementById("Item4Seven").value = "";
        document.getElementById("Item5Seven").value = "";
        document.getElementById("Item6Seven").value = "";
        document.getElementById("Item7Seven").value = "";
        document.getElementById("Count1Seven").value = "";
        document.getElementById("Count2Seven").value = "";
        document.getElementById("Count3Seven").value = "";
        document.getElementById("Count4Seven").value = "";
        document.getElementById("Count5Seven").value = "";
        document.getElementById("Count6Seven").value = "";
        document.getElementById("Count7Seven").value = "";

}

    function chartEight(){
     /* Get values from form */
     var e = document.getElementById("TitleEight").value;
     var d = document.getElementById("TypeEight").value;
     var x = document.getElementById("Item1Eight").value;
     var y = document.getElementById("Item2Eight").value;
     var z = document.getElementById("Item3Eight").value;
     var w = document.getElementById("Item4Eight").value;
     var v = document.getElementById("Item5Eight").value;
     var u = document.getElementById("Item6Eight").value;
     var t = document.getElementById("Item7Eight").value;
     var s = document.getElementById("Item8Eight").value;
     var a = document.getElementById("Count1Eight").value;
     var b = document.getElementById("Count2Eight").value;
     var c = document.getElementById("Count3Eight").value;
     var f = document.getElementById("Count4Eight").value;
     var g = document.getElementById("Count5Eight").value;
     var h = document.getElementById("Count6Eight").value;
     var i = document.getElementById("Count7Eight").value;
     var j = document.getElementById("Count8Eight").value;
     
     /*Pie Chart*/
     if (d == "Pie") {
     var xValues = [x, y, z, w, v, u, t, s];
     var yValues = [a, b, c, f, g, h, i, j];
     var barColors = [
       "#b91d47",
       "#00aba9",
       "#2b5797",
       "#e8c3b9",
       "#7FDBFF",
         "#FF851B",
         "#FFDC00",
         "#001f3f",
     ];
     new Chart("myChart", {
       type: "pie",
       data: {
         labels: xValues,
         datasets: [{
           backgroundColor: barColors,
           data: yValues
         }]
       },
       options: {
         title: {
           display: true,
           text: e
         }
       }
     });
     } else if (d == "Bar") {
     var xValues = [x, y, z, w, v, u, t, s];
     var yValues = [a, b, c, f, g, h, i, j];
     var barColors = [
       "#b91d47",
       "#00aba9",
       "#2b5797",
       "#e8c3b9",
       "#7FDBFF",
       "#FF851B",
         "#FFDC00",
         "#001f3f",
     ];
     /*Bar Graph*/
     new Chart("myChart", {
       type: "bar",
       data: {
         labels: xValues,
         datasets: [{
           backgroundColor: barColors,
           data: yValues
         }]
       },
       options: {
         legend: {display: false},
         title: {
           display: true,
           text: e
         },
         scales: {
           yAxes: [{ticks: {min: 0}}]
         }
       }
     });
     }  

        document.getElementById("TitleEight").value = "";
        document.getElementById("Item1Eight").value = "";
        document.getElementById("Item2Eight").value = "";
        document.getElementById("Item3Eight").value = "";
        document.getElementById("Item4Eight").value = "";
        document.getElementById("Item5Eight").value = "";
        document.getElementById("Item6Eight").value = "";
        document.getElementById("Item7Eight").value = "";
        document.getElementById("Item8Eight").value = "";
        document.getElementById("Count1Eight").value = "";
        document.getElementById("Count2Eight").value = "";
        document.getElementById("Count3Eight").value = "";
        document.getElementById("Count4Eight").value = "";
        document.getElementById("Count5Eight").value = "";
        document.getElementById("Count6Eight").value = "";
        document.getElementById("Count7Eight").value = "";
        document.getElementById("Count8Eight").value = "";
        
}


