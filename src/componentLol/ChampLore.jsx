import './components.css';
import { ApiLolContext } from '../contexts/ApiLolContext';
import React ,{useContext, useState} from 'react';

export default function ChampLore({searchTerm , format}){
    const lolChampsList = useContext(ApiLolContext);
    const [dataLore , setDataLore] = useState([]);
    const filteredChamps = lolChampsList.filter(({id}) => format(id).includes(searchTerm));
    const baseAvatarUrl = 'https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion';
    const [buttonOn , setButtonOn] = useState(false);
    const [favorites , setFavorite] = useState([]);

    const SelectedChampLore = ({id , blurb , tags , name , title , image}) => {
        const LolOficialUrl = `https://universe.leagueoflegends.com/pt_BR/champion/`;
        const ChampImgUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/`;

        if(!(id , blurb , tags , name , title , image)){
            return null;
        }
        const handleFavorite = () => {
            const newFavorite = (
                <>
                    <div  
                        className='Champion-cardFav'
                        onClick={()=>{
                                handleClick({id,title,name,blurb,image,tags})
                                scrollTarget()
                            }}
                            >
                            <div>
                                <img src= {`${baseAvatarUrl}/${image.full}`}
                                    alt={id}
                                    loading='lazy'>
                                </img>
                                    <h2>{name}</h2>
                            </div>
                    </div>
                </>
            )
            const newFavorites = [...favorites , newFavorite];
            const nextElement = newFavorite.props.children.props.children.props.children[0].props.alt;
            if(favorites.length === 0){
                setFavorite(newFavorites)
            }
            else{
                 const firstElement = favorites[favorites.length-1].props.children.props.children.props.children[0].props.alt;
                if(firstElement === nextElement){
                    window.alert("Campeão já está na lista!")
                } else {
                    setFavorite(newFavorites)
                }
             }
        }

        return(
            <div className='SelectedChamp' id='targetScroll'>     
                <img className='back'
                    src={`${ChampImgUrl}${id}_0.jpg`} 
                    />
                <div className='champDetails'>
                    <h2>{name} - {title[0].toUpperCase()+title.slice(1)}</h2> 
                        <img 
                            src={`${ChampImgUrl}${id}_0.jpg`} 
                            alt={name} 
                            loading='lazy'
                            draggable = {false}
                            onClick={handleFavorite}
                        />
                        <span className='lore'>
                                <h2>
                                    {blurb}
                                </h2>
                                <span style={{ fontWeight: 900 , color : "red" }}>clique na imagem para adicionar o campeão aos favoritos</span>
                                {tags.length > 1 ? 
                                <h2>{`Classe: \n ${tags[0]} - ${tags[1]}`}</h2> :
                                <h2>Classe: {tags[0]}</h2> 
                            }
                                <button>
                                    <a target='_blank' href={`${LolOficialUrl}${id}/`}
                                    >Continuação</a>
                                </button>
                        </span>
                </div> 
            </div>
        )
    }
    const  FinishDataChamp = ({Champs}) => {

        function scrollTarget(){
            setTimeout(() => {
                document.getElementById('targetScroll').scrollIntoView();
            },200)
            return clearTimeout(scrollTarget());
        }
        const handleClick = (ChampInfo) => {setDataLore(ChampInfo)};
            return ( 
                <React.Fragment>
                    {searchTerm && 
                    <React.Fragment>
                        {Champs.length > 0  && Champs.map(({id , title , name , blurb , image, tags}, i) => {
                            return (
                            <div  
                                key={i} 
                                className='Champion-card'
                                onClick={()=>{
                                    handleClick({id,title,name,blurb,image ,tags})
                                    scrollTarget()
                                }}
                            >
                                <div>
                                    <img src= {`${baseAvatarUrl}/${image.full}`}
                                        alt={id}
                                        loading='lazy'>
                                    </img>
                                        <h2>{name}</h2>
                                </div>
                            </div>
                                )       
                            }
                        )}   
                    </React.Fragment>
                    }
                </React.Fragment>
            )
        }

    const ListFavChamp = () => {
            const handleButton = (e) => {
                e.preventDefault();
                setButtonOn(!buttonOn);
                setTimeout(() => {
                    document.getElementById('listFav').scrollIntoView();
                },100)
            }
            let heigeth;
            buttonOn? heigeth = 'auto' : heigeth = '0rem';
            return (
                <div>
                    <button id='listFav' className='buttonFav' onClick={handleButton}>Favoritos</button>
                            <ul style={{height : heigeth}} className='FavChampsList'>
                                {favorites.length > 0 ? <li  className='listFavItem'>
                                    {favorites.map((item , i)=>{
                                        return (
                                            <React.Fragment key={i}>
                                                {item}
                                            </React.Fragment>
                                                
                                        )
                                    })} 
                                </li> : <li className='ListFavError'>Lista vazia</li>}
                            </ul>
                            
                    
                </div>
                    
            )
        }
        return(
            <React.Fragment>
                    <div className='ChampSelection'>
                        <FinishDataChamp Champs={filteredChamps}/> 
                    </div>
                    <div>
                        <ListFavChamp/>
                        <SelectedChampLore {...dataLore}/>
                    </div>
            </React.Fragment>
            )
    
    }
    