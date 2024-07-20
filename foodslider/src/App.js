import {useEffect, useRef, useState} from 'react'
import './App.css';
import Slider from './Slider.js'
import{Routes,Route,useNavigate} from 'react-router-dom'
import Details from './Details.js';



function App() {
const API_URL="http://localhost:8000/data"
const[list,setList] = useState([])
const[count,setCount]=useState([1])
const imagelist=useRef()
const sliderChange=useRef()
const getamount = useRef()
  useEffect(()=>{
    var fetchItem = async()=>{
      try{
        var response = await fetch(API_URL)
        var data = await response.json()
        setList(data)
      }
      catch(err){
        console.log(err)
      }
      
    }
    fetchItem()
  },[])
  
 var handleLeft=()=>{
  slideimg('prev')
 }
 var handleRight=()=>{
  slideimg('next')
 }

 const nav =useNavigate()
  var handleClose =()=>{
    sliderChange.current.classList.remove('showdetails')
    nav('/')
  }
  
  

  const[details,setDetails]=useState([])  
  const[total,setTotal]=useState([]) 
  
  useEffect(()=>{
    var totalamount = ()=>{
      var de = details.map((d)=>
        d.price
      )
      var tot = count*de
      setTotal(tot)
    }
    totalamount()   
  },[count,details,total])
  
  var handleaddItems =()=>{
    var additems = count.map((count)=>
      count<10 ?count+1 :1
    )
    setCount(additems)
  
  }

  var handlesubItems=()=>{
    var subitems = count.map((count)=>
    count>1 ? count-1:1
    )
    setCount(subitems)
  }

 var handleOrder=(id)=>{
  var grabid = list.filter((item)=>
    item.id===id
  
  )
  
  // const newid = '/newid'
  // window.history.pushState(null,'',newid)
  
  setDetails(grabid)
  var slidertype = sliderChange.current
  slidertype.classList.remove('next','prev')
  slidertype.classList.add('showdetails')
 }
 
 
 

var slideimg=(type)=>{

  var listchild = imagelist.current.children;
  var listparent = imagelist.current
  var slidertype = sliderChange.current
  slidertype.classList.remove('next','prev')
  if(type==='next'){
    listparent.appendChild(listchild[0])
    slidertype.classList.add('next')
  }else{
    listparent.prepend(listchild[listchild.length-1])
    slidertype.classList.add('prev')
  }
}


  return (
    <div className='App'>
     <Routes>
      <Route path='/' element={<Slider list={list} handleaddItems={handleaddItems} handlesubItems={handlesubItems} count={count} handleClose={handleClose}  handleOrder={handleOrder} details={details} imagelist={imagelist} sliderChange={sliderChange} handleLeft={handleLeft} handleRight={handleRight} getamount={getamount} total={total}
        />}>
       <Route path='/details/:id' element={<Details/>}/>
    </Route>
  </Routes>
    </div>

  );
}

export default App;
