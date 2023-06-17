const Card = ({ props }) => {
  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex items-center justify-between mb-2">
        {props.priority === 0 ? (
          <h5 className="bg-[#DFA87433] text-[#D58D49] rounded px-2 py-1 text-xs">
            Low
          </h5>
        ) : props.priority === 1 ? (
          <h5 className="bg-[#D8727D1A] text-[#D8727D] rounded px-2 py-1 text-xs">
            High
          </h5>
        ) : (
          <h5 className="bg-[#83C29D33] text-[#68B266] rounded px-2 py-1 text-xs">
            Completed
          </h5>
        )}
        <img src="/dots.png" alt="images" />
      </div>
      {props.images && (
        <div className="w-full h-40 my-3">
          <img
            src={`${props.images}/?sig=${props.id}`}
            alt={props.title}
            className="rounded-lg object-cover h-full w-full"
          />
        </div>
      )}
      <h4 className="text-lg font-semibold">{props.title}</h4>
      {props.para && (
        <p className="text-[#787486] font-normal text-sm">{props.para}</p>
      )}
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 mt-5 md:justify-between md:items-center">
        <div className="flex items-center">
          <img
            src="https://source.unsplash.com/400x300/?profile/?sig=1"
            alt="images"
            className="w-6 aspect-square rounded-full"
          />
          <img
            src="https://source.unsplash.com/400x300/?profile/?sig=3"
            alt="images"
            className="w-6 -ml-2 border border-white aspect-square rounded-full"
          />
          <img
            src="https://source.unsplash.com/400x300/?profile/?sig=2"
            alt="images"
            className="w-6 -ml-2 border border-white aspect-square rounded-full"
          />
          <img
            src="https://source.unsplash.com/400x300/?profile/?sig=5"
            alt="images"
            className="w-6 -ml-2 border border-white aspect-square rounded-full"
          />
        </div>
        <div className="flex gap-2 justify-between">
          <span className="flex gap-1 text-[#787486] text-xs items-center">
            <img src="/message.png" alt="" className="h-5" />
            {props.comments} Comments
          </span>
          <span className="flex gap-1 text-[#787486] text-xs items-center">
            <img src="/files.svg" alt="" className="h-5" />
            {props.files} Comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
