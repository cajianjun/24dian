/**
 * Created by egret on 2016/1/25.
 */

class SinglePlayUI extends eui.Component {

    private card0:eui.Label;
    private card1:eui.Label;
    private card2:eui.Label;
    private card3:eui.Label;
    private btnReturn:eui.Button;
    constructor() {
        super();
        this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
        this.skinName = "resource/custom_skins/singlePlayUISkin.exml";
    }

    private uiCompHandler():void {
        this.card0.text="4";
        this.card1.text="4";
        this.card2.text="10";
        this.card3.text="10";
        /// 返回逻辑
        this.btnReturn.addEventListener( egret.TouchEvent.TOUCH_TAP, ()=> {
            this.dispatchEventWith( GameEvents.EVT_RETURN );
        }, this );
    }

    protected createChildren():void {
        super.createChildren();
    }
    
}
