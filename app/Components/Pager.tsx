import { FC } from "react";

type PagerProps = {
    content: string;
    onNext: () => void;
    onPrevious: () => void;
}
const Pager:FC<PagerProps> = ({ content, onNext, onPrevious }) => {
    return (
        <div className="flex items-center justify-between mt-4">
            <button onClick={onPrevious} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Anterior</button>
            <span className="text-gray-700">{content}</span>
            <button onClick={onNext} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Próximo</button>
        </div>
    );  
}
export default Pager;