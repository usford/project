import React, { Component } from 'react';
import scheme from './scheme.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import $ from 'jquery';

//import { ReactSVG } from 'react-svg';
//import { render } from 'react-dom';
//import { element } from 'prop-types';

import { getRect, changeLine } from './testschemes.js';
import ProtocolsForm from './protocolsForm.js';
import Authorization from './authorization.js';
import BottomPanel from './bottom_panel.js';

import defaultSettings from './default_settings.js';
import changeLines from './changeLines';


//Замена ячеек на схеме
function replaceRect(id, state, type)
{
  var doc = document.getElementById('svgObject').contentDocument;

  var doc2 = document.getElementById('svgObject2').contentDocument;

  //console.log(doc2);
  // console.log(doc2.getElementById("layer1"));
  // console.log(doc2.getElementById("layer1").querySelector('g'));
  var selection = doc2.getElementById("layer1").querySelector('g');

  if (!selection) return;

  var newElement = (doc2.getElementById("layer1")).querySelector('g');

  var oldElement = doc.getElementById(id);



  newElement.setAttribute("transform", oldElement.getAttribute("transform"));
  newElement.setAttribute("state", state);
  newElement.setAttribute("type", type);
  newElement.setAttribute("id", oldElement.getAttribute("id"));


  
  
  var parentDiv = oldElement.parentNode;

  parentDiv.replaceChild(newElement, oldElement);
  document.getElementById("divSVGNew").remove();

  changeLines(doc, id, state);

  
}

//Обработка входящего запроса на изменение ячейки
export function clickRect(id, state, typeAct)
{
  var doc = document.getElementById('svgObject').contentDocument;
  //console.log(id);
  var oldElement = doc.getElementById(id);

  var type = oldElement.getAttribute("type");
  //console.log(`${state} + ${type}`);

  if (typeAct === "click" && state != "undefined")
  {
    state = (state === "on") ? "off" : "on";
  }

  
  var svgUrl = getRect(state, type);

  if (svgUrl === undefined) return 0;

  

  var newElement = document.createElement('div');
  newElement.setAttribute("id", "divSVGNew");
  newElement.setAttribute("style", 'opacity:0');

  newElement.innerHTML = `<object id="svgObject2" data=${svgUrl} type="image/svg+xml" width="1" height="1"> \
  Your browser doesnt support SVG \
  </object>`;

  var parent = document.getElementById("divSVG").parentNode;

  parent.appendChild(newElement);

  var doc2;

  setTimeout(() => {replaceRect(id, state, type);}, 1000);

  

  // setTimeout(() =>{
  //   try{
  //   console.log(doc2.contentDocument.getElementById("layer1").querySelector('g'));

  //   doc2.addEventListener('load', () => {
  //     replaceRect(id, state, type);
  //   });
  // }catch
  // {
  //   clickRect(id, state)
  // }
  // })

  
  
}

var excelData;

//Подключение по веб сокету
function connectWs()
{
  var doc = document.getElementById('svgObject').contentDocument;
  const ws = new WebSocket('ws://localhost:3001');

  ws.onopen = () => 
    {
      console.log('connected');
      var docG = doc.querySelectorAll("g");

      var data = [...docG].map((element) => element.id);

      //console.log(data);

      ws.send(JSON.stringify({
        list_id: data,
        type: "list_id"
      }));
    }

    ws.onmessage = evt => 
    {
      const message = JSON.parse(evt.data);

      console.log(message);

      if (message.type === "rect")
      {
        clickRect(message.id, message.state)
      }

      if (message.type === "data")
      {
        console.log(`U1:${message.data.U1}`);
      }

      if (message.type === "excel")
      {
        //console.log(message);
        excelData = message;
        // console.log("обнова1");
        // console.log(excelData);
      }
    }

    ws.onclose = () => 
    {
      console.log('disconnected');
    }
}





class Main extends Component {
  constructor(props) {
   
    
    super(props);
    this.state = {
      name: 'React',
      excel: false
    };
  }

  

  render() {
    document.onreadystatechange = () => 
    {
      if (document.readyState === 'complete') 
      {
        var doc = document.getElementById('svgObject').contentDocument;

        var lol = 10;
        //doc.getElementById("textAV1").innerHTML = lol;

        // doc.querySelector('g').addEventListener('click', (e) => {
        //   var id = e.target.parentNode.id; 
        //   clickRect(id, doc.getElementById(id).getAttribute("state"), "click");


        //   if (id === "0701911220711")
        //   {
            
        //     lol = parseInt(doc.getElementById("textAV1").innerHTML);
        //     lol += 100;
            
        //     doc.getElementById("textAV1").innerHTML = lol;
        //   }
        // });

        var docG = doc.querySelectorAll("g");
        
        
        for (var item of docG)
        {
          //alert(item.id);
          item.setAttribute("state", "undefined");       

          
          for (var item2 of item.children)
          {
            if (item2.tagName === "desc")
            {
              item.setAttribute("type", item2.innerHTML);
            }
          }       
        }

        defaultSettings(doc, docG);

        //doc.getElementById("0702111210412").setAttribute("style", "opacity: 0");
        connectWs();
        setTimeout(() =>{
          console.log("obnova2");
          this.setState({excel: !this.state.excel});
        }, 2000);

      }
    };

    

    return (
      <div id ="divSVG" >
          <Authorization/>
          <object id="svgObject" data={scheme} type="image/svg+xml" width="100%" height="100%" style={{border: "1px solid black", backgroundColor:"white", marginLeft:"15px", marginTop:"10px"}}>
                  Your browser doesn't support SVG
          </object>
          
          <BottomPanel data={(excelData === undefined) ? "lol" : excelData.data}/>
      </div>
    );
  }
}
//<ProtocolsForm/>

export default Main;
