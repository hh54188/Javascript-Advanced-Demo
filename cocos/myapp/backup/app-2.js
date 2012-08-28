var App = cc.Layer.extend({
    init:function()
    {
        var layer1 = cc.LayerColor.create(
            new cc.Color4B(128, 128, 128, 255), 600, 600),
            sample = cc.Sprite.create("images/sample.jpg");

        layer1.setPosition(new cc.Point(0.0,0.0));
        layer1.addChild(sample);

        var size = cc.Director.getInstance().getWinSize();
        sample.setPosition(new cc.Point(size.width/2,size.height/2));

        this.addChild(layer1);
        return true;
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