export const getUrl = function(path) {
    return window.location.protocol + '//api.' + window.location.host + path; 
};

// export const getUrl = function(path) {
//     return '/api' + path; 
// };