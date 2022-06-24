import React from "react";
import '../styles/Two.css';
import ReactAudioPlayer from 'react-audio-player';
import { useState } from "react";
import { useEffect } from "react";
import whereismymind from '../images/whereismymind.mp3';

const Two = () => {

    const keyspiano = [
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key01.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key02.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key03.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key04.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key05.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key06.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key07.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key08.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key09.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key10.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key11.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key12.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key13.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key14.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key15.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key16.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key17.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key18.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key19.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key20.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key21.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key22.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key23.mp3',
        'https://ia800106.us.archive.org/13/items/24-piano-keys/key24.mp3',
    ];

    const artists =[
        'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/3/8/886874/IU-Album-Moi-Lilac.png',
        'https://static.dw.com/image/52315108_303.jpg',
        'https://www.rollingstone.com/wp-content/uploads/2020/03/Radiohead.jpg?resize=1800,1200&w=1800',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ed_Sheeran_2013.jpg/640px-Ed_Sheeran_2013.jpg',
        'https://vcdn-giaitri.vnecdn.net/2021/03/25/taylor-swift-folklore-album-re-9066-6526-1616664410.jpg',
        'https://sohanews.sohacdn.com/thumb_w/660/2019/7/26/dscf1127-copy-1564134256543202115655.jpg',
        'https://avatar-ex-swe.nixcdn.com/singer/avatar/2017/01/18/7/5/c/0/1484704334598_600.jpg',
        'https://townsquare.media/site/295/files/2015/05/Queen-EMI.jpg?w=980&q=75',
        'https://i.dailymail.co.uk/i/pix/2017/04/08/16/3F129B0900000578-4393298-image-m-3_1491665916506.jpg',
        'https://avatar-ex-swe.nixcdn.com/singer/avatar/2016/01/25/4/1/1/7/1453717868442_600.jpg',
        'https://play-lh.googleusercontent.com/zql5xXqOboMyjFRj2MaIpNfwHvJOUBmmbff2s0L6FSx4KNQiP9SOn8QzN2cXqRM98S4',
        'https://media.altpress.com/uploads/2018/06/my_chemical_romance_black_parade.jpg',
        'https://thisis-images.scdn.co/37i9dQZF1DZ06evO3SIZe8-default.jpg',
        'https://media.vov.vn/sites/default/files/styles/large/public/2022-01/271415485_4477931799001006_4733913979933467365_n.png',
        'https://vtv1.mediacdn.vn/thumb_w/640/2022/5/24/blackpink-hoi-tu-tren-tap-chi-rolling-stone-khang-dinh-sap-comeback-44388fbb-1653359618374601076326.jpg',
        'https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s900-c-k-c0x00ffffff-no-rj',
        'https://pyxis.nymag.com/v1/imgs/8be/54f/8b6d431d1e0bc14022d87f0123a05e0d76-04-eminem-2.rsquare.w700.jpg',
        'https://cdnmedia.thethaovanhoa.vn/Upload/3uPkfvAxvuOpUQrmKeiDaA/files/2017/07/07/90/in%20the%20end%202.jpg',
        'https://billboardvn.vn/wp-content/uploads/2019/02/iKON-2018-cr-YG-Entertainment-billboard-1548-1.jpg',
        'https://vcdn-giaitri.vnecdn.net/2022/04/05/BIG-BANG-1153-1649139587.jpg',
        'https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/07/30/0/8/e/1/1596091500496_600.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/89/V%C5%A9_C%C3%A1t_T%C6%B0%E1%BB%9Dng_ELLE_Vietnam_2.jpg',
        'https://www.neste.com/sites/neste.com/files/release_attachments/neste_coldplay_collaboration_release_photo._photo_courtesy_of_coldplay_2.jpg'
    ];

    const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21];

    //get random array: (copy/past) ::))
    function randomArrayShuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }

    //random style:
    useEffect(()=>{
        for (let i=0; i<21; i++) {
            let x = i*100;
            document.getElementsByClassName('arr-musics')[i].style.transform='translateX(-'+x.toString()+'px)';
        }
    });

    return (
        <div className="allatone">
            <div className="table"></div>

            <div className="piano">js piano
                <div className="piano-notes">
                    {keyspiano.map(
                        (item, index) => <Keys mp3={item} key={index} xxx={index}/>
                    )}
                </div>
            </div>

            <div className="musics">
                {
                    numbers.map( (i,k) => <div className="arr-musics" id={k} key={k}>
                            {randomArrayShuffle(artists).map(
                                (item,index) => <img src={item} key={index} alt="artist" />
                            )}
                        </div>
                    )
                }
            </div>

            <ReactAudioPlayer src={whereismymind} autoPlay/>

            <div className="close" onClick={() => document.getElementsByClassName('allatone')[0].classList.toggle('hidding')} ></div>
        </div>
    );
}

/* Piano-Comment-Components: */

const Keys = (props) => {

    const [playaudio, setPlayaudio] = useState('');

    const handleClick = (e) => {
        
        setPlayaudio(props.mp3);
        //e.target.children[0].style.display='block';
        console.log(e.target.children[0]);
       
    }

    useEffect(
        () => {
            const ss = document.getElementsByClassName('note');
            for(let i=0; i<24; i++) {
                if (ss[i].id == 1 || ss[i].id == 3 ||ss[i].id == 6 ||ss[i].id == 8||ss[i].id == 10||ss[i].id == 13||
                    ss[i].id == 15||ss[i].id == 18||ss[i].id == 20||ss[i].id== 22) {
                    ss[i].classList.add('black-note');
                    ss[i+1].classList.add('after-black-note');
              }
            }
            
        });

    return (
        <div className="note" id={props.xxx} onClick={handleClick} >
           <Audio kkk={playaudio} onof={playaudio}  />
        </div>
    );
}

const Audio = (props) => {

    return (
        <>
            {
                props.onof == true ? <ReactAudioPlayer src={props.kkk} /> : 
                <ReactAudioPlayer src={props.kkk} autoPlay/>
            }
        </>
        
    );
}

export default Two;