"use client"
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { useEffect, useState } from "react";
import app from "../firebase";
import {getFirestore, collection, addDoc, Firestore, getDocs} from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'

const MainComponent = () => {

  const [content,setContent] = useState("");
  const [tag,setTag] = useState("");
  const [pic,setPic] = useState("");

  const [posts,setPosts] = useState([]);
  const [URL,setURL] = useState(null);
  

  const FireStore = getFirestore(app);
  const storage = getStorage(app);

  async function put_data(c,t,p) {
    const imgRef = ref(storage,`uploads/images/${Date.now()}--${p.name}`);
    const uploadResult = await uploadBytes(imgRef, p);
    return await addDoc(collection(FireStore,'posts'),{
      content:c,
      tag:t,
      picURL: uploadResult.ref.fullPath 
    })

  }

    const list_posts = () =>{
      return getDocs(collection(FireStore,"posts"))
    }

    useEffect(()=>{
      getDocs(collection(FireStore,"posts")).then((post)=>setPosts(post.docs));
    },[])

    const getImgURL = async (path) => {
  const url = await getDownloadURL(ref(storage, path));
  return url;
};

// Modify your useEffect to fetch image URLs
useEffect(() => {
  const fetchImageURLs = async () => {
    const imageURLs = await Promise.all(
      posts.map(async (post) => {
        const url = await getImgURL(post.data().picURL);
        return url;
      })
    );
    setURL(imageURLs);
  };

  fetchImageURLs();
}, [posts]);




    return (
        <main className='ml-[275px] flex w-[660px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
      <h1 className='text-2xl font-bold p-6 text-center text-white'>Community</h1> 
      <div className='flex justify-around text-xl mb-2 underline decoration-primary underline-offset-[4px] decoration-[4px]'>
        <h2 className='hover:bg-white/10 last:rounded-b-xl p-2 transition duration-200 text-white'>For You</h2>
        <h2 className='hover:bg-white/10 last:rounded-b-xl p-2 transition duration-200 text-white'>Following</h2>
      </div>
      <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 relative'>
        <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
        <div className='flex flex-col w-full h-full'>
          <input type='text' className='w-full h-full text-xl my-2.5 text-white placeholder:text-white bg-transparent border-b-[0.5px] border-gray-600 outline-none border-none' placeholder="What's on your mind?" onChange={(e)=>{setContent(e.target.value)}} value={content}></input>
          <input type='text' className='w-1/2 h-1/2 my-2.5 text-white placeholder:text-white bg-transparent border-b-[0.5px] border-gray-600 outline-none border-none' placeholder="Tag" onChange={(e)=>{setTag(e.target.value)}} value={tag}></input>
          <div className='w-full justify-between items-center flex'>
          <input className="flex h-9 w-[230px] rounded-md border border-input bg-background px-3 py-1 mt-5 text-sm text-center shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="picture" name="picture" type="file" onChange={(e)=>setPic(e.target.files[0])}></input>
            <div></div>
            <div>
              <div className='w-full max-w-[200px] mt-5'>
                <button className='w-[85px] rounded-full p-3 text-lg text-center hover:bg-opacity-70 transition-duration-200 bg-primary text-white' onClick={()=>{put_data(content,tag,pic)}}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>




      {posts.map((post,index) => 
        
        
        <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 h-[410px] relative'>
        <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
        <div className='flex flex-col w-full h-full'>
          <div className="text-white text-sm ml-2">
            <p><span className="font-bold text-xl mb-2">ProductPulse</span> @ProductPulse.com 1 day ago</p>
            <p><br /><span className=" mt-2 text-lg text-blue-300">{post.data().content.substring(0, post.data().content.indexOf(' '))} </span>{post.data().content.substring(post.data().content.indexOf(' '), post.data().content.length)}
<br /><span className=" mt-2 text-lg text-blue-300">{post.data().tag} </span><br /></p>
            <div className="w-full mt-2 h-[210px] bg-cover bg-center bg-no-repeat flex-none"><img src={URL[index]} className="h-[210px] mb-5"></img></div>
          </div>
          <div className="flex space-x-40 ml-20 mt-3">
            <div className="text-white"><FaRegComment /></div>
            <div className="text-white"><AiOutlineRetweet /></div>
            <div className="text-white"><SlLike /></div>
            </div>
        </div>
        </div>

        
        )}





      <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 h-[410px] relative'>
        <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
        <div className='flex flex-col w-full h-full'>
          <div className="text-white text-sm ml-2">
            <p><span className="font-bold text-xl mb-2">ProductPulse</span> @ProductPulse.com 1 day ago</p>
            <p><br /><span className=" mt-2 text-lg text-blue-300">@twitter</span> Why isn't there a built-in functionality to bold, underline, or italicize text in twitter?
Please include a feature so that users doesn’t have to rely on third party tools if they want to format the text.
<br /><span className=" mt-2 text-lg text-blue-300">#Suggestion </span><br /></p>
            <div className='w-full mt-2 h-[210px] bg-slate-400 rounded flex-none'></div>
          </div>
          <div className="flex space-x-40 ml-20 mt-3">
            <div className="text-white"><FaRegComment /></div>
            <div className="text-white"><AiOutlineRetweet /></div>
            <div className="text-white"><SlLike /></div>
            </div>
        </div>
        </div>

        <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 h-[410px] relative'>
        <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
        <div className='flex flex-col w-full h-full'>
        <div className="text-white text-sm ml-2">
            <p><span className="font-bold text-xl mb-2">Kartik Narang</span> @kartiknarang@gmail.com 1 day ago</p>
            <p><br />I want to send a watch as a gift to my sister who is currently in USA but it is very expensive. Any soultions?
<br /><span className=" mt-2 text-lg text-blue-300">#Problem</span><br /></p>
            <div className='w-full mt-2 h-[210px] bg-slate-400 rounded flex-none'></div>
          </div>
          <div className="flex space-x-40 ml-20 mt-3">
            <div className="text-white"><FaRegComment /></div>
            <div className="text-white"><AiOutlineRetweet /></div>
            <div className="text-white"><SlLike /></div>
            </div>
        </div>
        </div>
        </main>
    );
};

export default MainComponent;