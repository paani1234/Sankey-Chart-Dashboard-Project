import { AfterViewInit, Component, VERSION } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import { GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface,GridType } from 'angular-gridster2';

@Component({
  selector: "app-widget-area",
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.scss"],
})
export class AreaComponent implements AfterViewInit {

    ngAfterViewInit() {
      let chart = am4core.create("chartdiv", am4charts.SankeyDiagram);
      let nodeTemplate = chart.nodes.template;
      chart.paddingRight = 120;
  
      chart.data = [
        {
          from: "United States of America",
          to: "Gold",
          labelText: "550",
          value: 550,
          id: "A0-0",
          "nodeColor": "#018f52"
        },
        {
          from: "United States of America",
          to: "Silver",
          labelText: "500",
          value: 500,
          id: "A1-0",
          //"nodeColor": "#06D6A0", "linkColor": "#06D6A0", "linkOpacity": 1 
        },
        {
          from: "United States of America",
          to: "Bronze",
          labelText: "300",
          value: 300,
          id: "A2-0"
        },
        {
          from: "People's Republic of China",
          to: "Gold",
          labelText: "500",
          value: 500,
          id: "B0-0",
          "nodeColor": "#0090fe"
        },
        {
          from: "People's Republic of China",
          to: "Silver",
          labelText: "500",
          value: 500,
          id: "B1-0"
        },
        {
          from: "People's Republic of China",
          to: "Bronze",
          labelText: "200",
          value: 200,
          id: "B2-0"
        },
        {
          from: "Japan",
          to: "Gold",
          labelText: "300",
          value: 300,
          id: "C1-0",
          "nodeColor": "#fea202"
        },
        {
          from: "Japan",
          to: "Silver",
          labelText: "150",
          value: 150,
          id: "C2-0"
        },
        {
          from: "Japan",
          to: "Bronze",
          labelText: "200",
          value: 200,
          id: "C3-0",
          linkSettings: { fill: am4core.color('0x297373'), fillOpacity: 0.5, fillStyle: "solid" }
        },
       
      ];
      chart.dataFields.fromName = "from";
      chart.dataFields.toName = "to";
      chart.dataFields.value = "value";
      chart.dataFields.color = "nodeColor";
      nodeTemplate.nameLabel.label.hideOversized = false;
      chart.links.template.propertyFields.id = "id";
  
      chart.nodes.template.inert = true;
  
      var labelBullet = chart.links.template.bullets.push(
        new am4charts.LabelBullet()
      );
      labelBullet.label.propertyFields.text = "labelText";
      labelBullet.label.horizontalCenter = "left";
      labelBullet.label.textAlign = "start";
      labelBullet.label.dx = -50;
      labelBullet.label.fillOpacity = 0.2;
  
      nodeTemplate.width = 10;
      nodeTemplate.nameLabel.width = 300;
      nodeTemplate.draggable = false;
/*       nodeTemplate.events.on(
        "hit",
        function(ev) {
          chart.openModal(
            '<div class="row"><div class="col"><img src="https://images.pexels.com/photos/761297/pexels-photo-761297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="w-100"></div><div class="col"><img src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" class="w-100"></div></div>'
          );
        },
        this
      ); */
  
      let hoverState = chart.links.template.states.create("hover");
      hoverState.properties.fillOpacity = 0.6;
      chart.hiddenState.properties.opacity = 0;
      chart.links.template.propertyFields.id = "id";
      chart.links.template.fill = new am4core.InterfaceColorSet().getFor(
        "alternativeBackground"
      );
      chart.links.template.fillOpacity = 0.1;
  
      chart.links.template.events.on("over", function(event) {
        let link = event.target;
        let id = link.id.split("-")[0];
  
        chart.links.each(function(link) {
          if (link.id.indexOf(id) != -1) {
            link.isHover = true;
          }
        });
      });
  
      chart.links.template.events.on("out", function(event) {
        chart.links.each(function(link) {
          link.isHover = false;
        });
      });
    }
  }
  