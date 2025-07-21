import { ShareIcon } from "../icons/ShareIcon";

export const Card = (props) => {
    const {title,type,link}=props;
    return (
    <div className="bg-white rounded-md p-4 outline-slate-200 border max-w-72 border-gray-200 min-h-48 min-w-72">
      <div className="flex justify-between items-center align-middle">
        <div className="flex items-center text-md">
          <div className="text-gray-500 pr-2">
            <ShareIcon size="md" />
          </div>
          {title}
        </div>
        <div className="flex items-center">
          <div className="text-gray-500 pr-2">
            <a href={link} target="_blank"><ShareIcon size="md" /></a>
          </div>
          <div className="text-gray-500">
            <ShareIcon size="md" />
          </div>
        </div>
      </div>
      {type==="youtube" && 
      <div><iframe
        className="w-full pt-4"
        src={link.replace("watch","embed").replace("?v=","/")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullScreen
      ></iframe> </div>}
      {type==="twitter" && 
      <blockquote class="twitter-tweet">
        <a href={link.replace("x.com","twitter.com")}></a>
      </blockquote>
      }
      
    </div>
  );
};

