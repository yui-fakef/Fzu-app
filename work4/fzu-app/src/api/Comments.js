import request from '../utils/request';

export const AddComment = (data) => {
  return request.post('/comments/add', data);
};
export const GetComments = () => {
  return request.get('/comments/parent/{parentCommentId}/replies');
};
export const GetFComment = (commentId) => {
    return request.get('/comments/article/{articleId}/parents');
}