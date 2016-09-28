/**
 * Created by linfaxin on 15/12/14.
 */
///<reference path="../../android/view/Surface.ts"/>
///<reference path="../../android/graphics/Canvas.ts"/>
///<reference path="../../android/graphics/Rect.ts"/>
///<reference path="../../android/graphics/Paint.ts"/>
///<reference path="NativeApi.ts"/>

module androidui.native {
    import Canvas = android.graphics.Canvas;
    import Rect = android.graphics.Rect;

    let sNextID = 0;

    export class NativeCanvas extends Canvas {
        private canvasId:number;

        protected initCanvasImpl():void {
            this.canvasId = ++sNextID;
            this.createCanvasImpl();
        }
        protected createCanvasImpl():void {
            NativeApi.canvas.createCanvas(this.canvasId, this.mWidth, this.mHeight);
            this.save();//is need?
        }

        protected recycleImpl():void {
            NativeApi.canvas.recycleCanvas(this.canvasId);
        }

        public isNativeAccelerated():boolean{
            return true;
        }

        protected translateImpl(dx:number, dy:number):void {
            NativeApi.canvas.translate(this.canvasId, dx, dy);
        }

        protected scaleImpl(sx:number, sy:number):void {
            NativeApi.canvas.scale(this.canvasId, sx, sy);
        }

        protected rotateImpl(degrees:number):void {
            NativeApi.canvas.rotate(this.canvasId, degrees);
        }

        protected concatImpl(MSCALE_X:number, MSKEW_X:number, MTRANS_X:number, MSKEW_Y:number, MSCALE_Y:number,
                             MTRANS_Y:number, MPERSP_0:number, MPERSP_1:number, MPERSP_2:number){
            NativeApi.canvas.concat(this.canvasId, MSCALE_X, MSKEW_X, MTRANS_X, MSKEW_Y, MSCALE_Y, MTRANS_Y);
        }

        protected drawARGBImpl(a:number, r:number, g:number, b:number):void {
            NativeApi.canvas.drawColor(this.canvasId, android.graphics.Color.argb(a, r, g, b));
        }

        protected clearColorImpl():void {
            NativeApi.canvas.clearColor(this.canvasId);
        }

        protected saveImpl():void {
            NativeApi.canvas.save(this.canvasId);
        }

        protected restoreImpl():void {
            NativeApi.canvas.restore(this.canvasId);
        }

        protected clipRectImpl(left:number, top:number, width:number, height:number):void {
            NativeApi.canvas.clipRect(this.canvasId, left, top, width, height);
        }
        protected clipRoundRectImpl(left:number, top:number, width:number, height:number, radiusTopLeft:number,
                                    radiusTopRight:number, radiusBottomRight:number, radiusBottomLeft:number):void {
            NativeApi.canvas.clipRoundRectImpl(this.canvasId, left, top, width, height, radiusTopLeft, radiusTopRight, radiusBottomRight, radiusBottomLeft);
        }

        protected drawCanvasImpl(canvas:android.graphics.Canvas, offsetX:number, offsetY:number):void {
            if(canvas instanceof NativeCanvas){
                NativeApi.canvas.drawCanvas(this.canvasId, canvas.canvasId, offsetX, offsetY);
            }else{
                throw Error('canvas should be NativeCanvas');
            }
        }

        protected drawImageImpl(image:androidui.image.NetImage, srcRect?:Rect, dstRect?:Rect):void {
            if(image instanceof NativeImage){
                if(srcRect && dstRect) {
                    NativeApi.canvas.drawImage8args(this.canvasId, image.imageId, srcRect.left, srcRect.top, srcRect.right, srcRect.bottom,
                        dstRect.left, dstRect.top, dstRect.right, dstRect.bottom);
                } else if (dstRect) {
                    NativeApi.canvas.drawImage4args(this.canvasId, image.imageId, dstRect.left, dstRect.top, dstRect.right, dstRect.bottom);
                } else {
                    NativeApi.canvas.drawImage2args(this.canvasId, image.imageId, 0, 0);
                }
            }else{
                throw Error('image should be NativeImage');
            }
        }

