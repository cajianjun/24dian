/**
 * Created by egret on 2016/1/25.
 */

class SinglePlayUI extends eui.Component {

    private puke1:Puke;
    private puke2:Puke;
    private puke3:Puke;
    private puke4:Puke;
    private btnReturn:eui.Button;
    constructor() {
        super();
        this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
        this.skinName = "resource/custom_skins/singlePlayUISkin.exml";
    }

    private uiCompHandler():void {
        this.puke1.num= 4;
        this.puke2.num= 4;
        this.puke3.num= 10;
        this.puke4.num= 10;
        
        /// 返回逻辑
        this.btnReturn.addEventListener( egret.TouchEvent.TOUCH_TAP, ()=> {
            this.dispatchEventWith( GameEvents.EVT_RETURN );
        }, this );
    }

    protected createChildren():void {
        super.createChildren();
    }
    
}
