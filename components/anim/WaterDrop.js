  "use client"
  import React from 'react'
  import anime from "animejs";

//   let GRID_WIDTH = 25;
//   let GRID_HEIGHT = 20;


  const WaterDrop = ({GRID_WIDTH,GRID_HEIGHT}) => {
    // useEffect(()=>{
    //   if(window.innerWidth<600){
    //     console.log(true);
    //   }else{
    //     GRID_WIDTH = 25;
    //     GRID_HEIGHT = 20;
    //   }
    //   console.log(window.innerWidth);
    // },[window.innerWidth])
    return (
      <div className='relative grid h-full place-content-center primary-bg'>
        <DotGrid GRID_HEIGHT={GRID_HEIGHT} GRID_WIDTH={GRID_WIDTH} />
      </div>
    );
  };



  const DotGrid = ({GRID_WIDTH,GRID_HEIGHT}) => {
    const handleDotClick = (e) =>{
      anime({
          targets:".dot-point",
          scale:[
              {value:1.25,easing:"easeOutSine",duration:250},
              {value:1.1,easing:"easeInOutQuad",duration:500},
          ],
          translateY:[
              {value:-15,easing:"easeOutSine",duration:250},
              {value:0,easing:"easeInOutQuad",duration:500},   
          ],
          opacity:[
              {value:1,easing:"easeOutSine",duration:250},
              {value:0.5,easing:"easeInOutQuad",duration:500},
          ],
          delay:anime.stagger(100,{
              grid:[GRID_WIDTH,GRID_HEIGHT],
              from:e.target.dataset.index,

          }),
      })
      console.log(e.target.dataset.index);
    }

      const dots =[];
      let index = 0;

      for(let i = 0; i < GRID_WIDTH; i++){
          for(let j = 0; j < GRID_HEIGHT; j++){
              dots.push(
                <div 
                onClick={handleDotClick}
                className='p-3 transition-colors rounded-full group cursor-crosshair hover:bg-gray-100 dark:hover:bg-[#343434]'
                data-index={index}
                key={`${i}-${j}`}
                >
                
                  <div
                  className='w-2 h-2 rounded-full opacity-50 dot-point bg-gradient-to-b from-zinc-400 to-zinc-600 dark:from-slate-400 group-hover:from-[#ffdd59] group-hover:to-[#ffa988]'
                // className='w-2 h-2 rounded-full opacity-50 dot-point bg-gradient-to-b from-[#c1c1c1] to-[#f3f3f3] group-hover:from-[#ffdd59] group-hover:to-[#ffa988]'

                  data-index={index}
                  />

                  
                </div>
              );
              index++;
          }
      }

      return (
          <div
          style={{gridTemplateColumns:`repeat(${GRID_WIDTH},1fr)`}}
          className='grid w-fit'
          >
            {dots}
          </div>
      );
  };

  export default WaterDrop