        protected drawRectImpl(left:number, top:number, width:number, height:number, style:android.graphics.Paint.Style){
            NativeApi.canvas.drawRect(this.canvasId, left, top, width, height, style);
        }

        protected drawOvalImpl(oval:android.graphics.RectF, style:android.graphics.Paint.Style):void {
            NativeApi.canvas.drawOval(this.canvasId, oval.left, oval.top, oval.right, oval.bottom, style);
        }

        protected drawCircleImpl(cx:number, cy:number, radius:number, style:android.graphics.Paint.Style):void {
            NativeApi.canvas.drawCircle(this.canvasId, cx, cy, radius, style);
        }

        protected drawArcImpl(oval:android.graphics.RectF, startAngle:number, sweepAngle:number, useCenter:boolean, style:android.graphics.Paint.Style):void {
            NativeApi.canvas.drawArc(this.canvasId, oval.left, oval.top, oval.right, oval.bottom, startAngle, sweepAngle, useCenter, style);
        }

        protected drawRoundRectImpl(rect:android.graphics.RectF, radiusTopLeft:number, radiusTopRight:number,
                                    radiusBottomRight:number, radiusBottomLeft:number, style:android.graphics.Paint.Style):void {
            NativeApi.canvas.drawRoundRectImpl(this.canvasId, rect.left, rect.top, rect.width(), rect.height(),
                radiusTopLeft, radiusTopRight, radiusBottomRight, radiusBottomLeft, style);
        }

        protected drawTextImpl(text:string, x:number, y:number, style:android.graphics.Paint.Style):void {
            NativeApi.canvas.drawText(this.canvasId, text, x, y, style);
        }

        protected setColorImpl(color:number, style?:android.graphics.Paint.Style):void {
            NativeApi.canvas.setFillColor(this.canvasId, color, style);
        }

        protected multiplyGlobalAlphaImpl(alpha:number):void {
            NativeApi.canvas.multiplyGlobalAlpha(this.canvasId, alpha);
        }

        protected setGlobalAlphaImpl(alpha:number):void {
            NativeApi.canvas.setGlobalAlpha(this.canvasId, alpha);
        }

        protected setTextAlignImpl(align:string):void {
            NativeApi.canvas.setTextAlign(this.canvasId, align);
        }

        protected setLineWidthImpl(width:number):void {
            NativeApi.canvas.setLineWidth(this.canvasId, width);
        }

        protected setLineCapImpl(lineCap:string):void {
            NativeApi.canvas.setLineCap(this.canvasId, lineCap);
        }

        protected setLineJoinImpl(lineJoin:string):void {
            NativeApi.canvas.setLineJoin(this.canvasId, lineJoin);
        }

        protected setShadowImpl(radius:number, dx:number, dy:number, color:number):void {
            NativeApi.canvas.setShadow(this.canvasId, radius, dx, dy, color);
        }

        protected setFontSizeImpl(size:number):void {
            NativeApi.canvas.setFontSize(this.canvasId, size);
        }

        protected setFontImpl(fontName:string):void {
            NativeApi.canvas.setFont(this.canvasId, fontName);
        }


        protected isImageSmoothingEnabledImpl():boolean {
            return false;
        }
        protected setImageSmoothingEnabledImpl(enable:boolean):void {
            //native no need
        }

        private static applyTextMeasure(cacheMeasureTextSize:number, defaultWidth:number, widths:number[]){
            android.graphics.Canvas.measureTextImpl = function(text:string, textSize:number):number {
                let width = 0;
                for(let i=0,length=text.length; i<length; i++){
                    let c = text.charCodeAt(i);
                    let cWidth = widths[c] || defaultWidth;
                    width += cWidth * textSize / cacheMeasureTextSize;
                }
                return width;
            };
        }
    }

}