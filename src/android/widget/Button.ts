/**
 * Created by linfaxin on 15/11/2.
 */
///<reference path="TextView.ts"/>
///<reference path="../view/View.ts"/>
///<reference path="../content/res/Resources.ts"/>
///<reference path="../graphics/Color.ts"/>
///<reference path="../graphics/drawable/Drawable.ts"/>
///<reference path="../graphics/drawable/InsetDrawable.ts"/>
///<reference path="../graphics/drawable/ColorDrawable.ts"/>
///<reference path="../graphics/drawable/StateListDrawable.ts"/>
///<reference path="../R/drawable.ts"/>

module android.widget{
    import View = android.view.View;
    import Resources = android.content.res.Resources;
    import Color = android.graphics.Color;
    import Drawable = android.graphics.drawable.Drawable;
    import InsetDrawable = android.graphics.drawable.InsetDrawable;
    import ColorDrawable = android.graphics.drawable.ColorDrawable;
    import StateListDrawable = android.graphics.drawable.StateListDrawable;
    import Gravity = android.view.Gravity;

    export class Button extends TextView{
        constructor() {
            super();
            this._initDefaultStyle();
        }
        private _initDefaultStyle(){
            let density = Resources.getDisplayMetrics().density;
            this.setFocusable(true);
            this.setClickable(true);
            this.setTextSize(18);
            this.setMinimumHeight(48 * density);
            this.setMinimumWidth(64 * density);
            this.setBackground(android.R.drawable.button_background);
            this.setGravity(Gravity.CENTER);
        }
    }
}