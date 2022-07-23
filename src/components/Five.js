
import evil from '../images/evil.mp3';
import '../styles/Five.css';
import RandomArrayShuffle from "./RandomArray";

const photos =[
    'https://pbs.twimg.com/profile_images/1150075184264691712/3VkPTord_400x400.png',
    'https://www.lunarmobiscuit.com/wp-content/uploads/2014/08/3045244218_b335c432fd_b.jpg',
    'https://i1.sndcdn.com/artworks-000636034663-pvn347-t500x500.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Heart-1.jpg',
    'https://i.pinimg.com/originals/16/1c/ca/161cca17bd8c423f845916ee0ec2b8f7.jpg',
    'https://media.baamboozle.com/uploads/images/410104/1636047346_447449.jpeg',
    'https://www.liveabout.com/thmb/pwO4o_iDrZRTmmhs7eOfD25Qoqw=/1500x1125/smart/filters:no_upscale()/pop-music-57bce3863df78c87634ea806.jpg',
    'https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706',
    'https://d1uhbq1za6lcid.cloudfront.net/1pj67kek0thqz_59915-aleksandr-ledogorov-310150-unsplash.1200w.tn.jpg',
    'https://pbs.twimg.com/profile_images/1369256323204980741/PYyS9WA6_400x400.jpg',
    'https://funix.edu.vn/wp-content/uploads/2021/01/Technology-trends-for-the-future-of-work-in-2020.jpg',
    'https://www.datocms-assets.com/46272/1633185629-1633185628203.jpg?fit=max&fm=jpg&w=1000',
    'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/321428_2200-1200x628.jpg',
    'https://lacasadepapel.withspotify.com/images/mobile-splash-bg.png',
    'https://static01.nyt.com/images/2019/02/05/world/05egg/15xp-egg-promo-superJumbo-v2.jpg',
    'https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/2:2/w_1707,h_1708,c_limit/Baker-FightClub.jpg',
    'https://m.media-amazon.com/images/M/MV5BNDBiODAyNjQtYzkyYi00OTdjLTgyZDMtOTRlZTM0OWZhMmE2XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_QL75_UX500_CR0,47,500,281_.jpg',
    'https://bloganchoi.com/wp-content/uploads/2021/12/noi-dung-battle-royale-tro-choi-sinh-tu.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTUwNzY4ODY3OV5BMl5BanBnXkFtZTgwNDc4MzA4MTI@._V1_.jpg',
    'https://cdn.vox-cdn.com/thumbor/RWW3gFgz1zWHRBCNgG6XHTWnvWs=/0x0:1089x1600/1200x800/filters:focal(458x713:632x887)/cdn.vox-cdn.com/uploads/chorus_image/image/62788940/Catcher-in-the-rye-2.0.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Great_Gatsby_cover_1925_%281%29.jpg/800px-The_Great_Gatsby_cover_1925_%281%29.jpg',
    'https://blog.streetwriters.co/media/posts/70/murakami.jpg',
    'https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg',
    'https://game8.vn/media/202111/images/bao/anniversaryposter2019.jpg',
    'https://vcdn-giaitri.vnecdn.net/2022/04/29/Call-me-by-your-name-canh-bien-4403-8665-1651198195.jpg',
    'http://phancaohoainam.com/wp-content/uploads/2022/02/drive-my-car.jpg',
    'https://cdn2.thelineofbestfit.com/images/made/images/remote/https_cdn2.thelineofbestfit.com/media/2014/billie_eilish_ocean_still_1290_726.jpg'
];


const Five = () => {

    const thh = () => {
        for(let i=0; i<27; i++) {
            const x = Math.round(Math.random()*600).toString();
            const y = Math.round(Math.random()*50).toString();
            const newstyless = {
                height: x +'px',
                width: x +'px',
                transform: 'rotate(' + x + 'deg) translate(' + x + 'px, ' + x + 'px) skew(' + x + 'deg)',
                borderRadius: y +'px'
            };
            document.getElementsByClassName('random-stuff')[i].style.width = newstyless.width;
            document.getElementsByClassName('random-stuff')[i].style.height = newstyless.height;
            document.getElementsByClassName('random-stuff')[i].style.transform = newstyless.transform;
            document.getElementsByClassName('random-stuff')[i].style.borderRadius = newstyless.borderRadius;
        }
        
    }
   
    return (
        <div className="the-last" onMouseMove={thh} >
            {RandomArrayShuffle(photos).map(
                (item,index)=> <img className="random-stuff" src={item} key={index} id={index} alt='dsfds' />
            )}
            
            <audio autoPlay>
                    <source src={evil} type="audio/mp3" />
            </audio>   

            <div className="close" onClick={() => document.getElementsByClassName('the-last')[0].style.display="none"} ></div>
        </div>
    );
}

export default Five;