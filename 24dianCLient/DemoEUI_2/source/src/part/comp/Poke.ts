/**
 * Created by egret on 2016/1/26.
 */

class Puke extends eui.Component{
    private _num:number;
    constructor() {
        super();
        // this.addEventListener( eui.UIEvent.COMPLETE, this.uiCompHandler, this );
        this.skinName = "resource/custom_skins/comp/pukeSkin.exml";
    }

    private uiCompHandler():void {
        
    }
    protected createChildren():void {
        super.createChildren();
    }

    public set num(num:number){
        this._num = num;
        this.puke_lb.text = this._num + "";
    }

    public get num():number{
        return this._num;
    }
    

    private puke_lb:eui.Label;
}