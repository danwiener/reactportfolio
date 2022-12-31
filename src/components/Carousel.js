import React from 'react'
import {TbCSharp} from 'react-icons/tb'
import {SiDotnet} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNode} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {RiHtml5Fill} from 'react-icons/ri'
import {FaCss3} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {SiMicrosoftsqlserver} from 'react-icons/si'
import {SiMicrosoftazure} from 'react-icons/si'




function Carousel() {
  return (
    <div>
        <div className='carousel-parent position-relative'>
            <h1 id="carouselid" className='position-absolute top-0 start-0 end-0 text-center mt-5 technologies'>string technologies = JObject.Parse(httpResult)["<span>technologies_i_use</span>"].ToString();</h1>
            <div className='gallery'>
              <span style={{'--i' : 1}}>
                <TbCSharp color='#9d6ed8'/>
              </span>

              <span style={{'--i' : 2}}>
                <SiDotnet color='#0087c7'/>
              </span>


              <span style={{'--i' : 3}}>
                <SiMicrosoftsqlserver color='#a8181e'/>
              </span>

              <span style={{'--i' : 4}}>
                <SiMicrosoftazure color='#34b5ec'/>
              </span>

              
              <span style={{'--i' : 5}}>
                <FaJava color='#ff9622'/>
              </span>

              <span style={{'--i' : 6}}>
                <FaPython color='#ffde56'/>
              </span>

              <span style={{'--i' : 7}}>
                <FaReact color='#61DBFB'/>
              </span>

              <span style={{'--i' : 8}}>
                <FaNode color='#90c53f'/>
              </span>

              <span style={{'--i' : 9}}>
                <SiJavascript color='#ffc928'/>
              </span>

              <span style={{'--i' : 10}}>
                <RiHtml5Fill color='#f16528'/>
              </span>

              <span style={{'--i' : 11}}>
                <FaCss3 color='#2465f1'/>
              </span>

              <span style={{'--i' : 12}}>
                <FaBootstrap color='#7509f6'/>
              </span>
            </div>
        </div>
    </div>
  )
}

export default Carousel