import React, { Component } from 'react';
import {Bar, Line, HorizontalBar} from 'react-chartjs-2';

import './App.css';


Array.prototype.random = () => {
  return this[Math.floor(Math.random() * this.length)];
}

class App extends Component {
  
  colors = [
    '#f44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#9E9E9E',
    '#607D8B',
  ]

  chartData = {
    labels: ["Marcelo", "Fernanda", "Carlos", "Pedro", "Camila", "Julio",
             "Marcos", "Priscila"],
    datasets: [{
      label: 'Smart Leads Gerados',
      borderWidth: 1
    }]
  };

  barOptions = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        },
        stacked:true
      }],
      xAxes: [{
        stacked: true
      }]
    },
    tooltips: {
      mode: 'index'
    }
  };

  chartOptions = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    },
    tooltips: {
      mode: 'index'
    }
  };

  getRandomValueArray = (length, maxValue) => {
    return Array.from(Array(length)).map(_ => Math.floor(Math.random() * (maxValue + 1)));
  }
  
  lineData = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
             "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    datasets: [{
        label: 'Média',
        data: this.getRandomValueArray(12, 30),
        fill: false,
        backgroundColor: '#000000',
        pointBackgroundColor: '#000000',
        borderColor: '#000000',
        pointBorderColor: '#000000',
        pointHoverBackgroundColor: '#000000',
        pointHoverBorderColor: '#000000',
        borderWidth: 2,
        borderDash: [5],
        type: 'line',
        lineTension: 0,
    },
    {
        label: 'Marcelo',
        data: this.getRandomValueArray(12, 30),
        fill: false,
        borderWidth: 2
    },
    {
        label: 'Carlos',
        data: this.getRandomValueArray(12, 30),
        fill: false,
        borderWidth: 2
    },
    {
        label: 'Marcela',
        data: this.getRandomValueArray(12, 30),
        fill: false,
        borderWidth: 2
    },
    {
        label: 'Julia',
        data: this.getRandomValueArray(12, 30),
        fill: false,
        borderWidth: 2
    },
    {
        label: 'Raquel',
        data: this.getRandomValueArray(12, 30),
        fill: false,
        borderWidth: 2
    }]
  }

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  populateDataColors = (data) => {
    let colors = this.shuffle([...this.colors]).reverse();
    for (let obj of data.datasets) { 
      if (obj.label != 'Média') {
        let color = colors.pop();
        obj.backgroundColor = color;
        obj.borderColor = color;
        obj.pointBackgroundColor = color;
        obj.pointBorderColor = color;
        obj.pointHoverBackgroundColor = color;
        obj.pointHoverBorderColor = color;
        obj.lineTension = 0;
      }
    }
  }

  render() {
    this.populateDataColors(this.lineData);
    let stackedData = {...this.lineData};
    stackedData.datasets = [...this.lineData.datasets];
    stackedData.datasets.shift();
    return (
        <div className="App">
          <div>
            <Bar data={this.lineData} options={this.barOptions} width={600} height={250}/>
          </div>
          <div>
            <Line data={this.lineData} options={this.chartOptions} width={600} height={250}/>
          </div>
          <div>
            <HorizontalBar data={stackedData} options={this.barOptions} width={600} height={250}/>
          </div>
        </div>
    );
  }
}

export default App;
