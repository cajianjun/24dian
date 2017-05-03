/**
 * Created by egret on 2016/1/26.
 */
var Puke = (function (_super) {
    __extends(Puke, _super);
    function Puke() {
        _super.call(this);
        // this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
        this.skinName = "resource/custom_skins/comp/pukeSkin.exml";
    }
    var d = __define,c=Puke,p=c.prototype;
    p.uiCompHandler = function () {
    };
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    d(p, "num"
        ,function () {
            return this._num;
        }
        ,function (num) {
            this._num = num;
            this.puke_lb.text = this._num + "";
        }
    );
    return Puke;
}(eui.Component));
egret.registerClass(Puke,'Puke');
