"use client";

import React, { useState } from "react";
import DominoCard from "./DominoCard";
import {
    countDoubles,
    sortDominoData,
    removeDuplicates,
    flipCards,
    removeByTotal,
    resetData,
} from "../utils";

const source: number[][] = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
];

export default function DominoData(){
    const [dominoData, setDominoData] = useState<number[][]>(source);
    const [showDoubles, setShowDoubles] = useState<number>(0);
    const [removeTotal, setRemoveTotal] = useState<number | "">("");

    const handleRemoveByTotal = () => {
        if (removeTotal !== "") {
            setDominoData(removeByTotal(dominoData, removeTotal));
        }
    };

    return (
        <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
                <button
                    onClick={() => setShowDoubles(countDoubles(dominoData))}
                    className="bg-blue-500 text-white font-semibold py-2 px-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Count Doubles
                </button>
                <button
                    onClick={() =>
                        setDominoData(sortDominoData(dominoData, "asc"))
                    }
                    className="bg-blue-500 text-white font-semibold py-2 px-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Sort Asc
                </button>
                <button
                    onClick={() =>
                        setDominoData(sortDominoData(dominoData, "desc"))
                    }
                    className="bg-blue-500 text-white font-semibold py-2 px-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Sort Desc
                </button>
                <button
                    onClick={() => setDominoData(removeDuplicates(dominoData))}
                    className="bg-blue-500 text-white font-semibold py-2 px-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Remove Duplicates
                </button>
                <button
                    onClick={() => setDominoData(flipCards(dominoData))}
                    className="bg-blue-500 text-white font-semibold py-2 px-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Flip Cards
                </button>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        value={removeTotal}
                        onChange={(e) => setRemoveTotal(Number(e.target.value))}
                        placeholder="Total"
                        className="py-2 px-3 border rounded-md"
                    />
                    <button
                        onClick={handleRemoveByTotal}
                        className="bg-blue-500 text-white font-semibold py-2 px-3 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Remove by Total
                    </button>
                </div>
                <button
                    onClick={() => setDominoData(resetData(source))}
                    className="bg-blue-500 text-white font-semibold py-2 px-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Reset Data
                </button>
            </div>
            <div className="flex flex-wrap">
                {dominoData.map((card, index) => (
                    <DominoCard key={index} values={card} />
                ))}
            </div>
            <div className="mt-4">
                <p>Double Numbers: {showDoubles}</p>
            </div>
        </div>
    );
};

