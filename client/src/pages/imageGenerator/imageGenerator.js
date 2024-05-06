import { useState } from "react";
import Navbar from "../../common/navbar/navbar";

function ImageGenerator(){
    
    const [searchImage , setSearchImage] = useState("https://img.freepik.com/premium-psd/image-3d-graphic-illustration_689261-193.jpg?size=626&ext=jpg&ga=GA1.1.482985772.1714508851&semt=ais");

    const textChanged = (val) =>{
           
    }

    const getData = async()=>{
        const req = await fetch('http://localhost:14000/api/image-generator',{
            method:"POST",
        });
        const data  = await req.json();
        console.log(data);
        setSearchImage(data.image);
    }
    
    return (
        <div>
            <Navbar />
            <div className="image-generator-main-container">
                <img width="340px" height='340px' src={searchImage}></img>
            </div>
            <div className="search-container">
                <input onChange={(e)=>{textChanged(e.target.value)}}/>
                <button onClick={()=>{getData()}}>generate</button>
                {/* <p>{searchText}</p> */}
            </div>
        </div>
    );
}

export default ImageGenerator;    