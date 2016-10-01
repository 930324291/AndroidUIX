/**
 * Created by linfaxin on 15/10/5.
 */
module java.lang{
    export interface Runnable{
        run();
    }
    export module Runnable {
        export function of(func:()=>any): Runnable {
            return {
                run: func
            }
        }
    }
}