declare var AR;

class World {

  init() {
    const targetCollectionResource = new AR.TargetCollectionResource("assets/wto/pinguin-tracker.wto", { });

    const objectTracker = new AR.ObjectTracker(targetCollectionResource, { });

    var scale = 0.001;

    const drawableModel = new AR.Model("assets/wt3/mug.wt3", {
      scale: {
        x: scale,
        y: scale,
        z: scale
      },
      translate : {
        x: 0.15,
        z: 1
      },
      rotate : {
        x: -90
      }
    });

    const objectTrackable = new AR.ObjectTrackable(objectTracker, "*", {
      drawables: {
        cam: drawableModel
      }
    });
  }
};

let world = new World();

world.init();
