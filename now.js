let destPosition = { x: 850, y: 850 };
let destBoard = [
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 27, 31, 31, 31, 31, 31, 31, 31, 31, 31, 27, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 27, 31, 31, 31, 31, 31, 31, 31, 31, 31, 27, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 27, 31, 31, 31, 27, 27, 27, 31, 31, 31, 27, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 27, 31, 31, 27, 31, 31, 31, 27, 31, 31, 27, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 27, 31, 31, 27, 31, 31, 31, 27, 31, 31, 27, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 27, 31, 31, 27, 31, 31, 31, 27, 31, 31, 27, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 27, 31, 31, 27, 31, 31, 31, 27, 31, 31, 27, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 27, 31, 31, 31, 27, 27, 27, 31, 31, 31, 27, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
    [
        31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31, 31,
        31, 31,
    ],
];
/**
 * @type {{[key:any]:number}}
 */
let diff = {};
function getDestBoardFromRealIndex(realIndex) {
    const { x, y } = convertBoardXYToDestXY(getXyFromIndex(realIndex));
    return Array.isArray(destBoard[y]) ? destBoard[y][x] : undefined;
}
function getXyFromIndex(i) {
    const x = i % WIDTH;
    const y = Math.floor(i / WIDTH);
    return {
        x: x,
        y: y,
    };
}
function convertBoardXYToDestXY({ x, y }) {
    return {
        x: Math.abs(x - destPosition.x),
        y: Math.abs(y - destPosition.y),
    };
}
function seti(i, b) {
    board[i] = b;

    if (
        getDestBoardFromRealIndex(i) !== undefined &&
        b != getDestBoardFromRealIndex(i)
    ) {
        diff[i] = i;
    } else {
        delete diff[i];
    }
    xa[0] = PALETTE[b];
    c.fillStyle =
        "#" +
        (xb[0] < 16 ? "0" : "") +
        xb[0].toString(16) +
        (xb[1] < 16 ? "0" : "") +
        xb[1].toString(16) +
        (xb[2] < 16 ? "0" : "") +
        xb[2].toString(16) +
        (xb[3] < 16 ? "0" : "") +
        xb[3].toString(16);
    c.fillRect(i % WIDTH, Math.floor(i / WIDTH), 1, 1);
}
function getPixelColor(x, y) {
    return board[y * WIDTH + x];
}

function setPixelColor(setx, sety, setc) {
    x = setx;
    y = sety;
    PEN = setc;
    put();
}

function getBoardFromXY(x, y, width, heigh) {
    let board = [];
    for (let i = 0; i < heigh; i++) {
        board[i] = [];
        for (let j = 0; j < width; j++) {
            board[i][j] = getPixelColor(x + j, y + i);
        }
    }
    return board;
}
/**
 *
 * @param {*} source
 * @param {*} dest
 * @returns {{x: number, y: number,expectedCell: number,currentCell: number}[]}
 */
function diffBoards(source, dest) {
    const diff = [];
    dest.forEach((row, y) => {
        row.forEach((expectedCell, x) => {
            if (expectedCell !== source[y][x]) {
                diff.push({ x, y, expectedCell, currentCell: source[y][x] });
            }
        });
    });
    return diff;
}
function put() {
    if (CD > Date.now()) return;
    canvselect.style.background = "";
    palette.style.transform = "translateY(100%)";
    colors.children[PEN].classList.remove("sel");
    pok.classList.remove("enabled");
    set(Math.floor(x), Math.floor(y), PEN);
    canvselect.children[0].style.display = "block";
    canvselect.style.outline = "";
    canvselect.style.boxShadow = "";
    audios.cooldownStart.run();
    CD =
        Date.now() +
        (localStorage.vip
            ? localStorage.vip[0] == "!"
                ? 0
                : COOLDOWN / 2
            : COOLDOWN);
    let a = new DataView(new Uint8Array(6).buffer);
    a.setUint8(0, 4);
    a.setUint32(1, Math.floor(x) + Math.floor(y) * WIDTH);
    a.setUint8(5, PEN);
    PEN = -1;

    ws.send(a);
}

function doSingle() {
    const diffKeys = Object.keys(diff);
    if (diffKeys.length > 0) {
        const willSetPixel =
            diff[diffKeys[Math.floor(Math.random() * diffKeys.length)]];

        const randomized = {
            x: getXyFromIndex(willSetPixel).x,
            y: getXyFromIndex(willSetPixel).y,
            expectedCell: getDestBoardFromRealIndex(willSetPixel),
            currentCell: board[willSetPixel],
        };

        showDialog(
            `${diffKeys.length} differences ramaining<br> setting (${
                randomized.x
            } , ${
                randomized.y
            }) to <span style="width:10px;height:10px; border:1px solid #222222;background-color:${RGBToHtmlColor(
                rplaceHexToRGB(PALETTE[randomized.expectedCell])
            )};display:inline-block"></span>`
        );

        console.log(`${diffKeys.length} differences ramaining`);
        console.log(
            `setting (${randomized.x} , ${randomized.y}) to ${randomized.expectedCell}`
        );
        delete diff[willSetPixel];
        setPixelColor(randomized.x, randomized.y, randomized.expectedCell);
    } else {
        showDialog("All Done! protecting...");
    }
}
function RGBToHtmlColor(rgb) {
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.alpha / 255})`;
}
function rplaceHexToRGB(hexColor) {
    return {
        alpha: (hexColor >> 24) & 0xff,
        b: (hexColor >> 16) & 0xff,
        g: (hexColor >> 8) & 0xff,
        r: (hexColor >> 0) & 0xff,
    };
}
function showDialog(text) {
    const dialog = document.createElement("div");
    dialog.style.position = "fixed";
    dialog.style.top = "10px";
    dialog.style.left = "10px";
    dialog.style.width = "200px";
    dialog.style.background = "rgba(0,0,0,0.8)";
    dialog.style.color = "white";
    dialog.style.fontSize = "14px";
    dialog.style.textAlign = "center";
    dialog.style.padding = "10px";
    dialog.style.borderRadius = "10px";
    dialog.style.boxShadow = "0px 0px 10px black";
    dialog.style.zIndex = "30";
    dialog.innerHTML = text;
    document.body.appendChild(dialog);
    setTimeout(() => {
        document.body.removeChild(dialog);
    }, 8000);
}

const src = getBoardFromXY(
    destPosition.x,
    destPosition.y,
    destBoard[0]?.length || 0,
    destBoard.length
);

const initialDiff = diffBoards(src, destBoard);
for (const element of initialDiff) {
    const t = element.x + destPosition.x + (element.y + destPosition.y) * WIDTH;
    diff[t] = t;
}

setInterval(() => !onCooldown && doSingle(), 500);
doSingle();
