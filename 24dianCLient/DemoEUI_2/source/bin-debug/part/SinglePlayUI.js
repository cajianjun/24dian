/**
 * Created by egret on 2016/1/25.
 */
var SinglePlayUI = (function (_super) {
    __extends(SinglePlayUI, _super);
    function SinglePlayUI() {
        _super.call(this);
        this.addEventListener(eui.UIEvent.COMPLETE, this.uiCompHandler, this);
        this.skinName = "resource/custom_skins/singlePlayUISkin.exml";
    }
    var d = __define,c=SinglePlayUI,p=c.prototype;
    p.uiCompHandler = function () {
        var _this = this;
        this.puke1.num = 4;
        this.puke2.num = 4;
        this.puke3.num = 10;
        this.puke4.num = 10;
        /// 返回逻辑
        this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.dispatchEventWith(GameEvents.EVT_RETURN);
        }, this);
    };
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        WSManager.getInstance().addDataToken("test", this.onDataReceve, this);
    };
    p.onDataReceve = function (data) {
        console.log("recieve");
        var nums = data.split(",");
        this.puke1.num = parseInt(nums[0]);
        this.puke2.num = parseInt(nums[1]);
        this.puke3.num = parseInt(nums[2]);
        this.puke4.num = parseInt(nums[3]);
    };
    return SinglePlayUI;
}(eui.Component));
egret.registerClass(SinglePlayUI,'SinglePlayUI');
