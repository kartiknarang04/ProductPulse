import ComposeTweet from "./server-components/compose-tweet";

import { getTweets } from "@/lib/supabase/queries";
import Tweet from "./client-components/tweet";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { SlLike } from "react-icons/sl";

const MainComponent = async () => {
    const supabaseClient = createServerComponentClient({
        cookies,
    });

    const { data: userData, error: userError } =
        await supabaseClient.auth.getUser();

    const res = await getTweets({ currentUserID: userData.user?.id });

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
            <p><span className="font-bold text-xl mb-2">ProductPulse</span> @ProductPulse.com 1 day ago</p>
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
            <div className="w-full">
                {res &&
                    res.map(({ likes, tweet, profile, hasLiked, replies }) => {
                        return (
                            <Tweet
                                key={tweet.id}
                                tweet={{
                                    tweetDetails: {
                                        ...tweet,
                                    },
                                    userProfile: {
                                        ...profile,
                                    },
                                }}
                                likesCount={likes.length}
                                currentUserId={userData.user?.id}
                                hasLiked={hasLiked}
                                repliesCount={replies.length}
                            />
                        );
                    })}
            </div>
        </main>
    );
};

export default MainComponent;