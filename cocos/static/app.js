var App = cc.LayerColor.extend({
    init: function ()
    {
        this.initWithColor(new cc.Color4B(0,0,0,255));
        var size = cc.Director.getInstance().getWinSize();

        cc.AudioEngine.getInstance().setEffectsVolume(0.5);
        cc.AudioEngine.getInstance().setBackgroundMusicVolume(0.5);

        var menuItem1 = new cc.MenuItemFont.create("Play Sound",this,this.playSound);
        var menuItem2 = new cc.MenuItemFont.create("Play Song",this,this.playSong);
        var menuItem3 = new cc.MenuItemFont.create("Stop Playing Song",this,this.stopPlayingSound);
        var menuItem4 = new cc.MenuItemFont.create("Exit",this,this.exit);

        menuItem1.setPosition(new cc.Point(size.width/2,size.height/2+50));
        menuItem2.setPosition(new cc.Point(size.width/2,size.height/2));
        menuItem3.setPosition(new cc.Point(size.width/2,size.height/2-50));
        menuItem4.setPosition(new cc.Point(size.width/2,size.height/2-100));

        var menu = cc.Menu.create(menuItem1,menuItem2,menuItem3,menuItem4);
        menu.setPosition(new cc.Point(0,0));

        this.addChild(menu);

        return this;
    },
    playSound:function(){
        cc.log("Playing sound");
        cc.AudioEngine.getInstance().playEffect("audio/Love!");
    },
    playSong:function(){
        cc.log("Playing song");
        cc.AudioEngine.getInstance().playBackgroundMusic("audio/Marry You",false);
    },
    stopPlayingSound:function(){
        cc.log("Done playing song");
        if(cc.AudioEngine.getInstance().isBackgroundMusicPlaying())
        {
            cc.AudioEngine.getInstance().stopBackgroundMusic();
        }
    },
    exit:function(){
        document.location.href = "http://www.gamefromscratch.com";
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