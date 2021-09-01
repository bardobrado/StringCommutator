let origin = "Funciona melhor com textos menores.";
let final = "Mas ainda assim é um efeito legal";
let part;
let k = 0;
let rnd;
let rndList = [];
let speed = 5;
let element = "demo";


part = document.getElementById(element).innerHTML;


function nextText() {
    if (final.length >= origin.length) {
        if (k < final.length && part != final) {
            document.getElementById(element).innerHTML =
                randSliceReplaceNext(part, final, k);

            setTimeout(nextText, speed);
        } else {
            rndList = [];
            k = 0;
            part = final;
        }
    } else {
        if (k < final.length && part.slice(0, final.length) != final) {
            document.getElementById(element).innerHTML =
                randSliceReplaceNext(part, final, k);
            setTimeout(nextText, speed);
        } else {
            k = 0;
            nextTextDesc();
            rndList = [];
            part = final;
        }
    }
}

function nextTextDesc() {
    document.getElementById(element).innerHTML = removeExcedent(
        origin,
        final,
        k
    );
    setTimeout(nextTextDesc, speed);
}

function removeExcedent(origin, final, kj) {
    if (k < origin.length - final.length) {
        part =
            part.slice(0, final.length) +
            part.slice(final.length, origin.length - k);
        kj++;
        k = kj;
    }
    return part;
}

function randSliceReplaceNext(origin, final, k) {
    rnd = Math.random() * final.length;

    if (rndList.includes(rnd)) {
        return randSliceReplace(origin, final, k);
    } else {
        rndList.concat(rnd);
        k++;
    }
    part = origin.slice(0, rnd);
    part += final.charAt(rnd) + origin.slice(rnd + 1);
    return part;
}

function backText() {
    if (origin.length >= final.length) {
        if (k < origin.length && part != origin) {
            document.getElementById(element).innerHTML =
                randSliceReplaceNext(part, origin, k);

            setTimeout(backText, speed);
        } else {
            rndList = [];
            k = 0;
            part = origin;
        }
    } else {
        if (k < origin.length && part.slice(0, origin.length) != origin) {
            document.getElementById(element).innerHTML =
                randSliceReplaceNext(part, origin, k);
            setTimeout(backText, speed);
        } else {
            k = 0;
            backTextDesc();
            rndList = [];
            part = final;
        }
    }
}

function backTextDesc() {
    document.getElementById(element).innerHTML = removeExcedent(
        final,
        origin,
        k
    );
    setTimeout(backTextDesc, speed);
}
