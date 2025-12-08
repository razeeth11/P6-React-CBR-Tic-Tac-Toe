import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";

export function TicTacToe() {
  const array = new Array(9).fill("");

  function clickBlockHandler(index) {
    array[index] = "X";

    console.log(array[index]);
  }

  return (
    <div className="flex flex-col gap-5 justify-center h-screen w-[400px] m-auto">
      <div className="flex items-center justify-between text-sm font-bold">
        <div className="flex items-center gap-1">
          <h1 className="text-[#32c3bc] text-3xl font-extrabold">X</h1>
          <h1 className="text-[#f3b637] text-3xl font-extrabold">O</h1>
        </div>
        <div className="flex items-center gap-2.5 font-extrabold py-1 px-5 rounded text-[#a8bec9] border-b-4 border-[#102129] bg-[#1f3540]">
          <span className="text-2xl">X</span>
          TURN
        </div>
        <div>
          <Button
            variant="outline"
            size="icon"
            className="cursor-pointer bg-[#a8bec9] text-2xl"
          >
            <RotateCw className="font-bold" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {array.map((block, index) => (
          <Button
            key={index}
            className="flex items-center justify-center text-7xl font-extrabold size-30 rounded-2xl border-b-8 border-[#102129] bg-[#1f3540] hover:bg-[#9cb4c0] cursor-pointer"
            onClick={() => clickBlockHandler(index)}
          >
            {block}
          </Button>
        ))}
      </div>
    </div>
  );
}
