let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Pizza 🍕', 'Taco 🌮', 'Hot Dog 🌭', 'Sushi 🍣'];
let colorHex = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B'];

let myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [30, 10, 40, 20],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      labels: {
        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
        render: 'value',
 
        // precision for percentage, default is 0
        precision: 0,
 
        // identifies whether or not labels of value 0 are displayed, default is false
        showZero: true,
 
        // font size, default is defaultFontSize
        fontSize: 14,

        textStrokeColor: 'black',
        textStrokeWidth: 5,
 
        // font color, can be color array for each data or function for dynamic color, default is defaultFontColor
        fontColor: '#fff',
 
        // font style, default is defaultFontStyle
        fontStyle: 'normal',
 
        // font family, default is defaultFontFamily
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
 
        // draw text shadows under labels, default is false
        textShadow: true,
 
        // text shadow intensity, default is 6
        shadowBlur: 10,
 
        // text shadow X offset, default is 3
        shadowOffsetX: 0,
 
        // text shadow Y offset, default is 3
        shadowOffsetY: 0,
 
        // text shadow color, default is 'rgba(0,0,0,0.3)'
        shadowColor: 'rgba(0,0,0,1)',
 
 
        // position to draw label, available value is 'default', 'border' and 'outside'
        // bar chart ignores this
        // default is 'default'
        position: 'default',
 
        // draw label even it's overlap, default is true
        // bar chart ignores this
        overlap: true,
 
        // show the real calculated percentages from the values and don't apply the additional logic to fit the percentages to 100 in total, default is false
        showActualPercentages: true,
      }
    }
  }
})