import request from './request';

export const getLatestArticleList = () => {
    return request.get('/articles/latest');
}
export const PostArticle = (data) => {
    return request.post('/articles');
}
export const getArticleDetail = (id) => {
    return request.get(`/articles/${id}`);
}
export const createArticle = (data) => {
    return request.post('/articles', data);
}
export const getHotArticle = (params) => {
    return request.get('/articles/hot', {params});
}
export const deleteArticle = (id) => {
    return request.delete(`/articles/${id}`);
}