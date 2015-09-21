var pieOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 1,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 60, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><div class=\"doughnut-value\"><%=segments[i].value%>%</div><span style=\"background-color:<%=segments[i].fillColor%>\"></span><p><%if(segments[i].label){%><%=segments[i].label%><%}%></p></li><%}%></ul>"

};
var skillsData = [
    {
        value: 40,
        color:"#5B90BF",
        highlight: "#000",
        label: "C#"
    },
    {
        value: 30,
        color: "#96b5b4",
        highlight: "#000",
        label: "Java"
    },
    {
        value: 20,
        color: "#CC474B",
        highlight: "#000",
        label: "Node JS"
    },
	{
        value: 20,
        color: "#cc478e",
        highlight: "#000",
        label: "CSS"
    },
    {
        value: 15,
        color: "#d08770",
        highlight: "#000",
        label: "HTML"
    },
    {
        value: 10,
        color: "#5bbfbc",
        highlight: "#000",
        label: "Javascript"
    }
];
var sum = 0;
skillsData.forEach(function(dataPoint){
	sum += dataPoint.value;
});
skillsData.forEach(function(dataPoint){
	dataPoint.value = Math.round(100*(dataPoint.value/sum));
});
var myDoughnutChart = new Chart(document.getElementById("skillsChart").getContext("2d")).Doughnut(skillsData, pieOptions);
$("#skillsLegend").append(myDoughnutChart.generateLegend());