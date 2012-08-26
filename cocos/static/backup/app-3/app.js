var App = cc.LayerColor.extend({
    _sampleSprite: null,
    init:function()
    {
        this._super();
        this.initWithColor(new cc.Color4B(0,0,0,255));
        var size = cc.Director.getInstance().getWinSize();

        this._sampleSprite = new SampleSprite();
        this.setTouchEnabled(true);
        this.setKeyboardEnabled(true);

        this.setPosition(new cc.Point(0,0));

        this.addChild(this._sampleSprite);
        this._sampleSprite.setPosition(new cc.Point(size.width/2,size.height/2));
        this._sampleSprite.scheduleUpdate();
        this.schedule(this.update);

        return true;
    },
    onEnter:function(){
        this._super();
    },
    update:function(dt){
    },
    onTouchesEnded:function (pTouch,pEvent){
        this._sampleSprite.handleTouch(pTouch[0].getLocation());
    },
    onTouchesMoved:function(pTouch,pEvent){
        this._sampleSprite.handleTouchMove(pTouch[0].getLocation());
    },
    onKeyUp:function(e){

    },
    onKeyDown:function(e){
        this._sampleSprite.handleKey(e);
    }

});

var Scene = cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer = new App();
        layer.init();
        this.addChild(layer);
    }
})