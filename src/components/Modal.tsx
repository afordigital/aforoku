type Props = {
  valueSelected: (value: string) => void;
  onClose: () => void;
};

export const Modal = ({ valueSelected, onClose }: Props) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen backdrop-blur-md bg-black/0.4">
      <div className="absolute border rounded-md flex flex-col w-[300px] h-[300px] bg-black top-0 bottom-0 left-0 right-0 m-auto">
        <div className="flex justify-end w-full">
          <button
            onClick={onClose}
            className="text-[32px] mr-4 hover:underline"
          >
            Close
          </button>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2 p-2 place-content-center">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((item) => {
            return (
              <button
                className="flex justify-center"
                onClick={() => {
                  valueSelected(item);
                  onClose();
                }}
              >
                <p className="w-[50px] aspect-square border-2 hover:bg-gray-7">
                  {item}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
