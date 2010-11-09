$(Highcharts.setOptions({
    lang: {
      months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
    }
  }));

var BaseGraph = function() {
  return {
     chart: {
        renderTo: 'container',
        margin: [10, 0, 50, 60]
     },
     title: false,
     xAxis: { type: 'datetime' },
     yAxis: {
        title: { text: 'Preis in €/MWh' },
        showFirstLabel: true
     },
     credits: { enabled: false },
     tooltip: { enabled: false },
     legend: { enabled: false },
     plotOptions: {
       series: {
           enableMouseTracking: false,
           animation: false,
           marker: false
         }
     }
  };
};

