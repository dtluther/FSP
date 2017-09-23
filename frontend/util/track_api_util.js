export const indexTracks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tracks'
  });
};

export const createTrack = track => {
  return $.ajax({
    method: 'POST',
    url: '/api/tracks',
    data: { track }
  });
};

export const showTrack = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/tracks/${id}`
  });
};

export const deleteTrack = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`,
  });
};

export const updateTrack = track => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.id}`,
    data: { track }
  });
};
