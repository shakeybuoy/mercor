import KanbanBoard from "./components/dnd/KanbanBoard";

function App() {
  return (
    <main className="md:px-10 grid w-full relative md:pb-10 md:pt-5 px-5 py-3 overflow-auto h-custom">
      <div className="my-5 flex justify-between items-center pr-5">
        <div className="flex items-center w-full gap-5">
          <h1 className="text-5xl font-semibold">Mobile App</h1>
          <ButtonImage src={"/edit.png"} alt={"edit"} />
          <ButtonImage src={"/link.png"} alt={"link"} />
        </div>
        <div className="flex items-center gap-5 pr-5 md:pr-0">
          <button className="text-[#5030E5] font-medium">Invite</button>
          <div className="flex items-center relative">
            <ImageFlow src={"https://i.pravatar.cc/150?img=1"} />
            <ImageFlow src={"https://i.pravatar.cc/150?img=2"} />
            <ImageFlow src={"https://i.pravatar.cc/150?img=3"} />
            <ImageFlow src={"https://i.pravatar.cc/150?img=4"} />
            <div className="h-10 aspect-square bg-[#F4D7DA] text-[#D25B68] rounded-full -ml-2 border-white border-2 flex items-center justify-center">
              +2
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-10 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <ButtonImageTwo src={"/filter.png"} dropdown text={"Filter"} />
          <ButtonImageTwo src={"calendar.png"} dropdown text={"Today"} />
        </div>
        <div className="flex items-center gap-5">
          <ButtonImageTwo src={"members.png"} text={"Share"} />
          <div className="h-8 border border-[#787486] "></div>
          <button type="button" className="bg-[#5030E5] p-2 rounded-lg">
            <img src="/pause.png" alt="pause" />
          </button>
          <button type="button">
            <img src="/menu.png" alt="menu" />
          </button>
        </div>
      </div>
      <KanbanBoard />
    </main>
  );
}
const ButtonImageTwo = ({ text, src, dropdown }) => {
  return (
    <button
      type="button"
      className="border border-[#787486] items-center flex px-3 py-2 gap-3 rounded-md text-[#787486] font-medium"
    >
      <img src={src} alt="type" className="h-4" />
      {text}
      {dropdown && <img src="/arrow-down.png" alt="dropdown" />}
    </button>
  );
};
const ButtonImage = ({ src, alt }) => {
  return (
    <button type="button" className="bg-[#5030E533] p-2 rounded-lg">
      <img src={src} alt={alt} />
    </button>
  );
};
const ImageFlow = ({ src, alt, move }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-10 aspect-square bg-black rounded-full -ml-2 border-white border-2`}
    />
  );
};

export default App;
