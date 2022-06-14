import React from "react";
import scroll from '../images/arr.png';
import nexticon from '../images/next.png';
import '../styles/Four.css';
import { useState , useEffect} from "react";
import battleroyale from '../images/battleroyale.mp3';

const Four = () => {

    const movies = [
        'https://m.media-amazon.com/images/I/51iOANjtCQL._SY445_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMDc2MGYwYzAtNzE2Yi00YmU3LTkxMDUtODk2YjhiNDM5NDIyXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        'https://upload.wikimedia.org/wikipedia/en/e/e6/Dr._Strangelove_poster.jpg',
        'https://i.scdn.co/image/ab67616d0000b273c3c0ca7a4929d96f2f1c5774',
        'https://m.media-amazon.com/images/I/81ZOilPKzYL._SL1500_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_UY209_CR1,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BZGFkYzhmOWEtZTlkYi00ZTVkLWI5ZmQtY2IxOTkxMGU4ZWFmXkEyXkFqcGdeQXVyNjg5MjgxODQ@._V1_UY209_CR3,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UY209_CR4,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://flxt.tmsimg.com/assets/p17198_p_v12_an.jpg',
        'https://i1-vnexpress.vnecdn.net/2022/03/17/the-godfather-1647495803.jpg?w=330&h=495&q=100&dpr=1&fit=crop&s=TCzVG9srALYqau5YfoBkpA',
        'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR2,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX140_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
        'https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY209_CR3,0,140,209_AL_.jpg'
    ];

    const arrtake = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];

    const [mousedown, setMousedown] = useState(false);

    var x=0;
    var y=0;

    const handleMouseDownTake = (e) => {
        setMousedown(true);
        x = e.screenX -350;
        y = 0;
        
        document.getElementsByClassName('take')[0].style.transform = 'translate(' + x.toString() + 'px,' + y.toString() + 'px)';
    }

    const handleMouseMoveTake = (e) => {
        
        if (mousedown === true && e.screenX>350 && e.screenX <985) {
            document.getElementsByClassName('take')[0].style.transform = 'translate(' + (e.screenX-350).toString() + 'px,' + y.toString() + 'px)';
            document.getElementsByClassName('list-movies')[0].style.transform = 'translate(-' + 13*(e.screenX-350).toString() + 'px,0px)';
            
        }
    }

    const handleMouseOutTake = () => {
        setMousedown(false);
    }


    const [mmm, setMmm] = useState(350);
    const [count, setCount] = useState(0);

    const handleClickTake = (e) => {
        setMmm(e.screenX);
        setCount((count)=>count+1);
    }
    useEffect(()=>{
        document.getElementsByClassName('list-movies')[0].style.transform = 'translate(-' + 13*(mmm-350).toString() + 'px,0px)';

    },[mmm, count]); 

    return (
        <>
            <audio autoPlay>
                    <source src={battleroyale} type="audio/mp3" />
            </audio>

            <div className="move-take" onMouseDown={handleMouseDownTake} onMouseMove={handleMouseMoveTake} 
            onMouseLeave={handleMouseOutTake} onClick={handleClickTake}>
                {arrtake.map(
                    (item,index) => <img src={nexticon} id={item} key={index} alt="thor" />
                )}
                <img src={scroll} className="take" alt="thor"  />

            </div>

            <div className="movies" >{mmm}
                <ul className="list-movies">
                    {movies.map(
                        (item,index)=> <img className="movie" src={item} key={index} id={index} alt="movie" />
                    )}
                </ul>
            
            </div>
        </>
    );
}

export default Four;