export const countDoubles = (dominoData: number[][]) => {
    return dominoData.filter((card) => card[0] === card[1]).length;
};

export const sortDominoData = (dominoData: number[][], order: "asc" | "desc") => {
    return [...dominoData].sort((a, b) => {
        const sumA = a[0] + a[1];
        console.log(sumA);
        const sumB = b[0] + b[1];
        if (sumA === sumB) return order === "asc" ? a[0] - b[0] : b[0] - a[0];
        return order === "asc" ? sumA - sumB : sumB - sumA;
    });
};

export const removeDuplicates = (dominoData: number[][]) => {
    const uniqueDominoes: number[][] = [];

    for (let i = 0; i < dominoData.length; i++) {
        const [a, b] = dominoData[i];
        let isDuplicate = false;
        console.log(a,b);
        
        for (let j = 0; j < uniqueDominoes.length; j++) {
            const [x, y] = uniqueDominoes[j];

            if ((a === x && b === y) || (a === y && b === x)) {
                isDuplicate = true;
            }
        }
        if (!isDuplicate) {
            uniqueDominoes.push([a, b]);
        }
    }
    return uniqueDominoes;
};

export const flipCards = (dominoData: number[][]) => {
    return dominoData.map((card) => [card[1], card[0]]);
};

export const removeByTotal = (dominoData: number[][], total: number) => {
    return dominoData.filter(([first, second]) => first + second !== total);
};



export const resetData = (initialDominoData: number[][]) => {
    return initialDominoData;
};
