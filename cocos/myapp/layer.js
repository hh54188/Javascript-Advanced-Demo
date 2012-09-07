var Role = cc.Sprite.extend({
	position_x: 0,
	position_y: 0,	
    position_add: 5,
    ctor: function () {
        this.initWithFile("resource/sample.jpg");
        var size = cc.Director.getInstance().getWinSize();
        this.position_x = size.width / 2;
        this.position_y = size.height / 2;
    },
    update: function (dt) {
    	this.setPosition(new cc.Point(this.position_x, this.position_y));
    },
    handleKey: function (e) {
        if(e === cc.KEY.left) {
        	this.position_x -= this.position_add;
        } else if (e === cc.KEY.right) {
        	this.position_x += this.position_add;
        } else if (e === cc.KEY.up) {
            this.position_y += this.position_add;
        } else if (e === cc.KEY.down) {
            this.position_y -= this.position_add;
        }
    }
})