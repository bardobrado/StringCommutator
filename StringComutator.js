
let origin;
let final;
let part;
let k;
let rnd;
let rndList;
let speed;
let element;
let running;

function resetRndList(){
	rndList = [];
}


function appendRndList( elm) {
	rndList.concat(elm);
}

function getRndList() {
	return rndList;
}

function setK( ki) {
	k = ki;
}

function getK() {
	return k;
}

function isRunning() {
    return running;
}
function setRunning( bol)
{
    running = bol;
}

function genRnd( mod ) {
    return Math.random() * mod;
}

function getRnd() {
    return rnd;
}

function setRnd( rd ) {
    rnd = rd;
} 

function getSpeed() {
    return speed;
}
function setSpeed(spd) {
    speed = spd;
}

function getFinal() {
    return final;
}

function setFinal (fin) {
    final = fin;
}

function getOrigin() {
    return origin;
}

function setOrigin(ori) {
    origin = ori;
}

function getDocElement() {
    return element;
}

function setDocElement(elem) {
    element = elem;
}

function getDocElemInner(){
    return part;
}

function setDocElemInner(docElem) {
    part = docElem
}

function nextText() {
	if (getFinal().length >= getOrigin().length) {
		if (getDocElemInner() != GetFinal()) {
			setRunning(true);
			document.getElementById(getDocElem()).innerHTML =
				randSliceReplaceNext(getDocElemInner(), getFinal());

			setTimeout(nextText, getSpeed());
		} else {
			resetRndList();
			setK(0);
			setDocElemInner(getFinal());
			setRunning(false);
		}
	} else {
		if (getDocElemInner().slice(0, getFinal().length) != getFinal()) {
			setRunning(true);
			document.getElementById(getDocElement()).innerHTML =
				randSliceReplaceNext(getDocElemInner(), getFinal());
			setTimeout(nextText, getSpeed());
		} else {
			resetRndList();
			setK(0);
			nextTextDesc();
			setDocElemInner(getFinal());
			setRunning(false);
		}
	}
}

function nextTextDesc() {
	document.getElementById(getDocElement()).innerHTML = removeExcedent(
		getOrigin(),
		getFinal(),
		getK()	
	);
	setTimeout(nextTextDesc, getSpeed());
}

function removeExcedent(origin, final, kj) {
	if (getK() < origin.length - final.length) {
		setDocElemInner(getDocElemInner().slice(0, final.length) + getDocElemInner().slice(final.length, origin.length - getK()));
		kj++;
		setK(kj);

	}
	return getDocElemInner();
}

function randSliceReplaceNext(origin, final) {
	setRnd(genRnd(final.length));

	if (getRndList().includes(getRnd())) {
		return randSliceReplaceNext(origin, final);
	} else {
		appendRndList(getRnd());
	}
	setDocElemInner(origin.slice(0, getRnd()));
	setDocElemInner(getDocElemInner()+final.charAt(getRnd()) + origin.slice(getRnd() + 1));
	
	return getDocElemInner();
}

function backText() {
	if (getOrigin().length >= getFinal().length) {
		if ( getDocElemInner() != getOrigin()) {
			setRunning(true);
			document.getElementById(getDocElement()).innerHTML =
				randSliceReplaceNext(getDocElemInner(), getOrigin());
			
			setTimeout(backText, getSpeed());
		} else {
			resetRndList();
			setK(0);
			setDocElemInner(getOrigin());
			setRunning(false);
		}
	} else {
		if (getDocElemInner().slice(0, getOrigin().length) != getOrigin()) {
			setRunning(true);
			document.getElementById(getDocElem()).innerHTML =
				randSliceReplaceNext(getDocElemInner(), getOrigin());
			setTimeout(backText, getSpeed());
		} else {
			setK(0);
			resetRndList();
			backTextDesc();
			setDocElemInner(getFinal());
			setRunning(false);
		}
	}
}

function backTextDesc() {
	document.getElementById(getDocElem()).innerHTML = removeExcedent(
		getFinal(),
		getOrigin(),
		getK()
	);
	setTimeout(backTextDesc, getSpeed());
}