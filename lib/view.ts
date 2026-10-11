// Keep the same point of the photograph under the fingers while zooming/panning.
export function zoomAt(view:{zoom:number;pan:{x:number;y:number}},from:{x:number;y:number},to:{x:number;y:number},next:number) {
 const zoom=Math.max(.5,Math.min(12,next)),ratio=zoom/view.zoom;
 return {zoom,pan:{x:to.x-(from.x-view.pan.x)*ratio,y:to.y-(from.y-view.pan.y)*ratio}};
}
