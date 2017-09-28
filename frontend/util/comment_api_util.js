export const fetchComments = track_id => {
  debugger;
  return $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: { track_id }
  });
};

export const postComment = comment => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment }
  });
};

export const destroyComment = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  });
};
