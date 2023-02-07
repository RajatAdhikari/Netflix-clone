import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' 
import Appbar from  './components/Appbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Cards from './components/Cards';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(  
    <>
        <Appbar/>

    <h1 >TOP NETFLIX MOVIES FOR FREE</h1>

        <ul className="cards">
        <Cards name='The Vampire Diaries'  link="https://flxt.tmsimg.com/assets/p8182631_b1t_v9_aa.jpg"  />
        <Cards name=' F R I E N D S '  link="https://flxt.tmsimg.com/assets/p183931_b_v8_ac.jpg"  />
        <Cards name='M A N I F E S T'  link="https://flxt.tmsimg.com/assets/p17602726_b_v13_ab.jpg"/>
        <Cards name='1899' link="https://m.media-amazon.com/images/M/MV5BMTU1N2I5OTgtNDE2MS00ZTdmLWJlODktNDMwMGVmNzY5NmUxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"/>
        <Cards name='D A R K' link="https://assets.gadgets360cdn.com/pricee/assets/product/202202/MV5BZmY2YzU4NDktODIxYi00YWIyLWIz_1644909573.jpg"/>
        <Cards name='Breaking Bad' link="https://www.themoviedb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"/>
        <Cards name='PEAKY BLINDERS' link="https://flxt.tmsimg.com/assets/p10182728_b_v13_bd.jpg"/>
        <Cards name='Never Have I Ever'  link="https://m.media-amazon.com/images/M/MV5BZTY5ZmMwMDQtMmYxYy00ZTYyLWE5MDItZGUwM2I5NTAwOGUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"/>
        <Cards name='Emily In Paris' link="https://akns-images.eonline.com/eol_images/Entire_Site/20221129/rs_1200x1200-221229111502-1200-emily-in-paris.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top"  />
        <Cards name=' Ginny & Georgia '  link="https://resizing.flixster.com/bOEHoxe8FnTy1QNnpUliaxj6gKE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZDZkZTdjNWYtMTJmMy00ZjJjLWE5MDQtYzdkNDA2ZjUwNzQzLmpwZw=="  />
        <Cards name='Delhi Crime'  link="https://m.media-amazon.com/images/M/MV5BMDc4MGU3ZmItODRlYi00MTYzLWFkYzAtOTIxYzMzZjRhYWQ5XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg"  />
        <Cards name='Fate: The Winx Saga'  link="https://resizing.flixster.com/ctMqrfzTFaDm2sbYPS4KSJgjp2Y=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvOWUyZGViZDgtNmNhOS00MTJiLTk5YTAtOGUwNDQ5NWRkOTVhLmpwZw=="  />
        <Cards name='Wednesday'  link="https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"  />
        <Cards name='Money Heist'  link="https://m.media-amazon.com/images/M/MV5BMGUyOTFkMzUtOTQ5ZC00YjMzLWIyMGMtOWU2M2VkMDMxZTRjXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg"  />
        <Cards name='Squid Game'  link="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/11-squidgame-unit-02a-1632946316.jpg"  />
        <Cards name='Lupin'  link="https://www.themoviedb.org/t/p/w500/sOUWRai0215iUSMackrZx3Y1j05.jpg"  />
        <Cards name='mismatched'  link="https://m.media-amazon.com/images/M/MV5BOTUzMTMzNTgtNmI5NS00ZTI1LTgzMjYtZTFkZWZkYTE0MWMyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"  />
        <Cards name=' Kota Factory'  link="https://m.media-amazon.com/images/M/MV5BZGZiMjU2ZjUtZjQzNi00NzlkLWFhNTQtOGVjNTJmN2ExY2E2XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg"  />
        <Cards name=' 13 Reason Why'  link="https://m.media-amazon.com/images/M/MV5BYmRhZjkyMjEtNjRkMS00MDQ0LTg2NGMtMTQ3ZjE0NjJmMjM2L2ltYWdlXkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_.jpg"  />
        <Cards name=' Locke & Key'  link="https://flxt.tmsimg.com/assets/p17699282_b_v13_ab.jpg"  />
        <Cards name=' Alice in Borderland'  link="https://m.media-amazon.com/images/M/MV5BZmUwMGI4M2QtYmRlYy00NDQ1LThjNDAtYTI4NDNiNDg5MDViXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg"  />
        <Cards name=' Outlander'  link="https://www.usmagazine.com/wp-content/uploads/2022/12/Outlander-Season-7-Sam-Heughan-Caitriona-Balfe.jpg?quality=86&strip=all"  />
        <Cards name=' Elite'  link="https://m.media-amazon.com/images/M/MV5BYmU5N2YzYjQtM2Q4Yi00NWY4LWI5NDQtMzE4OTlhY2Q5NmJlXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_.jpg"  />
        <Cards name=' Fauda'  link="https://flxt.tmsimg.com/assets/p13234940_b_v13_aa.jpg"  />
        <Cards name=' B O D Y G U A R D'  link="https://m.media-amazon.com/images/M/MV5BYWU4NjZhODYtZDY5NS00ZjM1LTkzZTctZjQ3MGIyMTQ0YzRkXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg"  />
        <Cards name=' DYNASTY'  link="https://m.media-amazon.com/images/M/MV5BMjA1N2Y0MGItNWJlNy00Yzg3LWE3MmYtODRmYmM5NjZlNDc4XkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_.jpg"  />
        <Cards name=' Travelers'  link="https://m.media-amazon.com/images/M/MV5BMjUzOTQwOTg1MF5BMl5BanBnXkFtZTgwNzE4NzQ3NjM@._V1_.jpg"  />
        <Cards name=' Dark Desire'  link="https://m.media-amazon.com/images/M/MV5BODUxNmEzZmMtNGY0NS00MGY4LWEzZDQtMjQ2Y2I4ZDI3YThiXkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_.jpg"  />
        <Cards name=' Locke & Key'  link="https://flxt.tmsimg.com/assets/p17699282_b_v13_ab.jpg"  />
        <Cards name='mismatched'  link="https://m.media-amazon.com/images/M/MV5BOTUzMTMzNTgtNmI5NS00ZTI1LTgzMjYtZTFkZWZkYTE0MWMyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"  />
        <Cards name='Emily In Paris' link="https://akns-images.eonline.com/eol_images/Entire_Site/20221129/rs_1200x1200-221229111502-1200-emily-in-paris.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top"  />
        <Cards name='Never Have I Ever'  link="https://m.media-amazon.com/images/M/MV5BZTY5ZmMwMDQtMmYxYy00ZTYyLWE5MDItZGUwM2I5NTAwOGUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"/>
        <Cards name='M A N I F E S T'  link="https://flxt.tmsimg.com/assets/p17602726_b_v13_ab.jpg"/>
        <Cards name='The Vampire Diaries'  link="https://flxt.tmsimg.com/assets/p8182631_b1t_v9_aa.jpg"  />
        <Cards name='Breaking Bad' link="https://www.themoviedb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"/>
        <Cards name='PEAKY BLINDERS' link="https://flxt.tmsimg.com/assets/p10182728_b_v13_bd.jpg"/>
        <Cards name=' Locke & Key'  link="https://flxt.tmsimg.com/assets/p17699282_b_v13_ab.jpg"  />
        <Cards name=' DYNASTY'  link="https://m.media-amazon.com/images/M/MV5BMjA1N2Y0MGItNWJlNy00Yzg3LWE3MmYtODRmYmM5NjZlNDc4XkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_.jpg"  />
        <Cards name=' Ginny & Georgia '  link="https://resizing.flixster.com/bOEHoxe8FnTy1QNnpUliaxj6gKE=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZDZkZTdjNWYtMTJmMy00ZjJjLWE5MDQtYzdkNDA2ZjUwNzQzLmpwZw=="  />
        <Cards name='Delhi Crime'  link="https://m.media-amazon.com/images/M/MV5BMDc4MGU3ZmItODRlYi00MTYzLWFkYzAtOTIxYzMzZjRhYWQ5XkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg"  />
        <Cards name='Wednesday'  link="https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"  />
        <Cards name='Squid Game'  link="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/11-squidgame-unit-02a-1632946316.jpg"  />
        <Cards name='Never Have I Ever'  link="https://m.media-amazon.com/images/M/MV5BZTY5ZmMwMDQtMmYxYy00ZTYyLWE5MDItZGUwM2I5NTAwOGUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"/>
        <Cards name='Money Heist'  link="https://m.media-amazon.com/images/M/MV5BMGUyOTFkMzUtOTQ5ZC00YjMzLWIyMGMtOWU2M2VkMDMxZTRjXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg"  />
        </ul>   
        </>
        );

            
           
                  
           
            


