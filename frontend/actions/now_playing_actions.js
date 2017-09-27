// export const PLAY_SONG = 'PLAY_SONG';
// export const PAUSE_SONG = 'PAUSE_SONG';
export const PLAY_PAUSE_SONG= 'PLAY_PAUSE_SONG';
export const STEP_FORWARD = 'STEP_FORWARD';
export const STEP_BACKWARD = 'STEP_BACKWARD';
export const SELECT_TRACK = 'SELECT_TRACK';

export const selectTrack = (selectedTrack, tracks) => {
  return {
    type: SELECT_TRACK,
    selectedTrack,
    tracks
  };
};


export const playPauseSong = () => {
  return {
    type: PLAY_PAUSE_SONG
  };
};

// export const playSong = () => {
//   return {
//     type: PLAY_SONG
//   };
// };
//
// export const pauseSong = () => {
//   return {
//     type: PAUSE_SONG
//   };
// };

export const stepForward = () => {
  return {
    type: STEP_FORWARD
  };
};

export const stepBackward = () => {
  return {
    type: STEP_BACKWARD
  };
};
