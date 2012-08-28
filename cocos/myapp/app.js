var App = cc.LayerColor.extend({
    init: function ()
    {
        this._super();
        this.initWithColor(new cc.Color4B(0, 0, 0, 255));
        var size = cc.Director.getInstance().getWinSize();

        return this;
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