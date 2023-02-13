class Taiyaki {
    constructor(nakami) {
        this.nakami = nakami;
    }

    explain() {
        console.log(`中身は${this.nakami}です。`);
    }
}
let anko =new Taiyaki(`あんこ`);
anko.explain();
let cream =new Taiyaki(`クリーム`);
cream.explain();
let cheese =new Taiyaki(`チーズ`);
cheese.explain();