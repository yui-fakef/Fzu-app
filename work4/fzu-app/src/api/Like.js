import request from '../utils/request';

export const LikeArticle = (articleId) => { // 点赞文章
  return request.post(`/Likes/article/${id}`);
};

export const CancelLikeArticle = (articleId) => { // 取消点赞文章
  return request.delete(`/Likes/article/${id}`);
};
export const GetLikedArticles = () => {
    return request.get(`/Likes/user/{userId}`);
};
 export const CountsLikes = (articleId) => { // 获取文章点赞数
    return request.get(`/Likes/count/{articleId}`);
};