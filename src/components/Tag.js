import React from 'react'
import {useState} from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  const [tag, setTag] =useState('car');
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //   setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     console.log(data);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }
    // useEffect( () => {
    //   fetchData();
    // },[] )
    
    const {gif, loading, fetchData} = useGif(tag);
   
    function changeHandler(event){
      setTag(event.target.value);
    }
  return (
   
    <div className='flex flex-col items-center gap-y-5 mt-[15px] bg-blue-500 w-1/2 pt-5 pb-5 rounded-lg border border-black '>
      <h1 className='text-2xl underline font-bold uppercase'> Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src= {gif} width="450"/>)
      }

      <input className='w-10/12 bg-white rounded-lg py-2 text-lg text-center' onChange={changeHandler}
        value={tag}
      />
      
      <button className='w-10/12 bg-white rounded-lg py-2 text-lg' onClick={()=> fetchData(tag)}>Generate</button>
    </div>
  )
}

export default Tag

