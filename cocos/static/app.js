var App = cc.LayerColor.extend({
    sprite: null,
    spriteFrameNamePrefix: "Walk_left",
    spriteFrameindex: 0,
    init: function ()
    {
        this._super();
        this.initWithColor(new cc.Color4B(0, 0, 0, 255));
        var size = cc.Director.getInstance().getWinSize();

        var cache = cc.SpriteFrameCache.getInstance();
        cache.addSpriteFrames("sprites/spritesheet.plist", "sprites/spritesheet.png");

        this.sprite = cc.Sprite.createWithSpriteFrameName(this.spriteFrameNamePrefix + "00.png");
        this.sprite.setPosition(new cc.Point(300,300));
        this.sprite.setScale(1);
        this.addChild(this.sprite);

        this.setKeyboardEnabled(true);
        return this;

        return this;
    },
    onKeyUp:function(e){},
    onKeyDown:function(e){
        if(e == cc.KEY.left || e == cc.KEY.right){
            var prevPrefix = this.spriteFrameNamePrefix;

            if(e == cc.KEY.left)
                this.spriteFrameNamePrefix = "Walk_left";
            else
                this.spriteFrameNamePrefix = "Walk_right";

            //如果调换方向则index重置为0
            if(prevPrefix !== this.spriteFrameNamePrefix)
                this.spriteFrameIndex = 0;


            if(this.spriteFrameIndex > 18)
                this.spriteFrameIndex = 0;

            var indexAsString;
            if(this.spriteFrameIndex < 10)
                indexAsString = "0" + this.spriteFrameIndex.toString();
            else
                indexAsString = this.spriteFrameIndex.toString();

            this.removeChild(this.sprite);
            this.sprite  = cc.Sprite.createWithSpriteFrameName(
                this.spriteFrameNamePrefix + indexAsString + ".png"
            );

            this.sprite.setPosition(new cc.Point(300,300));
            this.sprite.setScale(1);
            this.addChild(this.sprite);
            this.spriteFrameIndex++;
        }
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