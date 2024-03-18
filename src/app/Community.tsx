import React from 'react';
import { BsDot } from 'react-icons/bs';
import { FaRegCommentDots } from "react-icons/fa6";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";

export const Community = () => {
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
          <input type='text' className='w-full h-full text-xl my-2.5 text-white placeholder:text-white bg-transparent border-b-[0.5px] border-gray-600 outline-none border-none' placeholder="What's on your mind?"></input>
          <div className='w-full justify-between items-center flex'>
            <div></div>
            <div>
              <div className='w-full max-w-[200px] mt-5'>
                <button className='w-[85px] rounded-full p-3 text-lg text-center hover:bg-opacity-70 transition-duration-200 bg-primary text-white'>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
      <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4 border-gray-600'>
              <div>
                <div className='w-10 h-10 bg-slate-200 rounded-full mt-2'/>
              </div>
              <div>
                <div className='flex items-center space-x-1 p-2 mt-2 text-gray-600'>
                  <div>ProductPulse</div>
                  <div>@productpulse.com</div>
                  <div><BsDot /></div>
                  <div>1 hour ago</div>
                </div>
                <div className='text-white text-sm p-2 w-[570px] '>
                  <div>Should <span className='text-blue-400'>@zomato</span> come up with a support system for its handicap delivery partners? 

For this particular handicap, Zomato could  assign a delivery partners’ support agent who can call the customer on the delivery partner’s behalf.
<br /><br />
<span className='text-blue-400'>#suggestion #problem</span>
.</div>
                  <div className='bg-slate-400 mt-3 aspect-square w-full h-43 rounded-xl h-96'></div>
                </div>
                <div className='flex items-center justify-around space-x-2 mb-2 w-full text-white'>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer'><FaRegCommentDots /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><AiOutlineRetweet /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><BiLike /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><CiShare2 /></div>
                </div>
              </div>
            </div>
      </div>

      <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4 border-gray-600'>
              <div>
                <div className='w-10 h-10 bg-slate-200 rounded-full mt-2'/>
              </div>
              <div>
                <div className='flex items-center space-x-1 p-2 mt-2 text-gray-600'>
                  <div>ProductPulse</div>
                  <div>@productpulse.com</div>
                  <div><BsDot /></div>
                  <div>1 hour ago</div>
                </div>
                <div className='text-white text-sm p-2 w-[570px]'>
                  <div> <span className='text-blue-400'>@GooglePixel</span> It’s been 1 year that I am using Pixel 6a.<br /><br />
Here are the things that I like: <br />
Look and feel <br />
Performance <br />
Connectivity <br />
<br />
Here are the problems with this phone:
<br />
Poor battery Life <br />
LOW FPS <br />
Heating Issue <br />
<br />
<span className='text-blue-400'>#Feedback</span>
</div>
                  <div className='bg-slate-400 mt-3 aspect-square w-full h-43 rounded-xl h-96'></div>
                </div>
                <div className='flex items-center justify-around space-x-2 mb-2 w-full text-white'>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer'><FaRegCommentDots /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><AiOutlineRetweet /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><BiLike /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><CiShare2 /></div>
                </div>
              </div>
            </div>


            <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4 border-gray-600'>
              <div>
                <div className='w-10 h-10 bg-slate-200 rounded-full mt-2'/>
              </div>
              <div>
                <div className='flex items-center space-x-1 p-2 mt-2 text-gray-600'>
                  <div>ProductPulse</div>
                  <div>@productpulse.com</div>
                  <div><BsDot /></div>
                  <div>1 hour ago</div>
                </div>
                <div className='text-white text-sm p-2 w-[570px]'>
                  <div><span className='text-blue-400'>@twitter </span><br></br>
                  <br></br>
                    Why isn't there a built-in functionality to bold, underline, or italicize text in twitter?
                    Please include a feature so that users doesn’t have to rely on third party tools if they want to format the text.
                    <br></br>
                    <br></br>
                    <span className='text-blue-400'>#Suggestion</span>
                  </div>
                  <div className='bg-slate-400 mt-3 aspect-square w-full h-43 rounded-xl h-96'></div>
                </div>
                <div className='flex items-center justify-around space-x-2 mb-2 w-full text-white'>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer'><FaRegCommentDots /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><AiOutlineRetweet /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><BiLike /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><CiShare2 /></div>
                </div>
              </div>
            </div>


            <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4 border-gray-600'>
              <div>
                <div className='w-10 h-10 bg-slate-200 rounded-full mt-2'/>
              </div>
              <div>
                <div className='flex items-center space-x-1 p-2 mt-2 text-gray-600'>
                  <div>ProductPulse</div>
                  <div>@productpulse.com</div>
                  <div><BsDot /></div>
                  <div>1 hour ago</div>
                </div>
                <div className='text-white text-sm p-2 w-[570px]'>
                  <div>I wanted to gift a watch to my sister on her birthday who lives in USA.. There is no affordable option.
<br /><br />
<span className='text-blue-400'>#problem</span>

<br />
                  </div>
                  <div className='bg-slate-400 mt-3 aspect-square w-full h-43 rounded-xl h-96'></div>
                </div>
                <div className='flex items-center justify-around space-x-2 mb-2 w-full text-white'>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer'><FaRegCommentDots /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><AiOutlineRetweet /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><BiLike /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><CiShare2 /></div>
                </div>
              </div>
            </div>

            <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4 border-gray-600'>
              <div>
                <div className='w-10 h-10 bg-slate-200 rounded-full mt-2'/>
              </div>
              <div>
                <div className='flex items-center space-x-1 p-2 mt-2 text-gray-600'>
                  <div>ProductPulse</div>
                  <div>@productpulse.com</div>
                  <div><BsDot /></div>
                  <div>1 hour ago</div>
                </div>
                <div className='text-white text-sm p-2 w-[570px]'>
                  <div><span className='text-blue-400'>@whatsapp </span>introduce a feature for organising my similar chats in 1 folder. <br /><br />
                  <span className='text-blue-400'>#suggestion</span> <br />
                  </div>
                  <div className='bg-slate-400 mt-3 aspect-square h-43 rounded-xl h-96 w-full'></div>
                </div>
                <div className='flex items-center justify-around space-x-2 mb-2 w-full text-white'>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer'><FaRegCommentDots /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><AiOutlineRetweet /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><BiLike /></div>
                  <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer' ><CiShare2 /></div>
                </div>
              </div>
            </div>
    </main>
  );
};

export default Community;
