import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

/* export const dragLockContext = createContext(null) */

//TODOLIST:

//remove context stuff its not worth it here
//review all the variable names!!!!!!!!!!!
//review the return structure and rebuild it according to what it was originally?

export default function DragLockComp(){
    //console.log("DXM: dragLock function ready! call initDragLock() to enable it on .dragLockPoint elements. call cancelDragLock() to clear the event listeners.")
    const [dragActive, setDragActive] = useState(false) 
    const [dragLockObj, SetDragLockObj] = useState({ x: 0, y: 0, mouseDown:false})
    const [dragPos, setDragPos] = useState({ top: 0, left: 0})
    const [dragOffset, setDragOffSet] = useState({x: 0, y: 0})
    /* let dragLockObj = {x:"", y:"", mouseDown:false} + const [dragPos, dragPos] = useState({ x: 0, y: 0 });*/
    /* let dragPointHold = false; -- no use?*/
    
    const dragRef = useRef(null) // ⚠️ useRef for permanent mutable DOM manip. null-initialized. see below.
    
    useEffect(() => { // ⚠️ useEffect -> Do side effects in components. such as data fetching, DOM manip, setting up subscriptions, or event listeners.

          const handleMouseMove = (event) => {
              if (dragActive) {
                  const rect = dragRef.current.getBoundingClientRect();
                  setDragPos({
/*                   top: event.clientY - dragOffset.y - rect.height/2,
                  left: event.clientX - dragOffset.x - rect.width/2  */
                  top: event.clientY - dragOffset.y,
                  left: event.clientX - dragOffset.x
                  });
                  dragRef.current.parentElement.style.top = `${event.clientY - dragOffset.y}px`;
                  dragRef.current.parentElement.style.left = `${event.clientX - dragOffset.x}px`;
              }
          };
          
          const handleMouseUp = () => {
            setDragActive(false);
            //🚧 add checker to save the coordinates. BOTH to dragPos AND the parent placement.
          };
              
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);

          return () => { //⚠️ the return func is called "clean-up" func. it runs BEFORE function re-call OR component dismount. its same as C's "free()" in some ways.
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          };

        }, [dragActive, dragOffset]); //⚠️ array here is called dependency array. if empty, auto trigger at compo mount.
        //⚠️ if there is custom dependency (at the end), it will make func run AGAIN automatically when ANY of the array items are CHANGED

        const handleMouseDown = (event) => {
            event.preventDefault();
            setDragActive(true);
            const rect1 = dragRef.current.getBoundingClientRect();
            setDragOffSet({
                x: event.clientX - rect1.left + (rect1.width/2),
                y: event.clientY - rect1.top //+ (rect1.height*2)
                
            });
        };

        return (
            
            <div ref={dragRef} onMouseDown={handleMouseDown} style={{ position: 'absolute', cursor: 'move'}} className="dragFig btn-frameless">

            </div>
        );
        {/* <div ref={dragRef} onMouseDown={handleMouseDown} style={{ position: 'absolute', top: `${dragPos.top}px`, left: `${dragPos.left}px`, cursor: 'move', backgroundColor: 'lightgrey', padding: '10px', border: '1px solid #ccc'}}> */}
}










/* 
    function initDragLock(){
        console.log("dragLock function initialized.")
        const _dragPoint = Array.from(document.getElementsByClassName("dragLockPoint")) //Select the draggable point (child) of an element.
        console.log("_dragPoints created: ", _dragPoint)
        _dragPoint.forEach((child)=>{
            child.style.display="flex"
            _parent=child.parentElement
            const topValue = window.getComputedStyle(_parent).getPropertyValue('top');
            const leftValue = window.getComputedStyle(_parent).getPropertyValue('left');
            _parent.style.position = "absolute"
            _parent.style.top = topValue;
            _parent.style.left = leftValue; 
            
            function dragLockMoveHandler(event){
                if (dragLockObj.mouseDown) {
                    child.parentElement.style.left = event.clientX - dragLockObj.x + 'px';
                    child.parentElement.style.top = event.clientY - dragLockObj.y + 'px';
                }
            }
            child.addEventListener("mousedown", (event)=>{
                event.preventDefault()
                dragLockObj.mouseDown = true
                dragLockObj.x = event.clientX - child.getBoundingClientRect().left;
                dragLockObj.y = event.clientY - child.getBoundingClientRect().top;

                document.addEventListener('mousemove', dragLockMoveHandler);      
                document.addEventListener("mouseup", (event)=>{
                    dragLockObj.mouseDown = false
                    document.removeEventListener('mousemove', dragLockMoveHandler);
                })
            })
        })
    }

    function cancelDragLock(){
        console.log("dragLock function removed.")
        const _dragPoint = Array.from(document.getElementsByClassName("dragLockPoint")) 
        _dragPoint.forEach((_elem)=>{
            const _clone = _elem.cloneNode(true);
            _clone.style.display="none"
            _elem.parentNode.replaceChild(_clone, _elem);
        })
    } 

    return (
        <dragLockContext.Provider value={{dragActive, setDragActive}}>
            {children}
        </dragLockContext.Provider>
    )
}*/
/*
Instructions: 
1. Add an element with a class "dragLockPoint" as a child to the element you wish to make draggable. These are your dragging anchors.
2. Call initDragLock() function to make the dragging anchors functional. 
3. Press and hold right click over the dragging anchors, then move the element around.
4. Release hold to stop the dragging effect.
5. Call cancelDragLock() function to hide the dragging anchors.
You can use the preset button example below. Note that this is not the most readable way of doing this. 
*/

//Test area:
/* const dragLockCtrl = document.getElementById("dragLockCtrl")
dragLockCtrl.addEventListener("click", ()=>{
  if (dragLockCtrl.dataset.mode=="activate"){
    initDragLock()
    dragLockCtrl.dataset.mode="cancel"
    dragLockCtrl.innerText = "Cancel dragLock"
  } else {
    cancelDragLock()
    dragLockCtrl.dataset.mode="activate"
    dragLockCtrl.innerText = "Activate dragLock"
  }
}) */
//test 


/*  

function DraggableComponent() {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const dragRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        const rect = dragRef.current.getBoundingClientRect();
        setPosition({
          top: event.clientY - offset.y - rect.top,
          left: event.clientX - offset.x - rect.left
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    const rect = dragRef.current.getBoundingClientRect();
    setOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  return (
    <div
      ref={dragRef}
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
        cursor: 'move',
        backgroundColor: 'lightgrey',
        padding: '10px',
        border: '1px solid #ccc'
      }}
    >
      Drag me
    </div>
  );
}
*/
