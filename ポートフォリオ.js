
class Onclick {
    constructor() {
        this._click();
    }

    _click() {
        // すべてのタブとコンテンツを取得し、変数に格納
        var testTabs = document.querySelectorAll(".test__select ul.flex-row li");
        var testContents = document.querySelectorAll(".test__txt");


        testTabs.forEach(function (tab, index) {
            tab.addEventListener("click", function () {
                // すべてのタブから "active" クラスを削除
                testTabs.forEach(function (tab) {
                    tab.classList.remove("active");
                });
                // クリックされたタブに "active" クラスを追加
                this.classList.add("active");
                // すべてのコンテンツを非表示にする
                testContents.forEach(function (content) {
                    content.classList.add("d-none");
                });
                // クリックされたタブに対応するコンテンツを表示する
                testContents[index].classList.remove("d-none");
            });
        });
    }
}
new Onclick();
