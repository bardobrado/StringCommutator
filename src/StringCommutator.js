/*
 ============================================================================
 Name        : StringComutator.js
 Author      : Lord Harkon
 Version     : 0.1
 Copyright   : Your copyright notice
 Description : String comutator, transform one string into another
 ============================================================================
 */

var StringComutator = class StringComutator {
    constructor(_origin, _final, _part, _k, _random, _rndList, _speed, _element, _running) {
        this.origin = _origin;
        this.final = _final;
        this.part = _part;
        this.k = _k;
        this.rnd = _random;
        this.rndList = _rndList;
        this.speed = _speed;
        this.element = _element;
        this.running = _running;
    };

    resetRndList() {
        this.rndList = [];
    }

    appendRndList(elm) {
        this.rndList.concat(elm);
    }

    getRndList() {
        return this.rndList;
    }

    setK(ki) {
        this.k = ki;
    }

    getK() {
        return this.k;
    }

    isRunning() {
        return this.running;
    }
    setRunning(bol) {
        this.running = bol;
    }

    genRnd(mod) {
        return Math.random() * mod;
    }

    getRnd() {
        return this.rnd;
    }

    setRnd(rd) {
        this.rnd = rd;
    }

    getSpeed() {
        return this.speed;
    }
    setSpeed(spd) {
        this.speed = spd;
    }

    getFinal() {
        return this.final;
    }

    setFinal(fin) {
        this.final = fin;
    }

    getOrigin() {
        return this.origin;
    }

    setOrigin(ori) {
        this.origin = ori;
    }

    getDocElement() {
        return this.element;
    }

    setDocElement(elem) {
        this.element = elem;
    }

    getDocElemInner() {
        return this.part;
    }

    setDocElemInner(docElem) {
        this.part = docElem;
    }

    nextText() {
        if (this.getFinal().length >= this.getOrigin().length) {
            if (this.getDocElemInner() != this.getFinal()) {
                this.setRunning(true);
                document.getElementById(this.getDocElement()).innerHTML =
                    this.randSliceReplaceNext(this.getDocElemInner(), this.getFinal());

                setTimeout(() =>this.nextText(), this.getSpeed());
            } else {
                this.resetRndList();
                this.setK(0);
                this.setDocElemInner(this.getFinal());
                this.setRunning(false);
            }
        } else {
            if (this.getDocElemInner().slice(0, this.getFinal().length) != this.getFinal()) {
                this.setRunning(true);
                document.getElementById(this.getDocElement()).innerHTML =
                    this.randSliceReplaceNext(this.getDocElemInner(), this.getFinal());
                setTimeout(()=>this.nextText(), this.getSpeed());
            } else {
                this.resetRndList();
                this.setK(0);
                this.nextTextDesc();
                this.setDocElemInner(this.getFinal());
                this.setRunning(false);

            }
        }
    }

    nextTextDesc() {
        document.getElementById(this.getDocElement()).innerHTML = this.removeExcedent(
            this.getOrigin(),
            this.getFinal(),
            this.getK()
        );
        if (this.getDocElemInner() != this.getFinal()) {
            setTimeout(()=>this.nextTextDesc(), this.getSpeed());
        }
    }

    backText() {
        if (this.getOrigin().length >= this.getFinal().length) {
            if (this.getDocElemInner() != this.getOrigin()) {
                this.setRunning(true);
                document.getElementById(this.getDocElement()).innerHTML =
                    this.randSliceReplaceNext(this.getDocElemInner(), this.getOrigin());

                setTimeout(() =>this.backText(), this.getSpeed());
            } else {
                this.resetRndList();
                this.setK(0);
                this.setDocElemInner(this.getOrigin());
                this.setRunning(false);
            }
        } else {
            if (this.getDocElemInner().slice(0, this.getOrigin().length) != this.getOrigin()) {
                this.setRunning(true);
                document.getElementById(this.getDocElement()).innerHTML =
                    this.randSliceReplaceNext(this.getDocElemInner(), this.getOrigin());
                setTimeout(()=>this.backText(), this.getSpeed());
            } else {
                this.setK(0);
                this.resetRndList();
                this.backTextDesc();
                this.setDocElemInner(this.getOrigin());
                this.setRunning(false);
            }
        }
    }

    backTextDesc() {
        document.getElementById(getDocElement()).innerHTML = this.removeExcedent(
            this.getFinal(),
            this.getOrigin(),
            this.getK()
        );
        if (this.getDocElemInner() != this.getOrigin()) {
            setTimeout(()=>this.backTextDesc(), this.getSpeed());
        }
    }

    removeExcedent(origin, final, kj) {
        if (this.getK() < origin.length - final.length) {
            this.setDocElemInner(
                this.getDocElemInner().slice(0, final.length) +
                this.getDocElemInner().slice(
                    final.length,
                    origin.length - this.getK()
                )
            );
            kj++;
            this.setK(kj);
        }
        return this.getDocElemInner();
    }

    randSliceReplaceNext(origin, final) {
        this.setRnd(this.genRnd(final.length));

        if (this.getRndList().includes(this.getRnd())) {
            //return randSliceReplaceNext(origin, final);
        } else {
            this.appendRndList(this.getRnd());

            this.setDocElemInner(origin.slice(0, this.getRnd()));
            this.setDocElemInner(
                this.getDocElemInner() +
                final.charAt(this.getRnd()) +
                origin.slice(this.getRnd() + 1)
            );

            return this.getDocElemInner();
        }

    }

}
export default StringComutator;
