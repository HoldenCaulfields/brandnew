import React, { useState } from "react";
import "../styles/Three.css";
import { useEffect } from "react";
//import RandomArrayShuffle from "./RandomArray";

/* var books2 = [];

    fetch('https://62b59b13da3017eabb1e7898.mockapi.io/mybooks/store')
        .then( response => response.json())
        .then( data => {books2 = data[0].linkbook; console.log(books2[10]);})
        .catch (error => console.log("Error", error)); */


const Three = () => {

    const books = [
        "https://bizweb.dktcdn.net/100/326/228/products/kafka-on-the-shore-by-haruki-murakami-bookworm-hanoi.jpg?v=1542777645557",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483103331l/10357575.jpg",
        "https://image.thanhnien.vn/w660/Uploaded/2022/ygtmjz/2020_07_19/the_great_gastby_ftur.jpg",
        "https://salt.tikicdn.com/cache/w1200/media/catalog/product/i/m/img398_6.jpg",
        "https://english-e-reader.net/covers/The_Count_of_Monte_Cristo-Alexandre_Dumas.jpg",
        "https://m.media-amazon.com/images/I/81WXqVSgDCL._SL1500_.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386573716l/19306508.jpg",
        "https://www.bdcbooks.com/wp-content/uploads/2020/01/61RZI1cKZUL.jpg",
        "https://www.nxbtre.com.vn/Images/Book/nxbtre_full_04152018_031555.jpg",
        "https://nhasachphuongnam.com/images/detailed/197/81Oe6JrjMCL.jpg",
        "https://cdn-amz.fadoglobal.io/images/I/91Q5dCjc2KL.jpg",
        "https://upload.wikimedia.org/wikipedia/vi/f/fb/Totto-chan_b%C3%AAn_c%E1%BB%ADa_s%E1%BB%95_%28s%C3%A1ch%29.jpg",
        "https://nhasachphuongnam.com/images/detailed/140/91yszMADa7L.jpg",
        "https://sachtruyen.net/covers/anna-karenina.ce9ef.cover.jpg",
        "https://kbimages1-a.akamaihd.net/fd843459-3520-49f9-a18e-907940466cf7/1200/1200/False/crime-and-punishment-270.jpg",
        "https://m.media-amazon.com/images/I/51d1ajFChmL.jpg",
        "https://vcdn-giaitri.vnecdn.net/2018/03/20/co-hai-con-meo-4908-1521549733.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/41Z6RTD4SZL.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/91BZkGGk-AL.jpg"
    ];

    const [spin, setSpin] = useState(0);
    const [nnn, setNnn] = useState(0);

    const handleSpin = () => {
        setSpin((spin) => spin+1);
        setNnn((nnn) => nnn+1);
    }

    useEffect(
        ()=> {
            const books = document.getElementsByClassName("book");
            var arr1 =[];
            var arr2 =[];
            for (let i=0; i<20; i++) {
                for (let j=nnn; j<nnn+20; j++) {
                    var x = 400 * (Math.cos(j * Math.PI/10 ));
                    var y = 150 * (Math.sin(j * Math.PI/10 ));
                    arr1.push(x);
                    arr2.push(y);
                }
                
                /* console.log(x);
                console.log(nnn+1); */
                /* books[i].transform = "translate("+ x.toString() + "px," + y.toString() + "px)"; */
                books[i].style.marginLeft = arr1[i].toString() +"px";
                books[i].style.marginTop = arr2[i].toString() +"px";
            }            
        },[spin,nnn]);

    return (
        <div className="books" onClick={handleSpin} >{spin}
            {books.map(
                (item,index)=> <img className="book" src={item} key={index} id={index} alt="book" />
            )}

            <div className="close" onClick={() => document.getElementsByClassName("books")[0].classList.toggle("hidding")} ></div>

        </div>
    );
}

export default Three;