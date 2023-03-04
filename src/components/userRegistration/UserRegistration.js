import React, { useState } from 'react'
import './UserRegistration.scss';
import axios from 'axios';
import AvatarModal from './AvatarModal';

export default function UserRegistration({ setShowLogin }) {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [avatar, setAvatar] = useState("");
    let [bio, setBio] = useState("");
    let [country, setCountry] = useState("");
    let [totalCrown, setTotalCrown] = useState(0);
    let [showModal, setShowModal] = useState(false)
    let [avatarName, setAvatarName] = useState("");
    const avatarList = [
        {
            id: 0,
            avatarName: "Eevee",
            category: "Pokemon - Eevee",
            avatarAddress: "https://i.etsystatic.com/17163755/r/il/725138/2206699948/il_570xN.2206699948_kwnk.jpg",
        },
        {
            id: 1,
            avatarName: "Marshall Erikson",
            category: "HIMYM - Marshall",
            avatarAddress: "https://cdn3.whatculture.com/images/2018/11/bfc0b6e8ddef1ab0-600x338.jpg"
        },
        {
            id: 2,
            avatarName: "My Name Jeff",
            category: "Meme - Jeff",
            avatarAddress: "https://i.kym-cdn.com/entries/icons/original/000/016/894/mynameehhjeff.jpg"
        },
        {
            id: 3,
            avatarName: "Pink Dragon",
            category: "Picture - Dragon",
            avatarAddress: "https://cdn.dribbble.com/users/375867/screenshots/1507158/media/069147d6fcc53ffccdbbac0bd494d152.png?compress=1&resize=400x300&vertical=top"
        },
        {
            id: 4,
            avatarName: "Demon Slayer",
            category: "Anime - Demon",
            avatarAddress: "https://s3-ap-northeast-1.amazonaws.com/psh-ex-ftnikkei-3937bb4/images/5/3/5/8/28668535-1-eng-GB/%E3%82%BD%E3%83%8B%E3%83%BC%E4%B8%8A%EF%BC%89%E8%BF%BD%E5%8A%A0%E3%80%80%E9%AC%BC%E6%BB%85%E3%81%AE%E5%88%8320200805183428557_Data.jpg"
        },
        {
            id: 5,
            avatarName: "Anya",
            category: "Anime - Spy",
            avatarAddress: "https://as01.epimg.net/meristation_en/imagenes/2022/11/03/news/1667494322_665126_1667494405_noticia_normal.jpg"
        },
        {
            id: 6,
            avatarName: "Meliodas",
            category: "Anime - Seven",
            avatarAddress: "https://www.looper.com/img/gallery/the-untold-truth-of-netflixs-the-seven-deadly-sins/intro-1630608821.jpg"
        },
        {
            id: 7,
            avatarName: "Witch King of Angmar",
            category: "LOTR - Naz",
            avatarAddress: "https://pbs.twimg.com/media/ErjSa9PWMAM2kdS.jpg:large"
        },
        {
            id: 8,
            avatarName: "Torbjorn Lindholm",
            category: "Overwatch - Torb",
            avatarAddress: "https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2018/10/04/3f2ed3db-304c-44d9-bfaa-658b6cb2f0ec/torbjorn-new-rework"
        },
        {
            id: 9,
            avatarName: "Darth Vader",
            category: "StarWars - Vader",
            avatarAddress: "https://cdn.vox-cdn.com/thumbor/h2ExWdFNSLueoj5DPJkMm2FtIoM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23545250/nso_wolf_trap_1600_x_900_star_wars_empire_strikes_back.jpg"
        },
        {
            id: 10,
            avatarName: "Hermione Granger",
            category: "HP - Her",
            avatarAddress: "https://courageousnerd.com/wp-content/uploads/2020/04/emmawatsonhermione.jpg"
        },
        {
            id: 11,
            avatarName: "Jack Sparrow",
            category: "Pirates - Jack",
            avatarAddress: "https://www.usmagazine.com/wp-content/uploads/2022/08/Everything-We-Know-So-Far-About-Pirates-Caribbean-6-0001.jpg?quality=55&strip=all"
        },
        {
            id: 12,
            avatarName: "Luisa Encanto",
            category: "Disney - Encanto",
            avatarAddress: "https://www.sheknows.com/wp-content/uploads/2022/01/MCDENCA_WD019.jpg?w=695&h=391&crop=1"
        },
        {
            id: 13,
            avatarName: "Nick Fury",
            category: "Marvel - Nick",
            avatarAddress: "https://images.indianexpress.com/2019/03/samuel-l-jackson-759-1.jpg"
        },
        {
            id: 14,
            avatarName: "Mulan",
            category: "Disney - Mulan",
            avatarAddress: "https://api.time.com/wp-content/uploads/2016/10/mulan.jpg"
        },
        {
            id: 15,
            avatarName: "Master Chief",
            category: "Halo - MC",
            avatarAddress: "https://cdn1.dotesports.com/wp-content/uploads/2021/08/09111246/MasterChief.jpg"
        },
        {
            id: 16,
            avatarName: "Ted Mosby",
            category: "HIMYM - Ted",
            avatarAddress: "https://www.looper.com/img/gallery/the-ted-moment-in-how-i-met-your-mother-that-didnt-age-well/intro-1643255353.jpg"
        },
        {
            id: 17,
            avatarName: "Barney Stinson",
            category: "HIMYM - Barney",
            avatarAddress: "https://im.idiva.com/photogallery/2013/Apr/barney_stinson_quotes_weird.jpg"
        },
        {
            id: 18,
            avatarName: "Lilly Aldrin",
            category: "HIMYM - Lilly",
            avatarAddress: "https://i.pinimg.com/736x/b8/ff/11/b8ff11de120d0899c7195d3132268598--lily-aldrin-lilies.jpg"
        },
        {
            id: 19,
            avatarName: "Robin Sparkles",
            category: "HIMYM - Robin",
            avatarAddress: "https://akns-images.eonline.com/eol_images/Entire_Site/202047/rs_600x600-200507160011-600-cobie-smulders-how-i-met-your-mother.ct.050720.jpg"
        },
        {
            id: 20,
            avatarName: "Genji Shimada",
            category: "Overwatch - Genji",
            avatarAddress: "https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltb983c9c07c5e404e/637da16446a48b0e063e4a95/genji-00.jpg"
        },
        {
            id: 21,
            avatarName: "Mercy",
            category: "Overwatch - Mercy",
            avatarAddress: "https://editors.dexerto.com/wp-content/uploads/2021/04/13/Pink-mercy.jpeg"
        },
        {
            id: 22,
            avatarName: "D.Va",
            category: "Overwatch - Dva",
            avatarAddress: "https://hard-drive.net/wp-content/uploads/2022/10/dva-featured.jpg"
        },
        {
            id: 23,
            avatarName: "Hanzo",
            category: "Overwatch - Hanzo",
            avatarAddress: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/10/Overwatch-2-Hanzo-1.jpg"
        },
    ]
    const countries = [
    {
        id: 0,
        countryName: " Choose Your Country",
        countryImage: "N/A",
    }, 
    {
        id: 1,
        countryName: "United States",
        countryImage: "https://nosopatches.com/wp-content/uploads/usa-flag.png",
    }, 
    {
        id: 2,
        countryName: "Canada",
        countryImage: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/canada-flag-sticker-5804-21543-550x550.png"
    }, 
    {
        id: 3,
        countryName: "Mexico",
        countryImage: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/mexico-flag-sticker-5879-21415-550x550.png",
    }, 
    {
        id: 4,
        countryName: "Japan",
        countryImage: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/japan-flag-sticker-5855-21490-550x550.png",
    },
    {
        id: 5,
        countryName: "Germany",
        countryImage: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/germany-flag-sticker-5833-21502-550x550.png",
    },
    {
        id: 6,
        countryName: "United Kingdom",
        countryImage: "https://www.flaginstitute.org/wp/wp-content/uploads/2012/10/UK-Union-Flag.png",
    },
    {
        id: 7,
        countryName: "Australia",
        countryImage: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/australia-flag-sticker-5783-21489-550x550.png",
    },
    {
        id: 8,
        countryName: "France",
        countryImage: "https://freesvg.org/img/frenchflagframed.png",
    },
    {
        id: 9,
        countryName: "Italy",
        countryImage: "https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/italy-flag-sticker-5853-21487-550x550.png",
    },
    {
        id: 10,
        countryName: "Spain",
        countryImage: "https://www.iconarchive.com/download/i109128/wikipedia/flags/ES-Spain-Flag.1024.png",
    }
    ]
    countries.sort(function(a, b) {
        const textA = a.countryName.toUpperCase();
        const textB = b.countryName.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    avatarList.sort(function(a, b) {
        const textA = a.category.toUpperCase();
        const textB = b.category.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    const registerUser = () => {
        if(process.env.NODE_ENV === 'production') {
            axios.post(`${process.env.REACT_APP_PROD}/auth`, {
                username: username,
                password: password,
                avatar: avatar,
                bio: bio,
                country: country,
                totalCrown: totalCrown
            })
            .then(() => { 
                setTotalCrown(0)
                setShowLogin(true)
            })
        } else {
            axios.post(`${process.env.REACT_APP_DEV}/auth`, {
                username: username,
                password: password,
                avatar: avatar,
                bio: bio,
                country: country,
                totalCrown: totalCrown
            })
            .then(() => { 
                setTotalCrown(0)
                setShowLogin(true)
            })
        }
        
    }
    
    
    return (
            <div className='auth-container'>
                { showModal === false ? 
                <div>
                    <div className='auth-form'>
                        <div className='reg-input-container'>
                            <label>Choose Avatar:</label>
                            {avatarName === "" ? <h2>Avatar: None</h2> : <h2>Avatar: {avatarName}</h2>}
                            <button onClick={() => { setShowModal(true)}} className='avatar-auth-btn'>
                                Avatar Select...
                            </button>
                        </div>
                        <div className='reg-input-container'>
                            <label>Username:</label>
                            <input 
                            autoComplete='off'
                            type='text'
                            className='auth-input'
                            onChange={(e) => {setUsername(e.target.value)}}
                            placeholder='Ex: {John123..}'
                            />
                        </div>
                        <div className='reg-input-container'>
                            <label>Password:</label>
                            <input 
                            autoComplete='off'
                            type='password'
                            className='auth-input'
                            onChange={(e) => {setPassword(e.target.value)}}
                            placeholder='Ex: {Password123..}'
                            />
                        </div>
                        
                        <div className='reg-input-container'>
                            <label>Bio:</label>
                            <textarea 
                            rows={7}
                            type='text'
                            className='auth-input'
                            onChange={(e) => {setBio(e.target.value)}}
                            placeholder='Ex: {I enjoy reading..}'
                            />
                        </div>
                        <div className='reg-input-container'>
                            <label>Select Country:</label>
                            <select 
                            name='country'
                            className='create-user-select'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            >
                                {countries.map((country) => (
                                    <option
                                    key={country.id}
                                    className='create-user-option'
                                    value={country.countryImage}>
                                        {country.countryName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div className='register-account-btn-container'>
                            <button onClick={registerUser} className='auth-btn'>
                                Register Your Account
                            </button>
                        </div>
                    </div>
                    <div className='to-btn-container'>
                        <h1>Already have an account?</h1>
                        <button onClick={() => setShowLogin(true)} className='auth-btn'>
                            Login Account
                        </button>
                    </div>
                </div>
                :
                <AvatarModal avatarName={avatarName} setAvatarName={setAvatarName} setShowModal={setShowModal} showModal={showModal} setAvatar={setAvatar} avatar={avatar} avatarList={avatarList}/>
                }
                
            </div>
            
        
        
    )
}