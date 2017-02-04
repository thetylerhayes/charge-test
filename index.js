import { fabric } from 'fabric';

const DURATION = 3000;

class SegaVisual {

  /**
    @param width the width of the visual
    @param height the height of the visual
    @param widget the meta data of your command
    @param canvas a canvas for rendering graphic on screen
   */
  constructor(width, height, widget, canvas) {
  }

  /* 
   Called when someone in Twitch calls your command

   @param streamAction - the meta data of the action
  */
  onMessage(streamAction) {
  }
}

export default SegaVisual;

