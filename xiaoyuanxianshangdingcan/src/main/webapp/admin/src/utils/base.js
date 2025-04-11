const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanxianshangdingcan/",
            name: "xiaoyuanxianshangdingcan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanxianshangdingcan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园线上订餐系统"
        } 
    }
}
export default base
